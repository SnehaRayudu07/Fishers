# from flask import Flask, request, jsonify, render_template
# import pickle
# from feature_extraction import FeatureExtraction  # Import your FeatureExtraction class

# app = Flask(__name__, template_folder='main/templates')

# # Load the trained model from the pickle file
# with open('main/Classifier.pkl', 'rb') as model_file:
#     model = pickle.load(model_file)  

# @app.route('/')
# def home():
#     # Render the main HTML template
#     return render_template('main/templates/fishers.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()
#         url = data['url']  # Assuming the URL is sent as 'url' in the JSON data

#         # Extract features using your FeatureExtraction class
#         feature_extractor = FeatureExtraction(url)
#         features = feature_extractor.getFeaturesList()

#         # Perform predictions using your model
#         predictions = model.predict([features])  # Assuming your model accepts a list of features

#         # Return the predictions as JSON response
#         return jsonify({'predictions': predictions.tolist()})
#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True)
  
from flask import Flask, request, jsonify, render_template
import pickle
from feature_extraction import FeatureExtraction  # Import your FeatureExtraction class

# app = Flask(__name__, template_folder='templates')
app = Flask(__name__, template_folder='templates', static_folder='static')

# Load the trained model from the pickle file
with open('main/Classifier.pkl', 'rb') as model_file:
    model = pickle.load(model_file)  

@app.route('/')
def home():
    # Render the main HTML template
    return render_template('fishers.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        url = data['url']  # Assuming the URL is sent as 'url' in the JSON data

        # Extract features using your FeatureExtraction class
        feature_extractor = FeatureExtraction(url)
        features = feature_extractor.getFeaturesList()

        # Perform predictions using your model
        predictions = model.predict([features])  # Assuming your model accepts a list of features

        # Return the predictions as JSON response
        return jsonify({'predictions': predictions.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
