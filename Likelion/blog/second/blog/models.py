from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length = 200)
    pub_date = models.DateTimeField('date published')
    body = models.TextField()

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

class Portfolio(models.Model):
    title_2 = models.CharField(max_length = 255, default = 'SOME TITLE')
    image = models.ImageField(upload_to = 'images/', default = 'SOME IMAGE')
    description = models.CharField(max_length = 500, default = 'SOME STRING')

    def __str__(self):
        return self.title_2