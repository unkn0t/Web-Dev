# Generated by Django 5.1.7 on 2025-03-24 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_category_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='category_id',
            new_name='category',
        ),
    ]
