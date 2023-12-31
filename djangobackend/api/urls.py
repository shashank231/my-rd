
from django.urls import path, re_path
from api import views

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutPage, name="logout"),
    path('dummy/', views.dummy_page, name="dummy_page"),

    path('student/', views.StudentList.as_view()),
    path('student/post/', views.StudentPost.as_view()),
    path('products/', views.ProductsList.as_view()),
    path('todotasks/', views.TodoListPost.as_view()),
    re_path(r'^todotasks/(?P<pk>(\d+|-[1]))/$', views.TodoDelete.as_view()),
]


