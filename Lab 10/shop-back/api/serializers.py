from rest_framework import serializers
from .models import Category, Product


class ProductListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        products = [Product(**item) for item in validated_data]
        return Product.objects.bulk_create(products)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        list_serializer_class = ProductListSerializer