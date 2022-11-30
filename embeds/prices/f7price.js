const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("<:f7:1043953710507769876>Floor 7 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046466678097191022/Wither_Invulnerable.png")
	.addFields(
		{name: "Completion", value: "4m Coins\n5+ Bulk : 3.5m per", inline: true},
		{name: "S Runs", value: "S - 7m Coins\n5+ Bulk : 6.5m per", inline: true},
        {name: "S+ Runs", value: "S - 10m Coins\n5+ Bulk : 9m per", inline: true},

	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });