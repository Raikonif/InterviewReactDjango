from django.db import models


class Queen(models.Model):
    n = models.CharField(max_length=255)
    k = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.n + " " + self.k
