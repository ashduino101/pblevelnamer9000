// dependencies
const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot online')
});


// creates the help embed
const helpEmbed = new Discord.MessageEmbed()
.setColor('#D22B2B')
.setTitle('Commands')
.setDescription("Level formatting: Write the level number and world number as world-level (i.e. 5-03, 7-8, 3-13c).")


//checks for messages
client.on('message', message =>{
    //if(message.content.startsWith("?help")){
    //    message.channel.send(helpEmbed);
    //    return;
    //}
    // ignores message if it does not contain the prefix or is sent by a bot
    if(!((message.content.search(/[1-8]-[0-9]{1,2}c?/s) != -1) || (message.content.search(/((w[1-8]c?))+?/s) != -1)) || message.author.bot) return;
    var command = 1;
    //If the command is in the world-level format, it will filter to that format
    if(message.content.search(/[1-8]-[0-9]{1,2}c?/s) != -1) var command = message.content.match(/[1-8]-[0-9]{1,2}/s);
    //Filters to world# format
    else var command = message.content.match(/((w[1-8]c?))/s);
    //If the command is in the world-level format, it will grab the world#
    if(message.content.search(/([1-8]-[0-9]{1,2}c?(?!w))/s) != -1) var world = message.content.match(/[1-8](?=-)/s);
    //Grabs the world # from the world# format
    else var world = message.content.match(/(?<=w)[1-8]c?/s);
    //Grabs the level # from the world-level format
    if(message.content.search(/[1-8]-[0-9]{1,2}c?/s) != -1) var level = message.content.match(/(?<=-)[0-9]{1,2}/s);
    else var level = 11;
    //Sanitizes the level # to a single digit by removing the 0 if it is formatted as 0# instead of #
    var level = level.toString();
    if(level.startsWith(0)) level.slice(1);
    var level = parseInt(level)
    if(level > 16) return;
    if((level > 15) && world == 7) return;
    if((level > 10) && world == 8) return;
    //Holds the world names for PB1 and PB2
    var pb1_world_names = ["Alpine Meadows", "Desert Winds", "Snow Drift", "Ancient Ruins", "80s Fun Land", "Zen Gardens", "Tropical Paradise", "Area 52"];
    var pb2_world_names = ["Pine Mountains", "Glowing Gorge", "Tranquil Oasis", "Sanguine Gulch", "Serenity Valley", "Steamtown", "N/A", "N/A"];
    //Grabs the correct world name for both games
    var pb1_world = pb1_world_names[Math.floor(world - 1)];
    var pb2_world = pb2_world_names[Math.floor(world - 1)];
    //Holds the level names for PB1 and PB2
    var pb1_level_names = ["8m Simple Bridge", "10m Simple Bridge", "12m Simple Bridge", "Slanted Bridge", "Two Part Bridge", "Over Bridge", "Simple Jump", "Overpass", "Paddleboat Drawbridge", "Checkpoint", "Low Budget Bridge", "Double Decker", "Double Down", "There and Back Again", "Easy Elevator", "N/A", "Wooden High Bridge", "Drawbridge", "Eye Eye", "Double Overpass Drawbridge", "Slanted Drawbridge", "Hills & Valleys", "Suspension Bridge", "Split", "Sloped Drawbridge", "Double Overpass", "Lift Me Up", "Land Brace", "Schedule", "Movin' On Up", "Off & On", "N/A", "Loop Back", "Triple Split", "Looper", "Hydraulic Jump", "Dump Slope", "Up & Away", "Swing Back", "Swing Jumps", "Routing", "Under Bridge", "Tall Bridge", "Dump Down, Dump Up", "Elevation", "Stop & Go", "High & Low", "N/A", "Balloon Jump", "Triple Decker", "Nice Landing", "Sorting", "Double Monster Jump", "Criss Cross", "Fork Jump", "Downward Tube", "Falling Tower", "Flip Flop", "Cross Jump", "Steel Arch Bridge", "Double Dangle", "Skipper", "Ups & Downs", "N/A", "Double Double", "Edge Hugger", "Jump, Jump Again", "Drop Bridge", "Low Budget Overpass", "Shipping Canal", "Double Jump", "Reverse Criss Cross", "Double Deck Lift", "Double Drawbridge", "Not Enough Road", "Make Way", "Water Under The Bridge", "Transformer", "Collision Course", "N/A", "Can't Wait", "Seesaw", "Triple Dump", "Two by Two", "Dangle Drop", "Only One", "Hot Pursuit", "Drawn In", "Elevator", "A Place for Everything", "Triple Dump Drawbridge", "Transference", "Six Pack", "Criss Cross Chaos", "100m Bridge", "N/A", "Trap Doors", "Three Boats, One Stone", "Plough Ahead", "Double Crossed", "Wanting Roads", "Tight Fit", "Return of the Bridge", "Suspended Bridge", "Switchbacks", "Flip Two", "Swing, Swing a Bridge", "Fellowship of the Jump", "Drop Me Off", "Can't Take the Sky From Me", "The Two Towers", "N/A", "Raiders of the Lost Bridge", "Marble Sorter", "Swing Shot", "Lever It to Me", "Turbolift", "Nesting Busses", "Falling Tower, Again & Again", "Crane", "Catapult", "Circle Maze",];
    var pb2_level_names = ["Ten Meter Simmple Bridge", "A New Slope", "Bridge of Steel", "Fourteen Meter Overpass", "Checkpoints", "First Drawbridge", "Taxi Task", "Rope Support", "Budget Cuts", "First Jump", "Stop n' Go", "Rock Rest", "Redraw", "Land Brace", "Hydraulic Management", "Large Bridge", "Unity", "Long Drawbridge", "Low Rider", "Buggy Bouncer", "Rockin'", "Roundabout", "Double Decker Highway", "Split Level", "Anchors Away", "Fork in the Road", "Air Show", "Momentum", "Compression", "Dip n' Draw", "Weight Distribution", "Stow Away", "Loop Hole", "Big Dipper", "String Theory", "Doubling Down", "Semi Slope", "Rock Skipping", "Support Cable", "Crossed Paths", "Wibbly Wobbly", "Shafted", "Cross Jump", "Emergency Interference", "Diagonal Elevator", "Low Flyer", "Looper's Revenge", "Monster Truck Rally", "Edgy", "Collision Warning", "Sloped Drawbridge", "Trap Door", "Triple Decker Drawbridge", "Safety Gap", "Big Spender", "Thread the Needle", "Tipping Tower", "Drawbridge In Disguise", "Lean on Me", "Trailblazer", "Diagonal Drawbridge", "Big Rigs", "Twists and Turns", "Don't Leave Me", "Brake Pad", "Sorting", "Springboard", "Leverage", "Truck Way In", "Spring and a Miss", "Trading Places", "Passing By", "Falling Into Place", "In Suspense", "All Together Now", "Gettin' Loopy", "Crash Course", "Bus Routes", "Acceleration", "Double Duty", "Earthquake!", "Canyon Carriage", "Parkade Elevator", "Bridgelike Motion", "Edgeworks", "Spring Loaded", "Get a Grip", "How The Turntables", "Squeeze Through", "Bridge-in-a-Box", "Wall Jumpin'", "Mind the Gap", "Pinball", "Spin Cycle", "Special Delivery", "Rube Goldbridge", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
    //Grabs the correct level name for both games
    var pb1_level = pb1_level_names[Math.floor((level - 1) + (16*(world - 1)))];
    var pb2_level = pb2_level_names[Math.floor((level - 1) + (16*(world - 1)))];
    if(message.content.search(/(([1-5]-[0-9]{1,2})c)/s) != -1) message.channel.send(`Level Name for ${command}c:\nPB2: ${pb2_world} - ${pb2_level} Challenge`);
    else if(message.content.search(/(([1-6]-[0-9]{1,2})[^c])/s) != -1) message.channel.send(`Level Names for ${command}:\nPB1: ${pb1_world} - ${pb1_level}\nPB2: ${pb2_world} - ${pb2_level}`);
    else if(message.content.search(/(([7-8]-[0-9]{1,2})[^c])/s) != -1) message.channel.send(`Level Name for ${command}:\nPB1: ${pb1_world} - ${pb1_level}`);
    else message.channel.send(`World Names for ${command}:\nPB1: ${pb1_world}\nPB2: ${pb2_world}`);
    return;
})
    // logs in the bot (must be last)
    client.login(token)
