from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^(?P<news_id>[0-9]+)/$', views.get_news, name='detail')
]
