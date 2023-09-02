/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}
