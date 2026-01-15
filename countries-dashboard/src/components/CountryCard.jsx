export default function CountryCard({ country }) {
  return (
    <article>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width={160}
      />

      <h2>{country.name.common}</h2>

      <p>
        <strong>Region:</strong> {country.region}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString()}
      </p>
    </article>
  );
}
