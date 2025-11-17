import Cards from "./cards";

const cardsData = [
  {
    src: "https://www.lpu.in/lpu-assets/images/virtual-background/lpu-campus-1.jpg",
    title: "Lpu campus",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum vitae obcaecati mollitia eius quae odio placeat voluptatibus cupiditate,"
  },
  {
    src: "https://www.lpu.in/lpu-assets/images/virtual-background/lpu-campus-11.jpg",
    title: "Block 38",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum vitae obcaecati mollitia eius quae odio placeat voluptatibus cupiditate,"
    },
    {
    src: "https://www.lpu.in/lpu-assets/images/virtual-background/lpu-campus-10.jpg",
    title: "Beautiful View",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum vitae obcaecati mollitia eius quae odio placeat voluptatibus cupiditate,"
    }
];

function CardsContainer() {
    return (
      <div className="flex flex-wrap justify-center mt-8">
       {cardsData.map((card, index) => (
         <Cards 
           key={index}
           src={card.src}
           title={card.title}
           description={card.description}
         />
       ))}
      </div>
    );
}

export default CardsContainer;