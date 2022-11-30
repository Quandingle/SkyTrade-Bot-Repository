const { GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const Discord = require("discord.js");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Collection } = require('discord.js');

const cooldowns = new Map()
const client = new Discord.Client({

    intents: [

		GatewayIntentBits.Guilds,

		GatewayIntentBits.GuildMessages,

		GatewayIntentBits.MessageContent,

		GatewayIntentBits.GuildMembers,

		GatewayIntentBits.GuildEmojisAndStickers,

		GatewayIntentBits.GuildMessageReactions,

	],

});
git remote add origin https://github.com/Quandingle/bob.git
//

const fs = require("node:fs");

const deletech = require('./embeds/misca/deletech');

const f4embed = require('./embeds/prices/f4price');

const f5embed = require('./embeds/prices/f5price');

const f6embed = require('./embeds/prices/f6price');

const f7embed = require('./embeds/prices/f7price');


//text



client.on('ready', async () => { // when the bot is ready and online
	  console.log('bot is now online!')
})

//stuff

client.on("interactionCreate", async (interaction) => {

	if (!interaction.isButton()) return;

	const guild = client.guilds.cache.get("935267143883292733")


	if(interaction.customId === "carrier") {
		if(!interaction.member.roles.cache.has("1038127612331053156")) return interaction.reply({content: 'Please verify in <#1047158947796234290>, do /verify sync or /verify link there.', ephemeral: true})
		guild.channels.create({name: `Carrier-${interaction.user.username}`, parent: "1038107871893794886", permissionOverwrites: [

			{
	
				id: interaction.user.id,
	
				allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands', "AttachFiles"],
	
			},
	
			{
	
				id: "1035183455518068736",
	
				allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],
	
			},
	
			{
	
				id: interaction.guild.id,
	
				deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],
	
			}]
		})
		.then(channel => {

			interaction.reply({content: `Your Ticket has been created <#${channel.id}>`, ephemeral: true});

		channel.send({content: `<@&1035183455518068736><@${interaction.user.id}>`, embeds: [carrierembed], components: [chdelete]})

		})
	}




	if(interaction.customId === "f7") {

		guild.channels.create({ name: `Floor-7-${interaction.user.username}`, topic: `${interaction.user.id}`, topic: `${guild.roles.id}` , rateLimitPerUser: 3000 , parent: `1038774912896217108`, permissionOverwrites: [

			{
	
				id: interaction.user.id,
	
				allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands', "AttachFiles"],
	
			},
	
			{
	
				id: `1009362728122589184`,
	
				allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],
	
			},
	
			{
	
				id: guild.roles.everyone,
	
				deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],
	
			}]
	
			})

		.then(channel => {

			interaction.reply({content: `Your Ticket has been created <#${channel.id}>`, ephemeral: true});

			channel.send({content: `<@&1009362728122589184><@${interaction.user.id}>`, embeds: [f7embed], components: [chdelete]})

		})

	}		




	if(interaction.customId === "f6") {

		guild.channels.create({ name: `Floor-6-${interaction.user.username}`, topic: `${interaction.user.id}` , parent: "1038774912896217108", permissionOverwrites: [

		{

			id: interaction.user.id,

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: "1009362714528849950",

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: guild.roles.everyone,

			deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		}]

		})

		.then(channel => {

			interaction.reply({content: `Your Ticket has been created <#${channel.id}>`, ephemeral: true});

			channel.send({content: `<@&1009362714528849950><@${interaction.user.id}>`, embeds: [f6embed], components: [chdelete]})

		})

	}





	if(interaction.customId === "f5") {

		guild.channels.create({ name: `Floor-5-${interaction.user.username}`, topic: `${interaction.user.id}` , parent: "1038774912896217108", permissionOverwrites: [

		{

			id: interaction.user.id,

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: "1009362604361265213",

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: guild.roles.everyone,

			deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		}]

	})

	.then(channel => {

		interaction.reply({content: `Your Ticket has been created <#${channel.id}>`, ephemeral: true});

		channel.send({content: `<@&1009362604361265213><@${interaction.user.id}>`, embeds: [f5embed], components: [chdelete]})

	})

}





	if(interaction.customId === "f4") {

		guild.channels.create({ name: `Floor-4-${interaction.user.username}`, topic: `${interaction.user.id}` , parent: "1038774912896217108", permissionOverwrites: [

		{

			id: interaction.user.id,

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: "1008830163078877225",

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		},

		{

			id: guild.roles.everyone,

			deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands'],

		}
	]

})

		.then(channel => {

					interaction.reply({content: `Your Ticket has been created <#${channel.id}>`, ephemeral: true});

				channel.send({content: `<@&1008830163078877225><@${interaction.user.id}>`, embeds: [f4embed], components: [chdelete]})

				})

		}





	



	if(interaction.customId === 'close') {

        if(!interaction.member.roles.cache.hasAny('1038111948803424396', "1038112092462514356", "1038112266400313435", "1035183455518068736")) return interaction.reply({content: 'You do not have Permission to do this! Ask a Carrier to close your Ticket!', ephemeral: true})

        setTimeout(() => {

			interaction.channel.delete()

		}, 15000);

		interaction.reply({embeds: [deletech]})

    }

	if(interaction.customId === "claim")
{
			//if member has supporter roles
            if(!interaction.member.roles.cache.hasAny("1038111948803424396", "1038112092462514356", "1038112266400313435", "1035183455518068736")) return interaction.reply({content: 'You do not have Permission to do this! Wait for a Carrier to claim your Ticket!', ephemeral: true})
			//permission editing
			interaction.channel.permissionOverwrites.set([
			
			{
				
			id: "1009362728122589184",
		
			deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands', "AttachFiles"],

			},

			{

			id: interaction.guild.id,

			deny: ['ViewChannel'],

			},
		
			{

			id: interaction.channel.topic,

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands', "AttachFiles"],
		
			},
			
		],'Needed to change permissions')//reply
		interaction.reply({content: `<@${interaction.channel.topic}>, The Carrier <@${interaction.user.id}> is going to Carry you!`, components: [unclaim]}) 
		
	}
    
	
	if(interaction.customId === "unclaim")
{
			//if member has supporter roles
            if(!interaction.member.roles.cache.hasAny("1038111948803424396", "1038112092462514356", "1038112266400313435", "1035183455518068736")) return interaction.reply({content: 'You do not have Permission to do this! Ask a Carrier to unclaim your Ticket!', ephemeral: true})
			//permission editing
			interaction.channel.permissionOverwrites.set([
			

			{

			id: interaction.guild.id,

			deny: ['ViewChannel'],

			},
		
			{

			id: interaction.channel.topic,

			allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory', 'UseApplicationCommands', "AttachFiles"],
		
			},
			
		],'Needed to change permissions')//reply
		interaction.reply({content: `<@${interaction.channel.topic}>, The Carrier <@${interaction.user.id}> unclaimed the Ticket! Please wait for a Carrier to come.`, components: [unclaim]}) 
		
	}


	
})

