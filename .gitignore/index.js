const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Commande: *help");
    console.log("Connected")
});

bot.login("NDgyNTI0ODI1MDQ3NDAwNDUx.DmGKDw.7bJiGoHvR035RxpmO12XMC7bptI");


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour :D");
        console.log("Commande Salut effectué");
    }
    if (message.content === "Jn'ique vos darone"){
        message.reply("Eh TA MERE C'EST UN CASIER");
        console.log("Commande Salut effectué");
    }
    if (message.content === ":c"){
        message.reply("NEINNNNNNNNNN");
        console.log("Commande Salut effectué");
    }
    if (message.content === "<========3"){
        message.reply("Moi je t'aime pas FILS DE PUTE");
        console.log("Commande Salut effectué");
    }
    if (message.content === "salope"){
        message.reply("J'ai une spécial dedicace pour le batard de ses morts");
        console.log("Commande Salut effectué");
    }
    if (message.content === "aie"){
        message.reply("coup dur pour guillaume");
        console.log("Commande Salut effectué");
    }
});
