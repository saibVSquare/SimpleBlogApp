import React from "react";
import FancyTextComponent from "../hoc/FancyTextComponent";
import TextComponent from "../hoc/TextComponent";
import Board from "../tictac";
import { name, Dept, Education, user, products, handleClick } from "../testing";

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        Name : {name} & Department : {Dept}
      </p>
      <p>{Education()}</p>
      <div>
        <h1>{user.name}</h1>
      </div>
      <ul>{listItems}</ul>
      <button onClick={handleClick}>Click Events</button>
      <hr />
      {Board()}
      <hr />
      <p>High Order Components Practice</p>
      <TextComponent text="Hello, this is Simple text!" />
      <FancyTextComponent text="Hello, this is fancy text!" />
      <FancyTextComponent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias qui provident quam optio repudiandae at, assumenda perspiciatis perferendis distinctio reprehenderit odit sint autem delectus corporis magni cupiditate quisquam vel!" />
    </div>
  );
};

export default HomePage;
