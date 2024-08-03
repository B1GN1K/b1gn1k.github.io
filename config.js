//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.18.0

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
// "russian"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "file3.png"

// Text to be shown on logo
config.logo_text = "Mountain Networks"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = false

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = false

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = true

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "mountainvideo2.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"background1.jpg",
	"background2.jpg",
	"background3.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = false

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "prodbybignik - HEAVEN [soundcloud.com/prodbybignik]",
		file: "heaven100.ogg",
	},
	{
		name: "prodbybignik - SLiME [soundcloud.com/prodbybignik]",
		file: "slime145.ogg",
	},
	{
		name: "prodbybignik - CUT [soundcloud.com/prodbybignik]",
		file: "cut156.ogg",
	},
	{
		name: "prodbybignik - DRiFT [soundcloud.com/prodbybignik]",
		file: "drift130.ogg",
	},
	{
		name: "prodbybignik - BREATHE [soundcloud.com/prodbybignik]",
		file: "breathe160.ogg",
	},
	{
		name: "prodbybignik - STARGAZiNG [soundcloud.com/prodbybignik]",
		file: "stargazing130.ogg",
	},
	{
		name: "prodbybignik - OUTSiDE [soundcloud.com/prodbybignik]",
		file: "outside145.ogg",
	},
	{
		name: "prodbybignik - BEEF [soundcloud.com/prodbybignik]",
		file: "beef175.ogg",
	},
	{
		name: "prodbybignik - HOLD ON [soundcloud.com/prodbybignik]",
		file: "holdon117.ogg",
	},
	{
		name: "prodbybignik - PRiME [soundcloud.com/prodbybignik]",
		file: "prime145.ogg",
	},
	{
		name: "prodbybignik - LA COSA NOSTRA [soundcloud.com/prodbybignik]",
		file: "lacosanostra164.ogg",
	},
	{
		name: "prodbybignik - MAYBACH [soundcloud.com/prodbybignik]",
		file: "maybach184.ogg",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 12

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Welcome to Mountain Networks!",
	"Testing gamer text 1234567!",
	"Bing bong",
	"I met garry once. Cool guy!",
	"Try a fading door!",
	"Jerry's mod!",
	"splash_text.txt",
	"Error 404",
	"Minecraft!",
	"Finishing loading...",
	"Bring me a smoothie",
	"Approved by Tommy!",
	"/advert raid",
	"Sheep shop",
	"Based and red-pilled",
	"Stay out of the sewers!",
	"Jorkin' it 8)",
	"Smoking mid!",
	"I'd grab a drink if I were you",
	"CS > Valorant",
	"Nice.",
	"Buy Bitcoin!",
	"Watch out! It's lurking!",
	"Any second now...",
	"I'm gonna ride this bat out of hell like a bat out of hell!",
	"Don't say it",
	"Rush B!",
	"Next!",
	"Yap",
	"Skadoosh!",
	"Just put the fries in the bag man...",
	"Sometimes... I dream about cheese...",
	"S&Box... coming soon!",
	"Satoshi Nakamoto was here",
	"Big balls, everywhere!",
	"I'm your worst nightmare...",
	"Who the hell invited this guy?",
	"Go go gadget... Tool gun!",
	"Take some ammo!",
	"Get a grip",
	"Alright, no more Mr. Nice Guy.",
	"Better Call Saul!",
	"Take it easy!",
	"Mountains... Could be big...",
	"blastdoor001b",
	"Blue barrels! Love em.",
	"Hey man... $5 is $5",
	"Be stealthy!",
	"Established August 2024!",
	"Nate sends his regards",
	"jacob1",
	"North Carolina!",
	"Go nuts",
	"P1ZZA!",
	"************!",
	"Behold the horn of Magnus!",
	"[Redacted]",
	"Drop it like it's hot!",
	"Bleep boop... I am a robot... Nah just kiddin'",
	"XD",
	"Airplane food... How about it!",
	"Kendrick Lamar... Big fan!",
	"Dota 2 > LoL",
	"Free Thugger!",
	"RDM... Not cool!",
	"Only way I'm going out is gunshots and si-reens!",
	"We hope you enjoy your stay!",
	"5... 4... Yeah!!!",
	"abcdefghijklmnopqrstuvwxyz!",
	"Seriously... Buy Bitcoin!",
	
	
]

// Random message order?
// "true" or "false"
config.messages_random_order = true

// Delay between message changes
// in milliseconds
config.messages_delay = 3600

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 600

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
