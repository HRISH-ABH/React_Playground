import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-[99999] flex items-center justify-center px-4">
      <div className="bg-zinc-800 w-full max-w-2xl rounded-lg shadow-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-400 hover:text-white"
          >
            ✕
          </button>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
