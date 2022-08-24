import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input  from './components/Input/Input';
import Ul from './components/Ul/Ul';

function App() {
  const title = 'react lab 1'
  


  const handleOk = () => {
   alert('Found')
  }
 
  return (
   <div className='container'>
    <h1 className='title'>{title}</h1>
    <Input borderColor='#97ca20' borderRadius='radius' background-color='#9f0993'></Input>
    <Ul></Ul>
    <Button size='small' color='#9f0993' onClick={handleOk}>Ok</Button>
  
   </div>
  );
}

export default App;
