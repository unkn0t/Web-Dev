from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


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


def vacancy_list(request):
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
