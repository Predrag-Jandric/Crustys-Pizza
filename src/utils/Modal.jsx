const Modal = ({ content, onClose, handleClickOutside }) => {
  return (
    <section
      id="modal-overlay"
      className="fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black bg-opacity-20"
      onClick={handleClickOutside}
    >
      <article className="w-[30rem] rounded-lg bg-white p-10">
        <div className="flex justify-between">
          <h2 className="text-secondary text-2xl font-bold">Edit Profile</h2>

          <button
            className="h-8 w-8 rounded-full bg-white text-red-500 shadow"
            onClick={onClose}
          >
            x
          </button>
        </div>
        {content}
      </article>
    </section>
  );
};

export default Modal;
