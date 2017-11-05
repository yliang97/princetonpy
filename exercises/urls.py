from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from exercises import views

urlpatterns = [
	url(r'^$', views.Index.as_view(), name = 'index'),
	url(r'^information/$', views.Info.as_view(), name = 'info'),
	url(r'^exercises/$', views.ExerciseList.as_view()),
	url(r'^exercises/(?P<pk>[0-9]+)/$', views.ExerciseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)