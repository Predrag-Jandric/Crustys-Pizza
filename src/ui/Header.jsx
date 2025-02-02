import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { imagesPeople } from "../utils/images";
import { updateUser, updateUserImage } from "../features/user/userSlice";
import useModal from "../utils/useModal";
import Modal from "../utils/Modal";

function Header() {
  const dispatch = useDispatch();
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
    setUsername(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
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

      {user && <SearchOrder />}

      <div onClick={handleEditToggle} className="hover:cursor-pointer px-2 hover:bg-green-400 flex items-center gap-2">
        <img className="size-10 rounded-full" src={user.image} alt="" />
        <p className="hidden p-2 text-sm font-bold md:block">
          {user.username}
        </p>
      </div>

      {isOpen && (
        <Modal
          content={
            <div className="gap-10 flex flex-col">
              <input
                className="input mt-10 w-full"
                type="text"
                value={username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter new username"
              />
              <div className="flex flex-wrap gap-3 mt-0">
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
              <button
                onClick={handleSubmit}
                className="rounded-lg bg-primary px-4 py-2 text-white"
              >
                Update Profile
              </button>
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
