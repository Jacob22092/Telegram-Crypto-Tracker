const TelegramBot = require('node-telegram-bot-api');
const ccxt = require('ccxt');

// Set your Telegram API token and exchange API keys
const TELEGRAM_API_TOKEN = 'YOUR_TELEGRAM_API_TOKEN';
const API_KEY = 'YOUR_API_KEY';
const API_SECRET = 'YOUR_API_SECRET';

// Set the desired exchange and API configuration
const exchange = new ccxt.binance({
  apiKey: API_KEY,
  secret: API_SECRET,
});

// Create the Telegram bot
const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: true });

// Function to check cryptocurrency price
bot.onText(/\/price (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let symbol = match[1].toUpperCase();

  // If the symbol does not contain a "/", add "/USDT" by default
  if (!symbol.includes('/')) {
    symbol = `${symbol}/USDT`;
  }

  try {
    const ticker = await exchange.fetchTicker(symbol);
    const price = ticker.ask;
    bot.sendMessage(chatId, `The current price for ${symbol} is ${price.toFixed(2)} USD.`);
  } catch (e) {
    bot.sendMessage(chatId, `Unable to fetch the price for ${symbol}. Please make sure the provided symbol is correct.`);
    console.error(e);
  }
});
