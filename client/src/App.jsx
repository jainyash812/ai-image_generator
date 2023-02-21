import { BrowserRouter, Link, Routes,Route } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import {logo} from './assets';

function App() {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
           <img src={logo} className="w-28 object-contain" />
        </Link>
        <Link to="/createPost"
        className="font-inter font-medium bg-[#ee2e0af7] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
