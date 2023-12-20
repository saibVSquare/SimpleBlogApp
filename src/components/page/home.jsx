import React from "react";
import FancyTextComponent from "../hoc/FancyTextComponent";
import TextComponent from "../hoc/TextComponent";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>

      <p>High Order Components Practice</p>
      <TextComponent text="Hello, this is Simple text!" />
      <FancyTextComponent text="Hello, this is fancy text!" />
      <FancyTextComponent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias qui provident quam optio repudiandae at, assumenda perspiciatis perferendis distinctio reprehenderit odit sint autem delectus corporis magni cupiditate quisquam vel!" />
    </div>
  );
};

export default HomePage;
