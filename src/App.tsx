import { useState } from "react";
import Theme from "./components/theme/Theme";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Router />
      </Theme>
    </Provider>
  );
}

export default App;
