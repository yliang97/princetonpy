# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-21 00:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0007_auto_20171121_0035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]
