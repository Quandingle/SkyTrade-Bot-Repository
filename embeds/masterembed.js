const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
.setColor("Red")
.setTitle("Master Mode Requirements")
.addFields(
    {name: "\u200b", value: "<:gatekeeper:923333440781287454><@&1038112266400313435><:gatekeeper:923333440781287454>"},
    {name: "Master Mode Requirements", value: "<@&1010479806154031154> --> Catacombs 32+\n<@&1010479787933962290> --> Catacombs 35+\n<@&1010479786335928380> --> Catacombs 39+\n<@&1010479783244746854> --> Catacombs 48+\n<@&1010479783244746854> --> Catacombs 44+\n<@&1010479779113353236> --> Catacombs 47 & 20k secrets\n<@&1010479776835838047> --> Catacombs 49 & 30k secrets", inline: false },
)
    .setTimestamp()
	.setFooter({ text: "Thank you JerryRune#6119, mineralz#0717, Mr_EST#2169 for making this possible, and BananenMan09#4615 for making the bot!", iconURL: "https://i.imgur.com/OepjAsh.png"})

    