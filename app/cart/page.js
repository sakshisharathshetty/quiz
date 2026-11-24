"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {

    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-6">
                My Shopping Cart
            </h1>

            <Link
                href="/"
                className="text-blue-600 underline"
            >
                Continue Shopping
            </Link>

            <h2 className="text-xl font-semibold mt-6 mb-4">
                Total Items: {cartItems.length}
            </h2>

            {cartItems.length === 0 ? (

                <p className="text-gray-500">
                    Your cart is empty. Start shopping!
                </p>

            ) : (

                <div className="space-y-4">

                    {cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="border rounded-lg p-4 flex items-center justify-between"
                        >

                            <div className="flex items-center gap-4">

                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain"
                                />

                                <div>

                                    <h3 className="font-semibold">
                                        {item.title}
                                    </h3>

                                    <p>
                                        Price: ${item.price}
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

            )}

            <div className="mt-8 border-t pt-4">

                <h2 className="text-2xl font-bold">
                    Total Price: ${totalPrice.toFixed(2)}
                </h2>

            </div>

        </div>

    );

}