const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("<:f5:1043953482362794094>Floor 5 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046466677048606770/Livid.png")
	.addFields(
		{name: "Completion", value: "300k Coins\n5+ Bulk : 250k per", inline: true},
		{name: "S Runs", value: "S - 500k Coins\n5+ Bulk : 450k per", inline: true},
        {name: "S+ Runs", value: "S - 700k Coins\n5+ Bulk : 580k per", inline: true},

	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });