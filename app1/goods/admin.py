from django.contrib import admin
from goods.models import Categories, Products
from django.contrib import admin
from goods.models import ProductImage
from adminsortable2.admin import SortableAdminMixin
from mptt.admin import DraggableMPTTAdmin

@admin.register(Categories)
class CategoriesAdmin(SortableAdminMixin, DraggableMPTTAdmin):
    list_display = ('tree_actions', 'indented_title', 'slug', 'order')  
    list_display_links = ('indented_title',)  
    prepopulated_fields = {'slug': ('name',)}  
    search_fields = ('name',)  
    fields = ('name', 'slug', 'parent', 'order')  


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1 

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ('name', 'category', 'price', 'show_from') 
    search_fields = ('name', 'category__name')
    list_editable = ('show_from',)  

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')
    search_fields = ('product__name',)