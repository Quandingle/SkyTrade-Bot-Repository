const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle('Carrier Requirements')
	.setThumbnail('https://cdn.discordapp.com/attachments/935978774334410833/1038118556765802666/SkyTradeGphoto.png')
	//slayer reqs
	.addFields(
		{name: "\u200b", value: "<:gatekeeper:923333440781287454><@&1038111948803424396><:gatekeeper:923333440781287454>"},
		{name: "Dungeon Requirements", value: "F1-4 Carrier --> Catacombs level 20+\nF5 Carrier --> Catacombs level 24+\nF6 Carrier --> Catacombs level 30+\nF7 Carrier --> Solo Catacombs level 37+", inline: false},
	)
