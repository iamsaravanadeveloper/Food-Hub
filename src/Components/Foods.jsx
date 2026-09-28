import React from 'react'
import useCustomApi from './CustomApi/useCustomApi'
import Navbar from './Header/Navbar'
import { useCart } from './CartContext'

export default function Foods() {

    const url = "https://dummyjson.com/recipes"

    const {
        data: foods1,
        loading,
        error
    } = useCustomApi(url)

    const { addToCart } = useCart()


    return (
        <div>

            {loading ? (

                <div className="px-6">


                    <div className="w-full flex justify-center items-center flex-col h-[100vh]">

                        <div className="loader"></div>

                        <h1 className="text-center text-2xl mt-10">
                            LOADING
                        </h1>

                    </div>

                </div>

            ) : error ? (

                <div className="px-6">

                  

                    <h1>{error}</h1>

                </div>

            ) : (

                <div className="px-6">

                    <h1 className="ml-5 font-bold text-2xl">
                        Recipes
                    </h1>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                        {foods1.recipes?.map((food) => (

                            <div
                                key={food.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                            >

                                {/* Image */}

                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-52 object-cover"
                                />


                                <div className="p-4">

                                    {/* Name */}

                                    <h2 className="text-xl font-bold">
                                        {food.name}
                                    </h2>


                                    {/* Cuisine */}

                                    <p className="text-gray-500 mt-2">
                                      {food.cuisine}
                                    </p>


                                    {/* Rating */}

                                    <p className="text-yellow-500 mt-2">
                                        {food.rating}
                                    </p>


                                    {/* Time */}

                                    <p className="text-gray-500 mt-1">
                                       {food.cookTimeMinutes} mins
                                    </p>


                                    {/* Price */}

                                    <p className="text-green-600 text-xl font-bold mt-3">
                                        ₹199
                                    </p>


                                    {/* Add Cart */}

                                    <button
                                        onClick={() => addToCart(food)}
                                        className="w-full mt-4 bg-[#FF6B35] text-white py-2 rounded-lg font-semibold hover:bg-[#E85D2A] transition"
                                    >
                                        Add to Cart
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>
    )
}