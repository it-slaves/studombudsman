# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-07 13:17
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2017, 11, 7, 16, 17, 6, 296040), help_text='Publication date of the news'),
        ),
    ]