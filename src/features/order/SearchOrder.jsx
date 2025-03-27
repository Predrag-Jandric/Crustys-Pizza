import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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
    <form onSubmit={handleSubmit} className="relative flex">
      <div className="relative w-36 sm:w-full">
        <input
          className="w-full rounded-full px-4 py-2 pr-10 text-sm transition-all placeholder:text-gray4 focus:outline-none focus:ring"
          placeholder="Search order"
          value={query}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-primary p-2 text-xs text-gray-500 transition hover:bg-primaryHover hover:text-gray-700"
        >
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
}

export default SearchOrder;
