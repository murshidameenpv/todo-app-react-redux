import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

const SearchTodo = () => {
    const dispatch = useDispatch()
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-600"
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Search"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <button className="bg-blue-600 p-3 rounded ml-3 text-white hover:bg-blue-400">
          <BsSearch />
        </button>
      </div>
    </>
  );
};

export default SearchTodo;
