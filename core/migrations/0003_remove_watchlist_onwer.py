# Generated by Django 3.2.6 on 2021-08-17 14:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_watchlist_onwer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='watchlist',
            name='onwer',
        ),
    ]
