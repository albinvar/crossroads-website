# Generated by Django 5.1.7 on 2025-04-09 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_rename_image_freeeducationcourses_course_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsEvents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='news_events/')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('link', models.CharField(blank=True, max_length=100, null=True)),
                ('order', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]
