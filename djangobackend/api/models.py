from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)


class Products(models.Model):
    name = models.CharField(max_length=100)
    pid = models.CharField(max_length=100)
    price = models.IntegerField()
    company = models.CharField(max_length=100)

