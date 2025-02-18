import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full w-28 px-4 py-2 text-sm placeholder:text-gray4 transition-all sm:w-64 sm:focus:w-72 focus:outline-none focus:ring"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default SearchOrder;
