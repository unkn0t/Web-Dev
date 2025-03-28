from api.models import Company, Vacancy

# Create example companies
companies = [
    Company(
        name="TechCorp",
        description="A leading tech company",
        city="New York",
        address="123 Tech Street",
    ),
    Company(
        name="HealthPlus",
        description="Healthcare solutions provider",
        city="San Francisco",
        address="456 Wellness Ave",
    ),
    Company(
        name="EduWorld",
        description="Education and learning platform",
        city="Chicago",
        address="789 Learning Blvd",
    ),
    Company(
        name="GreenEnergy",
        description="Renewable energy solutions",
        city="Denver",
        address="321 Solar Lane",
    ),
    Company(
        name="FinTrust",
        description="Financial consulting services",
        city="Boston",
        address="654 Investment Rd",
    ),
]
Company.objects.bulk_create(companies)

# Fetch created companies
companies = list(Company.objects.all())

# Create example vacancies
vacancies = [
    Vacancy(
        name="Software Engineer",
        description="Develop and maintain software",
        salary=90000,
        company=companies[0],
    ),
    Vacancy(
        name="Data Scientist",
        description="Analyze and interpret complex data",
        salary=100000,
        company=companies[0],
    ),
    Vacancy(
        name="Nurse Practitioner",
        description="Provide patient care",
        salary=85000,
        company=companies[1],
    ),
    Vacancy(
        name="Medical Researcher",
        description="Conduct medical studies",
        salary=95000,
        company=companies[1],
    ),
    Vacancy(
        name="Math Teacher",
        description="Teach mathematics at high school level",
        salary=60000,
        company=companies[2],
    ),
    Vacancy(
        name="Physics Professor",
        description="Teach university-level physics",
        salary=110000,
        company=companies[2],
    ),
    Vacancy(
        name="Solar Engineer",
        description="Design and implement solar solutions",
        salary=87000,
        company=companies[3],
    ),
    Vacancy(
        name="Wind Energy Analyst",
        description="Optimize wind turbine efficiency",
        salary=93000,
        company=companies[3],
    ),
    Vacancy(
        name="Financial Analyst",
        description="Analyze financial data",
        salary=78000,
        company=companies[4],
    ),
    Vacancy(
        name="Investment Banker",
        description="Provide banking investment solutions",
        salary=120000,
        company=companies[4],
    ),
]
Vacancy.objects.bulk_create(vacancies)

print("Companies and Vacancies created successfully.")

