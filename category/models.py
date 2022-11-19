from django.db import models
import uuid

class Category(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True, editable=False)
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name
    class Meta:
        db_table = "category"