import './App.css';
import EmailForm from './components/EmailForm';
import EmailRestAPI from './components/EmailRestAPI';
import ModalAddStudents from './ModalAddStudents';



function App() {
  return (
    <div className="App">
      <h1>Send Email from React App using EmailJS</h1>
      <ModalAddStudents />
    </div>
  );
}

export default App;