// dependancies
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot online')
});
// establishes a prefix
const prefix = 'what is '

// creates the help embed
const helpEmbed = new Discord.MessageEmbed()
.setColor('#D22B2B')
.setTitle('Commands')
.setDescription('Searching a level name: run the level code. Example: what is 1-1. 1-01 does NOT work.\nSearching a world name: run the world number. Example what is w1.')

//checks for messages
client.on('message', message =>{
    // ignores message if it does not contain the prefix or is sent by a bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === '1-1'){// world 1 (Alpine Meadows/Pine Mountains)
        message.channel.send('PB1: 8m Simple Bridge\nPB2: Ten Meter Simple Bridge')
    } else if(command == '1-2'){
        message.channel.send('PB1: 10m Simple Bridge\nPB2: A New Slope')
    } else if(command == '1-3'){
        message.channel.send('PB1: 12m Simple Bridge\nPB2: Bridge of Steel')
    } else if(command == '1-4'){
        message.channel.send('PB1: Slanted Bridge\nPB2: Fourteen Meter Overpass')
    } else if(command == '1-5'){
        message.channel.send('PB1: Two Part Bridge\nPB2: Checkpoints')
    } else if(command == '1-6'){
        message.channel.send('PB1: Over Bridge\nPB2: First Drawbridge')
    } else if(command == '1-7'){
        message.channel.send('PB1: Simple Jump\nPB2: Taxi Task')
    } else if(command == '1-8'){
        message.channel.send('PB1: Overpass\nPB2: Rope Support')
    } else if(command == '1-9'){
        message.channel.send('PB1: Paddleboat Drawbridge\nPB2: Budget Cuts')
    } else if(command == '1-10'){
        message.channel.send('PB1: Checkpoint\nPB2: First Jump')
    } else if(command == '1-11'){
        message.channel.send("PB1: Low Budget Bridge\nPB2: Stop n' Go")
    } else if(command == '1-12'){
        message.channel.send('PB1: Double Decker\nPB2: Rock Rest')
    } else if(command == '1-13'){
        message.channel.send('PB1: Double Down\nPB2: Redraw')
    } else if(command == '1-14'){
        message.channel.send('PB1: There and Back Again\nPB2: Land Brace')
    } else if(command == '1-15'){
        message.channel.send('PB1: Easy Elevator\nPB2: Hydraulic Management')
    } else if(command == '1-16'){
        message.channel.send('PB1: N/A\nPB2: Large Bridge')
    } else if(command == '2-1'){//world 2 (Desert Winds/Glowing Gorge)
        message.channel.send('PB1: Wooden High Bridge\nPB2: Unity')
    } else if(command == '2-2'){
        message.channel.send('PB1: Drawbridge\nPB2: Long Drawbridge')
    } else if(command == '2-3'){
        message.channel.send('PB1: Eye Eye\nPB2: Low Rider')
    } else if(command == '2-4'){
        message.channel.send('PB1: Double Overpass Drawbridge\nPB2: Buggy Bouncer')
    } else if(command == '2-5'){
        message.channel.send("PB1: Slanted Drawbridge\nPB2: Rockin'")
    } else if(command == '2-6'){
        message.channel.send('PB1: Hills & Valleys\nPB2: Roundabout')
    } else if(command == '2-7'){
        message.channel.send('PB1: Suspension Bridge\nPB2: Double Decker Highway')
    } else if(command == '2-8'){
        message.channel.send('PB1: Split\nPB2: Split Level')
    } else if(command == '2-9'){
        message.channel.send('PB1: Sloped Drawbridge\nPB2: Anchors Away')
    } else if(command == '2-10'){
        message.channel.send('PB1: Double Overpass\nPB2: Fork in the Road')
    } else if(command == '2-11'){
        message.channel.send('PB1: Lift Me Up\nPB2: Air Show')
    } else if(command == '2-12'){
        message.channel.send('PB1: Land Brace\nPB2: Momentum')
    } else if(command == '2-13'){
        message.channel.send('PB1: Schedule \nPB2: Compression')
    } else if(command == '2-14'){
        message.channel.send("PB1: Movin' On Up\nPB2: Dip n' Draw")
    } else if(command == '2-15'){
        message.channel.send('PB1: Off & On\nPB2: Weight Distribution')
    } else if(command == '2-16'){
        message.channel.send('PB1: N/A\nPB2: Stow Away')
    } else if(command == '3-1'){//world 3 (Snow Drift/Tranquil Oasis)
        message.channel.send('PB1: Loop Back\nPB2: Loop Hole')
    } else if(command == '3-2'){
        message.channel.send('PB1: Triple Split\nPB2: Big Dipper')
    } else if(command == '3-3'){
        message.channel.send('PB1: Looper\nPB2: String Theory')
    } else if(command == '3-4'){
        message.channel.send('PB1: Hydraulic Jump\nPB2: Doubling Down')
    } else if(command == '3-5'){
        message.channel.send('PB1: Dump Slope\nPB2: Semi Slope')
    } else if(command == '3-6'){
        message.channel.send('PB1: Up & Away\nPB2: Rock Skipping')
    } else if(command == '3-7'){
        message.channel.send('PB1: Swing Back\nPB2: Support Cable')
    } else if(command == '3-8'){
        message.channel.send('PB1: Swing Jumps\nPB2: Crossed Paths')
    } else if(command == '3-9'){
        message.channel.send('PB1: Routing\nPB2: Wibbly Wobbly')
    } else if(command == '3-10'){
        message.channel.send('PB1: Under Bridge\nPB2: Shafted')
    } else if(command == '3-11'){
        message.channel.send('PB1: Tall Bridge\nPB2: Cross Jump')
    } else if(command == '3-12'){
        message.channel.send('PB1: Dump Down, Dump Up\nPB2: Emergency Interference')
    } else if(command == '3-13'){
        message.channel.send('PB1: Elevation\nPB2: Diagonal Elevator')
    } else if(command == '3-14'){
        message.channel.send('PB1: Stop & Go\nPB2: Low Flyer')
    } else if(command == '3-15'){
        message.channel.send("PB1: High & Low\nPB2: Looper's Revenge")
    } else if(command == '3-16'){
        message.channel.send('PB1: N/A\nPB2: Monster Truck Rally')
    } else if(command == '4-1'){// Ancient Ruins/Sanguine Gulch
        message.channel.send('PB1: Balloon Jump\nPB2: Edgy')
    } else if(command == '4-2'){
        message.channel.send('PB1: Triple Decker\nPB2: Collision Warning')
    } else if(command == '4-3'){
        message.channel.send('PB1: Nice Landing\nPB2: Sloped Drawbridge')
    } else if(command == '4-4'){
        message.channel.send('PB1: Sorting\nPB2: Trap Door')
    } else if(command == '4-5'){
        message.channel.send('PB1: Double Monster Jump\nPB2: Triple Decker Drawbridge')
    } else if(command == '4-6'){
        message.channel.send('PB1: Criss Cross\nPB2: Safety Gap')
    } else if(command == '4-7'){
        message.channel.send('PB1: Fork Jump\nPB2: Big Spender')
    } else if(command == '4-8'){
        message.channel.send('PB1: Downward Tube\nPB2: Thread the Needle')
    } else if(command == '4-9'){
        message.channel.send('PB1: Falling Tower\nPB2: Tipping Tower')
    } else if(command == '4-10'){
        message.channel.send('PB1: Flip Flop\nPB2: Drawbridge In Disguise')
    } else if(command == '4-11'){
        message.channel.send('PB1: Cross Jump\nPB2: Lean on Me')
    } else if(command == '4-12'){
        message.channel.send('PB1: Steel Arch Bridge\nPB2: Trailblazer')
    } else if(command == '4-13'){
        message.channel.send('PB1: Double Dangle\nPB2: Diagonal Drawbridge')
    } else if(command == '4-14'){
        message.channel.send('PB1: Skipper\nPB2: Big Rigs')
    } else if(command == '4-15'){
        message.channel.send('PB1: Ups & Downs\nPB2: Twists and Turns')
    } else if(command == '4-16'){
        message.channel.send("PB1: N/A\nPB2: Don't Leave Me")
    } else if(command == '5-1'){// world 5 (80s Fun Land/Serenity Valley)
        message.channel.send('PB1: Double Double\nPB2: Brake Pad')
    } else if(command == '5-2'){
        message.channel.send('PB1: Edge Hugger\nPB2: Sorting')
    } else if(command == '5-3'){
        message.channel.send('PB1: Jump, Jump Again\nPB2: Springboard')
    } else if(command == '5-4'){
        message.channel.send('PB1: Drop Bridge\nPB2: Leverage')
    } else if(command == '5-5'){
        message.channel.send('PB1: Low Budget Overpass\nPB2: Truck Way In')
    } else if(command == '5-6'){
        message.channel.send('PB1: Shipping Canal\nPB2: Spring and a Miss')
    } else if(command == '5-7'){
        message.channel.send('PB1: Double Jump\nPB2: Trading Places')
    } else if(command == '5-8'){
        message.channel.send('PB1: Reverse Criss Cross\nPB2: Passing By')
    } else if(command == '5-9'){
        message.channel.send('PB1: Double Deck Lift\nPB2: Falling Into Place')
    } else if(command == '5-10'){
        message.channel.send('PB1: Double Drawbridge\nPB2: In Suspense')
    } else if(command == '5-11'){
        message.channel.send('PB1: Not Enough Road\nPB2: All Together Now')
    } else if(command == '5-12'){
        message.channel.send("PB1: Make Way\nPB2: Gettin' Loopy")
    } else if(command == '5-13'){
        message.channel.send('PB1: Water Under The Bridge\nPB2: Crash Course')
    } else if(command == '5-14'){
        message.channel.send('PB1: Transformer\nPB2: Bus Routes')
    } else if(command == '5-15'){
        message.channel.send('PB1: Collision Course\nPB2: Acceleration')
    } else if(command == '5-16'){
        message.channel.send('PB1: N/A\nPB2: Double Duty')
    } else if(command == '6-1'){// world 6 (Zen Gardens/Steamtown)
        message.channel.send("PB1: Can't Wait\nPB2: Earthquake!")
    } else if(command == '6-2'){
        message.channel.send('PB1: Seesaw\nPB2: Canyon Carriage')
    } else if(command == '6-3'){
        message.channel.send('PB1: Triple Dump\nPB2: Parkade Elevator')
    } else if(command == '6-4'){
        message.channel.send('PB1: Two by Two\nPB2: Bridgelike Motion')
    } else if(command == '6-5'){
        message.channel.send('PB1: Dangle Drop\nPB2: Edgeworks')
    } else if(command == '6-6'){
        message.channel.send('PB1: Only One\nPB2: Spring Loaded')
    } else if(command == '6-7'){
        message.channel.send('PB1: Hot Pursuit\nPB2: Get a Grip')
    } else if(command == '6-8'){
        message.channel.send('PB1: Drawn In\nPB2: How The Turntables')
    } else if(command == '6-9'){
        message.channel.send('PB1: Elevator\nPB2: Squeeze Through')
    } else if(command == '6-10'){
        message.channel.send('PB1: A Place for Everything\nPB2: Bridge-in-a-Box')
    } else if(command == '6-11'){
        message.channel.send("PB1: Triple Dump Drawbridge\nPB2: Wall Jumpin'")
    } else if(command == '6-12'){
        message.channel.send('PB1: Transference\nPB2: Mind the Gap')
    } else if(command == '6-13'){
        message.channel.send('PB1: Six Pack\nPB2: Pinball')
    } else if(command == '6-14'){
        message.channel.send('PB1: Criss Cross Chaos\nPB2: Spin Cycle')
    } else if(command == '6-15'){
        message.channel.send('PB1: 100m Bridge\nPB2: Special Delivery')
    } else if(command == '6-16'){
        message.channel.send('PB1: N/A\nPB2: Rube Goldbridge')
    } else if(command == '7-1'){// world 7 (Tropical Paradise/N/A)
        message.channel.send('PB1: Trap Doors\nPB2: N/A')
    } else if(command == '7-2'){
        message.channel.send('PB1: Three Boats, One Stone\nPB2: N/A')
    } else if(command == '7-3'){
        message.channel.send('PB1: Plough Ahead\nPB2: N/A')
    } else if(command == '7-4'){
        message.channel.send('PB1: Double Crossed\nPB2: N/A')
    } else if(command == '7-5'){
        message.channel.send('PB1: Wanting Roads\nPB2: N/A')
    } else if(command == '7-6'){
        message.channel.send('PB1: Tight Fit\nPB2: N/A')
    } else if(command == '7-7'){
        message.channel.send('PB1: Return of the Bridge\nPB2: N/A')
    } else if(command == '7-8'){
        message.channel.send('PB1: Suspended Bridge\nPB2: N/A')
    } else if(command == '7-9'){
        message.channel.send('PB1: Switchbacks\nPB2: N/A')
    } else if(command == '7-10'){
        message.channel.send('PB1: Flip Two\nPB2: N/A')
    } else if(command == '7-11'){
        message.channel.send('PB1: Swing, Swing a Bridge\nPB2: N/A')
    } else if(command == '7-12'){
        message.channel.send('PB1: Fellowship of the Jump\nPB2: N/A')
    } else if(command == '7-13'){
        message.channel.send('PB1: Drop Me Off\nPB2: N/A')
    } else if(command == '7-14'){
        message.channel.send("PB1: Can't Take the Sky From Me\nPB2: N/A")
    } else if(command == '7-15'){
        message.channel.send('PB1: The Two Towers\nPB2: N/A')
    } else if(command == '8-1'){// world 8 (Area 52/N/A)
        message.channel.send('PB1: Raiders of the Lost Bridge\nPB2: N/A')
    } else if(command == '8-2'){
        message.channel.send('PB1: Marble Sorter\nPB2: N/A')
    } else if(command == '8-3'){
        message.channel.send('PB1: Swing Shot\nPB2: N/A')
    } else if(command == '8-4'){
        message.channel.send('PB1: Lever It to Me\nPB2: N/A')
    } else if(command == '8-5'){
        message.channel.send('PB1: Turbolift\nPB2: N/A')
    } else if(command == '8-6'){
        message.channel.send('PB1: Nesting Busses\nPB2: N/A')
    } else if(command == '8-7'){
        message.channel.send('PB1: Falling Tower, Again & Again\nPB2: N/A')
    } else if(command == '8-8'){
        message.channel.send('PB1: Crane\nPB2: N/A')
    } else if(command == '8-9'){
        message.channel.send('PB1: Catapult\nPB2: N/A')
    } else if(command == '8-10'){
        message.channel.send('PB1: Circle Maze\nPB2: N/A')
    } else if(command == 'w1'){// world commands
        message.channel.send('PB1: Alpine Meadows\nPB2: Pine Mountains')
    } else if(command == 'w2'){
        message.channel.send('PB1: Desert Hills\nPB2: Glowing Gorge')
    } else if(command == 'w3'){
        message.channel.send('PB1: Snow Drift\nPB2: Tranquil Oasis')
    } else if(command == 'w4'){
        message.channel.send('PB1: Ancient Ruins\nPB2: Sanguine Gulch')
    } else if(command == 'w5'){
        message.channel.send('PB1: 80s Fun Land\nPB2: Serenity Valley')
    } else if(command == 'w6'){
        message.channel.send('PB1: Zen Gardens\nPB2: Steamtown')
    } else if(command == 'w7'){
        message.channel.send('PB1: Tropical Paradise\nPB2: N/A')
    } else if(command == 'w8'){
        message.channel.send('PB1: Area 52\nPB2: N/A')
    } else if(command == 'help'){// help command
        message.channel.send(helpEmbed)
    }
});

// logs in the bot (must be last)
client.login('no')