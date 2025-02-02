import { useDispatch, useSelector } from "react-redux";
import InputUser from "../features/user/InputUser";
import Button from "./Button";
import useModal from "../utils/useModal";
import Modal from "../utils/Modal";
import { useEffect, useState } from "react";
import { imagesPeople } from "../utils/images";
import { updateUser, updateUserImage } from "../features/user/userSlice";

function Home() {
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
    <div className="h-[100%] bg-red-100 bg-cover text-center">
      <div>
        <h1 className="mb-8 pt-20 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-primary">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {user.username === "" ? (
          <InputUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {user.username}
          </Button>
        )}
      </div>

      <button onClick={handleEditToggle} className="border-2 p-4 border-gray-800">
        Edit Profile
      </button>

      {isOpen && (
        <Modal
          content={
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Edit Profile</h2>
              <input
                className="input mb-4 w-full"
                type="text"
                value={username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter new username"
              />
              <div className="flex space-x-2 flex-wrap gap-3">
                {imagesPeople.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`w-[4.3rem] h-[4.3rem] object-cover !m-0 rounded-full cursor-pointer ${
                      selectedImage === image ? "ring-[3px] ring-primary" : ""
                    }`}
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Update Profile
              </button>
            </div>
          }
          onClose={closeModal}
          handleClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
}

export default Home;
