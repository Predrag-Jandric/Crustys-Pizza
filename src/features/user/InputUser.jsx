import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function InputUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(createUser(username));
    navigate("/menu");
  }

  function handleInputChange(e) {
    const value = e.target.value;
    if (value.length <= 8) {
      setUsername(value.charAt(0).toUpperCase() + value.slice(1));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 px-5 text-lg text-white ">
        Enter your first name and start ordering pizzas!
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="(max 8 characters)"
        value={username}
        onChange={handleInputChange}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default InputUser;
