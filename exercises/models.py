from django.db import models

# Create your models here.
from django.db import models

class Exercise(models.Model):
	question_name = models.CharField(max_length = 200)
	question_description = models.TextField()
	test_inputs = models.CharField(max_length = 200)
	test_outputs = models.CharField(max_length = 200)
	java_equivalent = models.TextField()
	answer_code = models.TextField()
	hints = models.TextField() # separate hints by commas so that we can split


		