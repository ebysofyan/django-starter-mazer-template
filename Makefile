django-makemigrations:
	python manage.py makemigrations

django-migrate:
	make django-makemigrations
	python manage.py migrate

django-createsuperuser:
	python manage.py createsuperuser --email=""
