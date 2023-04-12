from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('s1/', views.strategic1, name='strategic1'),
    path('s2/', views.strategic2, name='strategic2'),
    path('p1/', views.peacetime1, name='peacetime1'),
    path('p2/', views.peacetime2, name='peacetime2'),
    path('st/', views.standing, name='standing'),
]


