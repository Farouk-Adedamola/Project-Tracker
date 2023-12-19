// import React from 'react'
import Tooltip from "@mui/material/Tooltip";

const FormInput = ({
  handleChange,
  handleFormSubmit,
  formData,
  editingProject,
}) => {
  return (
    <>
      <div className="container mx-auto  ">
        <form onSubmit={handleFormSubmit} className="mb-8 p-4">
          <div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-4 lg:grid-cols-6 mb-8">
            <label htmlFor="name" className="text-white text-sm font-bold">
              ProjectName :
            </label>
            <Tooltip title="Add Project Name" followCursor>
              <input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="Project Name"
                onChange={handleChange}
                value={formData.projectName}
                className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
              />
            </Tooltip>
            <label htmlFor="date" className="text-white font-bold">
              Date Added :
            </label>
            <input
              type="date"
              name="dateAdded"
              id="dateAdded"
              //   disabled
              onChange={handleChange}
              value={formData.dateAdded}
              className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500"
            />
            <label htmlFor="date" className="text-white font-bold">
              Date Due :
            </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              onChange={handleChange}
              value={formData.dueDate}
              className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
            />
            <label htmlFor="storypoint" className="text-white font-bold">
              {" "}
              storypoint :
            </label>
            <input
              type="number"
              name="storyPoint"
              id="storypoint"
              min={1}
              max={5}
              placeholder="input number from 1 -10"
              onChange={handleChange}
              value={formData.storyPoint}
              className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
            />
            <label htmlFor="niche" className="text-white font-bold">
              Niche :
            </label>
            <Tooltip title="Add Niche" followCursor>
              <input
                type="text"
                name="niche"
                id="niche"
                onChange={handleChange}
                placeholder="Niche"
                value={formData.niche}
                className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
              />
            </Tooltip>
            <label htmlFor="Priority" className="text-white font-bold">
              Priority :
            </label>
            <Tooltip title="high, medium, low" followCursor>
              <input
                type="text"
                name="priority"
                id="priority"
                placeholder="Priority"
                onChange={handleChange}
                value={formData.priority}
                className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
              />
            </Tooltip>
          </div>
          <button
            type="submit"
            className="my-4 bg-green-600 text-white font-bold p-3 rounded-[8px] hover:bg-green-400 hover:text-[#555] hover:transition hover:delay-75 hover:duration-800"
          >
            {editingProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </>
  );
};

// FormInput.propTypes = {
//   formData: PropTypes.shape({
//     projectName: PropTypes.string.isRequired,
//     // define propTypes for other fields in formData as needed
//   }).isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };

export default FormInput;

// ChildComponent.propTypes = {
//   formData: PropTypes.shape({
//     projectName: PropTypes.string.isRequired,
//     dateAdded: PropTypes.string.isRequired,
//     dueDate: PropTypes.string.isRequired,
//     priority: PropTypes.string.isRequired,
//     niche: PropTypes.string.isRequired,
//     storyPoint: PropTypes.string.isRequired,
//   }).isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };
