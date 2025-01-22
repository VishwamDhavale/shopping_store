
"use client"
// filters.ts
export const filterProducts = (products, filters) => {
    return products.filter(product => {
        // Price Range Filter
        if (filters.priceRange) {
            const { min, max } = filters.priceRange;
            if (product.price < min || product.price > max) return false;
        }

        // Colors Filter
        if (filters.colors && filters.colors.length > 0) {
            if (!product.colors.some(color => filters.colors?.includes(color))) return false;
        }

        // Sizes Filter
        if (filters.sizes && filters.sizes.length > 0) {
            if (!product.sizes.some(size => filters.sizes?.includes(size))) return false;
        }

        // Categories Filter
        if (filters.categories && filters.categories.length > 0) {
            if (!filters.categories.includes(product.category)) return false;
        }

        // Dress Style Filter
        if (filters.dressStyle && product.category !== filters.dressStyle) return false;

        return true;
    });
};

// Constants for filters
export const FILTER_CONSTANTS = {
    COLORS: ['red', 'yellow', 'orange', 'blue', 'purple', 'pink', 'black', 'cyan'],
    SIZES: ['XS Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'],
    CATEGORIES: ['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'],
    DRESS_STYLES: ['Casual', 'Formal', 'Party', 'Gym'],
    PRICE_RANGE: {
        MIN: 0,
        MAX: 1000
    }
};

// Custom hooks for filtering (hooks/useProductFilters.ts)
import { useState, useCallback } from 'react';

export const useProductFilters = (initialProducts) => {
    const [filters, setFilters] = useState({
        priceRange: { min: 0, max: 1000 },
        colors: [],
        sizes: [],
        categories: [],
    });

    const [filteredProducts, setFilteredProducts] = useState(initialProducts);

    const updateFilters = useCallback((newFilters) => {
        setFilters(prev => {
            const updatedFilters = { ...prev, ...newFilters };
            const newFilteredProducts = filterProducts(initialProducts, updatedFilters);
            setFilteredProducts(newFilteredProducts);
            return updatedFilters;
        });
    }, [initialProducts]);

    const resetFilters = useCallback(() => {
        setFilters({
            priceRange: { min: 0, max: 1000 },
            colors: [],
            sizes: [],
            categories: [],
        });
        setFilteredProducts(initialProducts);
    }, [initialProducts]);

    return {
        filters,
        filteredProducts,
        updateFilters,
        resetFilters
    };
};