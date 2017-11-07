from django.db import models
from datetime import datetime


class News(models.Model):
    """
    News model
    Contains information that describe news
    """
    def __str__(self):
        return self.name

    name = models.CharField(
        max_length=100,
        help_text="Name of news"
    )
    category = models.CharField(
        max_length=100,
        blank=True,
        help_text="Category of the news"
    )
    pub_date = models.DateTimeField(
        default=datetime.now(),
        help_text="Publication date of the news"
    )
    announce = models.TextField(




        help_text="Announce of the news"
    )
    text = models.TextField(
        help_text="Text of the news"
    )
    image_link = models.CharField(
        max_length=100,
        blank=True,
        help_text="Link to image of news"
    )
