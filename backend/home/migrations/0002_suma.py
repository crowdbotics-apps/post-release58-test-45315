# Generated by Django 3.2.23 on 2024-01-08 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Suma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('testv1', models.CharField(max_length=99)),
                ('testv2', models.EmailField(max_length=254)),
                ('testv3', models.BigIntegerField()),
            ],
        ),
    ]
