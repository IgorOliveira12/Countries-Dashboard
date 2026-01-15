import useCountries from "../hooks/useCountries";

export default function Home() {
  const { countries, loading, error } = useCountries();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Countries</h1>
      <p>Total: {countries.length}</p>
    </div>
  );
}
