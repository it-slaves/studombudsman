from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.template import loader
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from django.conf.urls import url

from blog.models import News
from problems.models import Problem



def index(request):
    problems_list = Problem.objects.order_by('name')
    latest_news_list = News.objects.order_by('-pub_date')[:3]
    context = {'problems_list': problems_list, 'news_0': latest_news_list[0], 'news_1': latest_news_list[1], 'news_2': latest_news_list[2]}
    return render(request, 'studombudsman/index.html', context)
