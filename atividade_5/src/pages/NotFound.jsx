import React from "react";
import Title from "../components/Title";

const NotFound = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen text-white">
      <div className="text-center p-4">
        <Title>404</Title>
        <p>Page not found</p>
      </div>

      <img
        className="w-3/4"
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlsbGkwZGg0cTF3anE3N2x6aHo3MjdveG95MDdnb3N6YTRlejI4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ChX3hzy5CkXsI/giphy.gif"
        alt=""
      />

      <p className="text-center p-4 font-semibold">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable 😳
      </p>
    </div>
  );
};

export default NotFound;
