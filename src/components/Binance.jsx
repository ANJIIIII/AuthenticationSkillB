
import React, { useState, useEffect } from 'react';

const BinancePage = ({ logout }) => {
    const [trustCounter, setTrustCounter] = useState(0);
    const [dogBreeds, setDogBreeds] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let counter = 0;
        const interval = setInterval(() => {
            counter += Math.floor(Math.random() * 50000) + 10000;
            setTrustCounter(counter);

            if (counter >= 100000000) {
                clearInterval(interval);
                setTrustCounter(100000000);
            }
        }, 150);


        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                setDogBreeds(data.message);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching dog breeds:', error);
                setLoading(false);
            });

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            <header className="bg-yellow-400 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">Binance</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <button className="text-gray-700 hover:text-gray-900">Trade</button>
                            <button className="text-gray-700 hover:text-gray-900">Markets</button>
                            <button className="text-gray-700 hover:text-gray-900">Futures</button>
                            <button className="text-gray-700 hover:text-gray-900">Earn</button>
                        </nav>
                        <button
                            onClick={logout}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>


            <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Buy & Sell Crypto
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Trade Bitcoin, Ethereum, and 350+ cryptocurrencies
                        </p>
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by millions worldwide
            </h2>
            <div className="text-6xl font-bold text-yellow-600 animate-pulse">
              {trustCounter.toLocaleString()}+
            </div>
            <p className="text-gray-600 mt-2">Users trust our platform</p>
          </div>
        </div>
      </section>



            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Featured Data: Dog Breeds API
                    </h2>

                    {loading ? (
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading dog breeds data...</p>
                        </div>
                    ) : dogBreeds ? (

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="mb-4 text-center">
                                <h3 className="text-xl font-semibold">Available Dog Breeds</h3>
                                <p className="text-gray-600">Total: {Object.keys(dogBreeds).length} breeds</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-96 overflow-y-auto border rounded p-4">
                                {Object.entries(dogBreeds).map(([breed, subBreeds]) => (
                                    <div
                                        key={breed}
                                        className="p-3 bg-gray-50 rounded border hover:bg-gray-100 transition-colors"
                                    >
                                        <h4 className="font-medium capitalize text-sm text-gray-800">{breed}</h4>
                                        {subBreeds.length > 0 && (
                                            <div className="mt-1">
                                                <p className="text-xs text-gray-600">
                                                    {subBreeds.length} sub-breed{subBreeds.length > 1 ? 's' : ''}
                                                </p>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    {subBreeds.slice(0, 2).join(', ')}
                                                    {subBreeds.length > 2 && '...'}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    ) : (
                        <div className="text-center">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-600">Failed to load dog breeds data from API</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Why Choose Binance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Secure</h3>
                            <p className="text-gray-600">Industry-leading security measures to protect your assets</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast</h3>
                            <p className="text-gray-600">Lightning-fast trading execution and withdrawals</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
                            <p className="text-gray-600">Competitive trading fees and transparent pricing</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">350+</h3>
                            <p className="text-gray-300 mt-2">Cryptocurrencies</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">120M+</h3>
                            <p className="text-gray-300 mt-2">Registered Users</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">$76B</h3>
                            <p className="text-gray-300 mt-2">24h Trading Volume</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">180+</h3>
                            <p className="text-gray-300 mt-2">Countries Served</p>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Binance</h3>
                        <p className="text-gray-400 mb-4">The world's leading cryptocurrency exchange</p>
                        <div className="flex justify-center space-x-6 text-sm text-gray-400">
                            <span>Terms of Service</span>
                            <span>•</span>
                            <span>Privacy Policy</span>
                            <span>•</span>
                            <span>Support</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BinancePage;
