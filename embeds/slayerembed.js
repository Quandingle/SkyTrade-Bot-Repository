const Discord = require('discord.js')
const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
	.setColor("Purple")
	.setTitle("Slayer Requirements")
	.addFields(
		{name:"\u200b", value: "<:aatrox:923335694682845245><@&1038112092462514356><:aatrox:923335694682845245>"},
		{name: "\u200b", value: "<:rev_horror:923331013319467008><@&1010478625541337161><:rev_horror:923331013319467008>"},
		{ name: 'Zombie', value: 'T1: Zombie Slayer Lvl 2, Combat ⚔️:15\nT2: Zombie Slayer Lvl 3, Combat ⚔️:20\nT3: Zombie Slayer Lvl 4, Combat ⚔️:23\nT4: Zombie Slayer Lvl 6, Combat ⚔️:25\nT5: Zombie Slayer Lvl 7, Combat ⚔️:30', inline: false},
		{name: "\u200b", value: "<:sven:994691000670888016><@&1010479031751278684><:sven:994691000670888016>"},
		({ name: 'Wolf', value: 'T1: Wolf Slayer Lvl 2, Combat ⚔️ :20\nT2: Wolf Slayer Lvl 3, Combat ⚔️ :22\nT3: Wolf Slayer Lvl 5, Combat ⚔️ :24\nT4: Wolf Slayer Lvl 6, Combat ⚔️ :26', inline: false }),
		{name: "\u200b", value: "<:tara:923331175525810216><@&1010478813727182878><:tara:923331175525810216>"},
		{ name: 'Spider', value: 'T1: Spider Slayer Lvl 4, Combat ⚔️ :25\nT2: Spider Slayer Lvl 5, Combat ⚔️ :26\nT3: Spider Slayer Lvl 6, Combat ⚔️ :27\nT4: Spider Slayer Lvl 6, Combat ⚔️:30', inline: false },
		{name: "\u200b", value: "<:voidgloom:923330782683078706><@&1010479148310999040><:voidgloom:923330782683078706>"},
		({ name: 'Enderman', value: 'T1: Eman Slayer Lvl 3, Combat ⚔️: 25\nT2: Eman Slayer Lvl 5, Combat ⚔️: 35\nT3: Eman Slayer Lvl 6, Combat ⚔️: 40\nT4: Eman Slayer Lvl 7, Combat ⚔️: 45', inline: false }),
	)
	.setTimestamp()
	.setFooter({ text: "Thank you JerryRune#6119, mineralz#0717, Mr_EST#2169 for making this possible, and BananenMan09#4615 for making the bot!", iconURL: "https://i.imgur.com/OepjAsh.png"})