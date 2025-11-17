import CricketCard from "./CricketCard";

const data = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBYbJ8p44d0ic3l6GvwXk0-tmu1qoji2PtwyTXzgxrY6G1bCjlZxsKMrMaqWOckL_0iSXmdh3JIthU6-faWk92tU86sJFZ31aK9ZAJlo&s=10",
    name: "Virat Kohli",
    role: "Batsman",
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg",
    name: "Jasprit Bumrah",
    role: "Bowler",
  },
  {
    id: 3,
    url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/401100/401144.jpg",
    name: "Dhoni",
    role: "Batsman",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardik_Pandya_in_PMO_New_Delhi.jpg",
    name: "Hardik Pandya",
    role: "All-Rounder",
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
    name: "Rohit Sharma",
    role: "Batsman",
  },
];
function Cricketers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-2 p-4">
      {data.map((x) => (
        <CricketCard key={x.id} url={x.url} name={x.name} role={x.role} />
      ))}
    </div>
  );
}

export default Cricketers;
