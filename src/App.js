import Navbar from "./Components/Navbar";
import './App.css';
import Form from "./Components/Form";
import { useState } from "react";
import Alert from "./Components/Alert";
import Features from "./Components/Features";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';  // Set text color to white in dark mode
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';  // Set text color to black in light mode
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
   

      <Navbar title="Funzilla" btn="Submit" mode={mode} toggleMode={toggleMode} />
      <Alert alert={showAlert} />
      <Form showAlert={showAlert} />
    </>
  );
}

export default App;
