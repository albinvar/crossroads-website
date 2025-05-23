# Generated by Django 5.1.7 on 2025-05-10 17:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('free_education', '0004_alter_freeeducationcountrydedicatedpage_free_education_country'),
    ]

    operations = [
        migrations.CreateModel(
            name='FreeEducationCountryDedicatedPageKeyFactListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('free_education_country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='key_fact_listings', to='free_education.freeeducationcountry')),
            ],
        ),
        migrations.CreateModel(
            name='FreeEducationCountryDedicatedPageKeyFactTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key_fact_main_title', models.CharField(blank=True, max_length=255, null=True)),
                ('free_education_country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='key_fact_titles', to='free_education.freeeducationcountry')),
            ],
        ),
    ]
