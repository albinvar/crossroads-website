# Generated by Django 5.1.7 on 2025-04-21 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0007_languagelablisting'),
    ]

    operations = [
        migrations.AddField(
            model_name='languagelablisting',
            name='main_title',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
