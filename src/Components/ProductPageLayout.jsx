import React from 'react'

function ProductPageLayout({ title, description, rating, image, }) {
    return (
        <>
            <div className='flex'>

                <div className="w-[700px] ">
                    <img className="h-[500px] p-10 rounded-lg w-[700px]" src={image} alt={title} />
                </div>
                <div className="p-9">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20">
                                <path d="M10 0l2.46 6.39L20 7.28l-5.63 4.67L16.92 20 10 16.67 3.08 20 5.63 11.95 0 7.28 7.54 6.39z" />
                            </svg>
                            <span className="ml-1 text-gray-700">{rating}</span>
                        </div>
                        <button
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageLayout