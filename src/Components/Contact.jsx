import React, { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Thank you! Your message has been sent.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Header */}

            <div className="bg-[#FF6B35] text-white py-14 px-6 text-center">

                <h1 className="text-4xl md:text-5xl font-bold">
                    Contact Us
                </h1>

                <p className="mt-3 text-orange-100 text-lg">
                    We'd love to hear from you!
                </p>

            </div>


            {/* Main Content */}

            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


                    {/* Contact Information */}

                    <div className="bg-white rounded-2xl shadow-md p-8">

                        <h2 className="text-3xl font-bold text-[#2B1B12]">
                            Get In Touch
                        </h2>

                        <p className="text-gray-500 mt-3 leading-7">
                            Have a question about your order, restaurant,
                            delivery, or anything else? Our team is here
                            to help you.
                        </p>


                        {/* Email */}

                        <div className="flex items-center gap-4 mt-8">
                            <div>
                                <h3 className="font-bold text-lg">
                                    Email
                                </h3>

                                <p className="text-gray-500">
                                    support@foodhub.com
                                </p>
                            </div>

                        </div>


                        {/* Phone */}

                        <div className="flex items-center gap-4 mt-6">


                            <div>
                                <h3 className="font-bold text-lg">
                                    Phone
                                </h3>

                                <p className="text-gray-500">
                                    +91 98765 43210
                                </p>
                            </div>

                        </div>


                        {/* Location */}

                        <div className="flex items-center gap-4 mt-6">

                            

                            <div>
                                <h3 className="font-bold text-lg">
                                    Address
                                </h3>

                                <p className="text-gray-500">
                                    Madurai, Tamil Nadu, India
                                </p>
                            </div>

                        </div>


                        {/* Working Hours */}

                        <div className="flex items-center gap-4 mt-6">

                            

                            <div>
                                <h3 className="font-bold text-lg">
                                    Working Hours
                                </h3>

                                <p className="text-gray-500">
                                    Mon - Sun : 9:00 AM - 10:00 PM
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}

                    <div className="bg-white rounded-2xl shadow-md p-8">

                        <h2 className="text-3xl font-bold text-[#2B1B12]">
                            Send Us a Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >

                            {/* Name */}

                            <div>

                                <label className="block font-semibold mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]"
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block font-semibold mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]"
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block font-semibold mb-2">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]"
                                />

                            </div>


                            {/* Message */}

                            <div>

                                <label className="block font-semibold mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]"
                                />

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#FF6B35] text-white rounded-lg font-bold text-lg hover:bg-[#E85D2A] transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* Bottom Section */}

            <div className="bg-[#2B1B12] text-white text-center py-8">

                <h2 className="text-2xl font-bold">
                    Food-Hub
                </h2>

                <p className="text-gray-400 mt-2">
                    Delicious food delivered to your doorstep.
                </p>

            </div>

        </div>
    );
}