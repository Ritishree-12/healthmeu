
import './App.css'
import LabLogIn from './authentication/LabLogIn';
import Navbar from './components/Navbar';

function App() {
  return (
 <>        
<Navbar/>
{/* <Navbar/> */}
<div className='container'>
  <LabLogIn heading="Welcome to Lab"/>
</div>

 </>
  );
}

export default App;
