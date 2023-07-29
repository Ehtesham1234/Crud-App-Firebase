import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./Config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisClose from "./hooks/useDisClose";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisClose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const FilterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "Contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1   " />
            <input
              onChange={FilterContacts}
              type="text"
              className="flex-grow h-10 border border-white rounded-md bg-transparent
          text-white pl-9"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer   "
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col ">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />

      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
