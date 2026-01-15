import useCountries from "../hooks/useCountries";
import Filters from "../components/Filters";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";

export default function Home() {
  const { countries, loading, error, filters, setFilters } = useCountries();

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Countries</h1>

      <Filters filters={filters} setFilters={setFilters} />

      <p>Total: {countries.length}</p>

     <section className="countries">
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
