from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from goods.models import Categories, Products

def catalog(request, category_slug=None):
    categories = Categories.objects.filter(parent=None)
    current_category = None
    if category_slug:
        current_category = Categories.objects.get(slug=category_slug)
        goods = Products.objects.filter(category=current_category)
    else:
        goods = Products.objects.all()

    paginator = Paginator(goods, 12)  
    page = request.GET.get('page')
    try:
        goods = paginator.page(page)
    except PageNotAnInteger:
        goods = paginator.page(1)
    except EmptyPage:
        goods = paginator.page(paginator.num_pages)

    return render(request, 'goods/catalog.html', {
        'categories': categories,
        'goods': goods,
        'current_category': current_category
    })

def product(request, product_slug):
    product = get_object_or_404(Products, slug=product_slug)
    images = product.images.all()  
    context = {
        "product": product,
        "images": images,  
    }
    return render(request, "goods/product.html", context=context)