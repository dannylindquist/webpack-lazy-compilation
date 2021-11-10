/* eslint-disable react/prop-types */
import * as React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = ({ workbench }) => {
  React.useEffect(() => {
    const bootStrap = async () => {
      if (workbench) {
        const LazyComponent = await workbench.loader();
        console.log("I made it!");
        if (LazyComponent) {
          ReactDOM.render(
            <React.Suspense fallback="...">
              <LazyComponent />
            </React.Suspense>,
            document.getElementById("dynamicComponent"),
          );
        }
      }
    };
    bootStrap();
  }, [workbench]);

  return (
    <>
      <h1>App 1</h1>
      <div id="dynamicComponent"></div>
    </>
  );
};

export default App;
