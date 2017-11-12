from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from exercises import views
from django.views.generic import TemplateView

urlpatterns = [
	url(r'^$', views.Index.as_view(), name = 'index'),
	url(r'^information/$', views.Info.as_view(), name = 'info'),
	url(r'^exercises/$', TemplateView.as_view(template_name='test.html')),
	url(r'^exercises_database/$', views.ExerciseList.as_view()),
	url(r'^exercises/(?P<pk>[0-9]+)/$', views.QuestionView.as_view(), name='detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)