"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
import sys, os
from hackathon.src.backend.main import init
from hackathon.src.llm.prompt import fix_vulnerability
from rxconfig import config
import hackathon.src.frontend.style as style
opened_commit_global = set()
clicked_page = ""

commits = init()

class mystate(rx.State):
    """The app state."""
    clicked_commit:str
    opened_commit:set[str]
    def showcommit(self,hash_):
        print("made",hash_ )
        rx.redirect(hash_, external=True)
    def get_opened_commit(self):
        return set(self.opened_commit)
    def clickcommit(self,value):
        global opened_commit_global ,clicked_page 
        self.clicked_commit = value
        if self.clicked_commit in self.opened_commit:
            self.opened_commit.remove(self.clicked_commit)
            opened_commit_global.remove(self.clicked_commit)
        else:
            self.opened_commit.add(self.clicked_commit)
            opened_commit_global.add(self.clicked_commit)
        rx.redirect("https://www.google.com/hello", external=True)
        clicked_page = self.clicked_commit
        
        self.showcommit(self.clicked_commit)
first=True
def commit_row(commit, clickable =True):
    global first
    firstdict = {"background-color":"#ffeeaa"}
    if first:
        firstdict = {"background-color":"#ddffdd"}
    
    row = commit["commit_data"]
    insidebox = rx.box(
            rx.text(row['message'].split("\n\n")[0], style=style.messagetext),
            rx.text(commit['hash'][:9], style=style.bubble|style.bubble_hash),
            rx.box(
                rx.text(row['author']['username'], style=style.bubble|style.bubble_author),
                rx.text(commit['date'], style=style.bubble|style.bubble_date),
                style=style.commit_info,

            ),
            style=style.commit|firstdict,
            _hover=style.commit_hover,
        ),
    if first:
        first=False
    if clickable:
        row = rx.link(
            insidebox,
            on_click=mystate.clickcommit(commit['hash']),
    
            href="/"+commit['hash'],
            style=style.commit_a,
        )
        return row
    return insidebox



def codeblock():
    return rx.code_block(
        """def fib(n):
        if n <= 1:
            return n
        else:
            return(fib(n-1) + fib(n-2))""",
        language="python",
        show_line_numbers=True,
    )

def iframe(srcdoc):
    return rx.html(f"""
    <iframe srcdoc="{srcdoc.replace('"',"'")}" style="width:100%; height:100%; border:0;"></iframe>
    """)    

def codediff(lines):
    color_mapping = {
        'red': '#ffdddd',
        'green': '#ddffdd',
        'black': '#ffffff',
        'grey': '#dddddd',
        'blue': '#ddddff'
    }
    highlighted_lines = []
    for line in lines:
        linenumber = str(line['add_line']) if line['add_line'] else ""
        linenumbe2 = str(line['del_line']) if line['del_line'] else ""
        linenumber = linenumber.rjust(4)
        linenumbe2 = linenumbe2.ljust(4)
        linenums = f'{linenumber}{"|" if line["color"]!="grey" else ""}<span style="color:red;">{linenumbe2}</span>'
        highlighted_line =  f'<span style="background-color: {color_mapping[line["color"]]};">{linenums}{line["content"]}</span>'
        highlighted_lines.append(highlighted_line)
    return iframe("""
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>  
        <pre class="prettyprint lang-py" style=" background-color:initial;  color: initial;border:0;">  
    """ + '\n'.join(highlighted_lines) + """
    </pre>
    """ )

data = []
def graph():
    global data
    for commit in commits:
        num = len(commit["introduced"])
        cumulative = len(commit["old_vulnerabilities"])
        data.append(
            {"name": commit['date'], "issues introduced": num, "cumulative": cumulative},

        )
    return rx.recharts.line_chart(
        rx.recharts.line(
            data_key="issues introduced",
            stroke="#8884d8",
        ),
        rx.recharts.line(
            data_key="cumulative",
            stroke="#82ca9d",
        ),
        rx.recharts.x_axis(data_key="name"),
        rx.recharts.y_axis(),
        rx.recharts.legend(),
        data=data,
        width=500,
        height=300,
    )


def index() -> rx.Component:
    cms = [commit_row(row) for row in commits]
    
    ind =rx.container(
        
        rx.text("AMD Code Detective🔎", style={"font-size":"2em","font-weight":"bold","color":"#0b082b"}),
        rx.html("<br>"),
        graph(),
        rx.html("<br>"),
    
        rx.text(clicked_page ),
        *cms,
        style = style.commit_container,
    )
    return ind


