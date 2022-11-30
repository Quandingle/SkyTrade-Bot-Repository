const {EmbedBuilder } = require('discord.js');


module.exports = new EmbedBuilder()
.setTitle("SkyTrade Rules")
.setThumbnail("https://cdn.discordapp.com/attachments/1038458458946682911/1043890522265227304/PSX_20221118_072801.png")
.addFields(
	{name:"Be respectfull to others.", value:"Treat everyone the same, also, if you have personal beef with someone, DM with that person, its way better for the community!"},
	{name:"No Spamming/Flooding", value:"If you are caught spamming/flooding, it **will result in a timeout or mute**! Also, keep in mind, That if you Spam frequently you will get Banned!"},
	{name:"Direct Threats & Joke Threats", value:"Threating other users to DDoS, kill them, DoX, abuse and other Threats are not allowed and strongly prohibited on SkyTrade. If you get caught sending these kind of messages, you will be **PERMANENTLY BANNED** [this also includes joking about these points]"},
	{name:"No NSFW & Abusive Content", value:"This is a server for people to feel save, and sending NSFW or Abusive content, will result in a Permanent **BAN**"},
	{name:"No propaganda / false information.", value:"Please do not talk about political beliefs / religional beliefs in any of our chats."},
	{name:"No Advertising", value:"This includes: Guild advertising, Discord Server advertising, social media advertising, and basically any sort of content."},
	{name:"Impersonating Staff", value:"Impersonating Staff members will result in you either getting Banned or Banned, so **DO NOT IMPERSONATE** Staff!!"},
	{name:"Do not Ping Staff", value:"What I mean is, do not spam ping staff, you can ping staff once, but please don't spam ping."},
	{name:"Scamming", value:"**SCAMMING OR ATTEMPTING TO IRL TRADE/SELL RATTING MODS OR DISTRIBUTE THEM IN OUR SERVER IS PROHIBITED AND YOU WILL GET PERMANENTLY BANNED!**"},
	{name:"No undercuts", value:"Please do not undercut any of our services, doing so will get you warned, and if necessary banned."},
)
.setFooter({ text: "Staff decides how long your punishment will last for! These rules apply in both, voice and text channels!", iconURL: 'https://i.imgur.com/GoYWvfF.png' });
