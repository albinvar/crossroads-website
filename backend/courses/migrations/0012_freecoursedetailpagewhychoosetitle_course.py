# Generated by Django 5.1.7 on 2025-05-12 17:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0011_remove_freecoursedetailpagewhychoosetitle_course'),
    ]

    operations = [
        migrations.AddField(
            model_name='freecoursedetailpagewhychoosetitle',
            name='course',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='why_choose_titles', to='courses.freeeducationcourses'),
        ),
    ]
