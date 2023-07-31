import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Header } from "./views/header";
import styles from "./app.module.css";
import { Contact } from "./views/contact";
import { Tools } from "./views/tools";

const App = () => {
  return (
    <div className={styles.mainAppContainer}>
      <Router>
        <Header />
        <Routes>
          <Route path="/profile" Component={Contact} />
          <Route path="/tools" Component={Tools} />
          <Route path="/portfolio" Component={Contact} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
