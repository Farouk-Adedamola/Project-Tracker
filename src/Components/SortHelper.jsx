const SortHelper = ({ setProjects, setSortCriteria, projects }) => {
  const handleSort = (criteria) => {
    const sortedProjects = [...projects];

    sortedProjects.sort((a, b) => {
      if (criteria === "dateAdded" || criteria === "dueDate") {
        return new Date(a[criteria]) - new Date(b[criteria]);
      } else if (criteria === "storyPoint") {
        return a[criteria] - b[criteria];
      }

      return 0;
    });

    setProjects(sortedProjects);
    setSortCriteria(criteria);
  };

  return (
    <>
      <div className="m-4 flex justify-center items-center gap-4">
        <button
          disabled
          className="text-green-300 text-sm font-bold rounded-[10px] py-3 px-2 bg-white"
          onClick={() => handleSort("dateAdded")}
        >
          Sort by Date Added
        </button>
        <button
          className="text-red-500 font-bold rounded-[10px] text-sm p-2 py-3 px-2 bg-white"
          onClick={() => handleSort("dueDate")}
        >
          Sort by Due Date
        </button>
        <button
          className="text-black-500 font-bold text-sm rounded-[10px] p-2 py-3 px-2 bg-white"
          onClick={() => handleSort("storyPoint")}
        >
          Sort by Story Point
        </button>
      </div>
    </>
  );
};

export default SortHelper;
