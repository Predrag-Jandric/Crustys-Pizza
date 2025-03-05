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
      <input
        className="w-[85%] rounded-full px-4 py-2 text-sm transition-all placeholder:text-gray4 focus:outline-none focus:ring sm:w-64"
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
      />
      <button
        type="submit"
        className="relative right-8 top-[1.15rem] flex size-7 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary text-xs text-gray-500 transition hover:bg-primaryHover hover:text-gray-700"
      >
        <FaArrowRight />
      </button>
    </form>
  );
}

export default SearchOrder;