const carrierapp = new ActionRowBuilder()

.addComponents(

	new ButtonBuilder()

	.setCustomId("carrier")

	.setLabel("📝Become a Carrier")

	.setStyle(ButtonStyle.Success)

)
const carrierembed = new EmbedBuilder()

.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png")

				.setTitle("Become a Carrier")

				.setDescription("**1.** State your IGN.\n**2.** Be sure you are Linked with SkyKings!\n**3.** State what you want to Carry.")

const chdelete = new ActionRowBuilder()

.addComponents(

	new ButtonBuilder()

	.setCustomId("close")

	.setLabel("⛔Close Ticket")

	.setStyle(ButtonStyle.Danger)

)
    .addComponents(
    
    new ButtonBuilder()
    
    .setCustomId("claim")
    
    .setLabel("🤚Claim Ticket")
    
    .setStyle(ButtonStyle.Success)
    
    )

const unclaim = new ActionRowBuilder()

.addComponents(

	new ButtonBuilder()

	.setCustomId("unclaim")

	.setLabel("👋Unclaim Ticket")

	.setStyle(ButtonStyle.Danger)

)

const row2 = new ActionRowBuilder()

				.addComponents(

					new ButtonBuilder()

						.setCustomId('rev')

						.setEmoji("<:Revenant:1043954741597700176>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('tara')

						.setEmoji("<:tarantula:1043954740175851670>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('sven')

						.setEmoji("<:sven:1043954737030111274>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('eman')

						.setEmoji("<:voidgloom:1043954735662760028>")

						.setStyle(ButtonStyle.Primary),

				)


const row = new ActionRowBuilder()

				.addComponents(

					new ButtonBuilder()

						.setCustomId('f4')

						.setEmoji("<:f4:1043953578160693268>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('f5')

						.setEmoji("<:f5:1043953482362794094>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('f6')

						.setEmoji("<:f6:1043954369009299626>")

						.setStyle(ButtonStyle.Primary),

				)

				.addComponents(

					new ButtonBuilder()

						.setCustomId('f7')

						.setEmoji("<:f7:1043953710507769876>")

						.setStyle(ButtonStyle.Primary),

				)

	

				const e = new EmbedBuilder()

				.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png")

				.setTitle("Buy Dungeon Carries")

				.setDescription("<:f4:1043953578160693268> - Floor 4\n<:f5:1043953482362794094> - Floor 5\n<:f6:1043954369009299626> - Floor 6\n<:f7:1043953710507769876> - Floor 7");

				









  const donatorprices = new EmbedBuilder()

  .setTitle("Donation Prices")

  .addFields(

	{name:"🎆Blessed: Donate 100m Coins", value:"-<@&1038090043018977340>\n-Nickname Perms\n-Custom Role for up to 3 people of your choice, or 1 Emoji/sticker added\nGIF/Emoji perms in <#935978774334410833>\nAccess to <#1038086623117721600>\nCreate a Own Private/Public VC"},

	{name:"🔮Divine: Donate 50m Coins", value:"-<@&1038090033468551198>\n-Nickname Perms\nGIF/Emoji perms in <#935978774334410833>\nAccess to <#1038086623117721600>\nCreate a Own Private/Public VC"},

	{name:"⚜️Celestial: Donate 20m Coins", value:"-<@&1035598999064952864>\nNickname Perms\nGIF/Emoji perms in <#935978774334410833>\nAccess to <#1038086623117721600>\nCreate a Own Private/Public VC "},

	{name:"🟣Epic: Donate 10m Coins", value:"-<@&1035598591479263282>\nEmoji Perms in <#935978774334410833>\nAccess to <#1038086623117721600>"},

	{name:"🧿Beginner: Donate 5m Coins", value:"-<@&1035598490539139234>\nAccess to <#1038086623117721600> "},

	{name:"🌺Booster: Boost the Server", value:"-<@&1035587389441183804> or <@&1035587595989700669>\nGIF/Emoji perms in <#935978774334410833>\nAccess to <#1042745373661347850>\nOnly Booster Giveaways"}



  )





	//price embeds



	const howtoEmbed = new EmbedBuilder()

	.setColor("Purple")

	.setTitle("How to get a Carry!")

	.setThumbnail("https://cdn.discordapp.com/attachments/1038458458946682911/1043890522265227304/PSX_20221118_072801.png")

	.addFields(

		{name:"\u200b", value: "1. Open a Ticket📩\n2. Enable all API<:Tickyes:828996645823840266>\n3. Tell us what floor(S) / slayer(S) you want to carry<:gatekeeper:923333440781287454> / <:rev_horror:923331013319467008><:sven:994691000670888016><:tara:923331175525810216><:voidgloom:923330782683078706>\n4. Open a Ticket.✏️ "}

	)



	const dungeonpriceEmbed = new EmbedBuilder()

	.setColor("Green")

	.setTitle("DUNGEON CARRY PRICES")

	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png")

	.addFields(

		{name: "<:f1:1043953382626447461>Floor 1 prices", value: "Completion - 25k Coins\nS/S+ - Not available"},

		{name: "<:f2:1043953575925133475>Floor 2 prices", value: "Completion - 50k Coins\nS/S+ - Not available"},

		{name: "<:f3:1043954367277051914>Floor 3 prices", value: "Completion - 100k Coins\nS/S+ - Not available"},

		{name: "<:f4:1043953578160693268>Floor 4 prices", value: "Completion - 320k Coins\nS - 420k Coins\nS+ - 500k"},

		{name: "<:f5:1043953482362794094>Floor 5 prices", value: "Completion - 220k Coins\nS - 350k Coins\nS+ - 600k Coins"},

		{name: "<:f6:1043954369009299626>Floor 6 prices", value: "Completion - 500k Coins\nS - 600k Coins\nS+ - 800k Coins"},

		{name: "<:f7:1043953710507769876>Floor 7 prices", value: "Completion - 3m\nS - 6m\nS+ - 9m"},

	)



	const masterpriceEmbed = new EmbedBuilder()

	.setColor("Red")

	.setTitle("MASTER MODE CARRY PRICES")

	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png")

	.addFields(

		{name: "<:f1:1043953382626447461>Master Mode Floor 1 prices", value: "Completion - 1m Coins\nS - 1.5m Coins\nS+ - 2.5m Coins"},

		{name: "<:f2:1043953575925133475>Master Mode Floor 2 prices", value: "Completion - 2m Coins\nS - 2.5m Coins\nS+ - 3.5m Coins"},

		{name: "<:f3:1043954367277051914>Master Mode Floor 3 prices", value: "Completion - 4m Coins\nS - 5m Coins\nS+ - 6m Coins"},

		{name: "<:f4:1043953578160693268>Master Mode Floor 4 prices", value: "Completion - 9m Coins\nS - 12m Coins\nS+ - 15m Coins"},

		{name: "<:f5:1043953482362794094>Master Mode Floor 5 prices", value: "Completion - 5m Coins\nS - 8m Coins\nS+ - 10m Coins"},

		{name: "<:f6:1043954369009299626>Master Mode Floor 6 prices", value: "Completion - 7m Coins\nS - 12m Coins\nS+ - 15m Coins"},

		{name: "<:f7:1043953710507769876>Master Mode Floor 7 prices", value: "Completion - 25m Coins\nS - 30m Coins\nS+ - 40m Coins"},

	)



	const slayerpriceEmbed = new EmbedBuilder()

	.setColor("Purple")

	.setThumbnail("https://cdn.discordapp.com/attachments/1042185922055258142/1046456166642896906/PSX_20221118_072801.png")

	.addFields(

		{name: "<:Revenant:1043954741597700176>Zombie slayer prices", value: "Tier 1 : 10k Skyblock Coins\nTier 2 : 25k Skyblock Coins\nTier 3 : 50k Skyblock Coins\nTier 4 : 100k Skyblock Coins\nTier 5 : 300k Skyblock Coins"},

		{name: "<:tarantula:1043954740175851670>Spider slayer prices", value: "Tier 1 : 15k Skyblock Coins\nTier 2 : 30k Skyblock Coins\nTier 3 : 70k Skyblock Coins\nTier 4 : 125k Skyblock Coins"},

		{name: "<:sven:1043954737030111274>Wolf slayer prices", value: "Tier 1 : 15k Skyblock Coins\nTier 2 : 30k Skyblock Coins\nTier 3 : 75k Skyblock Coins\nTier 4 : 125k Skyblock Coins"},

		{name: "<:voidgloom:1043954735662760028>Enderman slayer prices", value: "Tier 1 : 50k Skyblock Coins\nTier 2 : 400k Skyblock Coins\nTier 3 : 800k Skyblock Coins\nTier 4 : 2m Skyblock Coins"}

	)

	client.on('messageCreate', async(message) => {

		if(message.content.includes("change this") ){

			const channel = message.client.channels.cache.get("1041377781671530536") 

			const msg_to_edit = await channel.messages.fetch("1042855021282328576")

			msg_to_edit.edit({embeds: [slayerpriceembed]})

			}

	});



		client.on('messageCreate', (message) => {

		if (message.content.includes('8012748073047')) {

			message.channel.send({ embeds: [slayerpriceEmbed, dungeonpriceEmbed, masterpriceEmbed, howto] });

		} 

	  });



	  client.on("messageCreate", (message) => {

		

		if(message.content.includes("420")) {

			message.channel.send({embeds: [carrierembed], components: [carrierapp]})

		}



		if(message.content.includes("1293805327")) {

			message.channel.send({ embeds: [slayerpriceembed]})

		}



		if(message.content.includes("28372378")) {

			message.channel.send({ embeds: [howtoapply]})

		}

	  })



	  client.login(process.env.DISCORD_TOKEN)

	