import "./App.css";
import { Routes, Route } from "react-router";

//pages
import Home from "./pages/Home";
import PhoneDetails from "./pages/phones/PhoneDetails";
import Error from "./pages/error/Error";
import NotFound from "./pages/error/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:phoneId/details" element={<PhoneDetails />} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
