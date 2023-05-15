import Image from "next/image";
import React, { useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const Inputbox = () => {
  const submitPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    await addDoc(collection(db, "posts"), {
      Message: inputRef.current.value,
      Name: session.user.name,
      Email: session.user.email,
      TimeStamp: serverTimestamp(),
    });
    inputRef.current.value = "";
  };
  const { data: session } = useSession();
  const inputRef = useRef(null);

  return (
    <div className="bg-white p-2 text-gray-500 font-medium rounded-xl shadow-md mt-6">
      <div className="flex justify-center space-x-4 p-4">
        <Image
          src={session.user.image}
          className="rounded-full"
          layout="fixed"
          height={40}
          width={40}
        />
        <form className="flex flex-1 ">
          {" "}
          <input
            type=""
            placeholder={`What's on your mind ${session.user.name} ?`}
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <button hidden onClick={submitPost} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly  border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 " />{" "}
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400 " />{" "}
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300 " />{" "}
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Inputbox;
