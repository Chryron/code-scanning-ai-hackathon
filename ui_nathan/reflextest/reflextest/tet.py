import reflex as rx
 
# Define the state to store the result
class AppState(rx.State):
    result: str = "Click a button to see the result"
 
    @rx.var
    def get_result(cls):
        return cls.result
 
    @classmethod
    def calculate_power(cls, number):
        cls.result = f"2^{number} = {2 ** number}"
 
# Create the main application
app = rx.App()
 
# Define the UI
def main():
    return rx.div(
        # Display the result
        rx.h1(AppState.get_result(), id="result"),
 
        # Create buttons dynamically
        rx.div(
            [rx.button(str(i), on_click=lambda i=i: AppState.calculate_power(i)) for i in range(1, 11)],
            id="buttons",
            style={"display": "flex", "gap": "10px"}
        ),
        style={"textAlign": "center", "marginTop": "50px"}
    )
 
app.add_page(main, path="/")
app.compile()
 
if __name__ == "__main__":
    app.run()