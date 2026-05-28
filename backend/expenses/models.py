from django.contrib.auth.models import User
from django.db import models

class Expense(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    title = models.CharField(max_length=255)
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    category = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)