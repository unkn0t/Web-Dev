from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    city = models.CharField(max_length=128)
    address = models.TextField()

    def __str__(self):
        return str(self.name)


class Vacancy(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)
