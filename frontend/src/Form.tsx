import { useState } from 'react';
import Select from 'react-select'
import { options_gender, options_yes_no } from './options';
import axios from 'axios';
import Modal from './Modal';

export default function MyForm() {
    const [CLASIFFICATION_FINAL, setCLASIFFICATION_FINAL] = useState(3);
    const [PNEUMONIA, setPNEUMONIA] = useState(2);
    const [PREGNANT, setPREGNANT] = useState(2);
    const [DIABETES, setDIABETES] = useState(2);
    const [COPD, setCOPD] = useState(2);
    const [ASTHMA, setASTHMA] = useState(2);
    const [INMSUPR, setINMSUPR] = useState(2);
    const [HIPERTENSION, setHIPERTENSION] = useState(2);
    const [CARDIOVASCULAR, setCARDIOVASCULAR] = useState(2);
    const [OTHER_DISEASE, setOTHER_DISEASE] = useState(2);
    const [RENAL_CHRONIC, setRENAL_CHRONIC] = useState(2);
    const [TOBACCO, setTOBACCO] = useState(2);
    const [OBESITY, setOBESITY] = useState(2);
    const [sex, setSex] = useState(1)
    const [age, setage] = useState(23)
    const [apiFetched, setApiFetched] = useState(false)
    const [message, setMessage] = useState("")

      
      
      const handleSubmit = (e:any) => {
        e.preventDefault();
        const payload = {
                "SEX": sex,
                "AGE": age,
                "CLASIFFICATION_FINAL": 3,
                "PNEUMONIA": PNEUMONIA,
                "PREGNANT": PREGNANT,
                "DIABETES": DIABETES,
                "COPD": COPD,
                "ASTHMA": ASTHMA,
                "INMSUPR": INMSUPR,
                "HIPERTENSION": HIPERTENSION,
                "CARDIOVASCULAR": CARDIOVASCULAR,
                "OTHER_DISEASE": OTHER_DISEASE,
                "RENAL_CHRONIC": RENAL_CHRONIC,
                "TOBACCO": TOBACCO,
                "OBESITY": OBESITY
              }
        console.log(payload)
        
        axios.post('http://localhost:3001/predict', payload)
          .then(function (response:any) {
            setApiFetched(true)
            if(response.prediction == 1){
                console.log("You are a high risk covid patient")
                setMessage("You are a high risk covid patient!!!")
            }
            else {
                console.log("You are a low risk covid patient")
                setMessage("You are a low risk covid patient!!!")
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };


    return (
        <>
        <form onSubmit={handleSubmit} >
            <div className="space-y-12" style={{width:'100%'}}>
                <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Enter Patient's Information</h2>
                    <div>
                        <div className=' w-6/12'>
                            <label>Select Gender</label>
                            <Select name='SEX' options= {options_gender} onChange= {(e:any)=>setSex(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Enter Age</label> <br/>
                            <input name="age" onChange={(e:any)=>setage(parseInt(e.target.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Is the patient pregnant?</label>
                            <Select name='Pregnant' options= {options_yes_no} onChange= {(e:any)=>setPREGNANT(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Is the patient obese?</label>
                            <Select name='Obsesity' options= {options_yes_no} onChange= {(e:any)=>setOBESITY(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient smoke tobacco?</label>
                            <Select name='Tobacco' options= {options_yes_no} onChange= {(e:any)=>setTOBACCO(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Renal Chronic Disease?</label>
                            <Select name='RenalDisease' options= {options_yes_no} onChange= {(e:any)=>setRENAL_CHRONIC(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Cardiovascular disease?</label>
                            <Select name='Cardiovascular' options= {options_yes_no} onChange= {(e:any)=>setCARDIOVASCULAR(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Hipertension?</label>
                            <Select name='Hipertension' options= {options_yes_no} onChange= {(e:any)=>setHIPERTENSION(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Asthama?</label>
                            <Select name='Asthama' options= {options_yes_no} onChange= {(e:any)=>setASTHMA(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Chronic obstructive pulmonary disease (COPD)?</label>
                            <Select name='COPD' options= {options_yes_no} onChange= {(e:any)=>setCOPD(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Diabetes?</label>
                            <Select name='Diabetes' options= {options_yes_no} onChange= {(e:any)=>setDIABETES(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have Pneumonia?</label>
                            <Select name='Diabetes' options= {options_yes_no} onChange= {(e:any)=>setPNEUMONIA(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient have some other disease?</label>
                            <Select name='OtherDisease' options= {options_yes_no} onChange= {(e:any)=>setOTHER_DISEASE(parseInt(e.value))}/>
                        </div>
                        <div className=' w-6/12'>
                        <label>Does the patient take immunosuppresants?</label>
                            <Select name='INMSUPR' options= {options_yes_no} onChange= {(e:any)=>setINMSUPR(parseInt(e.value))}/>
                        </div>

                    </div>
                </div>
            </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Submit
                    </button>
                </div>
        </form>
        <Modal
            visible = {apiFetched}
            message = {message}
        />
        </>
    )
}