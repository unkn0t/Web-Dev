from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class ListCompanies(APIView):
    def get(self, request, format=None):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


class GetCompany(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(pk=id)
            serializer = CompanySerializer(company)
        except Company.DoesNotExist as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.data)


@api_view(["GET"])
def company_list_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
        serializer = VacancySerializer(company.vacancies, many=True)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.data)


@api_view(["GET"])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def vacancy_get(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
        serializer = VacancySerializer(vacancy)
    except Vacancy.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.data)


@api_view(["GET"])
def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
