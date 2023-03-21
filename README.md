# Telegram Crypto Tracker

A simple Telegram bot that provides current cryptocurrency prices using the [CCXT](https://github.com/ccxt/ccxt) library.

## Features

- Fetch current cryptocurrency prices from Binance
- Respond to `/price` command with the requested cryptocurrency symbol

## Installation

1. Clone this repository or download the source code.
2. Install the required dependencies:

```
npm install node-telegram-bot-api ccxt
```

3. Set your Telegram API token, Binance API key, and Binance API secret in the `index.js` file:

```javascript
const TELEGRAM_API_TOKEN = 'YOUR_TELEGRAM_API_TOKEN';
const API_KEY = 'YOUR_API_KEY';
const API_SECRET = 'YOUR_API_SECRET';
```

4. Run the bot:

```
node index.js
```

## Usage

To use the bot, simply send a message with the `/price` command followed by the cryptocurrency symbol (e.g., `/price BTC/USDT`).

Example:

```
/price BTC
```

The bot will automatically append `/USDT` if a trading pair is not provided.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
