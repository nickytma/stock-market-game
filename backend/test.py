import yfinance as yf
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/stock-data')
def get_stock_data():
    # Retrieve the stock data using yfinance or any other method
    # ...
    # Define the ticker symbol
    ticker_symbol = "DJIA"  # Apple Inc.

    # Retrieve the stock data
    stock_data = yf.download(ticker_symbol, start="2023-06-01", end="2023-07-01")

    # Print the stock data
    print("data sent")
    
    # Convert the stock_data to a JSON response
    json_data = stock_data.to_json()

    # Return the JSON response
    return jsonify(json_data)

if __name__ == '__main__':
    app.run()
