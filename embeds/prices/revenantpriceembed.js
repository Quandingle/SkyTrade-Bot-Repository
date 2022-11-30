const { EmbedBuilder } = require("@discordjs/builders")

module.exports = new EmbedBuilder()
	.setTitle("Revenant Carry Prices")
    .setDescription("Tier 1 : 10k Skyblock Coins\nTier 2 : 25k Skyblock Coins\nTier 3 : 50k Skyblock Coins\nTier 4 : 100k Skyblock Coins\nTier 5 : 300k Skyblock Coins")
	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046457235989090324/Revenant_Horror.png")
    .setFooter({ text: 'SkyTrade', iconURL: 'https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png' });