
import { client } from '>> @/sanity/lib/client'; // Adjust import based on your file structure
import Image from 'next/image';
import { Products } from '>> @/types/products';

interface ProductPageProps {
  product: Products | null;
}

export async function getProductData(productId: string): Promise<Products | null> {
  // Query to fetch the product details using the ID
  const productQuery = `
    *[_type == "product" && _id == "${productId}"]{
    _id,
      ProductName,
      description,
      price,
      status,
      inventory,
      category,
      colors,
      "imageUrl": image.asset->url
    }
  `;
  
  const productData = await client.fetch(productQuery);

  if (!productData || productData.length === 0) {
    return null; // Return null if the product is not found
  }

  return productData[0]; // Return the product data
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch product data for the specific product
  const product = await getProductData(id);

  if (!product) {
    return <div>Product not found</div>; // Handle case where product data is null or not found
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt="image"
              width={800}
              height={800}
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.ProductName}</h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-red-600">${product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="mt-4 py-3 px-6 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Add to Cart
          </button>

          {/* Additional Info (if any) */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <span className="w-6 h-6 text-green-500">🚚</span>
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <span className="w-6 h-6 text-green-500">🔁</span>
              <span>30-day hassle-free return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
