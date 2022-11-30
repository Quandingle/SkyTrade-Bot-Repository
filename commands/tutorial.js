const { SlashCommandBuilder } = require('discord.js');
const mongoose = require("mongoose");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	/**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
	
	 async execute(interaction) {
		await interaction.reply("Pong");
	},


}