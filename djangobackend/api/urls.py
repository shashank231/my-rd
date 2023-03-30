
from django.urls import path
from api import views

urlpatterns = [
    path('student/', views.StudentList.as_view()),
    path('student/post/', views.StudentPost.as_view()),
    path('products/', views.ProductsList.as_view()),
    path('todotasks/', views.TodoListPost.as_view()),
    path('todotasks/<int:pk>', views.TodoDelete.as_view()),
]