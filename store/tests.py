from django.test import TestCase
from .models import Product, Category
from .dao import ProductDAO

class ProductDAOTest(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Electronics")
        self.product = Product.objects.create(name="Laptop", price=1000, category=self.category)

    def test_get_all_products(self):
        products = ProductDAO.get_all_products()
        self.assertEqual(products.count(), 1)

    def test_get_product_by_id(self):
        product = ProductDAO.get_product_by_id(self.product.id)
        self.assertEqual(product.name, "Laptop")

    def test_create_product(self):
        product = ProductDAO.create_product(name="Phone", price=500, category=self.category)
        self.assertEqual(product.name, "Phone")

    def test_update_product(self):
        ProductDAO.update_product(self.product.id, price=1200)
        self.product.refresh_from_db()
        self.assertEqual(self.product.price, 1200)

    def test_delete_product(self):
        ProductDAO.delete_product(self.product.id)
        self.assertEqual(Product.objects.count(), 0)


