// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Card,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

import { StyledEngineProvider } from "@mui/material/styles";
import Layout from "./Components/Layout";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="bg-black h-screen pt-8">
        <Layout />
      </div>
    </StyledEngineProvider>
  );
}

export default App;

// ********************************************************

// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Card,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// import { StyledEngineProvider } from "@mui/material/styles";

// function App() {
//   const [projects, setProjects] = useState([]);
//   const [formData, setFormData] = useState({
//     projectName: "",
//     dateAdded: "",
//     dueDate: "",
//     priority: "",
//     niche: "",
//     storyPoint: "",
//   });
//   const [editingProject, setEditingProject] = useState(null);

//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

//   // ******************************************************************
//   useEffect(() => {
//     // Update dateAdded in formData when the component mounts
//     setFormData((prevData) => ({
//       ...prevData,
//       dateAdded: getFormattedDate(),
//     }));
//   }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

//   const getFormattedDate = () => {
//     // Get today's date
//     const today = new Date();

//     // Extract the components of the date
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1; // Month is zero-based, so we add 1
//     const day = today.getDate();

//     // Format the date as a string
//     return `${year}-${month < 10 ? "0" : ""}${month}-${
//       day < 10 ? "0" : ""
//     }${day}`;
//   };
//   // **********************************************************

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData({ ...formData, [name]: value });
//     // console.log(name, value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (
//       (formData.projectName,
//       formData.dateAdded,
//       formData.dateDue,
//       formData.priority,
//       formData.storyPoint,
//       formData.niche)
//     ) {
//       const newProject = { ...formData, id: new Date().getTime().toString() };
//       setProjects([...projects, newProject]);

//       setFormData({
//         projectName: "",
//         dueDate: "",
//         priority: "",
//         niche: "",
//         storyPoint: "",
//       });
//     }
//     if (editingProject) {
//       const updatedProjects = projects.map((project) =>
//         project.id === editingProject.id
//           ? { ...formData, id: project.id }
//           : project
//       );
//       setProjects(updatedProjects);
//       setEditingProject(null);
//       setIsEditDialogOpen(false);
//     } else {
//       setProjects([...projects, { ...formData, id: projects.length + 1 }]);
//     }

//     setFormData({
//       projectName: "",
//       // dateAdded: "",
//       dueDate: "",
//       priority: "",
//       niche: "",
//       storyPoint: "",
//     });
//   };

//   const handleDelete = (id) => {
//     const updatedProjects = projects.filter((project) => project.id !== id);
//     setProjects(updatedProjects);
//   };

//   const handleEdit = (project) => {
//     console.log(project.id);
//     setFormData(project);
//     setEditingProject(project);
//     setIsEditDialogOpen(true);
//   };

//   const handleEditDialogClose = () => {
//     setEditingProject(editingProject);
//     setIsEditDialogOpen(false);
//   };

//   return (
//     <StyledEngineProvider injectFirst>
//       <div className="bg-black h-screen pt-8">
//         <h1 className="text-white font-bold text-3xl text-center mb-4 underline">
//           Project Tracker
//         </h1>
//         <div className="container mx-auto  ">
//           <form onSubmit={handleFormSubmit} className="mb-8 p-4">
//             <div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-4 lg:grid-cols-6 mb-8">
//               <label htmlFor="name" className="text-white text-sm font-bold">
//                 ProjectName :
//               </label>
//               <input
//                 type="text"
//                 name="projectName"
//                 id="projectName"
//                 placeholder="Project Name"
//                 onChange={handleChange}
//                 value={formData.projectName}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//               />
//               <label htmlFor="date" className="text-white font-bold">
//                 Date Added :
//               </label>
//               <input
//                 type="date"
//                 name="dateAdded"
//                 id="dateAdded"
//                 disabled
//                 onChange={handleChange}
//                 value={formData.dateAdded}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500"
//               />
//               <label htmlFor="date" className="text-white font-bold">
//                 Date Due :
//               </label>
//               <input
//                 type="date"
//                 name="dueDate"
//                 id="dueDate"
//                 onChange={handleChange}
//                 value={formData.dueDate}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//               />
//               <label htmlFor="storypoint" className="text-white font-bold">
//                 {" "}
//                 storypoint :
//               </label>
//               <input
//                 type="number"
//                 name="storyPoint"
//                 id="storypoint"
//                 placeholder="input number from 1 -10"
//                 onChange={handleChange}
//                 value={formData.storyPoint}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//               />
//               <label htmlFor="niche" className="text-white font-bold">
//                 Niche :
//               </label>
//               <input
//                 type="text"
//                 name="niche"
//                 id="niche"
//                 onChange={handleChange}
//                 placeholder="Niche"
//                 value={formData.niche}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//               />
//               <label htmlFor="Priority" className="text-white font-bold">
//                 Priority :
//               </label>
//               <input
//                 type="text"
//                 name="priority"
//                 id="priority"
//                 placeholder="Priority"
//                 onChange={handleChange}
//                 value={formData.priority}
//                 className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//               />
//             </div>
//             <button
//               type="submit"
//               className="my-4 bg-green-600 text-white font-bold p-3 rounded-[8px] hover:bg-green-400 hover:text-[#555] hover:transition hover:delay-75 hover:duration-800"
//             >
//               {editingProject ? "Update Project" : "Add Project"}
//             </button>
//           </form>