app = rx.App()
app.add_page(index)

buf = {}
def detail_page()-> rx.Component:
    global buf
    return rx.container(    
        commit_row(buf, clickable=False),

        rx.accordion.root(
            rx.accordion.item(
                header="Issues introduced in this commit",
                content=detail_main(typeofissue ="introduced",color="yellow"),
                value="rrrrr",
            ),
            variant="outline",
            width="100%",
            type="multiple",
        ),
        rx.accordion.root(
            rx.accordion.item(
                header="Issues introduced in previous commits",
                content=detail_main(typeofissue="old_vulnerabilities", color="red"),
                value="rrrrr2",
            ),
            variant="outline",
            width="100%",
            type="multiple",
        ),
    )
def detail_main(typeofissue = "old_vulnerabilities", color="yellow"):
    global buf

    print(len(buf[typeofissue]))
    codeblocks = []
    first = True
    for item in buf[typeofissue]:
        
        codeblock = []
        shorthash = buf["hash"]
        shortauthor = buf["commit_data"]["author"]['username']
        thiscommit =buf["commit_data"]
        if typeofissue == "old_vulnerabilities":
            thiscommit = item["vulnerability"]['commit_data']
            shortauthor = thiscommit["author"]["username"]
            shorthash = thiscommit["sha"][:9]
            codeblock =[
                # rx.link(thiscommit["sha"][:9], href=thiscommit["url"], style=style.bubble|style.bubble_hash),
            ]
        ln = item['vulnerability']['locations'][0]['line']
        relevant = []
        for line in item['file']['details']:
            if line['add_line'] is None and line['del_line'] is None:
                relevant.append(line)
            if (line['del_line'] and abs(line['del_line']-ln)<10) or (line['add_line'] and abs(line['add_line']-ln)<10):
                relevant.append(line)
        ln = str(ln)
        cdf = codediff(relevant) 
        codeblock.append( cdf)
        colorv = style.orange if  item['vulnerability']["details"]['problem.severity']=="warning" else style.red
        codeblocks.append( 
            rx.accordion.item(
                header=rx.box(

                    rx.text(item['vulnerability']['ruleId'],style=style.bubble|style.vulnerabilitybubble|colorv),
                    rx.text(f"introduced in commit", style ={"display":"inline"}),
                    rx.link(shorthash,href=str(thiscommit["url"]), style=style.bubble|style.vulnerabilitybubble),
                    rx.text(f"by", style ={"display":"inline"}),
                    rx.link(shortauthor, href =str(thiscommit["author"]["url"]), style=style.bubble|style.vulnerabilitybubble),
                ),
                content=rx.box(
                    rx.text(item['vulnerability']["details"]['name']+": ",style=style.inline|style.bold),
                    rx.text(item['vulnerability']["details"]['description'],style=style.inline),
                    rx.html("<br>"),
                    rx.text("Severity:",style=style.inline|style.bold),
                    rx.text(
                        item['vulnerability']["details"]['security-severity'], 
                        style=style.bubble|style.vulnerabilitybubble|colorv
                    ),
                    rx.text(
                        item['vulnerability']["details"]['tags'][0], 
                        style=style.bubble|style.vulnerabilitybubble|colorv
                    ),
                    rx.html("<br>"),
                    rx.text('Source: ',style=style.inline|style.bold),
                    rx.link(item['file']['filepath']+":"+ln, href="https://github.com/tensorflow/tensorflow/tree/master/"+item['file']['filepath'], style=style.inline),
                    *codeblock,
                    rx.html("<br>"),
                    rx.button("✨", style={"background-color":"#0b082b","color":"white","border":"0","border-radius":"30%"}
                            , on_click=rx.window_alert(fix_vulnerability(item))
                              ),
                    ),
            ),
        )
    return rx.accordion.root(
        *codeblocks,
        collapsible=True,
        variant="outline",
        width="100%",
        type="multiple",
        color_scheme=color
    )
import time
def cbk(item):
    time.sleep(1.5)

    print(type(item))
for commit in commits:
    hash_ = commit['hash']
    buf = commit
    app.add_page(detail_page, route=hash_,)
