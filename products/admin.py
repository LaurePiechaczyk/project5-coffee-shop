from django.contrib import admin
from .models import Product, Category, Country, Strongness, Specie, Roast


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'sku',
        'name',
        'category',
        'roast',
        'strongness',
        'specie',
        'country',
        'price',
        'image',
    )

    ordering = ('sku',)


class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Country)
admin.site.register(Strongness)
admin.site.register(Specie)
admin.site.register(Roast)
