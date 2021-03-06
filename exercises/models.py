# Create your models here.
from django.db import models
from django.utils.text import slugify

class Exercise(models.Model):
	question_name = models.CharField(max_length = 200)
	question_description = models.TextField()
	category = models.CharField(max_length = 200)
	lesson = models.TextField() # main ideas for the lesson
	question_guidelines = models.TextField() # longer version
	test_inputs = models.TextField()
	test_outputs = models.TextField()
	java_equivalent = models.TextField()
	answer_code = models.TextField()
	slug = models.SlugField(unique=True)

	def __str__(self):
		return self.question_name

class Hint(models.Model):
	exercise = models.ForeignKey(Exercise, on_delete = models.CASCADE, related_name = 'hints')
	hint = models.TextField()
	number = models.CharField(max_length = 200)

	def __str__(self):
		return self.exercise.question_name + ': Hint ' + self.number




		