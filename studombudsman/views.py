from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.template import loader
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from django.conf.urls import url



def index(request):
    return render(request, '/studombusman/index.html')
