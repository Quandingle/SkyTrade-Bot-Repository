const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Green")
	.setTitle("<:f6:1043954369009299626>Floor 6 Carry Prices")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046471882951630898/f6.png")
	.addFields(
		{name: "Completion", value: "550k Coins\n5+ Bulk : 480k per", inline: true},
		{name: "S Runs", value: "S - 750k Coins\n5+ Bulk : 650k per", inline: true},
        {name: "S+ Runs", value: "S - 1.1m Coins\n5+ Bulk : 950k per", inline: true},

	)
	.setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });