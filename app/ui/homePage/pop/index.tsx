'use client';

import { useState } from 'react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true); // Initially open

  // Close popup
  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to an API)
    alert("Signed up successfully!");
    closePopup();
  };

  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg relative w-96">
            <button
              onClick={closePopup}
              className="absolute top-2 right-1 text-gray-500"
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4 text-center">Sign up for our Newsletter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
