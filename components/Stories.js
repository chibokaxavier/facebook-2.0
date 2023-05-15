import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    fullName: "Chiboka Xavier",
    src: "https://cdn.pixabay.com/photo/2016/09/03/18/10/basketball-1642384_640.jpg",
    profile: "https://images.pexels.com/photos/16773707/pexels-photo-16773707.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    fullName: "Cristiano Ronaldo",
    src:"https://cdn.pixabay.com/photo/2016/06/28/20/17/basketball-1485410_640.jpg",
    profile:
      "https://images.pexels.com/photos/16569932/pexels-photo-16569932.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    fullName: "Prime",
    src: "https://images.pexels.com/photos/16777015/pexels-photo-16777015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    profile:
      "https://images.pexels.com/photos/13499007/pexels-photo-13499007.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    fullName: "Ochulor Freedom",
    src: "https://images.pexels.com/photos/16560499/pexels-photo-16560499.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    profile:
      "https://images.pexels.com/photos/16599968/pexels-photo-16599968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    fullName: "Atunwa Vincent",
    src: "https://images.pexels.com/photos/15174712/pexels-photo-15174712.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    profile:
      "https://images.pexels.com/photos/15014955/pexels-photo-15014955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          name={story.fullName}
          src={story.src}
          profile={story.profile}

          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default Stories;
