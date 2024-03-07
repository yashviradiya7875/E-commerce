import { useEffect, useState } from 'react'
import axios from 'axios'
import ImgMediaCard from '../Components/ImgMediaCard'
import Loading from '../Components/Loading'


function Products() {

  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    ; (async () => {
      setIsloading(true)
      const response = await axios.get("https://dummyjson.com/products?limit=100")
      setData(response.data.products)
      // console.log(response.data.products);
      setIsloading(false)
    })()
  }, [])

  if (isloading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <h1 className="text-2xl w-full text-center p-6 justify-center flex font-bold tracking-tight text-gray-900">Suggested Products</h1>
      <div className="mx-auto max-w-2xl flex flex-wrap align-middle justify-center sm:m-auto lg:max-w-7xl lg:px-8">
        {
          data && data.map(res => (
            <ImgMediaCard
              key={res.id}
              id={res.id}
              url={res.thumbnail}
              title={res.title}
              price={res.price}
              rating={res.rating}
              discount={res.discountPercentage}
            />
          ))
        }
      </div>
    </>


  )
}

export default Products