import React, { useState } from "react";
import Login from "./assets/login/Login";
import Todo1 from "./Todo1";
import LoadingSpinner from "./loading/LoadingSpinner";

const App = () => {
  const [ok, setOk] = useState({
    spinner: false,
    login: false,
  });

  const handleInformation = (status) => {
    setOk((prevOk) => ({
      ...prevOk,
      login: status,
    }));
  };
  const handleLoading = (spinner = true) => {
    setOk((prevOk) => ({
      ...prevOk,
      spinner: spinner,
    }));
  };
  const { login, spinner } = ok;

  return (
    <div className="container">
      {login ? (
        <Todo1 onLoad={handleLoading} />
      ) : (
        <Login onLogin={handleInformation} />
      )}

      {spinner && <LoadingSpinner />}
    </div>
  );
};

export default App;
