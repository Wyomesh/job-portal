import "./App.css";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import JobsPage from "./components/JobsPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
        {/* <SignUp />
        <JobsPage />
        <Login /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
