# Generated by Django 4.1.1 on 2023-03-30 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_products'),
    ]

    operations = [
        migrations.CreateModel(
            name='TodoTasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
