from rest_framework import serializers
from api.models.models import Item, Queen


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class QueenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queen
        fields = '__all__'
