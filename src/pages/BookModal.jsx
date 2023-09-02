/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

export default function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-[#2a2a30] rounded-lg flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        />
        <div className="m-6">
          <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
            {book.publishYear}
          </h2>
          <h4 className="my-2 text-gray-500">{book._id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <p className="text-slate-300 first-letter:text-xl first-letter:text-orange-300 first-letter:pl-[8px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            distinctio ea, officia culpa esse quas nesciunt reiciendis molestiae
            dicta tenetur velit, nemo autem hic asperiores rem ex iusto id.
            Explicabo, tempore laboriosam. Numquam corporis asperiores sunt
            aperiam praesentium reiciendis, voluptatibus quidem atque!
            Repudiandae tenetur doloribus ea! Sed quos impedit voluptatibus
            consequatur explicabo at. Eos molestiae reprehenderit veniam
            distinctio minus ut quia. Necessitatibus magni aut culpa et esse
            aliquam! Adipisci nobis a at veritatis quae minus saepe.
          </p>
        </div>
      </div>
    </div>
  );
}
