# Generated by Django 5.1.7 on 2025-05-11 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_delete_testimonialimage_delete_testimonialvideo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courselisting',
            name='link',
            field=models.SlugField(blank=True, max_length=255, null=True),
        ),
    ]
