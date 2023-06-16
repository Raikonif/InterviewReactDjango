# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from api.models.models import Queen
from api.serializers import ItemSerializer

from rest_framework import serializers
from rest_framework import status


class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Queen.objects.all()


@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_items': '/',
        'Search by Category': '/?category=category_name',
        'Search by Subcategory': '/?subcategory=category_name',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }
    return Response(api_urls)


@api_view(['POST'])
def add_items(request):
    item = ItemSerializer(data=request.data)

    # validating for already existing data
    if Queen.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')

    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def view_items(request):
    # checking for the parameters from the URL
    if request.query_params:
        items = Queen.objects.filter(**request.query_params.dict())
    else:
        items = Queen.objects.all()

    # if there is something in items else raise error
    if items:
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def update_items(request, pk):
    item = Queen.objects.get(pk=pk)
    data = ItemSerializer(instance=item, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def delete_items(request, pk):
    item = get_object_or_404(Queen, pk=pk)
    item.delete()
    return Response(status=status.HTTP_202_ACCEPTED)
