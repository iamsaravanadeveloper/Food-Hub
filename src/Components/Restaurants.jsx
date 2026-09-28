import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRestaurants } from "./Redux/restaurantSlice";
import Navbar from "./Header/Navbar";
import { useNavigate } from "react-router-dom";

export default function Restaurants() {

    const Navigate =useNavigate()

    const dispatch = useDispatch();

    const {
        restaurants,
        loading,
        error
    } = useSelector((state) => state.restaurants);
    const limitedRestaurants = restaurants.slice(0, 100);

    // Current page
    const [currentPage, setCurrentPage] = useState(1);

    // Restaurants per page
    const restaurantsPerPage = 12;


    // API call
    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);


    // Total restaurants
    const totalRestaurants = limitedRestaurants.length;


    // Total pages
    const totalPages = Math.ceil(
        totalRestaurants / restaurantsPerPage
    );


    // Starting index
    const startingIndex =
        (currentPage - 1) * restaurantsPerPage;


    // Ending index
    const endingIndex =
        startingIndex + restaurantsPerPage;


    // Current page restaurants
    const currentRestaurants =
        limitedRestaurants.slice(startingIndex, endingIndex);


    // Previous
    const handlePrevious = () => {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

    };


    // Next
    const handleNext = () => {

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }

    };


    // Page number
    const goToPage = (page) => {
        setCurrentPage(page);
    };


    if (loading) {
        return (
            <div className="px-6">
            <div className="w-[100%] flex justify-center items-center flex-col h-[100vh]">

                <div className="loader">

                </div>
                <h1 className="text-center text-2xl mt-10">LOADING</h1>
            </div>
            </div>

        );
    }


    if (error) {
        return (
            <h1 className="text-center text-red-500 mt-10">
                {error}
            </h1>
        );
    }


    return (

        <div className="px-6">
            {/* Heading */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Restaurants
                </h1>

                <p className="text-gray-500">
                    Total: {totalRestaurants}
                </p>

            </div>


            {/* Restaurant Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {currentRestaurants.map((restaurant, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >

                        {/* Image */}

                        <img
                            src={`https://images.unsplash.com/photo-${[
                                "1517248135467-4c7edcad34c4",
                                "1552566626-52f8b828add9",
                                "1515003197210-e0cd71810b5f",
                                "1414235077428-338989a2e8c0",
                                "1555396273-367ea4eb4db5"
                            ][index % 5]}?auto=format&fit=crop&w=800&q=80`}
                            alt={restaurant.name}
                            className="w-full h-48 object-cover"
                        />


                        {/* Details */}

                        <div className="p-4">

                            <h2 className="text-xl font-bold">
                                {restaurant.name}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {restaurant.city}
                            </p>

                            <p className="text-sm text-gray-400 mt-1">
                                {restaurant.address}
                            </p>

                            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                            
                            onClick={()=>Navigate("/food")}>
                                View Menu
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* Pagination */}

            <div className="flex justify-center items-center gap-2 mt-10">

                {/* Previous */}

                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                >
                    Previous
                </button>


                {/* Page Numbers */}

                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (

                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold ${currentPage === page
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {page}
                    </button>

                ))}


                {/* Next */}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                >
                    Next
                </button>

            </div>


            {/* Page information */}

            <p className="text-center text-gray-500 mt-4">

                Page {currentPage} of {totalPages}

            </p>

        </div>
    );
}