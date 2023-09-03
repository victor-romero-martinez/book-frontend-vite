import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

export default function CreateBooks() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: null,
  });
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .post("http://localhost:5555/books", book)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created seccessfully", { variant: "success" });
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("An error hapenned, Please check console", {
          variant: "error",
        });
        console.log(e.response.data);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-3xl text-center my-4">Create Book</h1>
        {loadig ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl 2-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4">Title</label>
            <input
              type="text"
              value={book.title}
              onChange={(e) =>
                setBook((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              className="border border-gray-500 dark:text-slate-700 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">author</label>
            <input
              type="text"
              value={book.author}
              onChange={(e) =>
                setBook((prev) => {
                  return { ...prev, author: e.target.value };
                })
              }
              className="border border-gray-500 dark:text-slate-700 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Publish Year</label>
            <input
              type="number"
              value={book.publishYear}
              onChange={(e) =>
                setBook((prev) => {
                  return { ...prev, publishYear: e.target.value };
                })
              }
              className="border border-gray-500 dark:text-slate-700 px-4 py-2 w-full"
            />
          </div>
          <button
            type="button"
            className="p-2 bg-sky-600 hover:bg-sky-500 m-8"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
