import './App.css';
import { Greeting } from './components/Greeting';
import { Message } from './components/Message'

function App() {
  return (
    <>
      <Greeting name="Іван!"/>
      <Message text="'Незначні зміни, значні результати!'"/>
    </>
  );
}

export default App;
