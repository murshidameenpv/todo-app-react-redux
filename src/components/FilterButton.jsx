const FilterButton = () => {
  return (
    <div className="flex space-x-4 items-center">
      <select className="text-sm py-1 px-2 rounded border border-gray-300 focus:outline-none">
        <option value="All">Default</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <button className=" bg-green-700 px-2 py-1 rounded hover:bg-green-600">
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
