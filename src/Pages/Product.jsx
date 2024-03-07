import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductPageLayout from '../Components/ProductPageLayout';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(response.data)
      // console.log(response.data)
    })()

  }, [])

  return (
    <ProductPageLayout
      key={product.id}
      title={product.title}
      description={product.description}
      rating={product.rating}
      image={product.thumbnail}
    />
  );
};

export default Product;