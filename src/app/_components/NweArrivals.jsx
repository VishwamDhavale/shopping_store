"use client";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Star } from 'lucide-react';

const ItemDetails = ({ product }) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            {/* Image container */}
            <div className='relative aspect-square w-full'>
                <Image
                    src={product.images.primary}
                    alt={product.title}
                    fill
                    className='object-cover rounded-md'
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            {/* Product details */}
            <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-lg'>{product.title}</h3>

                {/* Stars rating */}
                <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            className={`w-4 h-4 ${index < product.rating.stars
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'}`}
                        />
                    ))}
                    <span className='text-sm text-gray-600 ml-2'>
                        ({product.rating.stars})
                    </span>
                </div>

                {/* Price */}
                <div className='text-lg font-bold'>
                    ${product.price}
                </div>
            </div>
        </div>
    )
}

const NewArrivals = ({ itemData }) => {
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);



    React.useEffect(() => {
        if (!api) {
            return;
        }

        setApi(itemData.length);

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className='w-full max-w-screen-2xl mx-auto px-4 py-12'>
            <div className='mb-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight text-center'>
                    NEW ARRIVALS
                </h1>
            </div>

            <div className='relative'>
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        align: "start",

                    }}
                >
                    <CarouselContent>
                        {itemData.products.map((product, index) => (
                            <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <Card>
                                    <CardContent className="p-4">
                                        <ItemDetails product={product} />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div>
            </div>
        </div>
    )
}

export default NewArrivals;