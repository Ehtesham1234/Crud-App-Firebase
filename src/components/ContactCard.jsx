import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisClose from "../hooks/useDisClose";
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisClose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between bg-yellow p-2 rounded-lg "
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-orange text-4xl " />
          <div className="">
            <h2 className="text-md">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        isUpdate
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
