


export const products = [
    {
        id: "1",
        name: "Gradient Graphic T-shirt",
        price: 145,
        originalPrice: 180,
        discount: 20,
        rating: 4.5,
        reviews: 135,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIoDwaJISuM7Xs1z8ZpaDEdBxPWcv2b5l9U4YF",
        category: "T-shirts",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["white", "pink", "blue"]
    },
    {
        id: "2",
        name: "Polo with Tipping Details",
        price: 180,
        rating: 4.2,
        reviews: 405,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgI9ZXyjmJwUh53kIQmYrCXavt0un8wcWTzj2OA",
        category: "T-shirts",
        sizes: ["S", "M", "L", "XL"],
        colors: ["red", "blue", "black"]
    },
    {
        id: "3",
        name: "Black Striped T-shirt",
        price: 120,
        originalPrice: 160,
        discount: 25,
        rating: 4.7,
        reviews: 670,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIRjwMZ7y0T8R2jBXiv17yxhwCPqZn5SkVDQJ9",
        category: "T-shirts",
        sizes: ["S", "M", "L"],
        colors: ["black", "white"]
    },
    {
        id: "4",
        name: "Skinny Fit Jeans",
        price: 240,
        originalPrice: 260,
        discount: 8,
        rating: 4.3,
        reviews: 320,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgItTz9ZGxl9L1HbnKjB6ypYqOhfue7XC80sFNt",
        category: "Jeans",
        sizes: ["28", "30", "32", "34"],
        colors: ["blue", "black"]
    },
    {
        id: "5",
        name: "Checkered Shirt",
        price: 180,
        rating: 4.4,
        reviews: 450,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIZwNM8nHE1c8K7F0XoWrj53ApnieCVYOuywaG",
        category: "Shirts",
        sizes: ["S", "M", "L", "XL"],
        colors: ["red", "blue"]
    },
    {
        id: "6",
        name: "Sleeve Striped T-shirt",
        price: 130,
        originalPrice: 160,
        discount: 20,
        rating: 2,
        reviews: 430,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIOzmM8CISuMYaP2U4QpbgzycI5BV01EWRhOom",
        category: "T-shirts",
        sizes: ["S", "M", "L", "XL"],
        colors: ["orange", "black"]
    },
    {
        id: "7",
        name: "Vertical Striped Shirt",
        price: 212,
        originalPrice: 232,
        discount: 9,
        rating: 4.8,
        reviews: 405,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgITQwat2OazNlS5LO8ER4HZorndyDbkphXiB9j",
        category: "Shirts",
        sizes: ["M", "L", "XL"],
        colors: ["green", "blue"]
    },
    {
        id: "8",
        name: "Courage Graphic T-shirt",
        price: 145,
        rating: 4.1,
        reviews: 405,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIG7Jo0bh4mEYxWUwljXoyI9bFHfkhu6ip3svL",
        category: "T-shirts",
        sizes: ["S", "M", "L"],
        colors: ["orange"]
    },
    {
        id: "9",
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        rating: 4.3,
        reviews: 405,
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIHvZ6rntrB9kYTUenOJybaWXtSd3fIlPR4uNw",
        category: "Shorts",
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "black"]
    }
];

export const categories = [
    {
        id: "casual",
        name: "Casual",
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIoDwaJISuM7Xs1z8ZpaDEdBxPWcv2b5l9U4YF",
        products: products.map(product => ({
            ...product,
            category: "Casual"
        }))
    },
    {
        id: "formals",
        name: "Formal",
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgI9ZXyjmJwUh53kIQmYrCXavt0un8wcWTzj2OA",
        products: products.map(product => ({
            ...product,
            category: "Formals"
        }))
    },
    {
        id: "party",
        name: "Party",
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgIRjwMZ7y0T8R2jBXiv17yxhwCPqZn5SkVDQJ9",
        products: products.map(product => ({
            ...product,
            category: "Party"
        }))
    },
    {
        id: "gym",
        name: "Gym",
        image: "https://h2hns00dkl.ufs.sh/f/4wVOI3jGHNgItTz9ZGxl9L1HbnKjB6ypYqOhfue7XC80sFNt",
        products: products.map(product => ({
            ...product,
            category: "Gym"
        }))
    }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.products : [];
};

// Helper function to get all categories
export const getAllCategories = () => categories;

// Helper function to get a specific category
export const getCategory = (categoryId) => {
    return categories.find(cat => cat.id === categoryId);
};