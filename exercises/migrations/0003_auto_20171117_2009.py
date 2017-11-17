# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-17 20:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0002_exercise_question_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hint', models.TextField()),
                ('number', models.CharField(max_length=200)),
            ],
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='hints',
        ),
        migrations.AddField(
            model_name='exercise',
            name='question_guidelines',
            field=models.TextField(default='null'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hint',
            name='exercise',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hints', to='exercises.Exercise'),
        ),
    ]