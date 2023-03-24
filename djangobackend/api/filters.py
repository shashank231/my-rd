
from django_filters import rest_framework as django_filters

class ProductFilter(django_filters.FilterSet):
    company = django_filters.CharFilter(
        field_name='company',
        lookup_expr='iexact'
    )
    price_greater_than = django_filters.NumberFilter(
        field_name="price",
        lookup_expr='gte'
    )
    price_lower_than = django_filters.NumberFilter(
        field_name="price",
        lookup_expr='lte'
    )