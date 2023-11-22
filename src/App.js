import Diningout from "./components/dinigOut/dinigout";
import Secondpage from "./pages/secondPage/secondpage";
import Homepage from "./pages/homePage/homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

 function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/spage" element={<Secondpage />} />
          <Route path="/dining" element={<Diningout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
