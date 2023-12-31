from django.contrib import admin
from .models import Student, Products, TodoTasks


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email']

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['name', 'pid', 'price']

@admin.register(TodoTasks)
class TodoTasksAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
