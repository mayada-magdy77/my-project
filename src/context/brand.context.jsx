import { createContext, useEffect, useState } from "react";
import { getAllBrands } from "../services/brands-services";

export const BrandsContext = createContext(null);
export default function BrandsProvider({ children }) {
      const [brands, setBrands] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [isError, setIsError] = useState(false);
      const [error, setError] = useState(false);
      async function FetchAllBrands() {
            try {
                  setIsLoading(true)

                  const response = await getAllBrands();

                  if (response.success) {
                        setIsLoading(false)
                        setBrands(response.data.data);
                  }

            } catch (error) {
                  setIsLoading(false)
                  setIsError(true)
                  setError(error)
            }
      }

      useEffect(() => {
            FetchAllBrands();
      }, []);
      return <BrandsContext.Provider value={{ isLoading, brands, isError, error }}>
            {children}
      </BrandsContext.Provider>
}