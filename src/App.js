import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header/header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import NoMatch from "./pages/noMatch/nomatch";
import AddEmployee from "./pages/employee/AddEmployee";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
        <Route path="/employee" element={<AddEmployee></AddEmployee>}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
