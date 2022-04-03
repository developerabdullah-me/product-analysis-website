import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import DashBort from './Component/DashBort/DashBort';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Reveiw from './Component/Reveiw/Reveiw';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/review" element={<Reveiw></Reveiw>}></Route>
    <Route path="/dashbort" element={<DashBort></DashBort>}></Route>
    <Route path="/blogs" element={<Blogs></Blogs>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    </Routes>
    </div>
  );
}

export default App;
