from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'home/index.html')

def strategic1(request):
    return render(request, 'home/strategic1.html')

def strategic2(request):
    return render(request, 'home/strategic2.html')

def peacetime1(request):
    return render(request, 'home/peacetime1.html')

def peacetime2(request):
    return render(request, 'home/peacetime2.html')

def standing(request):
    return render(request, 'home/standing.html')


