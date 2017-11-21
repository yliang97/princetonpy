from rest_framework import serializers
from exercises.models import Exercise


class ExerciseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Exercise
		fields = ('id', 'question_name', 'question_description', 'question_guidelines', 'test_inputs', 'test_outputs', 'java_equivalent', 
			'answer_code', 'hints', 'slug')

	def create(self, validated_data):
		return Exercise.objects.create(**validated_data)

