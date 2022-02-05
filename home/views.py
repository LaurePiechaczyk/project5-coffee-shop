from django.shortcuts import render
from products.models import Product


# Create your views here.
def index(request):
    """ A view to return the index page """

    four_random_products = Product.objects.filter(
        category__name__contains='bean').order_by(
          '?')[:4]

    context = {
        'four_random_products': four_random_products,
    }

    return render(request, 'home/index.html', context)
