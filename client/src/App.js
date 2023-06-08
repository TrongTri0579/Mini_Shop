import "./App.css";
import React from "react";
import MainPage from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <React.Fragment>
      <section>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <MainPage />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
