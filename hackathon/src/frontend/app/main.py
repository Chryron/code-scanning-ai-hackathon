"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
import sys, os
from hackathon.src.backend.main import init
from hackathon.src.frontend.rxconfig import config
import hackathon.src.frontend.style as style

commits = init()

opened_commit_global = set()
clicked_page = ""
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

        
def commit_row(commit, clickable =True):
    row = commit["commit_data"]
    insidebox = rx.box(
            rx.text(row['message'].split("\n\n")[0], style=style.messagetext),
            rx.text(commit['hash'][:9], style=style.bubble|style.bubble_hash),
            rx.box(
                rx.text(row['author']['username'], style=style.bubble|style.bubble_author),
                rx.text(commit['date'], style=style.bubble|style.bubble_date),
                style=style.commit_info,

            ),
            style=style.commit,
            _hover=style.commit_hover,
        ),
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


def index() -> rx.Component:
    return rx.container(
        rx.text(clicked_page ),
        *[commit_row(row) for row in commits],
        style = style.commit_container,
    )


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
    for item in buf[typeofissue]:
        codeblock = []
        shorthash = buf["hash"]
        shortauthor = buf["commit_data"]["author"]['username']
        if typeofissue == "old_vulnerabilities":
            thiscommit = item["vulnerability"]['commit_data']
            shortauthor = thiscommit["author"]["username"]
            shorthash = thiscommit["sha"][:9]
            codeblock =[
                rx.link(thiscommit["sha"][:9], href=thiscommit["url"], style=style.bubble|style.bubble_hash),
            ]
        codeblock.append( codediff(item['file']['details']) )
        codeblocks.append( 
            rx.accordion.item(
                header=rx.box(
                    rx.link("test", href="https://google.com", style=style.bubble|style.vulnerabilitybubble),
                    rx.text(item['vulnerability']['ruleId'],style=style.bubble|style.vulnerabilitybubble),
                    rx.text(f"introduced in commit", style ={"display":"inline"}),
                    rx.text(shorthash, style=style.bubble|style.vulnerabilitybubble),
                    rx.text(f"by", style ={"display":"inline"}),
                    rx.text(shortauthor, style=style.bubble|style.vulnerabilitybubble),
                    
                ),
                content=rx.box(rx.text(item['file']['filepath']), *codeblock),
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

for commit in commits:
    hash_ = commit['hash']
    buf = commit
    app.add_page(detail_page, route=hash_,)
