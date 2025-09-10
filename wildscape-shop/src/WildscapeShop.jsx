import { useState } from "react";

const photos = [
  { id: 1, title: "Majestic Lion", src: "https://picsum.photos/id/237/400/300", price: 49 },
  { id: 2, title: "Mountain Sunset", src: "https://picsum.photos/id/1015/400/300", price: 59 },
  { id: 3, title: "Forest Path", src: "https://picsum.photos/id/1040/400/300", price: 39 },
  { id: 4, title: "Elephant Herd", src: "https://picsum.photos/id/1069/400/300", price: 69 }
];

export default function WildscapeShop() {
  const [cart, setCart] = useState([]);

  const addToCart = (photo) => setCart([...cart, photo]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Wildscape Photo Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-2xl shadow p-4">
            <img src={photo.src} alt={photo.title} className="rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{photo.title}</h2>
            <p className="text-gray-600">${photo.price}</p>
            <button
              onClick={() => addToCart(photo)}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
