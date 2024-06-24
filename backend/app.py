from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
model = None
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

 
@app.route('/')
def hello():
    global model
    if model is None:
        load_model()
    return 'Hello, World!'

# Load the pickled model
def load_model():
    global model
    with open('./covid_logit_model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("model finished loading")
    return model

@app.route('/predict', methods=['POST'])
def predict():
    global model
    if model is None:
        load_model()

    data = request.json 
    print(data)
    model_input = np.array(list(data.values())).reshape(-1)
    print(f"model input: {model_input}")
    prediction = model.predict(model_input)  # Assuming the model expects a list of inputs
    
    # Return the prediction as JSON
    return jsonify({'prediction': prediction[0]*100})

if __name__ == '__main__':
    app.run(debug=True, port=3001)
    load_model()
