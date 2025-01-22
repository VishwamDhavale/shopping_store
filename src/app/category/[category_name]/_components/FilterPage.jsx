// app/products/page.tsx
'use client';

import { useState } from 'react';
import { useProductFilters } from '@/lib/FilterOptions';
import { FILTER_CONSTANTS } from '@/lib/FilterOptions';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';


export default function ProductsPage({ products, category }) {
    const {
        filters,
        filteredProducts,
        updateFilters,
        resetFilters
    } = useProductFilters(products);

    const handlePriceChange = (value) => {
        updateFilters({
            priceRange: { min: value[0], max: value[1] }
        });
    };

    const handleColorSelect = (color) => {
        updateFilters({
            colors: filters.colors?.includes(color)
                ? filters.colors.filter(c => c !== color)
                : [...(filters.colors || []), color]
        });
    };

    const handleSizeSelect = (size) => {
        updateFilters({
            sizes: filters.sizes?.includes(size)
                ? filters.sizes.filter(s => s !== size)
                : [...(filters.sizes || []), size]
        });
    };

    return (
        <div className="flex">
            {/* Filters Sidebar */}
            <div className="w-64 p-4 hidden sm:block">
                {/* Price Range Slider */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Price</h3>
                    <input
                        type="range"
                        min={FILTER_CONSTANTS.PRICE_RANGE.MIN}
                        max={FILTER_CONSTANTS.PRICE_RANGE.MAX}
                        value={filters.priceRange?.max}
                        onChange={(e) => handlePriceChange([filters.priceRange?.min || 0, Number(e.target.value)])}
                        className="w-full"
                    />
                    <div className="flex justify-between">
                        <span>${filters.priceRange?.min}</span>
                        <span>${filters.priceRange?.max}</span>
                    </div>
                </div>

                {/* Color Filters */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                        {FILTER_CONSTANTS.COLORS.map((color) => (
                            <button
                                key={color}
                                onClick={() => handleColorSelect(color)}
                                className={`w-6 h-6 rounded-full ${filters.colors?.includes(color) ? 'ring-2 ring-offset-2' : ''
                                    }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>

                {/* Size Filters */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {FILTER_CONSTANTS.SIZES.map((size) => (
                            <button
                                key={size}
                                onClick={() => handleSizeSelect(size)}
                                className={`px-3 py-1 border rounded ${filters.sizes?.includes(size)
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Apply Filter Button */}
                <button
                    onClick={resetFilters}
                    className="w-full bg-black text-white py-2 rounded"
                >
                    Reset Filters
                </button>
            </div>

            {/* Products Grid */}
            <div className="flex-1 p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="font-bold text-3xl sm:text-4xl mb-4">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h2>
                    <div className="text-gray-500 flex text-sm items-center">
                        Showing 1-10 of 100 Products
                        <span className='hidden sm:ml-4 sm:flex sm:text-black sm:font-semibold sm:cursor-pointer'>
                            Sort by: Most Popular <ChevronDown className='font-black' />
                        </span>
                        <SlidersHorizontal className='ml-4 sm:hidden' />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <div key={product.id} className='space-y-2'>

                                <>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={150}
                                        height={150}
                                        className='object-cover w-full'
                                    />
                                    <div>{product.name}</div>
                                    <div>{product.description}</div>
                                    <div className="star-rating" style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", color: "#FFC633" }}>{renderStars(product.rating)}</div>
                                        <span style={{ marginLeft: "8px", fontSize: "14px", color: "#666" }}>
                                            {product.rating}/5
                                        </span>
                                    </div>
                                    <span>${product.price}</span>
                                </>


                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}


const renderStars = (rating, maxStars = 5) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<span key={i} className="star solid">&#9733;</span>); // Solid star
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<span key={i} className="star half">&#9733;</span>); // Half star
        } else {
            stars.push(<span key={i} className="star empty">&#9734;</span>); // Empty star
        }
    }
    return stars;
};