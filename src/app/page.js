import { Plus } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import NweArrivals from "./_components/NweArrivals";
import TopSection from "./_components/TopSection";
import DressStyle from "./_components/DressStyle";
import CustomerSection from "./_components/CustomerSection";


export default function Home() {

  const brands = [
    { name: 'Versace', src: '/Group.png' },
    { name: 'Zara', src: '/zara-logo-1 1.png' },
    { name: 'Gucci', src: '/gucci-logo-1 1.png' },
    { name: 'Prada', src: '/prada-logo-1 1.png' },
    { name: 'Calvin Klein', src: '/Calvin.png' }
  ];

  const itemData = {
    "products": [
      {
        "id": "ts-001",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item1.png"
        }
      },
      {
        "id": "ts-002",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item2.png"
        }
      },
      {
        "id": "ts-003",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item3.png"
        }
      },
      {
        "id": "ts-004",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item4.png"
        }
      }, {
        "id": "ts-005",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item4.png"
        }
      }, {
        "id": "ts-006",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/item4.png"
        }
      }
    ]
  };

  const topSectionData = {
    "products": [
      {
        "id": "ts-001",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top1.png"
        }
      },
      {
        "id": "ts-002",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top2.png"
        }
      },
      {
        "id": "ts-003",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top3.png"
        }
      },
      {
        "id": "ts-004",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top4.png"
        }
      }, {
        "id": "ts-005",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top1.png"
        }
      }, {
        "id": "ts-006",
        "title": "T-shirt with Tape Details",
        "price": 120,
        "rating": {
          "stars": 4.5,
          "totalReviews": 24
        },
        "images": {
          "primary": "/top2.png"
        }
      }
    ]
  }

  const DummyData = [
    {
      "name": "Sarah M.",
      "review": "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      "rating": 2,
      "verified": true
    },
    {
      "name": "Alex K.",
      "review": "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      "rating": 4,
      "verified": true
    },
    {
      "name": "James L.",
      "review": "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      "rating": 5,
      "verified": true
    },
    {
      "name": "Emily R.",
      "review": "Shop.co has completely transformed my shopping experience! Their curated collections are trendy, affordable, and perfect for every season. Highly recommended!",
      "rating": 1,
      "verified": true
    },
    {
      "name": "Chris T.",
      "review": "I appreciate the excellent customer service from Shop.co. The clothes are high-quality, and delivery was super fast. It’s now my go-to online store!",
      "rating": 2,
      "verified": true
    },
    {
      "name": "Laura P.",
      "review": "I was amazed by the range of sizes available at Shop.co. As someone who struggles to find the right fit, this store has been a game-changer for me. Love it!",
      "rating": 5,
      "verified": true
    }
  ]
  return (
    <main className="w-full bg-white">
      <div className="w-full sm:max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Container for flex column on mobile, position relative on desktop */}
        <div className="flex flex-col sm:block relative min-h-fit sm:h-[500px] w-full">
          {/* Content Section */}
          <div className="order-1 sm:absolute sm:z-10 flex flex-col justify-center h-full w-full sm:w-[550px] p-4 sm:p-10 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="text-sm sm:text-xs text-slate-950 max-w-md">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>

            <button className="inline-flex items-center justify-center bg-slate-950 text-white px-6 py-3 rounded-3xl hover:bg-slate-800 transition-colors w-full sm:w-fit">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="order-2 sm:absolute sm:inset-0 h-[300px] sm:h-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/heroSection1.png"

                alt="hero section"
                priority
                fill
                // className="sm:object-cover "
                // how to make this imaage to center position

                objectFit="cover"
                objectPosition="right"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-3">
            {brands.map((brand) => (
              <div key={brand.name} className="h-8 relative">
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  width={100}
                  height={32}
                  className="brightness-0 invert object-contain h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <NweArrivals itemData={itemData} />
      <div className="h-4"></div>
      <Separator />
      <div className="h-4"></div>

      <TopSection itemData={topSectionData} />

      <div className="h-4"></div>

      <DressStyle />

      <div className="h-4"></div>

      <CustomerSection itemData={DummyData} />


    </main>
  );
}
