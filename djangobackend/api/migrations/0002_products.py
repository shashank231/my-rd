# Generated by Django 4.1.1 on 2023-01-30 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('pid', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('company', models.CharField(max_length=100)),
            ],
        ),
    ]
