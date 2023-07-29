import "./index.css";

// Import React Router modules
import { RouterProvider } from "react-router-dom";

// Import Router
import router from "./routes/router";

const App = () => {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
