from django.db import models

# Create your models here.
from django.db import models

class Exercise(models.Model):
	question_description = models.CharField(max_length = None)
	test_inputs = models.CharField(max_length = 200)
	test_outputs = models.CharField(max_length = 200)
	java_equivalent = models.CharField(max_length = None)
	answer_code = models.CharField(max_length = None)
	hints = models.CharField(max_length = None) # separate hints by commas so that we can split

	class Meta:
		ordering = ('created',)