// import logo from './logo.svg';
// import './App.css';
// import  Greet from './greet/greet';
// import Greet2 from './greet/greet2'
// import NoJsx from './greet/nojsx';
// import Message from './greet/message'
// import Fonction from './greet/Fonction'
// import Classe from './greet/Classe';
// import Liaison from './greet/Liaison';
// import ComposantParent from './greet/ComposantParent';
import Liste from './greet/Liste';
import SaluerUser from './greet/saluerUser';


function App() {
  return (
    <div className="App">
      {/* < Greet />
      <h1> Y a quoi</h1>
      < Greet2 name="zana"/>
      < Message name="zana"/>
      <NoJsx name="Monsieur">Un enfant quelconque </NoJsx >
      <Fonction />
      <Classe /><Liaison /> */}
      <SaluerUser />
      {/* <ComposantParent /> */}
      <Liste/>
    </div>
  );
}

export default App;
