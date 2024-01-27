import { useReducer } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import HeroSection from "./Pages/HeroSection";
import TaskBroad from "./Pages/TaskBroad";
import { TaskContext } from "./context";
import { initialState, taskReducer } from "./reducer/TaskReducer";


const App = () => {



  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <>

      <Header />
      <TaskContext.Provider value={{ state, dispatch }}>
        <HeroSection />
        <TaskBroad />
      </TaskContext.Provider>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
