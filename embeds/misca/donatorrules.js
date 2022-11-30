const {EmbedBuilder } = require('discord.js');

module.exports = new EmbedBuilder()
.setTitle("Donation rules")
.setThumbnail("https://cdn.discordapp.com/attachments/1038458458946682911/1043890522265227304/PSX_20221118_072801.png")
.addFields(
  {name:"\u200b", value: "1) Donations are in game **COINS** Only. We do not take items. Once you've created a Ticket, tell us how much you want to donate."},
  {name:"\u200b", value:"2) Donations are **NON-REFUNDABLE**!!! That means, you can't take get your donation refunded (get the money back)!"},
  {name:"\u200b", value:"3) Violation of any <#935267194034614312> may result in some or all of your perks getting removed"},

)
.setFooter({ text: 'SkyTrade', iconURL: 'https://i.imgur.com/GoYWvfF.png' });