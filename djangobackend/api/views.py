from django.shortcuts import render, redirect
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.response import Response
from .serializers import StudentSerializer, ProductsSerializer, TodoTasksListSerializer
from .models import Student, Products, TodoTasks
from .filters import ProductFilter
# from .backends import SwaggerFilterBackend
from rest_framework import status
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login
from django.contrib import messages
import re

def registerPage(request):
    regex_name = r'^[a-zA-Z]+$'
    target_url = 'http://127.0.0.1:8000/api/login/'
    target_url_reg = 'http://127.0.0.1:8000/api/register/'

    if request.method == "POST":
        first_name = request.POST.get('firstName')
        if not re.match(regex_name, first_name):
            messages.info(request, "First Name format is not correct")
            return redirect(target_url_reg)
        last_name = request.POST.get('lastName')
        username = request.POST.get('userName')
        password = request.POST.get('password')

        user = User.objects.filter(username=username)
        if user.exists():
            messages.info(request, "Username already exists")
            return redirect(target_url_reg)

        user = User.objects.create(
            first_name = first_name,
            last_name = last_name,
            username = username)
        user.set_password(password)
        user.save()
        messages.info(request, "User saved successfully")
        return redirect(target_url)

    return render(request, 'api/register.html')


def loginPage(request):

    if request.method == "POST":
        username = request.POST.get('userName')
        password = request.POST.get('password')
        target_url2 = 'http://127.0.0.1:8000/api/login/'
        target_dummy = 'http://127.0.0.1:8000/api/dummy/'

        if not User.objects.filter(username=username).exists():
            return redirect(target_url2)
        user = authenticate(username=username, password=password)
        if user is None:
            return redirect(target_url2)
        else:
            login(request, user)
            return redirect(target_dummy)
            # return redirect(target_react)

    return render(request, 'api/login.html')


def logoutPage(request):
    logout(request)
    return redirect('http://127.0.0.1:8000/api/login/')


@login_required(login_url='http://127.0.0.1:8000/api/login/')
def dummy_page(request):
    return render(request, 'api/dummy.html')


class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentPost(ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    @swagger_auto_schema(
            request_body=StudentSerializer
    )
    def post(self, request, *args, **kwargs):
        print(1)
        print(request.data.get('name'))
        print(request.data.get('email'))
        print(request.data)


        return self.create(request, *args, **kwargs)


class ProductsList(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter  
    #filterset_fields = ['company']

    # return Response({}, status.)
    # @swagger_auto_schema(
    #     manual_parameters=[
    #         openapi.Parameter(
    #             'company',
    #             openapi.IN_QUERY,
    #             'Enter Company Name',
    #             type=openapi.TYPE_STRING),

    #         openapi.Parameter(
    #             'price_lowest',
    #             openapi.IN_QUERY,
    #             'Lowest Price',
    #             type=openapi.TYPE_INTEGER),

    #         openapi.Parameter(
    #             'price_highest',
    #             openapi.IN_QUERY,
    #             'Highest Price',
    #             type=openapi.TYPE_INTEGER),
    #     ],
    #     security=[],
    #     responses={
    #               '400': StudentSerializer,
    #               '200': ProductsSerializer
    #             }
    # )
    def get(self, request, *args, **kwargs):
        company = request.query_params.get('company', '')
        price_lowest = request.query_params.get('price_lowest', '')
        price_highest = request.query_params.get('price_highest', '')
        return super(ProductsList, self).get(request, *args, **kwargs)


class TodoListPost(ListCreateAPIView):
    queryset = TodoTasks.objects.all()
    serializer_class = TodoTasksListSerializer


class TodoDelete(RetrieveUpdateDestroyAPIView):
    queryset = TodoTasks.objects.all()
    serializer_class = TodoTasksListSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        if self.kwargs['pk'] == str(-1):
            TodoTasks.objects.all().delete()
            return Response(status=status.HTTP_200_OK, data={'response': 'Deleted Successfully'})
        else:
            return self.destroy(request, *args, **kwargs)

