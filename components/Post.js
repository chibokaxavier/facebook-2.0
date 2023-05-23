import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ msg, img, name, email, timeStamp }) => {
  const { data: session } = useSession();
  return (
    <>
      
      <div className="flex flex-col">
        <div className="p-5 mt-5 bg-white rounded-t-2xl shadow-sm">
          <div className="flex items-center space-x-2">
            <img
              src={session?.user.image}
              className="rounded-full"
              width={40}
              height={40}
              alt=""
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-xs text-gray-400">
                {new Date(timeStamp).toString()}
              </p>
            </div>
          </div>

          <p className="pt-4">{msg}</p>
        </div>

        {img && (
          <div className="relative  h-56 md:h-96 bg-white">
            <Image src={img} style={{ objectFit: "cover" }} fill alt="" />
          </div>
        )}

        {/* footer of post */}
        <div className="flex items-center rounded-b-2xl justify-between bg-white shadow-md border-t text-gray-400 pb-2">
          <div className="inputIcon">
            <ThumbUpIcon className="h-4" />
            <p className="text-sm sm:text-base"> Like</p>
          </div>

          <div className="inputIcon">
            <ChatAltIcon className="h-4" />
            <p className="text-sm sm:text-base"> Share</p>
          </div>

          <div className="inputIcon">
            <ShareIcon className="h-4" />
            <p className="text-sm sm:text-base"> Comment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
