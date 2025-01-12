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
import { Car, CheckCircle, Star } from 'lucide-react';





const CustomerSection = ({ itemData }) => {

    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);



    React.useEffect(() => {
        if (!api) {
            return;
        }
        // console.log("itemData", itemData.length);

        // setApi(itemData.length);

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);


    return (
        <div className="w-full px-4 sm:max-w-screen-2xl sm:px-6 py-4 sm:py-4">
            <Carousel
                setApi={setApi}
                className="w-full relative" // Added relative positioning
                opts={{
                    align: "start",
                }}
            >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                    <h1 className="text-3xl font-extrabold text-black leading-tight text-center">
                        Our Happy Customers
                    </h1>
                    <div className="flex items-center justify-center gap-2 shrink-0">
                        <CarouselPrevious className="static translate-y-0" /> {/* Made static */}
                        <div className="py-2 text-center text-sm text-muted-foreground">
                            Slide {current} of {count}
                        </div>
                        <CarouselNext className="static translate-y-0" /> {/* Made static */}
                    </div>
                </div>

                <CarouselContent>
                    {itemData.map((item, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card>
                                <CardContent className="p-4">
                                    <ItemDetails review={item} />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

const ItemDetails = ({ review }) => {
    return (
        <div className="p-4 border rounded-lg shadow-sm flex flex-col gap-4 w-72">

            <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                        key={index}
                        size={20}
                        className={index < review.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                ))}
            </div>


            <p className="text-sm text-gray-600 leading-relaxed">
                {review.review}
            </p>


            <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-gray-800">{review.name}</p>
                {review.verified && (
                    <span className="text-green-500">
                        <CheckCircle size={16} />
                    </span>
                )}
            </div>
        </div>
    );
};


export default CustomerSection
