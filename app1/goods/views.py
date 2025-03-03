from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, get_object_or_404
from goods.models import Categories, Products

def catalog(request, category_slug=None):
    # Получаем все родительские категории
    categories = Categories.objects.filter(parent=None)
    
    # Определяем текущую категорию, если передан category_slug
    current_category = None
    if category_slug:
        current_category = get_object_or_404(Categories, slug=category_slug)
        goods = Products.objects.filter(category=current_category).order_by('id')  # Сортировка по id
    else:
        goods = Products.objects.all().order_by('id')  # Сортировка по id

    # Пагинация
    paginator = Paginator(goods, 12)
    page = request.GET.get('page')
    try:
        goods = paginator.page(page)
    except PageNotAnInteger:
        goods = paginator.page(1)
    except EmptyPage:
        goods = paginator.page(paginator.num_pages)

    # Возвращаем данные в шаблон
    return render(request, 'goods/catalog.html', {
        'categories': categories,
        'goods': goods,
        'current_category': current_category
    })

def product(request, product_slug):
    # Получаем продукт по его slug
    product = get_object_or_404(Products, slug=product_slug)
    images = product.images.all()  # Получаем все изображения продукта (если есть related_name='images')
    
    # Возвращаем данные в шаблон
    context = {
        "product": product,
        "images": images,
    }
    return render(request, "goods/product.html", context=context)