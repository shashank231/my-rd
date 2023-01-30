from django.shortcuts import render

from .serializers import StudentSerializer, ProductsSerializer
from rest_framework.generics import ListAPIView
from .models import Student, Products

class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class ProductsList(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
