from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.index, name='index'),
    path('/<page>', views.index, name='index'),
    path('/post/<postid>', views.post, name='post'),
]