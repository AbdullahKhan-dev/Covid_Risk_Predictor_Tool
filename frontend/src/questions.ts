export const questions : {question:string, type:string, options?: Array<string>} [] = [
    {question: "Enter Age:", type: "AGE"},
    {question: "Select Gender:", type: "SEX", options: ["Male", "Female"]},
    {question: "Is the patient pregnant?", type: "PREGNANT", options: ["Yes", "No"]},
    {question: "Is the patient overweight?", type: "OBESITY", options: ["Yes", "No"]},
    {question: "Does the patient smoke tobacco?", type: "TOBACCO", options: ["Yes", "No"]},
    {question: "Does the patient have Renal Chronic Disease?", type: "RENAL_CHRONIC", options: ["Yes", "No"]},
    {question: "Does the patient have Cardiovascular disease?", type: "CARDIOVASCULAR", options: ["Yes", "No"]},
    {question: "Does the patient have Hipertension?", type: "HIPERTENSION", options: ["Yes", "No"]},
    {question: "Does the patient have Asthama?", type: "ASTHMA", options: ["Yes", "No"]},
    {question: "Does the patient have Chronic obstructive pulmonary disease (COPD)?", type: "COPD", options: ["Yes", "No"]},
    {question: "Does the patient have Diabetes?", type: "DIABETES", options: ["Yes", "No"]},
    {question: "Does the patient have Pneumonia?", type: "PNEUMONIA", options: ["Yes", "No"]},
    {question: "Does the patient have some other disease?", type: "OTHER_DISEASE", options: ["Yes", "No"]},
    {question: "Does the patient take immunosuppresants?", type: "INMSUPR", options: ["Yes", "No"]},
]
