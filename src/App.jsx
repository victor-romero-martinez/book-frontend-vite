import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBook from "./pages/EdiftBook";
import DeleteBool from "./pages/DeleteBook";
import ShowBooks from "./pages/ShowBooks";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBool />} />
    </Routes>
  );
}

export default App;
