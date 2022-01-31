import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="my-pokemon" element={<MyPokemonList />} />
        <Route path="detail/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
