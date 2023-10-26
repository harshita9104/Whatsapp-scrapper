const { Client } = require("whatsapp-web.js");
const client = new Client();
const qrcode = require("qrcode-terminal");
const fs = require("fs");

// Add this for QR format in the terminal
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");

  // Read phone numbers from a JSON file
  const phoneNumbersJson = fs.readFileSync("phoneNumbers.json");
  const phoneNumbersData = JSON.parse(phoneNumbersJson);
  const phoneNumbers = phoneNumbersData.numbers;

  // Your message
  const text = "Hey John";

  phoneNumbers.forEach((number) => {
    // Getting chatId from the number.
    // Remove "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";

    // Sending the message
    client.sendMessage(chatId, text);
  });
});

client.initialize();
