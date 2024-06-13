"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config
import style 
from gitlog import gitlog
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

        
def commit_row(row):
    row = rx.link(
        rx.box(
            rx.text(row['message']),
            rx.text(row['hash'][:9], style=style.bubble|style.bubble_hash),
            rx.box(
                rx.text(row['author'], style=style.bubble|style.bubble_author),
                rx.text(row['shortdate'], style=style.bubble|style.bubble_date),
                style=style.commit_info,

            ),
            style=style.commit,
            _hover=style.commit_hover,
        ),
        on_click=mystate.clickcommit(row['hash']),
        href="/"+row['hash'],
        style=style.commit_a,
    )
    return row




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
def codediff(text):
    return iframe("""
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>  
        <pre class="prettyprint lang-py" style=" background-color:initial;  color: initial;">  
        <span style="background-color: #ddffdd;">-def hello_world():</span>  
        <span style="background-color: #ffdddd;">+def hello_world(name):</span>  
        <span style="background-color: #ddffdd;">-    print("Hello, world!")</span>  
        <span style="background-color: #ffdddd;">+    print(f"Hello, name!")</span>  
    </pre>
    """ )


def index() -> rx.Component:
    return rx.container(
        rx.text(clicked_page ),
        *[commit_row(row) for row in gitlog],
        style = style.commit_container,
    )


app = rx.App()
app.add_page(index)

buf = {}
def detail_page()-> rx.Component:
    global buf
    return rx.container(    
        detail_main()
    )
def detail_main():
    global buf
    return rx.accordion.root(
        rx.accordion.item(
            header=buf['author'],
        ),
        rx.accordion.item(
            header="Third item",
            content=codediff("import matplotlib as mpt"),

        ),
        collapsible=True,
        variant="ghost",
        width="100%",
        type="multiple",
    )

for commit in gitlog:
    hash_ = commit['hash']
    buf = commit
    app.add_page(detail_page, route=hash_,)
