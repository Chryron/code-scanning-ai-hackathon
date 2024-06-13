from reflex.components.radix import themes as rx

THEME = rx.theme(
    appearance="light",
    has_background=True,
    radius="large",
    accent_color="iris",
    scaling="100%",
    panel_background="solid",
)
STYLESHEETS = ["style.css"]
commit = {
"display": "flex",
"flex-direction": "column",
"align-items": "flex-start",
"justify-content": "space-between",
"margin-bottom": "0",
"padding": "10px",
"border": "1px solid #ddd",
"border-radius": "6px",
"position": "relative"
}

commit_hover = {
"background-color": "#eee",
"box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)"
}

commit_a = {
    "color":"black"
}

commit_container={
"max-width": "800px",
"margin": "20px auto",
"padding": "20px",
"background-color": "#fff",
"border-radius": "8px",
"box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
}
commit_info= {
"display": "flex",
"flex-wrap": "wrap",
"align-items": "center"
}
bubble={
"padding": "8px 11px",
"margin": "5px",
"border-radius": "12px",
"background-color": "#007bff",
"color": "#fff",
"font-size": "12px"
}
bubble_hash= {
"background-color": "#6c757d",
"position": "absolute",
"right": "1em",
"z-index": "1",
"font-size": "14px"
}
bubble_author= {
"background-color": "#28a745",
"display":"inline",
}

bubble_date= {
"background-color": "#17a2b8",
"display":"inline",
}