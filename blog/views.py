from django.shortcuts import render
from .models import Post
from django.core import serializers
from django.http import HttpResponse
from django.http.response import JsonResponse
import json


import math

# Create your views here.
def index(request, page=1):
    page = int(page)
    posts = Post.objects.all().order_by('id').reverse()
    maxpage = math.ceil(len(posts)/7)
    posts = posts[7*(page-1):7*page]
    if page < maxpage:
        return render(request, "index.html", {"posts":posts, "previous":page+1})
    else:
        return render(request, "index.html", {"posts":posts, "previous":0})

def post(request, postid):
    post = Post.objects.get(id=postid)
    return render(request, "post.html", {"post":post})

def allposts(request):
    posts = Post.objects.all()
    output = serializers.serialize('json', posts)
    output = json.dumps(json.loads(output), indent=4)
    return HttpResponse(output, content_type="application/json")
