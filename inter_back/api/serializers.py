from rest_framework import serializers
from api.models.models import Queen


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queen
        fields = ('category', 'subcategory', 'name', 'amount')
        # fields = '__all__'
