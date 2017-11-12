from django.shortcuts import render

# Create your views here.
from django.views import generic
from rest_framework import mixins
from rest_framework import generics
from exercises.models import Exercise
from exercises.serializers import ExerciseSerializer

class Index(generic.ListView):
	template_name = 'index.html'

	def get_queryset(self):
		return

class Info(generic.ListView):
	template_name = 'info.html'

	def get_queryset(self):
		return

class QuestionView(generic.DetailView):
	model = Exercise
	template_name = 'specificQuestion.html'

class ExerciseList(generics.ListCreateAPIView):
	queryset = Exercise.objects.all()
	serializer_class = ExerciseSerializer

class ExerciseDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Exercise.objects.all()
	serializer_class = ExerciseSerializer