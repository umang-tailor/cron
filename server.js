const cron = require("node-cron");
let shell = require("shelljs");
const { Webhook } = require("discord-webhook-node");
const { date } = require("zod");
const hook = new Webhook(
  ""
);
// const { Client, Intents } = require('discord.js');

// const client = new Client({
// 	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
// });


const mes ="Have some water";
const sent="Time to drink";
const arr = [

  { id: 1, sen:sent/*"Good morning ,have nice day"*/},
  { id: 2, sen: /*mes*/ "Lunch time" },
  { id: 3, sen: /*sent*/"Let's get back to work" },
  { id: 4, sen: "Have you remembered to drink water?" },
  { id: 5, sen: "tea break" },
  { id: 6, sen: sent/*"Let's get back to work"*/ },
  { id: 7, sen: "Finish work" },
  { id: 8, sen: "tea break" },
  
];

function getISTDate(){
    var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

return ISTTime;

}

cron.schedule("0 0,30 9-18 * * MON,TUE,WED,THU,FRI,SAT *", function (){
    var ISTTime = getISTDate();
    switch(ISTTime.getHours()){
        case 9:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Good Morning, Have a nice day")
            }
            break;
        case 10:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Have some water")
            }
            break;
        case 11:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Time to drink")
            }
            break;
        case 12:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Have you remembered to drink your water?")
            }
            break;
        case 13:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Lunch time!")
            }
            break;
        case 14:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Let's get back to work")
            }
            break;
        case 15:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Have some water")
            }
            break;
        
        
        case 16:
            if(ISTTime.getMinutes() == 0){
                hook.send("Time to drink and have some snacks")
            } else if(ISTTime.getMinutes() == 30){
                hook.send("Let's get back to work")
            }
            break;
         case 17:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Have you remembered to drink your water?")
            }
            break;
        case 18:
            
            if(ISTTime.getMinutes() == 0){
                hook.send("Have some water")
            }
            break;
    }
    
});

 hook.send("Hello")
.then(() => console.log('Sent webhook successfully!'))
.catch(err => console.log(err.message));

