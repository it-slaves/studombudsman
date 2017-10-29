from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status

from .models import News


def get_news(request, news_id):
    try:
        news = News.objects.get(pk=news_id)
        return render(request, 'blog/news.html', {'news': news})
    except News.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
