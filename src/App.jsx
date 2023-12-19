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
