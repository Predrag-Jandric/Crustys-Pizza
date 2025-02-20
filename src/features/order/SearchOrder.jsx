import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon

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
    <form onSubmit={handleSubmit} className="relative flex ">
      <input
        className="w-[85%] rounded-full px-4 py-2 text-sm transition-all placeholder:text-gray4 focus:outline-none focus:ring sm:w-64 "
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
      />
      <button
        type="submit"
        className="relative flex transition hover:bg-primaryHover items-center justify-center right-8 size-7 top-[1.15rem] text-xs -translate-y-1/2 transform rounded-full bg-primary  text-gray-500 hover:text-gray-700"
      >
        <FaArrowRight />
      </button>
    </form>
  );
}

export default SearchOrder;