//           <TableContainer component={Card}>
//             <Table>
//               <TableHead className="w-full">
//                 <TableRow className="bg-green-500">
//                   <TableCell className="font-bold text-black text-center">
//                     Project Name
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Date Added
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Due Date
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Priority
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Niche
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Story Point
//                   </TableCell>
//                   <TableCell className="font-bold text-black text-center">
//                     Actions
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {projects.map((project) => (
//                   <TableRow
//                     key={project.id}
//                     className="border-b-2 border-solid border-green-700"
//                   >
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.projectName}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.dateAdded}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.dueDate}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.priority}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.niche}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize border-r-2 border-green-500 text-center">
//                       {project.storyPoint}
//                     </TableCell>
//                     <TableCell className="font-bold text-green-700 text-sm capitalize flex justify-between gap-4 sm:justify-center items-center">
//                       <button
//                         onClick={() => handleDelete(project.id)}
//                         className="text-white bg-red-700 p-2 rounded-sm font-semibold hover:bg-red-500"
//                       >
//                         Delete
//                       </button>
//                       <button
//                         onClick={() => handleEdit(project)}
//                         className="text-white bg-green-700 p-2 rounded-sm font-semibold hover:bg-green-500"
//                       >
//                         Edit
//                       </button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* Edit Dialog */}
//           <Dialog
//             open={isEditDialogOpen}
//             onClose={handleEditDialogClose}
//             className="w-full"
//           >
//             <div className="bg-green-600 pt-4">
//               <form onSubmit={handleFormSubmit}>
//                 <DialogTitle className="text-black font-bold text-2xl text-center mb-2">
//                   Edit Selected Project
//                 </DialogTitle>
//                 <DialogContent>
//                   <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
//                     <label
//                       htmlFor="name"
//                       className="text-white text-sm font-bold"
//                     >
//                       ProjectName :
//                     </label>
//                     <input
//                       type="text"
//                       name="projectName"
//                       id="projectName"
//                       onChange={handleChange}
//                       value={formData.projectName}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                     <label
//                       htmlFor="date"
//                       className="text-white text-sm font-bold"
//                     >
//                       Date Added :
//                     </label>
//                     <input
//                       type="date"
//                       name="dateAdded"
//                       disabled
//                       id="dateAdded"
//                       onChange={handleChange}
//                       value={formData.dateAdded}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                     <label
//                       htmlFor="date"
//                       className="text-white text-sm font-bold"
//                     >
//                       Date Due :
//                     </label>
//                     <input
//                       type="date"
//                       name="dueDate"
//                       id="dueDate"
//                       onChange={handleChange}
//                       value={formData.dueDate}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                     <label
//                       htmlFor="storypoint"
//                       className="text-white text-sm font-bold"
//                     >
//                       {" "}
//                       storypoint :
//                     </label>
//                     <input
//                       type="number"
//                       name="storyPoint"
//                       id="storypoint"
//                       onChange={handleChange}
//                       value={formData.storyPoint}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                     <label
//                       htmlFor="niche"
//                       className="text-white text-sm font-bold"
//                     >
//                       Niche :
//                     </label>
//                     <input
//                       type="text"
//                       name="niche"
//                       id="niche"
//                       onChange={handleChange}
//                       value={formData.niche}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                     <label
//                       htmlFor="Priority"
//                       className="text-white text-sm font-bold"
//                     >
//                       Priority :
//                     </label>
//                     <input
//                       type="text"
//                       name="priority"
//                       id="priority"
//                       onChange={handleChange}
//                       value={formData.priority}
//                       className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
//                     />
//                   </div>
//                 </DialogContent>
//                 <DialogActions className="bg-white border-t-2 border-red-500">
//                   <div className="flex justify-center items-center gap-4">
//                     <button
//                       onClick={handleEditDialogClose}
//                       className="bg-red-500 p-2 rounded-[8px] text-white font-bold"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-green-500 p-2 rounded-[8px] text-white font-bold"
//                     >
//                       Update
//                     </button>
//                   </div>
//                 </DialogActions>
//               </form>
//             </div>
//           </Dialog>
//         </div>
//       </div>
//     </StyledEngineProvider>
//   );
// }

// export default App;
