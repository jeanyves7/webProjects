from flask import Flask, request, jsonify, render_template
from flask_cors import CORS,cross_origin
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
# from flask.ext.cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/sentiment": {"origins": "http://localhost:3000"}})

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/sentiment', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def ev():
    sent_json = request.get_json(force=True)
    print(sent_json)
    analyzer = SentimentIntensityAnalyzer()
    score = analyzer.polarity_scores(sent_json['action']['payload']['feedback'])

    result = {
        "negative": score['neg'],
        "positive": score['pos'],
        "neutral": score['neu']
    }

    response = jsonify({"success": str(max(result, key=result.get))})
    return response


if __name__ == '__main__':
    app.run(debug=True)
