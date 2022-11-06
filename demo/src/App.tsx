import React from "react";
import "./App.css";
import {Resizer} from "ceros-resizer";

function App() {
  return (
    <main>
      <div className="row">
        <Resizer>
          <div>
            Small text
          </div>
        </Resizer>
        <Resizer>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a,
          posuere eu, velit.
        </Resizer>
      </div>
      <div className="row">
        <Resizer>
          <div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a,
            posuere eu, velit. Mauris tincidunt sem sed arcu. Nunc auctor. Maecenas lorem. Fusce wisi. Etiam sapien
            elit, consequat eget, tristique non, venenatis quis, ante. Aliquam ante. Duis sapien nunc, commodo et,
            interdum suscipit, sollicitudin et, dolor. Curabitur bibendum justo non orci. Pellentesque ipsum. Maecenas
            lorem. Vivamus luctus egestas leo. Ut tempus purus at lorem. Morbi leo mi, nonummy eget tristique non,
            rhoncus non leo. Vivamus luctus egestas leo. Aliquam id dolor. Praesent in mauris eu tortor porttitor
            accumsan.
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
