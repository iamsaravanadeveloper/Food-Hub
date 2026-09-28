import React from "react";


export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}

            <section className="bg-[#FF6B35] text-white py-16 px-6 text-center">

                <h1 className="text-4xl md:text-5xl font-bold">
                    About FoodHub
                </h1>

                <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                    Your trusted destination for delicious food,
                    quality restaurants, and convenient food delivery.
                </p>

            </section>


            {/* About Content */}

            <section className="max-w-6xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
                            alt="Food"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                        />

                    </div>


                    {/* Text */}

                    <div>

                        <h2 className="text-3xl font-bold text-[#2B1B12]">
                            Who We Are
                        </h2>

                        <p className="text-gray-600 mt-5 leading-7">
                            FoodHub is a modern food delivery platform
                            designed to connect customers with their
                            favorite restaurants and delicious meals.
                        </p>

                        <p className="text-gray-600 mt-4 leading-7">
                            Our platform makes it simple to discover
                            different foods, explore restaurants, and
                            order meals from the comfort of your home.
                        </p>

                        <p className="text-gray-600 mt-4 leading-7">
                            We focus on providing a simple, fast, and
                            user-friendly experience for every customer.
                        </p>

                    </div>

                </div>

            </section>


            {/* Mission Section */}

            <section className="bg-white py-14 px-6">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-[#2B1B12]">
                        Our Mission
                    </h2>

                    <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
                        Our mission is to make food ordering simple and
                        accessible while helping customers discover
                        restaurants and meals they love.
                    </p>


                    {/* Features */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                        <div className="p-7 rounded-xl bg-gray-50 shadow-sm">

                            <h3 className="text-xl font-bold text-[#2B1B12]">
                                Quality Food
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Discover a wide variety of delicious
                                meals from different cuisines.
                            </p>

                        </div>


                        <div className="p-7 rounded-xl bg-gray-50 shadow-sm">

                            <h3 className="text-xl font-bold text-[#2B1B12]">
                                Easy Ordering
                            </h3>

                            <p className="text-gray-500 mt-3">
                                Browse food, add your favorites to the
                                cart, and place your order easily.
                            </p>

                        </div>


                        <div className="p-7 rounded-xl bg-gray-50 shadow-sm">

                            <h3 className="text-xl font-bold text-[#2B1B12]">
                                Customer Experience
                            </h3>

                            <p className="text-gray-500 mt-3">
                                We aim to provide a smooth and enjoyable
                                experience for every customer.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Why FoodHub */}

            <section className="max-w-6xl mx-auto px-6 py-14">

                <div className="text-center">

                    <h2 className="text-3xl font-bold text-[#2B1B12]">
                        Why Choose FoodHub?
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Everything you need for a simple food ordering
                        experience.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                    <div className="bg-white p-6 rounded-xl shadow-md text-center">

                        <h3 className="font-bold text-lg">
                            Wide Selection
                        </h3>

                        <p className="text-gray-500 mt-2 text-sm">
                            Explore different restaurants and cuisines.
                        </p>

                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-md text-center">

                        <h3 className="font-bold text-lg">
                            Simple Interface
                        </h3>

                        <p className="text-gray-500 mt-2 text-sm">
                            Easy navigation makes ordering convenient.
                        </p>

                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-md text-center">

                        <h3 className="font-bold text-lg">
                            Secure Cart
                        </h3>

                        <p className="text-gray-500 mt-2 text-sm">
                            Manage your selected food items easily.
                        </p>

                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-md text-center">

                        <h3 className="font-bold text-lg">
                            Fast Service
                        </h3>

                        <p className="text-gray-500 mt-2 text-sm">
                            A convenient platform for ordering your meals.
                        </p>

                    </div>

                </div>

            </section>


            {/* Footer */}

            <footer className="bg-[#2B1B12] text-white text-center py-8">

                <h2 className="text-2xl font-bold">
                    FoodHub
                </h2>

                <p className="text-gray-500 text-sm mt-4">
                    2026 FoodHub. All rights reserved.
                </p>

            </footer>

        </div>
    );
}