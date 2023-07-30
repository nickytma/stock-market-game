import yfinance as yf
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/stock-data')
def get_stock_data():
    
    ticker1 = "^GSPC" 
    ticker2 = "^DJI"
    ticker3 = "^IXIC"

    data1 = yf.download(ticker1, start="2020-07-03", end="2021-07-03")
    data2 = yf.download(ticker2, start="2020-07-01", end="2021-07-03")
    data3 = yf.download(ticker3, start="2020-07-01", end="2021-07-03")

    print("data sent")

    json_data1 = data1.to_json()
    json_data2 = data2.to_json()
    json_data3 = data3.to_json()

    json_data = {
        "S": json_data1,
        "D": json_data2,
        "N": json_data3
    }

    response = jsonify(json_data)

    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')

    return response

if __name__ == '__main__':
    app.run()
