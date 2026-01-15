import { useState, useEffect, useMemo } from "react";

const API_URL = "https://restcountries.com/v3.1/all";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ 
    search: "", 
    region: "All",
    sort: "name" 
  });

    useEffect(() => {
        async function fetchCountries() {
            try {
            setLoading(true);
            setError(null);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch countries");
            }

            const data = await response.json();
            setCountries(data);
            } catch (err) {
            setError(err.message || "Unknown error");
            } finally {
            setLoading(false);
            }
        }

        fetchCountries();
    }, []);

  const visibleCountries = useMemo(() => {
    let result = [...countries];


    //search
    if (filter.search) {
        const query = filter.search.toLowerCase();
        result = result.filter(country => 
            country.name.common.toLowerCase().includes(query)
        );
    }

    //region
    if (filter.region !== "All") {
        result = result.filter(country => 
            country.region === filter.region
        );
    }

    //sort
    if (filter.sort === "name") {
        result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (filter.sort === "population") {
        result.sort((a, b) => a.population - b.population);
    }

    return result;
  }, [countries, filter]);

  return {
    countries: visibleCountries,
    loading,
    error,
    filters,
    setFilters,
  };
}

