# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-27 03:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0013_auto_20171127_0302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='test_inputs',
            field=models.TextField(),
        ),
    ]
