import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async createProduct(
    createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const { name, description, price } = createProductDto;

    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
      
    //   try
    //   {
    //       createProductDto.price = +createProductDto.price;
    //   }
    //   catch (error)
    //   {
    //       return { error: `Invalid input: price should be a number, instead received: ${}` }
    //       Logger.warn("Returned error to caller.")
    //   }

    await product.save();
    return product;
  }

  public async editProduct(
    createProductDto: CreateProductDTO,
    editedProduct: Product,
  ): Promise<Product> {
    const { name, description, price } = createProductDto;

    editedProduct.name = name;
    editedProduct.description = description;
    editedProduct.price = price;
    await editedProduct.save();

    return editedProduct;
  }
}
