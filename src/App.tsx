import React from "react";
import { Header } from "./views/header";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.mainAppContainer}>
      <Header />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
