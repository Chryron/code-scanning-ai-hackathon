"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config
import style 
from gitlog import gitlog
class State(rx.State):
    """The app state."""

    ...
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
                _hover = style.commit_hover,
            ), 
            on_click=rx.window_alert("hi") ,    
            style = style.commit_a,       
        )


def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        *[commit_row(row) for row in gitlog],
        style = style.commit_container,
    )


app = rx.App()
app.add_page(index)
