const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Efuu",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api, event, args, message }) {
		var id;

		if (!args.join(" ")) {
			id = event.threadID;
		} else {
			id = parseInt(args.join(" "));
		}

		return api.sendMessage(
			'╔═════ஜ۩۞۩ஜ═════╗\n' +
			'         『 𝗘𝗙𝗨𝗨 𝗕𝗢𝗧 』\n' +
			'╚═════ஜ۩۞۩ஜ═════╝\n\n' +
			'➤ Bot is leaving this group...\n' +
			'➤ Thanks for using EFUU BOT 💖\n\n' +
			'━━━━━━━━━━━━━━━━━━\n' +
			'      𝗕𝗬𝗘 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 👋',
			id,
			() => api.removeUserFromGroup(api.getCurrentUserID(), id)
		);
	}
}
