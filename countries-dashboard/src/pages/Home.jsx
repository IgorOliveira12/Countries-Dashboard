import useCountries from "../hooks/useCountries";
import Loader from "../components/Loader";
import CountryCard from "../components/CountryCard";
import Filters from "../components/Filters";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const { countries, loading, error, filters, setFilters } = useCountries();

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <header className="header">
        <h1>Countries</h1>
        <Filters filters={filters} setFilters={setFilters} />
      </header>

      <p className="total">Total: {countries.length}</p>

      {countries.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="countries">
          {countries.map(country => (
            <CountryCard
              key={country.name.common}
              country={country}
            />
          ))}
        </section>
      )}
    </div>
  );
}
