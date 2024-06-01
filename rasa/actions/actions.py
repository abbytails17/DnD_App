# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from sanic import Sanic, response
from sanic.exceptions import NotFound

app = Sanic("action_server")

class ActionDescribeSetting(Action):

    def name(self) -> str:
        return "action_describe_setting"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: dict) -> list:
        description = "The setting is a small village with cobblestone streets and a bustling market."
        dispatcher.utter_message(text=description)

        return []

@app.route('/favicon.ico', methods=['GET'])
async def favicon(request):
    return response.text('')

@app.exception(NotFound)
async def ignore_404s(request, exception):
    return response.text("Route not found", status=404)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5055)