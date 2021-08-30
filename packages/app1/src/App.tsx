import React from "react";

function App() {
  return (
    <div>
      App1
      <a
        onClick={() => {
          history.pushState(null, null, "/app2");
        }}
      >
        To App2
      </a>
    </div>
  );
}

export default App;
