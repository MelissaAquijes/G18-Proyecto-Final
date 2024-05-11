import { useState, useEffect } from "react";

export default function useGetProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `https://66204cf23bf790e070af81c3.mockapi.io/products`;
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
