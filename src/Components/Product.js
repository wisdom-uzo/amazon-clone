import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';

const Max_RATING = 5
const MIN_RATING = 1

const Product = ({id, title, price, description, category, image}) => {
    const [rating] = useState(
        Math.floor(Math.random() * (Max_RATING - MIN_RATING)) + MIN_RATING)
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className="flex flex-col relative m-5 p-10 z-20 bg-white">
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image
               src={image}
               height={200}
               width={200}
               objectFit='contain' />

            <h4 className='my-3'>{title}</h4>

            <div className="flex">
               { Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500'/>
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency
                    quantity={45685}          // Required
                    currency="USD"            // Optional (USD by default)
                />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img src='https://links.papareact.com/fdw' alt="" className="w-12" />
                    <p className="text-xs text-gray-500">FREE NEXT_DAY DELIVERY</p>
                </div>
            )}
              <button className="mt-auto button">Add To Cart</button>
        </div>
    )
}

export default Product
