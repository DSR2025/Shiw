from django.db import models
from django.utils.text import slugify
from django.core.exceptions import ValidationError
from mptt.models import MPTTModel, TreeForeignKey
from django.dispatch import receiver
from django.db.models.signals import post_delete
import os

class Categories(MPTTModel):
    name = models.CharField(max_length=150, verbose_name='Название')
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children', verbose_name='Родительская категория')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядок')  

    class Meta:
        db_table = 'category'
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'
        ordering = ['order']  

    class MPTTMeta:
        order_insertion_by = ['order']

    def __str__(self):
        return self.name

    def clean(self):
        if Categories.objects.filter(name=self.name, parent=self.parent).exclude(pk=self.pk).exists():
            raise ValidationError('Категория с таким названием уже существует в этой родительской категории.')

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            self.slug = base_slug
            counter = 1
            while Categories.objects.filter(slug=self.slug).exists():
                self.slug = f"{base_slug}-{counter}"
                counter += 1
        super().save(*args, **kwargs)

class Products(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название')
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True, verbose_name='Описание')
    price = models.DecimalField(default=0.00, max_digits=7, decimal_places=2, verbose_name='Цена')
    category = models.ForeignKey(to=Categories, on_delete=models.CASCADE, verbose_name='Категория')
    show_from = models.BooleanField(default=False, verbose_name='Добавить "ОТ" к цене')

    def delete(self, *args, **kwargs):
        # Удаляем все связанные изображения перед удалением товара
        for image in self.images.all():
            image.delete()
        super().delete(*args, **kwargs)

    class Meta:
        db_table = 'product'
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.name

    def display_id(self):
        return f"{self.id:05}"

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            self.slug = base_slug
            counter = 1
            while Products.objects.filter(slug=self.slug).exists(): 
                self.slug = f"{base_slug}-{counter}"
                counter += 1
        super().save(*args, **kwargs)  

class ProductImage(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='goods_images', verbose_name='Изображение')

    class Meta:
        verbose_name = 'Изображение товара'
        verbose_name_plural = 'Изображения товаров'

    def __str__(self):
        return f"Изображение для {self.product.name}"

@receiver(post_delete, sender=ProductImage)
def delete_product_image_file(sender, instance, **kwargs):
    """
    Удаляет файл изображения при удалении объекта ProductImage.
    """
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)