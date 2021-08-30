import React from "react";

function App() {
  return (
    <div>
      App2{" "}
      <a
        onClick={() => {
          history.pushState(null, null, "/app1");
        }}
      >
        To App1
      </a>
    </div>
  );
}

export default App;
