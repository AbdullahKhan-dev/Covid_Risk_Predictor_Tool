import './App.css';
import {useState} from 'react';
import MyForm from './Form';
import PatientForm from './PatientForm';

function App() {
  const [formData, setFormData] = useState({
    SEX: '',
    AGE: '',
    CLASIFFICATION_FINAL: '',
    PNEUMONIA: '',
    PREGNANT: '',
    DIABETES: '',
    COPD: '',
    ASTHMA: '',
    INMSUPR: '',
    HIPERTENSION: '',
    CARDIOVASCULAR: '',
    OTHER_DISEASE: '',
    RENAL_CHRONIC: '',
    TOBACCO: '',
    OBESITY: ''
  });
  const  handleSubmit = (e:any) => {
		e.preventDefault();
	};

  return (
    <div className="App">
       {/* <MyForm/> */}
       <PatientForm/>
    </div>
    
  );
}

export default App;
