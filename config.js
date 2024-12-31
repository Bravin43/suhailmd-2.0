const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_34_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOczhrQUxhQWI3TmJrak54d3cwZzc2TjJFSDhUU0ZHL2JTeGhMQVdSczF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRTdFLWxURFNUMlJaSVFXbTJ6WUx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3OTEzMDk3LWQxZDUtNGNhOS05YjQ2LWEzZTRjMDRkZjRiNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyMjYsXG4gICAgICAxMzcsXG4gICAgICAyNDAsXG4gICAgICAxMjQsXG4gICAgICAxODUsXG4gICAgICAyMSxcbiAgICAgIDE3LFxuICAgICAgMTYzLFxuICAgICAgODQsXG4gICAgICAxMTgsXG4gICAgICAyMzMsXG4gICAgICAxMTMsXG4gICAgICAxNjgsXG4gICAgICAxODEsXG4gICAgICAyNDAsXG4gICAgICA4MyxcbiAgICAgIDEwOCxcbiAgICAgIDUzLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDI0NixcbiAgICAgIDMwLFxuICAgICAgMTQzLFxuICAgICAgMTA2LFxuICAgICAgNSxcbiAgICAgIDIxMCxcbiAgICAgIDExNyxcbiAgICAgIDE2MyxcbiAgICAgIDI0MCxcbiAgICAgIDIwNixcbiAgICAgIDgyLFxuICAgICAgMjI0LFxuICAgICAgMjMzLFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICA2NyxcbiAgICAgIDQwLFxuICAgICAgMTQ1LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEo2VjFCRlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDQzOTQxNjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZldGVyYW5cIixcbiAgICBcImxpZFwiOiBcIjE4Njk2ODc1MTI3MTk1NToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcVg0dU1GRUwvSno3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkI5RElqN2lkbk04L2pvOEJCVnZyK2lsbDdGRnRjT0JyS0M0UjdLbzRxU1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTFla1ZzK0RJejB6VjB4RThTQWJiVzRmSmZmT2oxNjVmUEhiVkw3d1QrWEY4YTBjcjhVQjBMOXQweHJzeVp6Sk4vOU5SUENhTG9tSTJRb0p2Y3AxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1o3WG1mNVBySm5hblpWaFY0L2hXSzF4MlNwMkxFcUs3Nno0VVZRZGdmeGNzMEJpQTd3MVJTSitqTUlEempIYkdOMnF0TlRJZitHVGNHZFo0V3hXaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwNDM5NDE2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjQ4NDUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
