import React from "react";
import {  DotsHorizontalIcon,VideoCameraIcon} from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Contact from "./Contact";


const contacts = [
  {
    src: "https://cdn.pixabay.com/photo/2016/06/28/20/17/basketball-1485410_640.jpg",
    name: "Cristiano Ronaldo",
  },
  {
    src: "https://images.pexels.com/photos/16777015/pexels-photo-16777015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Prime",
  },
  {
    src: "https://images.pexels.com/photos/16560499/pexels-photo-16560499.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Ochulor Freedom",
  },
  {
    src: "https://images.pexels.com/photos/15174712/pexels-photo-15174712.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Atunwa Vincent",
  },
];

const Widgets = () => {
  return <div className=" w-60  hidden lg:flex flex-col mt-5 ">
    <div className="flex items-center mb-5 text-gray-500 justify-between mr-2">
      <h2 className="text-xl">
        Contacts
      </h2>
      <div className="flex space-x-2 ">
        <VideoCameraIcon className="h-6"/>
        <SearchIcon className="h-6"/>
        <DotsHorizontalIcon className="h-6"/>
      </div>
    </div>


    {contacts.map((contact)=>(
      <Contact key={contact.src} name={contact.name} img={contact.src}/>
    ))}
  </div>;
};

export default Widgets;
