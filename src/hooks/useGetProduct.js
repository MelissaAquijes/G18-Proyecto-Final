import { useState, useEffect } from "react";

export default function useGetProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `http://127.0.0.1:8000/api/v1/productos/`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Hubo un error al obtener los productos");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
  };
}
