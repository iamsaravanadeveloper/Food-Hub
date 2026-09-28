import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CartImg from '../../assets/cart.png'
import BlackCartImg from '../../assets/shoppingBlack.png'
import SearchImg from '../../assets/search.png'
import CloseImg from '../../assets/close.png'
import { useCart } from '../CartContext'

export default function Navbar() {

    const [isCart, setIsCart] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalAmount
    } = useCart()
    return (
        <div>

            {/* ================= NAVBAR ================= */}
            <nav className="bg-[#FF6B35] px-5 md:px-8 py-4">

                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* ================= LOGO ================= */}
                    <div>
                        <Link to="/">
                            <h1 className="font-bold text-2xl md:text-3xl text-white">
                                Food-Hub
                            </h1>
                        </Link>
                    </div>


                    {/* ================= DESKTOP MENU ================= */}
                    <div className="hidden lg:flex gap-6 text-white font-medium">

                        <Link
                            to="/"
                            className="hover:text-[#2B1B12] transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/restaurants"
                            className="hover:text-[#2B1B12] transition"
                        >
                            Restaurants
                        </Link>

                        <Link
                            to="/foods"
                            className="hover:text-[#2B1B12] transition"
                        >
                            Foods
                        </Link>

                        <Link
                            to="/contact"
                            className="hover:text-[#2B1B12] transition"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/about"
                            className="hover:text-[#2B1B12] transition"
                        >
                            About
                        </Link>

                    </div>


                    {/* ================= SEARCH + CART ================= */}
                    <div className="hidden md:flex items-center gap-2">

                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search Restaurants and Foods"
                            className="
                                w-48 lg:w-72
                                px-3 py-2
                                rounded-md
                                bg-white
                                text-gray-800
                                placeholder-gray-400
                                outline-none
                                border-2 border-white
                                focus:border-[#2B1B12]
                            "
                        />

                        {/* Search Button */}
                        <button
                            className="
                                w-10 h-10
                                flex items-center justify-center
                                rounded-md
                                bg-white
                                hover:bg-[#FFF1E8]
                                transition
                            "
                        >
                            <img
                                src={SearchImg}
                                alt="Search"
                                className="w-5 h-5"
                            />
                        </button>


                        {/* Cart Button */}
                        <button
                            onClick={() => setIsCart(true)}
                            className="
                                p-2
                                rounded-md
                                hover:bg-[#E85D2A]
                                transition
                                flex
                            "
                        >
                            <img
                                src={CartImg}
                                alt="Cart"
                                className="w-7 h-7"
                            />
                            {cart.length ? <p className='text-white bg-black rounded-[100%]
                             h-[20px] w-[20px]  text-[10px] relative bottom-2 right-4
                             flex justify-center items-center'>
                                {cart.length}
                            </p> :""}

                        </button>

                    </div>


                    {/* ================= MOBILE BUTTONS ================= */}
                    <div className="flex items-center gap-2 md:hidden">

                        {/* Mobile Cart */}
                        <button
                            onClick={() => setIsCart(true)}
                            className="p-2"
                        >
                            <img
                                src={CartImg}
                                alt="Cart"
                                className="w-7 h-7"
                            />
                        </button>


                        {/* Mobile Menu */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white text-2xl px-2"
                        >
                            {menuOpen ? "✕" : "☰"}
                        </button>

                    </div>

                </div>


                {/* ================= MOBILE MENU ================= */}
                {menuOpen && (

                    <div className="lg:hidden mt-4">

                        {/* Mobile Search */}
                        <div className="flex gap-2 mb-4">

                            <input
                                type="text"
                                placeholder="Search Restaurants and Foods"
                                className="
                                    flex-1
                                    px-3 py-2
                                    rounded-md
                                    bg-white
                                    text-gray-800
                                    placeholder-gray-400
                                    outline-none
                                "
                            />

                            <button
                                className="
                                    w-10 h-10
                                    flex items-center justify-center
                                    rounded-md
                                    bg-white
                                "
                            >
                                <img
                                    src={SearchImg}
                                    alt="Search"
                                    className="w-5 h-5"
                                />
                            </button>

                        </div>


                        {/* Mobile Links */}
                        <div
                            className="
                                flex flex-col gap-3
                                text-white
                                font-medium
                                border-t border-orange-300
                                pt-4
                            "
                        >

                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-[#2B1B12]"
                            >
                                Home
                            </Link>

                            <Link
                                to="/restaurants"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-[#2B1B12]"
                            >
                                Restaurants
                            </Link>

                            <Link
                                to="/foods"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-[#2B1B12]"
                            >
                                Foods
                            </Link>

                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-[#2B1B12]"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-[#2B1B12]"
                            >
                                About
                            </Link>

                        </div>

                    </div>

                )}

            </nav>


            {/* ================= OVERLAY ================= */}
            <div
                onClick={() => setIsCart(false)}
                className={`
                    fixed inset-0 z-40
                    bg-black/40
                    transition-opacity duration-500
                    ${isCart
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />


            {/* ================= SHOPPING CART ================= */}
            <div
                className={`
                    fixed
                    top-0
                    right-0
                    z-50
                    h-screen
                    w-full
                    sm:w-[450px]
                    md:w-[500px]
                    bg-white
                    shadow-2xl
                    transition-transform
                    duration-500
                    ease-in-out
                    ${isCart
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* ================= CART HEADER ================= */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        border-b
                        border-gray-200
                    "
                >

                    {/* Cart Title */}
                    <div className="flex items-center gap-3">

                        <img
                            src={BlackCartImg}
                            alt="Shopping Cart"
                            className="w-7 h-7"
                        />

                        <h1 className="
                            text-xl
                            font-bold
                            text-[#2B1B12]
                        ">
                            Shopping Cart
                        </h1>

                    </div>


                    {/* Close Button */}
                    <button
                        onClick={() => setIsCart(false)}
                        className="
                            w-9 h-9
                            flex
                            items-center
                            justify-center
                            rounded-full
                            hover:bg-gray-200
                            transition
                        "
                    >
                        <img
                            src={CloseImg}
                            alt="Close"
                            className="w-5 h-5"
                        />
                    </button>

                </div>


                {/* ================= CART CONTENT ================= */}
                {/* ================= CART CONTENT ================= */}

                <div className="h-[calc(100vh-73px)] flex flex-col">

                    {cart.length === 0 ? (

                        /* EMPTY CART */

                        <div className="flex flex-col items-center justify-center flex-1 px-5">

                            <img
                                src={BlackCartImg}
                                alt="Empty Cart"
                                className="w-16 h-16 opacity-40"
                            />

                            <h2 className="text-xl font-semibold text-gray-700 mt-4">
                                Your cart is empty
                            </h2>

                            <p className="text-gray-400 mt-2 text-center">
                                Add some delicious food to your cart
                            </p>

                            <Link
                                to="/foods"
                                onClick={() => setIsCart(false)}
                                className="mt-6 px-6 py-3 rounded-md bg-[#FF6B35] text-white font-medium hover:bg-[#E85D2A]"
                            >
                                Continue Shopping
                            </Link>

                        </div>

                    ) : (

                        /* CART ITEMS */

                        <>

                            <div className="flex-1 overflow-y-auto p-5">

                                {cart.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex gap-4 border-b border-gray-200 py-4"
                                    >

                                        {/* Food Image */}

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 rounded-lg object-cover"
                                        />


                                        {/* Food Details */}

                                        <div className="flex-1">

                                            <h2 className="font-bold text-gray-800">
                                                {item.name}
                                            </h2>

                                            <p className="text-gray-500 text-sm mt-1">
                                                {item.cuisine}
                                            </p>

                                            <p className="text-green-600 font-bold mt-1">
                                                ₹{item.price}
                                            </p>


                                            {/* Quantity */}

                                            <div className="flex items-center gap-3 mt-3">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                                                >
                                                    -
                                                </button>

                                                <span className="font-semibold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="w-8 h-8 rounded-full bg-[#FF6B35] text-white font-bold"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>


                                        {/* Delete */}

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            ✕
                                        </button>

                                    </div>

                                ))}

                            </div>


                            {/* CART TOTAL */}

                            <div className="border-t border-gray-200 p-5 bg-white">

                                <div className="flex justify-between text-lg font-bold mb-4">

                                    <span>
                                        Total
                                    </span>

                                    <span className="text-green-600">
                                        ₹{totalAmount}
                                    </span>

                                </div>


                                <button
                                    className="w-full py-3 bg-[#FF6B35] text-white rounded-lg font-bold hover:bg-[#E85D2A]"
                                >
                                    Proceed to Checkout
                                </button>

                            </div>

                        </>

                    )}

                </div>

            </div>

        </div>
    )
}