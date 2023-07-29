import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-item-center  backdrop-blur h-screen w-screen absolute top-0 z-40">
          <div className="m-auto min-h-[200px] min-w-[80%] md:min-w-[50%] bg-white p-4 z-50 relative">
            <div className=" flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
