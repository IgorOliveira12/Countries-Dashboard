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
