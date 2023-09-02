import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("An error happened, Please check console", {
          variant: "error",
        });
        console.log(e);
      });
  };

  return (
    <div className="p-4 w-full flex flex-col justify-center">
      <BackButton />
      <h1 className="text-3xl text-center my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure want to deleted this book?</h3>
        <button
          type="button"
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}
