from rest_framework import serializers
from .models import Student, Products, TodoTasks


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'id', 'email')


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class TodoTasksListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoTasks
        fields = '__all__'

