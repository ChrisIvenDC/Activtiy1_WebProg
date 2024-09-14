import './App.css';
import UserProfile from './UserProfile';
import "./Customstyle.css";

function App() {
  return (
      
    <div class="Main"> 
      
      <UserProfile name="Chris Cruz" age={20} location="Malolos"/>
      <UserProfile name="Brin Jimenez" age={20} location="Quezon"/>
      <UserProfile name="Ryan Arias" age={20} location="Pampanga"/>
      <UserProfile name="Fiona Castillon" age={19} location="Rizal"/>
    </div>
);
}

export default App;
