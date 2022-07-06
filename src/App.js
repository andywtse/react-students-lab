import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './Components/StudentList/StudentList';
import { studentList } from './data';

function App() {
  return (
    <div className='Card-Wrapper'>
      <StudentList studentList={studentList}/>
    </div>
  );
}

export default App;
