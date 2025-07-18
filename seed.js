import ProductsModel from "./models/Products.model.js";

const dummyArr = [
    {
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        images: [
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        ],
        brand: "Essence",
        stock: 99,
        rating: 2.56,
        price: 9.99,
        discountPercentage: 10.48,
        category: "beauty"
    },
    {
        title: "Eyeshadow Palette with Mirror",
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        images: [
            "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
        ],
        brand: "Glamour Beauty",
        stock: 34,
        rating: 2.86,
        price: 19.99,
        discountPercentage: 18.19,
        category: "beauty"
    },
    {
        title: "Powder Canister",
        description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        images: [
            "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
        ],
        brand: "Velvet Touch",
        stock: 89,
        rating: 4.64,
        price: 14.99,
        discountPercentage: 9.84,
        category: "beauty"
    },
    {
        title: "Red Lipstick",
        description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        images: [
            "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
        ],
        brand: "Chic Cosmetics",
        stock: 91,
        rating: 4.36,
        price: 12.99,
        discountPercentage: 12.16,
        category: "beauty"
    },
    {
        title: "Red Nail Polish",
        description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        images: [
            "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
        ],
        brand: "Nail Couture",
        stock: 79,
        rating: 4.32,
        price: 8.99,
        discountPercentage: 11.44,
        category: "beauty"
    },
    {
        title: "Calvin Klein CK One",
        description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        images: [
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
        ],
        brand: "Calvin Klein",
        stock: 29,
        rating: 4.37,
        price: 49.99,
        discountPercentage: 1.89,
        category: "fragrances"
    }
]

export  default async function seedDB(){
    await ProductsModel.insertMany(dummyArr);
    console.log("DB seeded")
}
