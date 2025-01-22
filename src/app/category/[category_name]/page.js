import React from 'react'
import { getProductsByCategory, getAllCategories, getCategory } from '@/data/data';


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ProductsPage from './_components/FilterPage';


const page = async (props) => {

    const parms = await props.params
    // console.log("props", props)

    console.log("parms", parms.category_name)

    // Get all products for Casual category
    const casualProducts = getProductsByCategory(await parms.category_name);
    console.log("casualProducts", casualProducts)

    // // Get all categories
    // const categories = getAllCategories();
    // console.log("categories", categories)

    // // Get specific category
    // const formalCategory = getCategory('formal');
    // console.log("formalCategory", formalCategory)

    // console.log("products", products)
    return (
        <div className="container mx-auto ">

            <div className="my-4 sm:my-8  px-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">{await parms.category_name}</BreadcrumbLink>
                        </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <ProductsPage products={casualProducts} category={parms.category_name} />

        </div>
    )
}

export default page
