import React, { useState } from 'react'

function Category() {

    const [catagory, setCatagory] = useState()


    const event = (e) => {
        setCatagory(e.target.value)
        console.log(catagory)

    }
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-10">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
                        <div className="relative group flex justify-center items-center h-full w-full">
                            <img className="object-center object-cover h-full w-full rounded-3xl" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                            <button
                                className="bottom-4 z-10 absolute text-base font-medium rounded-md text-white py-3 w-36 bg-blue-600"
                                value="women"
                                onClick={event}
                            >Women</button>
                        </div>

                        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 ">
                            <div className="relative group flex justify-center items-center  h-full w-full">
                                <img className="object-center object-cover h-full w-full rounded-3xl" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                <button className="bottom-4 z-10 absolute text-base font-medium rounded-md text-white py-3 w-36 bg-blue-600">Shoes</button>

                            </div>
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full rounded-3xl" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                                <button className="bottom-4 z-10 absolute text-base font-medium rounded-md text-white py-3 w-36 bg-blue-600">Watches</button>

                            </div>
                        </div>

                        <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                            <img className="object-center object-cover h-full w-full rounded-3xl" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
                            <button className="bottom-4 z-10 absolute text-base font-medium rounded-md text-white py-3 w-36 bg-blue-600">Accessories</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category