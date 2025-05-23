# Generated by Django 5.1.7 on 2025-04-30 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0011_alter_countryservicebanner_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='destinationdedicatedkeyfact',
            name='slug',
            field=models.SlugField(blank=True, max_length=200, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='destinationdedicatedpage',
            name='slug',
            field=models.SlugField(blank=True, max_length=200, null=True, unique=True),
        ),
    ]
