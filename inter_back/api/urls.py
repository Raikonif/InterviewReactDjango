from django.urls import path, include
from rest_framework import routers

from .view import views


# router = routers.DefaultRouter()
# router.register(r'items', views.ItemView, basename='items')
urlpatterns = [
    # path('', include(router.urls)),
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_items, name='add-items'),
    path('all/', views.view_items, name='view_items'),
    path('update/<int:pk>/', views.update_items, name='update-items'),
    path('item/<int:pk>/delete/', views.delete_items, name='delete-items'),
]
