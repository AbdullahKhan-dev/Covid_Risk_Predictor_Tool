# COVID-19 Risk Factor Prediction Tool

This repository contains a simple tool powered by machine learning to determine a patient's risk factor for COVID-19, using various pieces of information from their medical history, including any past or current illnesses.

## Overview

The tool was built for a Hackathon project at Virginia Commonwealth University. An extensive COVID-19 dataset was used to train a logistic regression model to predict the probability of a patient's COVID-19 symptoms becoming severe (the "risk factor"). The project was awarded a prize for performing the best data analysis and overall won the 3rd place award in the 2024 BioInf Hackathon at Virginia Commonwealth University.



https://github.com/AbdullahKhan-dev/Covid_Risk_Predictor_Tool/assets/58305633/c0c58273-179e-4d27-9985-b61ec3e117bd




## Technology Stack

- **Machine Learning Model:** Logistic Regression
- **Frontend:** React
- **Backend:** Flask (Python)
- **API:** REST

## How It Works

1. **Data Collection:** The React application prompts the user with a series of questions to gather relevant medical history and current health status.
2. **API Request:** The collected data is sent through a REST API to a backend server built using Flask.
3. **Model Prediction:** The backend server communicates with the serialized machine learning model to generate predictions based on the input data.
4. **Result Display:** The prediction, representing the patient's COVID-19 risk factor, is then displayed to the user on the frontend.

## Features

- User-friendly React interface for data input
- REST API for seamless communication between frontend and backend
- Logistic regression model trained on extensive COVID-19 data
- Real-time prediction of COVID-19 symptom severity risk

## Project Highlights

- **Award:** Best Data Analysis and 3rd place overall in the 2024 BioInf Hackathon at Virginia Commonwealth University
- **Dataset:** Utilized a comprehensive dataset to train and validate the logistic regression model
- **Deployment:** Model served through a scalable and efficient backend architecture

