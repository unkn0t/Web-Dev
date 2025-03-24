from django.urls import path

from . import views

urlpatterns = [
    # ex: /api/products
    path("products/", views.list_products, name="list_products"),
    # ex: /api/products/5/
    path("products/<int:id>/", views.get_product, name="get_product"),
    # ex: /categories
    path("categories/", views.list_categories, name="list_categories"),
    # ex: /categories/5/
    path("categories/<int:id>/", views.get_category, name="get_category"),
    # ex: /categories/5/products/
    path(
        "categories/<int:id>/products/",
        views.category_products,
        name="category_products",
    ),
]
