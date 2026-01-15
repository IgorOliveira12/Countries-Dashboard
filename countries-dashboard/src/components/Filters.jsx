export default function Filters({ filters, setFilters }) {
  function handleSearchChange(e) {
    setFilters(prev => ({
      ...prev,
      search: e.target.value
    }));
  }

  function handleRegionChange(e) {
    setFilters(prev => ({
      ...prev,
      region: e.target.value
    }));
  }

  function handleSortChange(e) {
    setFilters(prev => ({
      ...prev,
      sort: e.target.value
    }));
  }

  return (
    <section className="filters">
      <input
        type="text"
        placeholder="Search country..."
        value={filters.search}
        onChange={handleSearchChange}
      />

      <select value={filters.region} onChange={handleRegionChange}>
        <option value="all">All regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select value={filters.sort} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </section>
  );
}
