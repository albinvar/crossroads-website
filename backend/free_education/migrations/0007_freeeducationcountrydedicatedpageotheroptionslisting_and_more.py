# Generated by Django 5.1.7 on 2025-05-11 05:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('free_education', '0006_freeeducationcountrydedicatedpagerequirementslisting_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FreeEducationCountryDedicatedPageOtherOptionsListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list_title', models.CharField(blank=True, max_length=255, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('free_education_country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='other_options_listings', to='free_education.freeeducationcountry')),
            ],
        ),
        migrations.CreateModel(
            name='FreeEducationCountryDedicatedPageOtherOptionsTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_title', models.CharField(blank=True, max_length=255, null=True)),
                ('free_education_country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='other_options_titles', to='free_education.freeeducationcountry')),
            ],
        ),
    ]
