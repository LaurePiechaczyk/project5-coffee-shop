from django.db import models

# Create your models here.
class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'
        
    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254, null=True, blank=True)

    def __str__(self):
        return self.name


class Country(models.Model):

    class Meta:
        verbose_name_plural = 'Countries'
        
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Strongness(models.Model):

    class Meta:
        verbose_name_plural = 'Strongness'
        
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Specie(models.Model):
        
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name


class Roast(models.Model):
        
    name = models.CharField(max_length=254)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)
    country = models.ForeignKey('Country', null=True, blank=True, on_delete=models.SET_NULL)
    strongness = models.ForeignKey('Strongness', null=True, blank=True, on_delete=models.SET_NULL)
    specie = models.ForeignKey('Specie', null=True, blank=True, on_delete=models.SET_NULL)
    roast = models.ForeignKey('Roast', null=True, blank=True, on_delete=models.SET_NULL)   
    sku = models.CharField(max_length=254, null=True, blank=True)
    name = models.CharField(max_length=254)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    rating = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    image_url = models.URLField(max_length=1024, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name