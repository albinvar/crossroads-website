# Generated by Django 5.1.7 on 2025-04-20 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_documentationassistancebanner'),
    ]

    operations = [
        migrations.CreateModel(
            name='LanguageLabBanner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='language_lab_banner/')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=2000, null=True)),
            ],
        ),
    ]
