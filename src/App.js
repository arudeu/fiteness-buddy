import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import NavigationBar from "./components/Navbar";
// PAGES
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });
  function unsetUser() {
    localStorage.clear();
  }
  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <NavigationBar />
          <Routes>
            {/* ROUTE HERE */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
