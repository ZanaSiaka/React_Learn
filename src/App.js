// import logo from './logo.svg';
// import FragmentDemo from './greet/FragmentDemo';
import "./App.css";
import ClickCounterTwo from "./greet/ClickCounterTwo";
import HoverCounterTwo from "./greet/HoverCounterTwo";
import Learn from "./greet/Learn";
import User from "./greet/User";
import {Router, Routes, Route} from 'react-router-dom'
// import UpdateComponent from './greet/WithCounter';
// import HoverCounter from './greet/HoverCounter';
// import ClickCounter from './greet/ClickCounter';
// import ErrorBoundary from './greet/ErrorBoundary';
// import Hero from './greet/Hero';
// import PortalsDemo from './greet/PortalsDemo';
// import FocusInput from './greet/FocusInput';
// import ForwadRefParent from './greet/ForwadRefParent';
// import DemoRef from './greet/DemoRef';
// import ComposantParentPur from './greet/ComposantParentPur';
// import ComposantPur from './greet/ComposantPur';
// import FragmentTable from './greet/FragmentTable';
// import UpdateA from './greet/UpdateA';
// import LifeCycleA from './greet/LifeCycleA';
// import  Greet from './greet/greet';
// import Greet2 from './greet/greet2'
// import NoJsx from './greet/nojsx';
// import Message from './greet/message'
// import Fonction from './greet/Fonction'
// import Classe from './greet/Classe';
// import Liaison from './greet/Liaison';
// import ComposantParent from './greet/ComposantParent';
// import Formulaire from './greet/formulaire';
// import Liste from './greet/Liste';
// import SaluerUser from './greet/saluerUser';

function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<ClickCounterTwo/>} />
          <Route path="/learn" element={<Learn/>} />
        </Routes>
      {/* <Greet/>
      <h1> Y a quoi</h1>
      < Greet2 name="zana"/>
      < Message name="Zana"/>
      <NoJsx name="Monsieur">Un enfant quelconque </NoJsx >
      <Fonction />
      <Classe /><Liaison />
      <SaluerUser /> */}
      {/* <ComposantParent /> */}
      {/* <Liste/> */}
      {/* <Formulaire/> */}
      {/* <LifeCycleA /> */}
      {/* <UpdateA /> */}
      {/* <FragmentDemo /> */}
      {/* <FragmentTable /> */}
      {/* <ComposantParentPur /> */}
      {/* <DemoRef /> */}
      {/* <FocusInput /> */}
      {/* <ForwadRefParent /> */}
      {/* <PortalsDemo />   */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
        <Hero heroName="Superman"/>
        <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <ClickCounter name='Ilham' /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Zana" : "Guest")} /> */}
    </>
  );
}

export default App;
