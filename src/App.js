import ProfileCard from './carddemo/ProfileCard';
import DemoClass1 from './components/DemoClass1';
import DemoClass2 from './components/DemoClass2';
import DemoFunction1 from './components/DemoFunction1';
import DemoFunction2 from './components/DemoFunction2';
import Demo1 from './hooksdemo/Demo1';
import Demo2 from './hooksdemo/Demo2';
import TestClass1 from './propsdemo/TestClass1';
import TestClass2 from './propsdemo/TestClass2';
import TestClass3 from './propsdemo/TestClass3';
import TestFunction1 from './propsdemo/TestFunction1';
import TestFunction2 from './propsdemo/TestFunction2';
import TestFunction3 from './propsdemo/TestFunction3';
import DemoState1 from './statedemo/DemoState1';
import DemoState2 from './statedemo/DemoState2';
import DemoState3 from './statedemo/DemoState3';

//import logo from './logo.svg';
//import './App.css';
import ConditionalDemo1 from './conditionalrendering/ConditionalDemo1';
import ConditionalDemo2 from './conditionalrendering/ConditionalDemo2';
import ConditionalDemo3 from './conditionalrendering/ConditionalDemo3';
import ConditionalDemo4 from './conditionalrendering/ConditionalDemo4';
import EventDemo1 from './formhandling/EventDemo1';
import EventDemo2 from './formhandling/EventDemo2';
import EventDemo3 from './formhandling/EventDemo3';

function App() 
{
  const location = "RANCHI"
  const student = {"id":101, "name":"ram", "status":"true"}
  const cities = ["KOLKATA","VJA","VIJAG","RNC","BLR"]
  const products= ["Gadgets", "Clothes","Toys","Books"]

  return (
    <div className="App">
      <h3 align='center'>My First React App</h3>
      <DemoFunction1/>
      <DemoFunction2/>
      <DemoClass1/>
      <DemoClass2/>

      <ProfileCard/>
      <TestFunction1 id="101" name="KLU" age="45.6"/>
      <TestFunction2 location={location} student={student} />
      <TestFunction3 mycities={cities} />
      <TestClass1 id="100" name="KLEF"/>
      <TestClass2 location={location} student={student}/>
      <TestClass3 myproducts={products} />


      <DemoState1/>
      <DemoState2/>
      <DemoState3/>


      {/* <Demo1/>
      <Demo2/> */}

      <ConditionalDemo1/>
      <ConditionalDemo2/>
      <ConditionalDemo3/>
      <ConditionalDemo4/>


      <EventDemo1/>
      <EventDemo2/>
      <EventDemo3/>
    </div>
  );
}

export default App;
