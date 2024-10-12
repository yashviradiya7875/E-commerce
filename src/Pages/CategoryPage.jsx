import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImgMediaCard from "../Components/ImgMediaCard";
import Loading from "../Components/Loading";

function CategoryPage() {
  const { id } = useParams();
  const [isloading, setIsloading] = useState(false);
  const [catproduct, setCatProduct] = useState([]);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/categories/${id}`
      );
      setCatProduct(response.data.products);
      //   console.log(response.data.products);
      setIsloading(false);
    })();
  }, [catproduct]);

  if (!catproduct) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-wrap mx-auto justify-center align-middle">
        {catproduct &&
          catproduct.map((res) => (
            <ImgMediaCard
              key={res.id}
              id={res.id}
              url={res.thumbnail}
              title={res.title}
              price={res.price}
              rating={res.rating}
              discount={res.discountPercentage}
            />
          ))}
      </div>
    </>
  );
}

export default CategoryPage;
