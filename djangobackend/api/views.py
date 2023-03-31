from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveDestroyAPIView
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.response import Response
from .serializers import StudentSerializer, ProductsSerializer, TodoTasksListSerializer
from .models import Student, Products, TodoTasks
from .filters import ProductFilter
# from .backends import SwaggerFilterBackend
from rest_framework import status

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
        print(company , price_lowest , price_highest)
        return super(ProductsList, self).get(request, *args, **kwargs)


class TodoListPost(ListCreateAPIView):
    queryset = TodoTasks.objects.all()
    serializer_class = TodoTasksListSerializer

class TodoDelete(RetrieveDestroyAPIView):
    queryset = TodoTasks.objects.all()
    serializer_class = TodoTasksListSerializer

    def delete(self, request, *args, **kwargs):
        if self.kwargs['pk'] == str(-1):
            TodoTasks.objects.all().delete()
            return Response(status=status.HTTP_200_OK, data={'response': 'Deleted Successfully'})
        else:
            return self.destroy(request, *args, **kwargs)
   