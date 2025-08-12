import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Header from "./components/Header";
import styles from "./styles/App.module.css";
import GoToTop from "./components/GoToTop";
import Footer from "./components/Footer";

const sections = [
  { id: "about", Component: About, alt: false },
  { id: "projects", Component: Projects, alt: true },
  { id: "skills", Component: Skills, alt: false },
  { id: "experience", Component: Experience, alt: true },
  { id: "education", Component: Education, alt: false },
  { id: "extracurricular", Component: Extracurricular, alt: true },
  { id: "contact", Component: Contact, alt: false },
];

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      {sections.map(({ id, Component, alt }) => (
        <section
          key={id}
          id={id}
          className={`${styles.section} ${alt ? styles.sectionAlt : ""} ${
            id === "contact" ? styles.contact : ""
          }`.trim()}
        >
          <Component />
        </section>
      ))}
      <GoToTop />
      <Footer />
    </div>
  );
};

export default App;
