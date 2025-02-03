import { Link, useNavigate } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { imagesPeople } from "../utils/images";
import {
  updateUser,
  updateUserImage,
  removeUser,
} from "../features/user/userSlice";
import useModal from "../utils/useModal";
import Modal from "../utils/Modal";
import { toast } from "react-toastify";
import Button from "./Button";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(user.image);
  const [username, setUsername] = useState(user.username);

  useEffect(() => {
    setUsername(user.username);
    setSelectedImage(user.image);
  }, [user.username, user.image]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    openModal();
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = () => {
    dispatch(updateUser(username));
    dispatch(updateUserImage(selectedImage));
    closeModal();
  };

  const handleInputChange = (e) => {
    const capitalizedValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setUsername(capitalizedValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSignOut = () => {
    dispatch(removeUser());
    toast.success("User has been removed successfully!", { autoClose: 1500 });
    closeModal();
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between border-b border-gray1 bg-primary px-2 uppercase">
      <Link
        className="flex items-center gap-3 px-4 py-1 tracking-widest transition-colors hover:bg-yellow-500"
        to="/"
      >
        <img className="h-14 w-14" src={logo} alt="" />
        <span className="font-logo text-2xl">Slice</span>
      </Link>

      {user.username && <SearchOrder />}

      {user.username && (
        <div
          onClick={handleEditToggle}
          className="flex items-center gap-2 px-2 hover:cursor-pointer hover:bg-green-400"
        >
          <p className="hidden p-2 text-sm font-bold md:block">
            {user.username}
          </p>
          <img
            className="size-10 rounded-full"
            src={user.image}
            alt="missing"
          />
        </div>
      )}

      {isOpen && (
        <Modal
          content={
            <div className="flex flex-col">
              <p className="normal-case">Enter new name</p>
              <input
                className="input w-full"
                type="text"
                value={username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter new username"
              />
              <p className="normal-case">Select new image</p>
              <div className="mt-0 flex flex-wrap gap-3">
                {imagesPeople.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`!m-0 h-[4.3rem] w-[4.3rem] cursor-pointer rounded-full object-cover ${
                      selectedImage === image ? "ring-[3px] ring-primary" : ""
                    }`}
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>
              <Button onClick={handleSubmit} type="primarySmall">
                Update Profile
              </Button>
              <Button onClick={handleSignOut} type="secondarySmall">
                Sign me out
              </Button>
            </div>
          }
          onClose={closeModal}
          handleClickOutside={handleClickOutside}
        />
      )}
    </header>
  );
}

export default Header;
