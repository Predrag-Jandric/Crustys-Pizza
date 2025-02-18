import { Link, useNavigate } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

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

  // const handleImageSelect = (image) => {
  //   setSelectedImage(image);
  // };

  const handleSubmit = () => {
    dispatch(updateUser(username));
    dispatch(updateUserImage(selectedImage));
    closeModal();
  };

  // const handleInputChange = (e) => {
  //   const capitalizedValue =
  //     e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  //   setUsername(capitalizedValue);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  const handleSignOut = () => {
    dispatch(removeUser());
    toast.success("User removed successfully!", { autoClose: 1500 });
    closeModal();
    navigate("/");
  };

  return (
    <header className="flex h-[10vh] items-center justify-between border-b border-gray1 bg-primary px-2 uppercase">
      <Link
        className="flex items-center gap-3 px-4 py-1 font-logo text-2xl tracking-widest transition-all hover:pb-3"
        to="/"
      >
        Crusty&apos;s
      </Link>

      {user.username && <SearchOrder />}

      {user.username && (
        <div
          onClick={handleEditToggle}
          className="flex items-center gap-2 px-2 hover:cursor-pointer hover:bg-green-400"
        >
          <p className="hidden p-2 text-lg md:block">{user.username}</p>
        </div>
      )}

      {isOpen && (
        <Modal
          content={
            <div className="flex flex-col">
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
