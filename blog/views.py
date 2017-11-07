from django.shortcuts import render
from django.http import HttpResponse, Http404

from .models import News


def get_news(request, news_id):
    try:
        news = News.objects.get(pk=news_id)
        return render(request, 'blog/news.html', {'news': news})
    except News.DoesNotExist:
        raise Http404("Does not exist")
