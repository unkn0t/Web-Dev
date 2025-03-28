from django.urls import path

from . import views

urlpatterns = [
    path("companies/", views.company_list),
    path("companies/<int:id>/", views.company_get),
    path("companies/<int:id>/vacancies/", views.company_list_vacancies),
    path("vacancies/", views.vacancy_list),
    path("vacancies/<int:id>/", views.vacancy_get),
    path("vacancies/top_ten/", views.vacancy_top_ten),
]
