import useCountries from "../hooks/useCountries";
import Filters from "../components/Filters";
import CountryCard from "../components/CountryCard";

export default function Home() {
  const { countries, loading, error, filters, setFilters } = useCountries();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Countries</h1>

      <Filters filters={filters} setFilters={setFilters} />

      <p>Total: {countries.length}</p>

      <section>
        {countries.map(country => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </section>
    </div>
  );
}
