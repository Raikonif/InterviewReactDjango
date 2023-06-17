from django.db import models


class Item(models.Model):
    category = models.CharField(max_length=255)
    subcategory = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    amount = models.IntegerField()

    def __str__(self) -> str:
        return self.name


class Queen(models.Model):
    n = models.CharField(max_length=255)
    k = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.n + " " + self.k
