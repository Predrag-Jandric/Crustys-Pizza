import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";
import person7 from "../assets/person7.jpg";
import person8 from "../assets/person8.jpg";
import person9 from "../assets/person9.jpg";
import person10 from "../assets/person10.jpg";
import person11 from "../assets/person11.jpg";
import person12 from "../assets/person12.jpg";
import person13 from "../assets/person13.jpg";
import person14 from "../assets/person14.jpg";
import person15 from "../assets/person15.jpg";
import ourLogo from "../assets/ourLogo.png";

export const special = ourLogo;

export const imagesPeople = [
  person2,
  person3,
  person4,
  person5,
  person6,
  person1,
  person7,
  person8,
  person9,
  person10,
  person11,
  person12,
  person13,
  person14,
  person15,
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagesPeople.length);
  return imagesPeople[randomIndex];
};
