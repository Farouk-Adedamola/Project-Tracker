import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Tableoutput from "./Tableoutput";
import SortHelper from "./SortHelper";

const Layout = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    dateAdded: "",
    dueDate: "",
    priority: "",
    niche: "",
    storyPoint: "",
  });
  const [editingProject, setEditingProject] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  //   const [date, setDate] = useState(getTodayDate());

  //
  // ******************************************************************
  useEffect(() => {
    // Update dateAdded in formData when the component mounts
    setFormData((prevData) => ({
      ...prevData,
      dateAdded: getFormattedDate(),
    }));
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const getFormattedDate = () => {
    // Get today's date
    const today = new Date();

    // Extract the components of the date
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Month is zero-based, so we add 1
    const day = today.getDate();

    // Format the date as a string
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  };
  // **********************************************************

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      (formData.projectName,
      formData.dateAdded,
      formData.dateDue,
      formData.priority,
      formData.storyPoint,
      formData.niche)
    ) {
      console.log({ ...formData });
      const newProject = {
        ...formData,
        id: new Date().getTime().toString(),
      };
      setProjects([...projects, newProject]);

      // setFormData({
      //   projectName: "",
      //   dateAdded: "",
      //   dueDate: "",
      //   priority: "",
      //   niche: "",
      //   storyPoint: "",
      // });
    }
    if (editingProject) {
      const updatedProjects = projects.map((project) =>
        project.id === editingProject.id
          ? { ...formData, id: project.id }
          : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
      setIsEditDialogOpen(false);
    } else {
      setProjects([...projects, { ...formData, id: projects.length + 1 }]);
    }

    setFormData({
      projectName: "",
      dateAdded: "",
      dueDate: "",
      priority: "",
      niche: "",
      storyPoint: "",
    });
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingProject(project);
    setIsEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditingProject(editingProject);
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <h1 className="text-white font-bold text-3xl text-center mb-4 underline">
        Project Tracker
      </h1>

      <FormInput
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        editingProject={editingProject}
        // handleDateChange={handleDateChange}
      />
      <SortHelper
        setProjects={setProjects}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        projects={projects}
      />
      <Tableoutput
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditDialogClose={handleEditDialogClose}
        projects={projects}
        isEditDialogOpen={isEditDialogOpen}
        formData={formData}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Layout;
