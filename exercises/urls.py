from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from exercises import views
from django.views.generic import TemplateView

urlpatterns = [
	url(r'^$', views.Index.as_view(), name = 'index'),
	url(r'^information/$', views.Info.as_view(), name = 'info'),
	url(r'^exercises/$', views.ExerciseHome.as_view(), name='exerciseHome'),
	url(r'^exercises_database/$', views.ExerciseList.as_view()),
	url(r'^exercises/(?P<slug>[-\w]+)/$', views.QuestionView.as_view(), name='detail'),
	url(r'^projects', TemplateView.as_view(template_name="projects.html")),
	url(r'^project/loops', TemplateView.as_view(template_name="loops.html")),
]
urlpatterns = format_suffix_patterns(urlpatterns)