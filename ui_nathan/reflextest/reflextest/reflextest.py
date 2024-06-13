"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config
import style 
from gitlog import gitlog
class State(rx.State):
    """The app state."""
    clicked_commit:str
    opened_commit:list[str]

    def showcommit(self):
        rx.window_alert("hi")
    def clickcommit(self,value):
        print(value)
        clicked_commit = value

def commit_row(row):
    return rx.link(
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
        on_click=State.clickcommit(row['hash']),
        style=style.commit_a,
    )
def detail_page():
    return rx.accordion.root(
        rx.accordion.item(
            header="First Item",
            content=rx.text('message'),
        ),
        rx.accordion.item(
            header="Second Item",
            content=codeblock(),
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
def dropdown_section():
    return rx.container(
        rx.text("Dropdown Section"),
        rx.container(
            rx.text("This is the content of the dropdown section."),
            rx.text("You can add more components here."),
        ),
    )
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
        detail_page(),
        *[commit_row(row) for row in gitlog],
        style = style.commit_container,
    )

app = rx.App()
app.add_page(index)
