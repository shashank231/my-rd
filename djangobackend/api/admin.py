from django.contrib import admin
from .models import Student, Products


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email']


@admin.register(Products)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['pid', 'name', 'price']
