import './App.css';
import Home from './components/Home';
import NewFooter from './components/NewFooter';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Style.css';
import World from './components/World';

function App() {
  return (
    <>
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/World" element={<World />}></Route>
            {/* <Route path="/Sports" element={<Sports />}></Route>
          <Route path="/Latest" element={<Latest />}></Route>
          <Route path="/Trending" element={<Trending />}></Route> */}
          </Routes>
        </BrowserRouter>
        <NewFooter />
      </>
    </>
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <NewFooter />
    // </div>
  );
}

export default App;
