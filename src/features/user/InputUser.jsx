import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function InputUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(createUser(username));
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-gray5 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
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
