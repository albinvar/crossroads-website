# Generated by Django 5.1.7 on 2025-05-07 10:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news_and_events', '0005_newseventslisting_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newseventslisting',
            name='news_events_listing',
        ),
        migrations.DeleteModel(
            name='NewsEventsTab',
        ),
    ]
