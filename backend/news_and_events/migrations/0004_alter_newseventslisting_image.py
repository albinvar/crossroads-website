# Generated by Django 5.1.7 on 2025-05-07 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_and_events', '0003_alter_newseventslisting_link_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newseventslisting',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='events_images/'),
        ),
    ]
