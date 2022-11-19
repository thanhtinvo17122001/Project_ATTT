from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.
def index(request) : 
    return TemplateResponse(request,'index.html')
def login(request) : 
    return TemplateResponse(request,'login.html')
def news(request) : 
    return TemplateResponse(request,'news.html')
