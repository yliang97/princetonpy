# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-21 00:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0009_remove_exercise_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='slug',
            field=models.SlugField(default=1),
            preserve_default=False,
        ),
    ]
