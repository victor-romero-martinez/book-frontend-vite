import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

export default function EdiftBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: null,
  });
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("An error happened, Please check de console", {
          variant: "error",
        });
        console.log(e.response.data);
      });
  }, [id]);

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, book)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Edited book successfally", { variant: "success" });
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
        <h1 className="text-3xl my-4">Edit Book</h1>
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
              className="border border-gray-500 px-4 py-2 w-full"
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
              className="border border-gray-500 px-4 py-2 w-full"
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
              className="border border-gray-500 px-4 py-2 w-full"
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
