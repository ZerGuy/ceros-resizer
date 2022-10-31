import React from 'react';
import './App.css';
import {Resizer} from "./resizer";

function App() {
  return (
    <main>
      <Resizer>
        <div className="content">
          kek cheburek
          <div>
            kek cheburek
          </div>
        </div>
      </Resizer>
      <Resizer>
        <div>
          lol kek cheburek
        </div>
        <div>
          lol kek cheburek
        </div>
      </Resizer>
    </main>
  );
}

export default App;
