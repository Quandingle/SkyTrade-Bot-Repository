const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("<:f4:1043953578160693268>Floor 4 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046469128493465630/759298333608378388.png")
	.addFields(
		{name: "Completion", value: "400k Coins\n5+ Bulk : 350k per", inline: true},
		{name: "S Runs", value: "S - 550k Coins\n5+ Bulk : 500k per", inline: true},

	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });