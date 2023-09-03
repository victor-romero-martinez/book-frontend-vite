import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import BooksTable from "../components/home/BooksTable";
import BookCard from "../components/home/BookCard";
import { motion } from "framer-motion";

const fetchUrl = "http://localhost:5555/books";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "light" : "dark"));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(fetchUrl)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <div className="flex justify-center items-center gap-x-4">
          <motion.button
            type="button"
            onClick={() => setShowType("table")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-sky-600 text-slate-200 hover:bg-sky-500 px-4 py-1 rounded-lg"
          >
            Table
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setShowType("card")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-sky-600 text-slate-200 hover:bg-sky-500 px-4 py-1 rounded-lg"
          >
            Card
          </motion.button>
        </div>
        <div className="gap-x-4 flex items-center">
          <motion.button
            type="button"
            onClick={handleChangeTheme}
            whileTap={{ scale: 1.2 }}
          >
            <CgDarkMode className="text-3xl" />
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link to="/books/create">
              <MdOutlineAddBox className="text-sky-600 hover:text-sky-500 text-4xl" />
            </Link>
          </motion.div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}
