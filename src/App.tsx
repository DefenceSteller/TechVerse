// import { Route, Routes } from "react-router-dom";

// import IndexPage from "@/pages/index";
// import IndustriesPage from "@/pages/industries";
// import PricingPage from "@/pages/pricing";
// import OurExpertiesPage from "@/pages/ourExperties";
// import AboutPage from "@/pages/about";

// function App() {
//   return (
//     <Routes>
//       <Route element={<IndexPage />} path="/" />
//       <Route element={<IndustriesPage />} path="/industries" />
//       <Route element={<PricingPage />} path="/pricing" />
//       <Route element={<OurExpertiesPage />} path="/ourExperties" />
//       <Route element={<AboutPage />} path="/about" />
//     </Routes>
//   );
// }

// export default App;




// import IndexPage from "@/pages/index";
// import IndustriesPage from "@/pages/industries";
// //import PricingPage from "@/pages/pricing";
// import OurExpertiesPage from "@/pages/ourExperties";
// import ContactPage from "@/pages/contact";
// import { Navbar } from "@/components/navbar";
// import Footer from "@/components/footer";
// import ScrollUpButton from "./components/scrollUpButton";
// import Background from "./components/background";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <IndexPage id="home" />
//       <IndustriesPage id="industries" />
//       {/* <PricingPage /> */}
//       <OurExpertiesPage id="ourExperties" />
//       <ContactPage id="contact" />
//       <Footer />
//       <ScrollUpButton />
//     </div>
//   );
// }

// export default App;


import IndexPage from "@/pages/index";
import IndustriesPage from "@/pages/industries";
import ProjectPage from "@/pages/projects";
import OurExpertiesPage from "@/pages/ourExperties";
import ContactPage from "@/pages/contact";
import ServicesPage from "./pages/services";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollUpButton from "./components/scrollUpButton";
import Background from "./components/background";

function App() {
  return (
    <>
    <Background>
      <Navbar />
      <main className="flex flex-col">
        <IndexPage id="home" />
        <IndustriesPage id="industries" />
        <OurExpertiesPage id="ourExperties" />
        <ProjectPage id="projects" />
        <ServicesPage id="services" />
        <ContactPage id="contact" />
      </main>
      <Footer />
      <ScrollUpButton />
    </Background>
    </>
  );
}

export default App;