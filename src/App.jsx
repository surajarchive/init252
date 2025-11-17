import CardsContainer from "./components/card-container";
import Cricketers from "./components/Cricketers";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="">
      <Navbar />
      <CardsContainer />
      <div className="text-2xl text-center">Cricketers</div>
      <Cricketers />
    </main>
  );
}

export default App;
