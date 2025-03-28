from django.http import JsonResponse
from django.forms.models import model_to_dict

from .models import Product, Category


def list_products(request):
    products = list(Product.objects.values())
    return JsonResponse({"products": products})


def list_categories(request):
    categories = list(Category.objects.values())
    return JsonResponse({"categories": categories})


def get_product(request, id):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product does not exist"}, status=404)
    return JsonResponse(model_to_dict(product))


def get_category(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category does not exist"}, status=404)
    return JsonResponse(model_to_dict(category))


def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse({"products": products})
