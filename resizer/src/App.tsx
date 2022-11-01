import React from "react";
import "./App.css";
import { Resizer } from "./resizer";

function App() {
  return (
    <main>
      <div className="row">
        <Resizer>
          <div>
            kek cheburek
            <div>kek cheburek</div>
          </div>
        </Resizer>
        <Resizer>
          <div>lol kek cheburek</div>
          <div>lol kek cheburek</div>
        </Resizer>
      </div>
      <div className="row">
        <Resizer>
          <div>
            kek cheburek
            <div>kek cheburek</div>
          </div>
        </Resizer>
        <Resizer>
          <div>lol kek cheburek</div>
          <div>lol kek cheburek</div>
        </Resizer>
      </div>
    </main>
  );
}

export default App;
