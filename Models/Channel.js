const { Schema, model } = require("mongoose");

const ChannelSchema = new Schema({
    guildID: String,
    channels: Array
});

const ChannelModel = model("servername_channel_backup", ChannelSchema);
module.exports = ChannelModel;
