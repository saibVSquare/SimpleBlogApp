const name = "Saib";
const Dept = "Web";
export const Education = () => {
  return `Software Engineering ${name} / ${Dept}`;
};

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const handleClick = () => {
  alert("Button is Clicked");
};

export { name, Dept, user, products, handleClick };
