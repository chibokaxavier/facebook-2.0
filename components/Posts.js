import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  getDoc,
  getDocs,
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
  limit,
  Firestore,
} from "firebase/firestore";

import { db } from "@/firebase";
import Post from "./Post";

const Posts = () => {
  const [data, setData] = useState([]);

  const subscribeToChats = async () => {
    const colRef = collection(db, `posts`);
    const q = query(colRef, orderBy("TimeStamp","desc"));
    await onSnapshot(q, (snapshot) => {
      const post = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(post);
    });
  };

  useEffect(() => {
    subscribeToChats();
  }, []);
  return (
    <div>
      {data.map((onePost) => (
        <Post
          key={onePost.id}
          msg={onePost.Message}
          img={onePost.image}
          name={onePost.Name}
          email={onePost.Email}
          userImage={onePost.userImage}
          timeStamp={onePost.TimeStamp}
        />
      ))}
    </div>
  );
};

export default Posts;
