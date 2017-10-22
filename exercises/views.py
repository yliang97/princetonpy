from django.shortcuts import render

# Create your views here.
from rest_framework import mixins
from rest_framework import generics
from exercises.models import Exercise
from exercises.serializers import ExerciseSerializer

class ExerciseList(generics.ListCreateAPIView):
	queryset = Exercise.objects.all()
	serializer_class = ExerciseSerializer

class ExerciseDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Exercise.objects.all()
	serializer_class = ExerciseSerializer