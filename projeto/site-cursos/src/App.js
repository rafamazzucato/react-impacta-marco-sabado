import React, { useState } from "react";
import { Menu } from "./componentes/Menu";
import { Rotas } from "./componentes/Rotas";

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const [token, setToken] = useState(accessToken);

  return (
    <div >
      <Menu setToken={setToken} />
      <Rotas token={token} />
    </div>
  );
}

export default App;
