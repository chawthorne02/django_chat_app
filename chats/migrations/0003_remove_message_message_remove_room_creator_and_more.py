# Generated by Django 4.1.2 on 2022-10-21 18:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chats', '0002_rename_author_message_message_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='message',
        ),
        migrations.RemoveField(
            model_name='room',
            name='Creator',
        ),
        migrations.RemoveField(
            model_name='room',
            name='room',
        ),
        migrations.AddField(
            model_name='message',
            name='author',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='message',
            name='room',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='chats.room'),
        ),
        migrations.AddField(
            model_name='message',
            name='text',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='room',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
