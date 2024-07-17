import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ShopConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("store", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("store", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        await self.channel_layer.group_send(
            "store",
            {
                "type": "store_message",
                "message": data['message']
            }
        )

    async def store_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))
