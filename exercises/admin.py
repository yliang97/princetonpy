from django.contrib import admin

# Register your models here.
from .models import Exercise
admin.site.register(Exercise)

from .models import Hint
admin.site.register(Hint)