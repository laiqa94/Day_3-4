export interface Product {
    [key: string]: string | number | object | undefined | string[] | Product; // Updated flexible index signature
    _id: number;
    _type: 'product';
    name: string;
    image?: {
        _type: 'image';
        asset: {
            _type: 'reference';
            _ref: string;
        };
    };
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    description: string;
    tags: string[];
    sizes: string[];
    stock_quantity: number;
    category: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    quantity: number;
    Product: Product; // Added this line
    ProductName: string; // Added this line
}