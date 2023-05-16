import Image from "next/image";
import React, { useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import {
  serverTimestamp,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const Inputbox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const submitPost = async (e) => {
    const mainId = uuidv4();
    e.preventDefault();
    if (!inputRef.current.value) return;
    await setDoc(doc(db, "posts", mainId), {
      Message: inputRef.current.value,
      Name: session.user.name,
      Email: session.user.email,
      TimeStamp: serverTimestamp(),
    }).then(() => {
      if (imageToPost) {
        const uploadTask = ref(storage, `posts/${uuidv4()}`);
        uploadString(uploadTask, imageToPost, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(uploadTask);
          await updateDoc(doc(db, "posts", mainId), {
            image: downloadURL,
          });
        });

        removeImage();
      }
    });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = (e) => {
    setImageToPost(null);
  };

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

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} alt="" className="object-contain h-10" />
            <p className="text-red-700">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly  border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 " />{" "}
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400 " />{" "}
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
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
