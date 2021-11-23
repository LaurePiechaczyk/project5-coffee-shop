
from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm
from profiles.forms import UserProfileForm
from profiles.models import UserProfile


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    if request.user.is_authenticated:
        try:
            profile = UserProfile.objects.get(user=request.user)
            order_form = OrderForm(initial={
                'full_name': profile.user.get_full_name(),
                'email': profile.user.email,
                'phone_number': profile.default_phone_number,
                'country': profile.default_country,
                'postcode': profile.default_postcode,
                'town_or_city': profile.default_town_or_city,
                'street_address1': profile.default_street_address1,
                'street_address2': profile.default_street_address2,
                
            })
        except UserProfile.DoesNotExist:
            order_form = OrderForm()
    else:
        order_form = OrderForm()


    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
    }

    return render(request, template, context)
