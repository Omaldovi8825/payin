import { useState } from "react"
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Payments } from "./components/Payments";

const App = () => {

  const [succesLogin, setSuccesLogin] = useState(true)

  return (
    <div className="container">
      <Header />
      { !succesLogin &&
      <Login onLoginSuccess={setSuccesLogin} />
      }
      { succesLogin &&
      <Payments />
      }
    </div>
  );
}

export {App};
