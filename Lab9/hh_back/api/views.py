from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

import json


def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse({"companies": serializer.data})


def company_get(request, id):
    try:
        company = Company.objects.get(pk=id)
        serializer = CompanySerializer(company)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    return JsonResponse(serializer.data)


def company_list_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse({"vacancies": serializer.data})


@csrf_exempt
def vacancy_list(request):
    if request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse({"vacancies": serializer.data})


def vacancy_get(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
        serializer = VacancySerializer(vacancy)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=404)
    return JsonResponse(serializer.data)


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse({"vacancies": serializer.data})
