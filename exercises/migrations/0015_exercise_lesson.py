# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-09 01:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0014_auto_20171127_0331'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='lesson',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]