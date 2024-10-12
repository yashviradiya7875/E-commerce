import { capitalize } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function CategoryNav() {
  const [category, setcategory] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/categories`
      );
      setcategory(response.data);
      // console.log(category)
    })();
  }, []);

  return (
    <div className="flex gap-5 pt-4 pb-4 m-auto text-gray-400 flex-wrap justify-center align-middle">
      {category &&
        category.map((res) => (
          <NavLink
            to={`/category`}
            key={res.name}
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : ""
              } hover:text-black bg-gray-100 pr-3 pl-3 p-2 rounded-lg transition`
            }
          >
            {res.name}
          </NavLink>
        ))}
    </div>
  );
}

export default CategoryNav;
