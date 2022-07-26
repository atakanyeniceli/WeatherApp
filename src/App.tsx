import { Route, Routes } from "react-router-dom";
import City from "./Pages/City";
import Home from "./Pages/Home";


function App() {
  return (
    <div className='h-full text-center py-2 text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/city/:cityName' element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
