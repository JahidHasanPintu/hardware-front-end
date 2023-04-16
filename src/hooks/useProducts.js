import { useEffect, useState } from "react";
import axios from "axios";
import { getApiUrl } from "../api/apiURL";

export const useProducts = (page, limit, search, brandID, catID, subcatID) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const baseURL = getApiUrl();
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/products`, {
          params: {
            page,
            limit,
            search,
            brand_id: brandID,
            cat_id: catID,
            subcat_id: subcatID,
          },
        });

        const { success, data, totalItem } = response.data;

        if (success) {
          setProducts(data);
          setTotalPages(totalItem);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getAllProducts();
  }, [page, limit, search, brandID, catID, subcatID]);

  return [ products, totalPages ];
};
