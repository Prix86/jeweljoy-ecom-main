from .models import Product

class ProductDAO:
    @staticmethod
    def get_all_products():
        return Product.objects.all()

    @staticmethod
    def get_product_by_id(product_id):
        return Product.objects.get(id=product_id)

    @staticmethod
    def create_product(name, price, category, description='', image=None):
        product = Product(name=name, price=price, category=category, description=description, image=image)
        product.save()
        return product

    @staticmethod
    def update_product(product_id, **kwargs):
        product = Product.objects.get(id=product_id)
        for key, value in kwargs.items():
            setattr(product, key, value)
        product.save()
        return product

    @staticmethod
    def delete_product(product_id):
        product = Product.objects.get(id=product_id)
        product.delete()

