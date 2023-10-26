# Whatsapp-scrapper
 
1. Open web.whatsapp.com and open the group info that you want to scrape.
2. Open all members of the group list and scroll in the end.
3. open browser console by clicking on inspect.
4. Open the paste.js file from this repository and copy all the code.
5. Paste this whole code in the Console tab inside inspect and press `ENTER` key.
6. It will download a txt file.

In the txt file you will find all the phone numbers of the group in a list inside the file.
covert this list of phone numbers in form of JSON data and save it in phoneNumbers.json file.
initialise a package.json file in your whatsapp-scrapper 

npm init -y

now install whatsapp-bot.js in your package.json file

npm install whatsapp-web.js

mention "whatsapp-bot.js" in your main of package.json file
now run whatsapp-bot.js code in your terminal

node whatsapp-bot.js

now this will generate a QR , scan this QR on your device to link this with your whatsapp .
As the device is linked , a message is displayed on terminal "client is ready".
and the phone numbers mentioned in your json file receives a message written in code of whatsapp-bot
