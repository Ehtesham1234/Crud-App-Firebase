import React, { useState } from "react";

const useDisClose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return {
    onClose,
    onOpen,
    isOpen,
  };
};

export default useDisClose;
