from django.urls import path
from .view import views

urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_items, name='add-items'),
    path('all/', views.view_items, name='view_items'),
    path('update/<int:pk>/', views.update_items, name='update-items'),
    path('item/<int:pk>/delete/', views.delete_items, name='delete-items'),
    path('add_move/', views.add_move, name='queen-move'),
    path('view_queen_moves/', views.view_queen_moves, name='view_queen_moves'),
    path('update_queen_moves/<int:pk>/', views.update_queen_moves, name='update_queen_moves'),
]
