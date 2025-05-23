# Generated by Django 5.1.7 on 2025-04-09 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_newseventstitle_alter_freeeducationtitle_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestimonialImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('name', models.CharField(max_length=100)),
                ('flag', models.ImageField(upload_to='flags/')),
                ('rating', models.PositiveIntegerField()),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='TestimonialVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='videos/')),
                ('name', models.CharField(max_length=100)),
                ('flag', models.ImageField(upload_to='flags/')),
                ('rating', models.PositiveIntegerField()),
                ('description', models.TextField()),
            ],
        ),
    ]
