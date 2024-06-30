//All Measurements in KILOMETERS
var objects = [
	{
		name:"Earth",
		defaultAngle:0,
		sideImage:"Earth-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/07/29", // YYYY/MM/DD
		frontImage:"Earth-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/07/29", // YYYY/MM/DD
		topImage:"Earth-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/07/29", // YYYY/MM/DD
		width:12755.999,
		length:12755.999,
		height:12714.001,
		category1:"space",
		category2:"planets",
		category3:"terrestrial",
		tags:["africa","america","antarctica","arctic","asia","australia","ball","continent","ocean","planet","sea","solar system","sphere","us","usa"], // don't include anything in categories or name
		dateAdded:"2023/07/29", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Toyota Tacoma (2022)",
		defaultAngle:0,
		sideImage:"Toyota_Tacoma_2022-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/07/28", // YYYY/MM/DD
		frontImage:"Toyota_Tacoma_2022-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/07/28", // YYYY/MM/DD
		topImage:"Toyota_Tacoma_2022-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/07/28", // YYYY/MM/DD
		width:0.00191008,
		length:0.00539242,
		height:0.00179324,
		category1:"transportation",
		category2:"vehicles",
		category3:"trucks",
		tags:["car","mid-size","midsize","pickup","wheel"], // don't include anything in categories or name
		dateAdded:"2023/07/28", // YYYY/MM/DD
		lastModified:"2023/07/29", // YYYY/MM/DD
	},
	{
		name:"Red Blood Cell",
		defaultAngle:0,
		sideImage:"Red_Blood_Cell-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/07/29", // YYYY/MM/DD
		frontImage:"Red_Blood_Cell-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/07/29", // YYYY/MM/DD
		topImage:"Red_Blood_Cell-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/07/29", // YYYY/MM/DD
		width:0.0000000072,
		length:0.0000000072,
		height:0.0000000019,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["anatomy"], // don't include anything in categories or name
		dateAdded:"2023/07/29", // YYYY/MM/DD
		lastModified:"2023/07/29", // YYYY/MM/DD
	},
	{
		name:"Human (Male)",
		defaultAngle:0,
		sideImage:"Human_Male-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/07/28", // YYYY/MM/DD
		frontImage:"Human_Male-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/07/28", // YYYY/MM/DD
		topImage:"Human_Male-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/07/28", // YYYY/MM/DD
		width:0.0005021,
		length:0.000295,
		height:0.0017526,
		searchBoosts:[{query:"h",boost:3},{query:"hu",boost:3},{query:"hum",boost:3},{query:"huma",boost:3},{query:"human",boost:3},{query:"male",boost:3},{query:"mal",boost:3},{query:"person",boost:3}],
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["adult","guy","homo sapiens","man","people","person"], // don't include anything in categories or name
		dateAdded:"2023/07/28", // YYYY/MM/DD
		lastModified:"2023/07/29", // YYYY/MM/DD
	},
	{
		name:"Atom (Generic)",
		defaultAngle:0,
		sideImage:"Atom_Generic-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Atom_Generic-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Atom_Generic-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:0.0000000000001,
		length:0.0000000000001,
		height:0.0000000000001,
		category1:"miscellaneous",
		category2:"particles",
		category3:"atoms",
		tags:["chemical","element","neutron","nucleus","proton","thing"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/01", // YYYY/MM/DD
	},
	{
		name:"Mercury",
		defaultAngle:0,
		sideImage:"Mercury-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Mercury-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Mercury-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:4879.401,
		length:4879.401,
		height:4879.401,
		category1:"space",
		category2:"planets",
		category3:"terrestrial",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Venus",
		defaultAngle:0,
		sideImage:"Venus-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Venus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Venus-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:12103.599,
		length:12103.599,
		height:12103.599,
		category1:"space",
		category2:"planets",
		category3:"terrestrial",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Mars",
		defaultAngle:0,
		sideImage:"Mars-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Mars-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Mars-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:6772.401,
		length:6772.401,
		height:6752.4,
		category1:"space",
		category2:"planets",
		category3:"terrestrial",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Jupiter",
		defaultAngle:0,
		sideImage:"Jupiter-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Jupiter-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Jupiter-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:142984.001,
		length:142984.001,
		height:133707.999,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Saturn (without rings)",
		defaultAngle:0,
		sideImage:"Saturn_without_rings-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Saturn_without_rings-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Saturn_without_rings-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:120536,
		length:120536,
		height:108728,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Uranus",
		defaultAngle:0,
		sideImage:"Uranus-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Uranus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Uranus-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:51118.001,
		length:51118.001,
		height:49946.001,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Neptune",
		defaultAngle:0,
		sideImage:"Neptune-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"Neptune-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"Neptune-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:49527.999,
		length:49527.999,
		height:48681.999,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"The Sun",
		defaultAngle:0,
		sideImage:"The_Sun-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/01", // YYYY/MM/DD
		frontImage:"The_Sun-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/01", // YYYY/MM/DD
		topImage:"The_Sun-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/01", // YYYY/MM/DD
		width:1391982.781,
		length:1391982.781,
		height:1391982.781,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["ball","dwarf","fire","g type","g-type","g2-v","g2v","gtype","heat","hot","sol","solar","solar system","sphere","yellow"], // don't include anything in categories or name
		dateAdded:"2023/08/01", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Sirius A",
		defaultAngle:0,
		sideImage:"Sirius_A-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Sirius_A-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Sirius_A-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:2365720,
		length:2365720,
		height:2365720,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["a1","ball","heat","hot","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/02", // YYYY/MM/DD
	},
	{
		name:"Ceres",
		defaultAngle:0,
		sideImage:"Ceres-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Ceres-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Ceres-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:974.6,
		length:974.6,
		height:909.4,
		category1:"space",
		category2:"planets",
		category3:"dwarf",
		tags:["asteroid","ball","small","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Pluto",
		defaultAngle:0,
		sideImage:"Pluto-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Pluto-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Pluto-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:2376,
		length:2376,
		height:2376,
		category1:"space",
		category2:"planets",
		category3:"dwarf",
		tags:["ball","small","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Makemake",
		defaultAngle:0,
		sideImage:"Makemake-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Makemake-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Makemake-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:1434,
		length:1434,
		height:1422,
		category1:"space",
		category2:"planets",
		category3:"dwarf",
		tags:["ball","small","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Haumea",
		defaultAngle:0,
		sideImage:"Haumea-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Haumea-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Haumea-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:1960,
		length:1518,
		height:996,
		category1:"space",
		category2:"planets",
		category3:"dwarf",
		tags:["ball","small","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Eris",
		defaultAngle:0,
		sideImage:"Eris-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Eris-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Eris-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:2326,
		length:2326,
		height:2326,
		category1:"space",
		category2:"planets",
		category3:"dwarf",
		tags:["ball","small","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Polaris",
		defaultAngle:0,
		sideImage:"Polaris-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"Polaris-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"Polaris-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:52177999,
		length:52177999,
		height:52177999,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["ball","f7lb","heat","hot","pulsating","pulsing","sphere","yellow"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/02", // YYYY/MM/DD
	},
	{
		name:"VY Canis Majoris",
		defaultAngle:0,
		sideImage:"VY_Canis_Majoris-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/02", // YYYY/MM/DD
		frontImage:"VY_Canis_Majoris-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/02", // YYYY/MM/DD
		topImage:"VY_Canis_Majoris-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/02", // YYYY/MM/DD
		width:1974699999,
		length:1974699999,
		height:1974699999,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["4ii","ball","cma","heat","hot","hypergiant","m3","m4","pulsating","pulsing","red","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/02", // YYYY/MM/DD
		lastModified:"2023/08/02", // YYYY/MM/DD
	},
	{
		name:"UY Scuti",
		defaultAngle:0,
		sideImage:"UY_Scuti-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/03", // YYYY/MM/DD
		frontImage:"UY_Scuti-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/03", // YYYY/MM/DD
		topImage:"UY_Scuti-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/03", // YYYY/MM/DD
		width:2375999998,
		length:2375999998,
		height:2375999998,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["ball","heat","hot","hypergiant","iab","m2","m4","m4ia","pulsating","pulsing","red","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/03", // YYYY/MM/DD
		lastModified:"2023/08/03", // YYYY/MM/DD
	},
	{
		name:"Stephenson 2-18",
		defaultAngle:0,
		sideImage:"Stephenson_2_18-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/03", // YYYY/MM/DD
		frontImage:"Stephenson_2_18-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/03", // YYYY/MM/DD
		topImage:"Stephenson_2_18-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/03", // YYYY/MM/DD
		width:2991599998,
		length:2991599998,
		height:2991599998,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["ball","heat","hot","hypergiant","m6","red","sphere","st2-18"], // don't include anything in categories or name
		dateAdded:"2023/08/03", // YYYY/MM/DD
		lastModified:"2023/08/03", // YYYY/MM/DD
	},
	{
		name:"Human (Female)",
		defaultAngle:0,
		sideImage:"Human_Female-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/05", // YYYY/MM/DD
		frontImage:"Human_Female-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/05", // YYYY/MM/DD
		topImage:"Human_Female-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/05", // YYYY/MM/DD
		width:0.0005221,
		length:0.00039,
		height:0.0016256,
		searchBoosts:[{query:"human",boost:2},{query:"person",boost:2}],
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["adult","girl","homo sapiens","lady","people","person","woman"], // don't include anything in categories or name
		dateAdded:"2023/08/05", // YYYY/MM/DD
		lastModified:"2023/08/05", // YYYY/MM/DD
	},
	{
		name:"Toyota Corolla (2022)",
		defaultAngle:0,
		sideImage:"Toyota_Corolla_2022-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Toyota_Corolla_2022-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Toyota_Corolla_2022-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:0.00178054,
		length:0.00463042,
		height:0.0014351,
		category1:"transportation",
		category2:"vehicles",
		category3:"cars",
		tags:["sedan","wheel"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Giraffe",
		defaultAngle:0,
		sideImage:"Giraffe-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.001,
		length:0.004,
		height:0.0054864,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["adult","giraffa camelopardalis","tall"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Sperm Whale",
		defaultAngle:0,
		sideImage:"Sperm_Whale-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0033528,
		length:0.0158496,
		height:0.0033528,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["adult","long","physeter macrocephalus"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Tree Frog (Generic)",
		defaultAngle:0,
		sideImage:"Tree_Frog_Generic-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00003,
		length:0.0000381,
		height:0.0000242,
		category1:"nature",
		category2:"animals",
		category3:"amphibians",
		tags:["adult","hylidae"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Great White Shark",
		defaultAngle:0,
		sideImage:"Great_White_Shark-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0015,
		length:0.004572,
		height:0.0015,
		category1:"nature",
		category2:"animals",
		category3:"fish",
		tags:["adult","carcharodon carcharias","predator"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Ladybug",
		defaultAngle:0,
		sideImage:"Ladybug-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000005,
		length:0.000006,
		height:0.000004,
		category1:"nature",
		category2:"animals",
		category3:"insects",
		tags:["adult","beetle","coccinellidae","ladybeetle","ladybird"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Chameleon",
		defaultAngle:0,
		sideImage:"Chameleon-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000085,
		length:0.000254,
		height:0.000096,
		category1:"nature",
		category2:"animals",
		category3:"reptiles",
		tags:["adult","chamaeleonidae"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Burj Khalifa",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Burj_Khalifa-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.2,
		length:0.2,
		height:0.8296656,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["dubai"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Empire State Building",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Empire_State_Building-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.15,
		length:0.15,
		height:0.4431792,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["new york","usa"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Proxima Centauri",
		defaultAngle:0,
		sideImage:"Proxima_Centauri-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Proxima_Centauri-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Proxima_Centauri-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:214557.7421,
		length:214557.7421,
		height:214557.7421,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["ball","dwarf","heat","hot","m5","m5.5","red","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Water Molecule",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Water_Molecule-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000000000029,
		length:0.00000000000029,
		height:0.000000000000225,
		category1:"miscellaneous",
		category2:"particles",
		category3:"molecules",
		tags:["atom","h20","hydrogen","neutron","nucleus","oxygen","proton"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Currant Peak (Nevada)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Currant_Peak_Nevada-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:12.5826799,
		length:12.5826799,
		height:3.5106864,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["climb","hill","summit"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Denali (Alaska)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Denali_Alaska-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:33.72128666,
		length:33.72128666,
		height:6.190488,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["7 summits","climb","hill","seven summits","summit"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Mt. Rainier (Washington)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mt_Rainier_Washington-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:28.821500582,
		length:28.821500582,
		height:4.392168,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["climb","hill","summit","volcano"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Mt. Saint Helens (Washington)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mt_Saint_Helens_Washington-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:15.603457768,
		length:15.603457768,
		height:2.5490424,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["climb","hill","summit","volcano"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Hyperion (Tallest Tree)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Hyperion_Tallest_Tree-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.047997846,
		length:0.047997846,
		height:0.11591544,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["california","coast","redwood","sequoia sempervirens"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Alpha Centauri A",
		defaultAngle:0,
		sideImage:"Alpha_Centauri_A-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Alpha_Centauri_A-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Alpha_Centauri_A-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:1702235.336,
		length:1702235.336,
		height:1702235.336,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["ball","g-type","g2","g2-v","gtype","heat","hot","rigil kentaurus","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Alpha Centauri B",
		defaultAngle:0,
		sideImage:"Alpha_Centauri_B-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Alpha_Centauri_B-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Alpha_Centauri_B-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:1400000,
		length:1400000,
		height:1400000,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["ball","heat","hot","k1","k1-v","sphere","toliman"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Rigel",
		defaultAngle:0,
		sideImage:"Rigel-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Rigel-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Rigel-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:109781465.33,
		length:109781465.33,
		height:109781465.33,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["b8","b8-ia","ball","blue","heat","hot","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Arcturus",
		defaultAngle:0,
		sideImage:"Arcturus-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Arcturus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Arcturus-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:35341194.24,
		length:35341194.24,
		height:35341194.24,
		category1:"space",
		category2:"stars",
		category3:"giants",
		tags:["alpha bootis","alpha boötis","ball","heat","hot","k1.5","k1.5iiife-0.5","orange","orange-red","red","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Betelgeuse",
		defaultAngle:0,
		sideImage:"Betelgeuse-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Betelgeuse-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Betelgeuse-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:1234171795.51,
		length:1234171795.51,
		height:1234171795.51,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["ball","heat","hot","m1","m1-2","red","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Pollux",
		defaultAngle:0,
		sideImage:"Pollux-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Pollux-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Pollux-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:12244371.96,
		length:12244371.96,
		height:12244371.96,
		category1:"space",
		category2:"stars",
		category3:"giants",
		tags:["ball","heat","hot","k0","k0iii","orange","sphere","yellow","yellow-orange"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Aldebaran",
		defaultAngle:0,
		sideImage:"Aldebaran-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Aldebaran-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Aldebaran-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:61277920,
		length:61277920,
		height:61277920,
		category1:"space",
		category2:"stars",
		category3:"giants",
		tags:["ball","heat","hot","k5+","k5+ iii","orange","red","red-orange","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Antares",
		defaultAngle:0,
		sideImage:"Antares-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Antares-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Antares-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:946149431.04,
		length:946149431.04,
		height:946149431.04,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["ball","heat","hot","m1.5","m1.5iab-ib","orange","red","red-orange","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Earth's Moon",
		defaultAngle:0,
		sideImage:"Earths_Moon-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"Earths_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"Earths_Moon-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:3476.2,
		length:3476.2,
		height:3472,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["ball","natural satellite","solar system","sphere","terrain"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"EBLM J0555-57Ab (Smallest Star)",
		defaultAngle:0,
		sideImage:"EBLM_J0555_57Ab-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/07", // YYYY/MM/DD
		frontImage:"EBLM_J0555_57Ab-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/07", // YYYY/MM/DD
		topImage:"EBLM_J0555_57Ab-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/07", // YYYY/MM/DD
		width:118000,
		length:118000,
		height:118000,
		category1:"space",
		category2:"stars",
		category3:"main-sequence-stars",
		tags:["ball","dwarf","heat","hot","m-dwarf","red","sphere","ultracool"], // don't include anything in categories or name
		dateAdded:"2023/08/07", // YYYY/MM/DD
		lastModified:"2023/08/07", // YYYY/MM/DD
	},
	{
		name:"Mycoplasma Gallisepticum (Smallest Cell)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Mycoplasma_Gallisepticum-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/08", // YYYY/MM/DD
		width:0.0000000018,
		length:0.000000002,
		height:0.0000000007,
		category1:"miscellaneous",
		category2:"particles",
		category3:"bacteria",
		tags:["bacterium"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Water Drop",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Water_Drop-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000003,
		length:0.000003,
		height:0.0000044,
		category1:"miscellaneous",
		category2:"particles",
		category3:"drops",
		tags:["h20","liquid"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Sand (Grain)",
		defaultAngle:0,
		sideImage:"Sand_Grain-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000002,
		length:0.0000002,
		height:0.00000023,
		category1:"miscellaneous",
		category2:"particles",
		category3:"small-particles",
		tags:["sediment"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Adenovirus",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Adenovirus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000000002,
		length:0.00000000002,
		height:0.00000000002,
		category1:"miscellaneous",
		category2:"particles",
		category3:"viruses",
		tags:["disease"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"American Robin",
		defaultAngle:0,
		sideImage:"American_Robin-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0001,
		length:0.00022,
		height:0.00020066,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["thrush","turdus migratorius"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Hummingbird (Generic)",
		defaultAngle:0,
		sideImage:"Hummingbird_Generic-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00003,
		length:0.000072,
		height:0.00011,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["trochilidae"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Turkey Vulture",
		defaultAngle:0,
		sideImage:"Turkey_Vulture-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0003,
		length:0.000762,
		height:0.0006,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["cathartes aura"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Jellyfish (Generic)",
		defaultAngle:0,
		sideImage:"Jellyfish_Generic-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00044958,
		length:0.00044958,
		height:0.001042324,
		category1:"nature",
		category2:"animals",
		category3:"cnidarians",
		tags:["cyaneidae","scyphozoa"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Mt. Everest (Nepal)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mt_Everest_Nepal-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:34.835261981,
		length:34.835261981,
		height:8.8489536,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["7 summits","climb","himalayas","seven summits"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Spruce",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Spruce-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.006,
		length:0.006,
		height:0.012192,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["conifer","coniferous","evergreen"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Bernardinelli-Bernstein (Largest Comet)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Bernardinelli_Bernstein_Largest_Comet-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:119,
		length:119,
		height:119,
		category1:"space",
		category2:"objects",
		category3:"comets",
		tags:["ice","rock"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Halley's Comet",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Halleys_Comet-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:14.9669,
		length:8.04672,
		height:8.04672,
		category1:"space",
		category2:"objects",
		category3:"comets",
		tags:["ice","rock"], // don't include anything in categories or name
		dateAdded:"2023/08/08", // YYYY/MM/DD
		lastModified:"2023/08/08", // YYYY/MM/DD
	},
	{
		name:"Segue 2 (Smallest Galaxy)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Segue_2_Smallest_Galaxy-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:1049100454195200,
		length:1049100454195200,
		height:1049100454195200,
		category1:"space",
		category2:"galaxies",
		category3:"dwarf",
		tags:["spheroidal"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"The Milky Way",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"The_Milky_Way-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:621370700000000000,
		length:621370700000000000,
		height:621370700000000000,
		category1:"space",
		category2:"galaxies",
		category3:"spiral",
		tags:["our"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Saturn (with rings)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Saturn_with_rings-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:333270,
		length:333270,
		height:108728,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","ice","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Uranus (with rings)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Uranus_with_rings-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:106454,
		length:106454,
		height:49946.001,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["ball","planet","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Antarctica",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Antarctica-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:4500,
		length:5500,
		height:4.881372,
		category1:"nature",
		category2:"geography",
		category3:"land",
		tags:["south pole"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Deimos (Mars' Moon)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Deimos_Mars_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:12.4,
		length:15,
		height:11,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["natural satellite","solar system"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Phobos (Mars' Moon)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Phobos_Mars_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:22,
		length:27,
		height:18,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["natural satellite","solar system"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Eiffel Tower",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Eiffel_Tower-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.125,
		length:0.125,
		height:0.33,
		category1:"structures",
		category2:"buildings",
		category3:"trusses",
		tags:["france","paris"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Airbus A330-300",
		defaultAngle:0,
		sideImage:"Airbus_A330_300-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/09", // YYYY/MM/DD
		frontImage:"Airbus_A330_300-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"Airbus_A330_300-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/09", // YYYY/MM/DD
		width:0.0600456,
		length:0.0636522984,
		height:0.016764,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["airliner"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Saturn V",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Saturn_V-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.013454118,
		length:0.013454118,
		height:0.111,
		category1:"transportation",
		category2:"spacecraft",
		category3:"rockets",
		tags:["apollo","moon"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Space Shuttle (Fully Assembled)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Space_Shuttle_Fully_Assembled-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.025417299,
		length:0.025417299,
		height:0.0560832,
		category1:"transportation",
		category2:"spacecraft",
		category3:"rockets",
		tags:["atlantis","challenger","colombia","discovery","endeavour","enterprise"], // don't include anything in categories or name
		dateAdded:"2023/08/09", // YYYY/MM/DD
		lastModified:"2023/08/09", // YYYY/MM/DD
	},
	{
		name:"Cessna 172 Skyhawk",
		defaultAngle:0,
		sideImage:"Cessna_172_Skyhawk-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"Cessna_172_Skyhawk-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/10", // YYYY/MM/DD
		topImage:"Cessna_172_Skyhawk-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/10", // YYYY/MM/DD
		width:0.0110236,
		length:0.0082804,
		height:0.00272,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["civilian","private"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Human Liver",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Liver-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/10", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00016,
		length:0.0001,
		height:0.0001,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["organ"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Brain",
		defaultAngle:0,
		sideImage:"Human_Brain-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00009144,
		length:0.0001651,
		height:0.0001397,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["organ"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Foot",
		defaultAngle:0,
		sideImage:"Human_Foot-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00019144,
		length:0.0002451,
		height:0.0002297,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["organ"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Hand (Closed)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Human_Hand_Closed-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/10", // YYYY/MM/DD
		width:0.00009482,
		length:0.00016288,
		height:0.00003297,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["fingers","palm","wrist"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Hand (Open)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Human_Hand_Open-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/10", // YYYY/MM/DD
		width:0.00013482,
		length:0.00016288,
		height:0.00003297,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["fingers","palm","span","wrist"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Heart",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Heart-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/10", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0001,
		length:0.00006,
		height:0.00017,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["beat","organ","pump"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Human Kidney",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"0", // YYYY/MM/DD
		frontImage:"Human_Kidney-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/10", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00008,
		length:0.000023,
		height:0.000115,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["organ"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"American Penny (one cent piece)",
		defaultAngle:2,
		sideImage:"American_Penny_one_cent_piece-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"American_Penny_one_cent_piece-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/10", // YYYY/MM/DD
		topImage:"American_Penny_one_cent_piece-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/10", // YYYY/MM/DD
		width:0.00001905,
		length:0.00001905,
		height:0.00000152,
		category1:"miscellaneous",
		category2:"money",
		category3:"american",
		tags:["¢"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Sugar (Granule)",
		defaultAngle:0,
		sideImage:"Sugar_Granule-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000004,
		length:0.0000004,
		height:0.00000045,
		category1:"miscellaneous",
		category2:"particles",
		category3:"small-particles",
		tags:["sediment"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Titanic (RMS)",
		defaultAngle:0,
		sideImage:"RMS_Titanic-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/10", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.028194,
		length:0.2690622,
		height:0.0733425,
		category1:"transportation",
		category2:"watercraft",
		category3:"vintage-ships",
		tags:["boat","royal mail ship"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"CD (Compact Disk)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"CD_Compact_Disk-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/10", // YYYY/MM/DD
		width:0.00012,
		length:0.00012,
		height:0.0000012,
		category1:"technology",
		category2:"modern",
		category3:"storage",
		tags:["portable"], // don't include anything in categories or name
		dateAdded:"2023/08/10", // YYYY/MM/DD
		lastModified:"2023/08/10", // YYYY/MM/DD
	},
	{
		name:"Concorde",
		defaultAngle:0,
		sideImage:"Concorde-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/11", // YYYY/MM/DD
		frontImage:"Concorde-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/11", // YYYY/MM/DD
		topImage:"Concorde-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/11", // YYYY/MM/DD
		width:0.0256032,
		length:0.0615696,
		height:0.0125,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["aerospatiale","aérospatiale- bac concorde supersonic transport"], // don't include anything in categories or name
		dateAdded:"2023/08/11", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Cruise Ship (Generic)",
		defaultAngle:0,
		sideImage:"Cruise_Ship_Generic-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/11", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.035,
		length:0.295,
		height:0.069,
		category1:"transportation",
		category2:"watercraft",
		category3:"ships",
		tags:["boat","leisure","luxury"], // don't include anything in categories or name
		dateAdded:"2023/08/11", // YYYY/MM/DD
		lastModified:"2023/08/11", // YYYY/MM/DD
	},
	{
		name:"Statue of Liberty",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Statue_of_Liberty-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.103816625,
		length:0.103816625,
		height:0.0929894,
		category1:"structures",
		category2:"monuments",
		category3:"statues",
		tags:["lady"], // don't include anything in categories or name
		dateAdded:"2023/08/12", // YYYY/MM/DD
		lastModified:"2023/08/12", // YYYY/MM/DD
	},
	{
		name:"Oak",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Oak-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/13", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.042400589,
		length:0.042400589,
		height:0.03048,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["quercus"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Ponderosa Pine",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Ponderosa_Pine-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/13", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.009145168,
		length:0.009145168,
		height:0.03048,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["pinus ponderosa"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Banana",
		defaultAngle:0,
		sideImage:"Banana-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/13", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000381,
		length:0.0002032,
		height:0.00011806,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["berry"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Tomato",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Tomato-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/13", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0001,
		length:0.0001,
		height:0.000085,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["berry","vegetable"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Blue Whale",
		defaultAngle:0,
		sideImage:"Blue_Whale-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/13", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.005,
		length:0.027,
		height:0.004955632,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["adult","balaenoptera musculus","baleen","long"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Domestic Cat (Generic)",
		defaultAngle:0,
		sideImage:"Domestic_Cat_Generic-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/13", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0001,
		length:0.0004826,
		height:0.000391748,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["adult"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"German Shepherd",
		defaultAngle:0,
		sideImage:"German_Shepherd-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/13", // YYYY/MM/DD
		frontImage:"German_Shepherd-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/13", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"2023/08/13", // YYYY/MM/DD
		width:0.00035,
		length:0.0010795,
		height:0.000847878,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["adult","dog","domestic"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Caspian Sea (Largest Lake)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Caspian_Sea_Largest_Lake-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/13", // YYYY/MM/DD
		width:1207.01,
		length:621.869,
		height:1.025,
		category1:"nature",
		category2:"geography",
		category3:"lakes",
		tags:["water"], // don't include anything in categories or name
		dateAdded:"2023/08/13", // YYYY/MM/DD
		lastModified:"2023/08/13", // YYYY/MM/DD
	},
	{
		name:"Planet 9 (Hypothetical)",
		defaultAngle:0,
		sideImage:"Planet_9_Hypothetical-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/14", // YYYY/MM/DD
		frontImage:"Planet_9_Hypothetical-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/14", // YYYY/MM/DD
		topImage:"Planet_9_Hypothetical-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/14", // YYYY/MM/DD
		width:40000,
		length:40000,
		height:40000,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["X","ball","solar system","sphere"], // don't include anything in categories or name
		dateAdded:"2023/08/14", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Hercules-Corona Borealis Great Wall (Largest Structure)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Hercules_Corona_Borealis_Great_Wall-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/14", // YYYY/MM/DD
		width:94607304726000000000000,
		length:82265919340000000000000,
		height:82265919340000000000000,
		category1:"space",
		category2:"objects",
		category3:"clusters",
		tags:["stars","supercluster"], // don't include anything in categories or name
		dateAdded:"2023/08/14", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Observable Universe",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Observable_Universe-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/14", // YYYY/MM/DD
		width:889308664423000000000000,
		length:889308664423000000000000,
		height:889308664423000000000000,
		category1:"space",
		category2:"objects",
		category3:"clusters",
		tags:["space","stars"], // don't include anything in categories or name
		dateAdded:"2023/08/14", // YYYY/MM/DD
		lastModified:"2023/08/14", // YYYY/MM/DD
	},
	{
		name:"Alcyoneus",
		defaultAngle:0,
		sideImage:"Alcyoneus-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/15", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:154209907000000000000,
		length:154209907000000000000,
		height:74710554540000000000,
		category1:"space",
		category2:"galaxies",
		category3:"irregular",
		tags:["stars"], // don't include anything in categories or name
		dateAdded:"2023/08/14", // YYYY/MM/DD
		lastModified:"2023/08/15", // YYYY/MM/DD
	},
	{
		name:"ESO 306-17",
		defaultAngle:0,
		sideImage:"ESO_306_17-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/08/15", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:9460730000000000000,
		length:9460730000000000000,
		height:4583469366000000000,
		category1:"space",
		category2:"galaxies",
		category3:"irregular",
		tags:["stars"], // don't include anything in categories or name
		dateAdded:"2023/08/15", // YYYY/MM/DD
		lastModified:"2023/08/15", // YYYY/MM/DD
	},
	{
		name:"Maple Leaf (Generic)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Maple_Leaf_Generic-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/26", // YYYY/MM/DD
		width:0.000083242,
		length:0.0000762,
		height:0.000005,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["leaves"], // don't include anything in categories or name
		dateAdded:"2023/08/26", // YYYY/MM/DD
		lastModified:"2023/08/26", // YYYY/MM/DD
	},
	{
		name:"Bagger 293",
		defaultAngle:0,
		sideImage:"Bagger_293-side",
		sideImageAlign:"bottom",
		sideImageArtist:"felax",
		sideImageDate:"2023/08/29", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.046,
		length:0.1814,
		height:0.096,
		category1:"transportation",
		category2:"vehicles",
		category3:"construction",
		tags:["dig","digger","equipment","mining","terrestrial"], // don't include anything in categories or name
		dateAdded:"2023/08/29", // YYYY/MM/DD
		lastModified:"2023/08/29", // YYYY/MM/DD
	},
	{
		name:"Olympus Mons (Mars)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Olympus_Mons_Mars-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/08/29", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:181.225,
		length:181.225,
		height:21.229,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["hill","summit","volcano"], // don't include anything in categories or name
		dateAdded:"2023/08/29", // YYYY/MM/DD
		lastModified:"2023/08/29", // YYYY/MM/DD
	},
	{
		name:"TON 618 (Black Hole)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"TON_618_Black_Hole-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/29", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:390000000000,
		length:390000000000,
		height:390000000000,
		category1:"space",
		category2:"galaxies",
		category3:"black_holes",
		tags:["2nd","quasar","second largest"], // don't include anything in categories or name
		dateAdded:"2023/08/29", // YYYY/MM/DD
		lastModified:"2023/08/29", // YYYY/MM/DD
	},
	{
		name:"Grand Canyon (Arizona)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Grand_Canyon_Arizona-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/30", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:28.96,
		length:445.788,
		height:1.829,
		category1:"nature",
		category2:"geography",
		category3:"canyons",
		tags:["earth","national park","usa"], // don't include anything in categories or name
		dateAdded:"2023/08/30", // YYYY/MM/DD
		lastModified:"2023/08/30", // YYYY/MM/DD
	},
	{
		name:"Valles Marineris (Mars)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Valles_Marineris_Mars-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/08/30", // YYYY/MM/DD
		topImage:"Valles_Marineris_Mars-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/08/30", // YYYY/MM/DD
		width:200,
		length:3000,
		height:7,
		category1:"nature",
		category2:"geography",
		category3:"canyons",
		tags:["deepest","largest","trench","trough"], // don't include anything in categories or name
		dateAdded:"2023/08/30", // YYYY/MM/DD
		lastModified:"2023/08/30", // YYYY/MM/DD
	},
	{
		name:"Tyrannosaurus Rex (TRex)",
		defaultAngle:0,
		sideImage:"Tyrannosaurus_Rex_TRex-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/02", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.003,
		length:0.0124,
		height:0.00618,
		category1:"nature",
		category2:"animals",
		category3:"reptiles",
		tags:["dinosaur"], // don't include anything in categories or name
		dateAdded:"2023/09/02", // YYYY/MM/DD
		lastModified:"2023/09/02", // YYYY/MM/DD
	},
	{
		name:"BelAZ 75710",
		defaultAngle:0,
		sideImage:"BelAZ_75710-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/03", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00987,
		length:0.0206,
		height:0.00826,
		category1:"transportation",
		category2:"vehicles",
		category3:"construction",
		tags:["dump truck","equipment","mining","terrestrial"], // don't include anything in categories or name
		dateAdded:"2023/09/03", // YYYY/MM/DD
		lastModified:"2023/09/03", // YYYY/MM/DD
	},
	{
		name:"James Webb Space Telescope (JWST)",
		defaultAngle:0,
		sideImage:"James_Webb_Space_Telescope_JWST-side",
		sideImageAlign:"none",
		sideImageArtist:"felax",
		sideImageDate:"2023/09/07", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.012,
		length:0.022,
		height:0.013,
		category1:"technology",
		category2:"modern",
		category3:"telescopes",
		tags:["mirror"], // don't include anything in categories or name
		dateAdded:"2023/09/07", // YYYY/MM/DD
		lastModified:"2023/09/07", // YYYY/MM/DD
	},
	{
		name:"Space Needle",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Space_Needle-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/09/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.043,
		length:0.043,
		height:0.1844,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["seattle"], // don't include anything in categories or name
		dateAdded:"2023/09/07", // YYYY/MM/DD
		lastModified:"2023/09/07", // YYYY/MM/DD
	},
	{
		name:"Airbus A380-800",
		defaultAngle:0,
		sideImage:"Airbus_A380_800-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/07", // YYYY/MM/DD
		frontImage:"Airbus_A380_800-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/07", // YYYY/MM/DD
		topImage:"Airbus_A380_800-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/07", // YYYY/MM/DD
		width:0.0798,
		length:0.07272,
		height:0.0241,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["airliner"], // don't include anything in categories or name
		dateAdded:"2023/09/07", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Boeing 747",
		defaultAngle:0,
		sideImage:"Boeing_747-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/07", // YYYY/MM/DD
		frontImage:"Boeing_747-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/07", // YYYY/MM/DD
		topImage:"Boeing_747-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/07", // YYYY/MM/DD
		width:0.0596,
		length:0.0706,
		height:0.0193,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["airliner"], // don't include anything in categories or name
		dateAdded:"2023/09/07", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Lego Stud",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Lego_Stud-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/08", // YYYY/MM/DD
		width:0.0000048,
		length:0.0000048,
		height:0.0000016,
		category1:"miscellaneous",
		category2:"toys",
		category3:"lego",
		tags:["brick","bump"], // don't include anything in categories or name
		dateAdded:"2023/09/08", // YYYY/MM/DD
		lastModified:"2023/09/08", // YYYY/MM/DD
	},
	{
		name:"Coronavirus",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Coronavirus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/08", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000000008,
		length:0.00000000008,
		height:0.00000000008,
		category1:"miscellaneous",
		category2:"particles",
		category3:"viruses",
		tags:["19","covid"], // don't include anything in categories or name
		dateAdded:"2023/09/08", // YYYY/MM/DD
		lastModified:"2023/09/08", // YYYY/MM/DD
	},
	{
		name:"Lego Car 01",
		defaultAngle:0,
		sideImage:"Lego_Car_01-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/08", // YYYY/MM/DD
		frontImage:"Lego_Car_01-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/08", // YYYY/MM/DD
		topImage:"Lego_Car_01-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/08", // YYYY/MM/DD
		width:0.000047,
		length:0.000109,
		height:0.000039,
		category1:"miscellaneous",
		category2:"toys",
		category3:"lego",
		tags:["vehicle"], // don't include anything in categories or name
		dateAdded:"2023/09/08", // YYYY/MM/DD
		lastModified:"2023/09/08", // YYYY/MM/DD
	},
	{
		name:"Planck Length (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.00000000000000000000000000000000000115,
		length:0.000000000000000000000000000000000016,
		height:0.000000000000000000000000000000000016,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["plank"], // don't include anything in categories or name
		dateAdded:"2023/09/09", // YYYY/MM/DD
		lastModified:"2023/09/09", // YYYY/MM/DD
	},
	{
		name:"Mount Kilimanjaro (Tanzania)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mount_Kilimanjaro_Tanzania-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:30.872,
		length:30.872,
		height:5.895,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["7 summits","africa","climb","seven summits"], // don't include anything in categories or name
		dateAdded:"2023/09/09", // YYYY/MM/DD
		lastModified:"2023/09/09", // YYYY/MM/DD
	},
	{
		name:"Starlink Satellite",
		defaultAngle:1,
		sideImage:"Starlink_Satellite-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/10", // YYYY/MM/DD
		frontImage:"Starlink_Satellite-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/10", // YYYY/MM/DD
		topImage:"Starlink_Satellite-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/10", // YYYY/MM/DD
		width:0.00286,
		length:0.00145,
		height:0.00743,
		category1:"technology",
		category2:"modern",
		category3:"satellites",
		tags:["spacex"], // don't include anything in categories or name
		dateAdded:"2023/09/10", // YYYY/MM/DD
		lastModified:"2023/09/10", // YYYY/MM/DD
	},
	{
		name:"Maple Seed",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Maple_Seed-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/10", // YYYY/MM/DD
		width:0.00001,
		length:0.00003,
		height:0.000005,
		category1:"nature",
		category2:"plants",
		category3:"seeds",
		tags:["tree"], // don't include anything in categories or name
		dateAdded:"2023/09/10", // YYYY/MM/DD
		lastModified:"2023/09/10", // YYYY/MM/DD
	},
	{
		name:"Lego Minifigure",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Lego_Minifigure-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/10", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000025,
		length:0.0000115,
		height:0.000041,
		category1:"miscellaneous",
		category2:"toys",
		category3:"lego",
		tags:["man","person"], // don't include anything in categories or name
		dateAdded:"2023/09/10", // YYYY/MM/DD
		lastModified:"2023/09/10", // YYYY/MM/DD
	},
	{
		name:"V236-15.0MW (Wind Turbine)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"V236-15.0MW_Wind_Turbine-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/10", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.236,
		length:0.02,
		height:0.36,
		category1:"technology",
		category2:"modern",
		category3:"power-generators",
		tags:["largest","mill"], // don't include anything in categories or name
		dateAdded:"2023/09/10", // YYYY/MM/DD
		lastModified:"2023/09/10", // YYYY/MM/DD
	},
	{
		name:"Pacific Ocean",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Pacific_Ocean-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:14110,
		length:18655,
		height:10.925,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","largest","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Atlantic Ocean",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Atlantic_Ocean-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:14294,
		length:12360,
		height:8.74,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Indian Ocean",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Indian_Ocean-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:10088,
		length:12833,
		height:7.725,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Pacific Ocean (north)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Pacific_Ocean_North-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:7384,
		length:18177,
		height:10.925,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Pacific Ocean (south)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Pacific_Ocean_South-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:6948,
		length:17426,
		height:10.882,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Atlantic Ocean (north)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Atlantic_Ocean_North-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:7669,
		length:11755,
		height:8.74,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Atlantic Ocean (south)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Atlantic_Ocean_South-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:6714,
		length:8558,
		height:8.428,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Southern Ocean",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Southern_Ocean-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:7522,
		length:7522,
		height:8.125,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["antarctica","earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Arctic Ocean",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Arctic_Ocean-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:7728,
		length:8708,
		height:5.669,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","north","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"South China Sea",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"South_China_Sea-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:5099,
		length:6121,
		height:5.016,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Mediterranean Sea",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Mediterranean_Sea-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:2708,
		length:5410,
		height:5.267,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Baltic Sea",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Baltic_Sea-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/12", // YYYY/MM/DD
		width:1862,
		length:1594,
		height:459,
		category1:"nature",
		category2:"geography",
		category3:"oceans",
		tags:["earth","water"], // don't include anything in categories or name
		dateAdded:"2023/09/12", // YYYY/MM/DD
		lastModified:"2023/09/12", // YYYY/MM/DD
	},
	{
		name:"Mil Mi-26",
		defaultAngle:0,
		sideImage:"Mil_Mi_26-side",
		sideImageAlign:"bottom",
		sideImageArtist:"felax",
		sideImageDate:"2023/09/15", // YYYY/MM/DD
		frontImage:"Mil_Mi_26-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/09/15", // YYYY/MM/DD
		topImage:"Mil_Mi_26-top",
		topImageAlign:"none",
		topImageArtist:"felax",
		topImageDate:"2023/09/15", // YYYY/MM/DD
		width:0.032,
		length:0.040025,
		height:0.01237913,
		category1:"transportation",
		category2:"aircraft",
		category3:"helicopters",
		tags:["largest"], // don't include anything in categories or name
		dateAdded:"2023/09/15", // YYYY/MM/DD
		lastModified:"2023/09/15", // YYYY/MM/DD
	},
	{
		name:"Bell 206L4",
		defaultAngle:0,
		sideImage:"Bell_206L4-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/16", // YYYY/MM/DD
		frontImage:"Bell_206L4-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/16", // YYYY/MM/DD
		topImage:"Bell_206L4-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/16", // YYYY/MM/DD
		width:0.00238,
		length:0.01292,
		height:0.00332,
		category1:"transportation",
		category2:"aircraft",
		category3:"helicopters",
		tags:[""], // don't include anything in categories or name
		dateAdded:"2023/09/16", // YYYY/MM/DD
		lastModified:"2023/09/16", // YYYY/MM/DD
	},
	{
		name:"Aero Spacelines Super Guppy",
		defaultAngle:0,
		sideImage:"Aero_Spacelines_Super_Guppy-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/17", // YYYY/MM/DD
		frontImage:"Aero_Spacelines_Super_Guppy-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/17", // YYYY/MM/DD
		topImage:"Aero_Spacelines_Super_Guppy-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/17", // YYYY/MM/DD
		width:0.04763,
		length:0.04384,
		height:0.01478,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["boeing"], // don't include anything in categories or name
		dateAdded:"2023/09/17", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"California Redwood",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"California_Redwood-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/17", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.028280252,
		length:0.028280252,
		height:0.100584,
		category1:"nature",
		category2:"plants",
		category3:"trees",
		tags:["giant"], // don't include anything in categories or name
		dateAdded:"2023/09/17", // YYYY/MM/DD
		lastModified:"2023/09/17", // YYYY/MM/DD
	},
	{
		name:"Mariana Trench",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mariana_Trench-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/17", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:2500,
		length:70,
		height:11.034,
		category1:"nature",
		category2:"geography",
		category3:"canyons",
		tags:["deepest","largest","trough"], // don't include anything in categories or name
		dateAdded:"2023/09/17", // YYYY/MM/DD
		lastModified:"2023/09/17", // YYYY/MM/DD
	},
	{
		name:"Scaled Composites Model 351 Stratolaunch",
		defaultAngle:0,
		sideImage:"Scaled_Composites_Model_351_Stratolaunch-side",
		sideImageAlign:"bottom",
		sideImageArtist:"felax",
		sideImageDate:"2023/09/17", // YYYY/MM/DD
		frontImage:"Scaled_Composites_Model_351_Stratolaunch-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/09/17", // YYYY/MM/DD
		topImage:"Scaled_Composites_Model_351_Stratolaunch-top",
		topImageAlign:"none",
		topImageArtist:"felax",
		topImageDate:"2023/09/17", // YYYY/MM/DD
		width:0.117,
		length:0.073,
		height:0.015,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["carrier"], // don't include anything in categories or name
		dateAdded:"2023/09/17", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Sikorsky S-97 Raider",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Sikorsky_S_97_Raider-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/09/19", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0103632,
		length:0.0109728,
		height:0.003606494,
		category1:"transportation",
		category2:"aircraft",
		category3:"helicopters",
		tags:["prototype"], // don't include anything in categories or name
		dateAdded:"2023/09/19", // YYYY/MM/DD
		lastModified:"2023/09/19", // YYYY/MM/DD
	},
	{
		name:"Reach of Hubble (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:9111866036404383000000,
		length:126773788332582730000000,
		height:126773788332582730000000,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["telescope"], // don't include anything in categories or name
		dateAdded:"2023/09/30", // YYYY/MM/DD
		lastModified:"2023/09/30", // YYYY/MM/DD
	},
	{
		name:"Reach of JWST (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:9247864036947732000000,
		length:128665934427098880000000,
		height:128665934427098880000000,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["james","space","telescope","webb"], // don't include anything in categories or name
		dateAdded:"2023/09/30", // YYYY/MM/DD
		lastModified:"2023/09/30", // YYYY/MM/DD
	},
	{
		name:"Airfish 8",
		defaultAngle:0,
		sideImage:"Airfish_8-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/09/30", // YYYY/MM/DD
		frontImage:"Airfish_8-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/30", // YYYY/MM/DD
		topImage:"Airfish_8-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/30", // YYYY/MM/DD
		width:0.015,
		length:0.0112,
		height:0.0035,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["af8","effect","ground","wig","wigetworks"], // don't include anything in categories or name
		dateAdded:"2023/09/30", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Atlantic Salmon",
		defaultAngle:0,
		sideImage:"Atlantic_Salmon-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/01", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0002,
		length:0.0008,
		height:0.00025,
		category1:"nature",
		category2:"animals",
		category3:"fish",
		tags:["salmo salar"], // don't include anything in categories or name
		dateAdded:"2023/10/01", // YYYY/MM/DD
		lastModified:"2023/10/01", // YYYY/MM/DD
	},
	{
		name:"Goldfish",
		defaultAngle:0,
		sideImage:"Goldfish-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/01", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00004,
		length:0.00015,
		height:0.000067,
		category1:"nature",
		category2:"animals",
		category3:"fish",
		tags:["carassius auratus"], // don't include anything in categories or name
		dateAdded:"2023/10/01", // YYYY/MM/DD
		lastModified:"2023/10/01", // YYYY/MM/DD
	},
	{
		name:"Oumuamua",
		defaultAngle:0,
		sideImage:"Oumuamua-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/02", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.111,
		length:0.115,
		height:0.019,
		category1:"space",
		category2:"objects",
		category3:"asteroids",
		tags:["interstellar"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Meter (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000071875,
		length:0.001,
		height:0.001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Kilometer (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.071875,
		length:1,
		height:1,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Centimeter (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.00000071875,
		length:0.00001,
		height:0.00001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Millimeter (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000000071875,
		length:0.000001,
		height:0.000001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Micrometer (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000000000071875,
		length:0.000000001,
		height:0.000000001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric","micron"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Nanometer (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000000000000071875,
		length:0.000000000001,
		height:0.000000000001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Picometer (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000000000000000071875,
		length:0.000000000000001,
		height:0.000000000000001,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["metric"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Light-year (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:679990002716.745,
		length:9460730472580.8,
		height:9460730472580.8,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["space"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Astronomical Unit (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:10752346.9565625,
		length:149597870.7,
		height:149597870.7,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["space"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Solar Radii (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:50000.41875,
		length:695658,
		height:695658,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["space"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Mile (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.1156716,
		length:1.609344,
		height:1.609344,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["imperial"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Foot (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.0000219075,
		length:0.0003048,
		height:0.0003048,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["imperial"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Inch (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000001825625,
		length:0.0000254,
		height:0.0000254,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["imperial"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Thou (measurement)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Measurement-vertical",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/09/09", // YYYY/MM/DD
		topImage:"Measurement-horizontal",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/09/09", // YYYY/MM/DD
		width:0.000000001825625,
		length:0.0000000254,
		height:0.0000000254,
		category1:"miscellaneous",
		category2:"non-objects",
		category3:"measurements",
		tags:["imperial","mil","thousandth"], // don't include anything in categories or name
		dateAdded:"2023/10/02", // YYYY/MM/DD
		lastModified:"2023/10/02", // YYYY/MM/DD
	},
	{
		name:"Three Gorges Dam",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Three_Gorges_Dam-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/10/05", // YYYY/MM/DD
		width:0.8246,
		length:2.335,
		height:0.181,
		category1:"structures",
		category2:"barriers",
		category3:"dams",
		tags:["china","yangtze river"], // don't include anything in categories or name
		dateAdded:"2023/10/05", // YYYY/MM/DD
		lastModified:"2023/10/05", // YYYY/MM/DD
	},
	{
		name:"Viaduc de Millau",
		defaultAngle:0,
		sideImage:"Viaduc_de_Millau-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.032,
		length:2.46,
		height:0.27,
		category1:"structures",
		category2:"bridges",
		category3:"cable-stayed",
		tags:["aveyron","france","gorge valley","tarn"], // don't include anything in categories or name
		dateAdded:"2023/10/08", // YYYY/MM/DD
		lastModified:"2023/10/08", // YYYY/MM/DD
	},
	{
		name:"Rock (generic)",
		defaultAngle:0,
		sideImage:"Rock_Generic-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/10", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0001,
		length:0.00017,
		height:0.00009,
		category1:"nature",
		category2:"objects",
		category3:"minerals",
		tags:["stone"], // don't include anything in categories or name
		dateAdded:"2023/10/10", // YYYY/MM/DD
		lastModified:"2023/10/10", // YYYY/MM/DD
	},
	{
		name:"Lenovo ThinkPad T14s Gen 2 14\" (open)",
		defaultAngle:0,
		sideImage:"Lenovo_ThinkPad_T14s_Gen_2_14_open-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/10/12", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Lenovo_ThinkPad_T14s_Gen_2_14_open-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2023/10/12", // YYYY/MM/DD
		width:0.0003275,
		length:0.0002254,
		height:0.0002256,
		category1:"technology",
		category2:"modern",
		category3:"laptops",
		tags:["amd","intel"], // don't include anything in categories or name
		dateAdded:"2023/10/12", // YYYY/MM/DD
		lastModified:"2023/10/12", // YYYY/MM/DD
	},
	{
		name:"Chicken Egg",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Chicken_Egg-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/10/14", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000043,
		length:0.000043,
		height:0.000062,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["shell"], // don't include anything in categories or name
		dateAdded:"2023/10/14", // YYYY/MM/DD
		lastModified:"2023/10/14", // YYYY/MM/DD
	},
	{
		name:"Apple",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Apple-front",
		frontImageAlign:"bottom",
		frontImageArtist:"felax",
		frontImageDate:"2023/10/29", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000075,
		length:0.000075,
		height:0.000085,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["pome"], // don't include anything in categories or name
		dateAdded:"2023/10/29", // YYYY/MM/DD
		lastModified:"2023/10/29", // YYYY/MM/DD
	},
	{
		name:"Human (Baby Male)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Baby_Male-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/11/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000247655,
		length:0.00021,
		height:0.00048,
		searchBoosts:[{query:"h",boost:1},{query:"hu",boost:1},{query:"hum",boost:1},{query:"huma",boost:1},{query:"human",boost:1},{query:"male",boost:1},{query:"mal",boost:1},{query:"person",boost:1}],
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["boy","child","homo sapiens","kid","people","person","young"], // don't include anything in categories or name
		dateAdded:"2023/11/12", // YYYY/MM/DD
		lastModified:"2023/11/12", // YYYY/MM/DD
	},
	{
		name:"Human (Baby Female)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Baby_Female-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/11/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000259234,
		length:0.00022,
		height:0.000465,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["child","girl","homo sapiens","kid","people","person","young"], // don't include anything in categories or name
		dateAdded:"2023/11/12", // YYYY/MM/DD
		lastModified:"2023/11/12", // YYYY/MM/DD
	},
	{
		name:"Falcon 9",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Falcon_9-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/11/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.005226443,
		length:0.005226443,
		height:0.07,
		category1:"transportation",
		category2:"spacecraft",
		category3:"rockets",
		tags:["nine","space x","spacex"], // don't include anything in categories or name
		dateAdded:"2023/11/12", // YYYY/MM/DD
		lastModified:"2023/11/12", // YYYY/MM/DD
	},
	{
		name:"Falcon 9 (unfolded)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Falcon_9_unfolded-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2023/11/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.017733977,
		length:0.017733977,
		height:0.0725538645,
		category1:"transportation",
		category2:"spacecraft",
		category3:"rockets",
		tags:["nine","space x","spacex"], // don't include anything in categories or name
		dateAdded:"2023/11/12", // YYYY/MM/DD
		lastModified:"2023/11/12", // YYYY/MM/DD
	},
	{
		name:"X-15",
		defaultAngle:0,
		sideImage:"X_15-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2023/12/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00671,
		length:0.01524,
		height:0.00396,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["fastest","hypersonic","manned","nasa","supersonic","supersonic","test","x15"], // don't include anything in categories or name
		dateAdded:"2023/12/09", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Lithium Atom",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Lithium_Atom-front",
		frontImageAlign:"none",
		frontImageArtist:"malachi singh",
		frontImageDate:"2024/01/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000000000000161,
		length:0.000000000000161,
		height:0.000000000000182,
		category1:"miscellaneous",
		category2:"particles",
		category3:"atoms",
		tags:["element","metal","neutron","nucleus","proton"], // don't include anything in categories or name
		dateAdded:"2024/01/07", // YYYY/MM/DD
		lastModified:"2024/01/07", // YYYY/MM/DD
	},
	{
		name:"AAA Battery",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"AAA_Battery-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/01/16", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000105,
		length:0.0000105,
		height:0.0000445,
		category1:"technology",
		category2:"modern",
		category3:"power-storage",
		tags:["batteries","battery"], // don't include anything in categories or name
		dateAdded:"2024/01/16", // YYYY/MM/DD
		lastModified:"2024/01/16", // YYYY/MM/DD
	},
	{
		name:"AA Battery",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"AA_Battery-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/01/16", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000014,
		length:0.000014,
		height:0.00005,
		category1:"technology",
		category2:"modern",
		category3:"power-storage",
		tags:["batteries","battery"], // don't include anything in categories or name
		dateAdded:"2024/01/16", // YYYY/MM/DD
		lastModified:"2024/01/16", // YYYY/MM/DD
	},
	{
		name:"SR-71 Blackbird",
		defaultAngle:0,
		sideImage:"SR_71_Blackbird-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/01/17", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.01694,
		length:0.03274,
		height:0.00564,
		searchBoosts:[{query:"plane",boost:2000}],
		category1:"transportation",
		category2:"aircraft",
		category3:"airplanes",
		tags:["fastest","lockheed","manned","nasa","sr71","strategic reconnaissance","supersonic","test"], // don't include anything in categories or name
		dateAdded:"2024/01/17", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"African Elephant",
		defaultAngle:0,
		sideImage:"African_Elephant-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/01/17", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0017,
		length:0.0045,
		height:0.00265,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["loxodonta","trunk","tusks"], // don't include anything in categories or name
		dateAdded:"2024/01/17", // YYYY/MM/DD
		lastModified:"2024/01/17", // YYYY/MM/DD
	},
	{
		name:"Woolly Mammoth",
		defaultAngle:0,
		sideImage:"Woolly_Mammoth-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/01/17", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0016,
		length:0.00589,
		height:0.00345,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["mammuthus primigenius","trunk","tusks"], // don't include anything in categories or name
		dateAdded:"2024/01/17", // YYYY/MM/DD
		lastModified:"2024/01/17", // YYYY/MM/DD
	},
	{
		name:"Bee Hummingbird",
		defaultAngle:0,
		sideImage:"Bee_Hummingbird-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/01/17", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000008,
		length:0.000057,
		height:0.000055,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["mellisuga helenae"], // don't include anything in categories or name
		dateAdded:"2024/01/17", // YYYY/MM/DD
		lastModified:"2024/01/17", // YYYY/MM/DD
	},
	{
		name:"Wandering Albatross",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Wandering_Albatross-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/01/17", // YYYY/MM/DD
		width:0.0035,
		length:0.0009,
		height:0.00005,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["diomedea exulans"], // don't include anything in categories or name
		dateAdded:"2024/01/17", // YYYY/MM/DD
		lastModified:"2024/01/17", // YYYY/MM/DD
	},
	{
		name:"Noah's Ark",
		defaultAngle:0,
		sideImage:"Noah's_Ark-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/07", // YYYY/MM/DD
		frontImage:"Noah's_Ark-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/07", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.02286,
		length:0.13716,
		height:0.0141855444,
		category1:"miscellaneous",
		category2:"bible",
		category3:"objects",
		tags:["boat","flood","genesis","ship"], // don't include anything in categories or name
		dateAdded:"2024/03/07", // YYYY/MM/DD
		lastModified:"2024/03/07", // YYYY/MM/DD
	},
	{
		name:"Grizzly Bear",
		defaultAngle:0,
		sideImage:"Grizzly_Bear-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0008,
		length:0.002244,
		height:0.0014,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["bear","kodiak"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Polar Bear",
		defaultAngle:0,
		sideImage:"Polar_Bear-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00095,
		length:0.002936,
		height:0.0016,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["arctic","bear"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Emperor Penguin",
		defaultAngle:0,
		sideImage:"Emperor_Penguin-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00051,
		length:0.0005379,
		height:0.0012,
		category1:"nature",
		category2:"animals",
		category3:"birds",
		tags:["antarctic"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Lion (Male)",
		defaultAngle:0,
		sideImage:"Lion_Male-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0007,
		length:0.00186,
		height:0.0011,
		category1:"nature",
		category2:"animals",
		category3:"mammals",
		tags:["african"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Lightbulb",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Lightbulb-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/09", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00006,
		length:0.00006,
		height:0.000102429,
		category1:"technology",
		category2:"modern",
		category3:"lights",
		tags:["florescent","led"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Nuclear Submarine",
		defaultAngle:0,
		sideImage:"Nuclear_Submarine-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/09", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.02,
		length:0.14,
		height:0.027335349,
		category1:"transportation",
		category2:"watercraft",
		category3:"submarines",
		tags:["military","submersible"], // don't include anything in categories or name
		dateAdded:"2024/03/09", // YYYY/MM/DD
		lastModified:"2024/03/09", // YYYY/MM/DD
	},
	{
		name:"Ganymede (Jupiter's Moon)",
		defaultAngle:0,
		sideImage:"Ganymede_Jupiters_Moon-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/11", // YYYY/MM/DD
		frontImage:"Ganymede_Jupiters_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/11", // YYYY/MM/DD
		topImage:"Ganymede_Jupiters_Moon-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/11", // YYYY/MM/DD
		width:5262,
		length:5262,
		height:5262,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["ball","largest","natural satellite","solar system","sphere","terrain"], // don't include anything in categories or name
		dateAdded:"2024/03/11", // YYYY/MM/DD
		lastModified:"2024/03/11", // YYYY/MM/DD
	},
	{
		name:"Titan (Saturn's Moon)",
		defaultAngle:0,
		sideImage:"Titan_Saturns_Moon-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/11", // YYYY/MM/DD
		frontImage:"Titan_Saturns_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/11", // YYYY/MM/DD
		topImage:"Titan_Saturns_Moon-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/11", // YYYY/MM/DD
		width:5150,
		length:5150,
		height:5150,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["ball","natural satellite","second largest","solar system","sphere","terrain"], // don't include anything in categories or name
		dateAdded:"2024/03/11", // YYYY/MM/DD
		lastModified:"2024/03/11", // YYYY/MM/DD
	},
	{
		name:"Lightning",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Lightning-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/12", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:5.015,
		length:5.015,
		height:6.43,
		category1:"nature",
		category2:"objects",
		category3:"weather",
		tags:["electricity"], // don't include anything in categories or name
		dateAdded:"2024/03/12", // YYYY/MM/DD
		lastModified:"2024/03/12", // YYYY/MM/DD
	},
	{
		name:"Mauna Kea",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mauna_Kea-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/21", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:26.0143,
		length:26.0143,
		height:10.211,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["highest","tallest"], // don't include anything in categories or name
		dateAdded:"2024/03/21", // YYYY/MM/DD
		lastModified:"2024/03/21", // YYYY/MM/DD
	},
	{
		name:"Mauna Kea (with water-line)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mauna_Kea_with_water_line-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/21", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:26.0143,
		length:26.0143,
		height:10.211,
		category1:"nature",
		category2:"geography",
		category3:"mountains",
		tags:["highest","tallest"], // don't include anything in categories or name
		dateAdded:"2024/03/21", // YYYY/MM/DD
		lastModified:"2024/03/21", // YYYY/MM/DD
	},
	{
		name:"SD Card",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"SD_Card-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/20", // YYYY/MM/DD
		width:0.000032,
		length:0.000024,
		height:0.00000208,
		category1:"technology",
		category2:"modern",
		category3:"storage",
		tags:["sdhc","sdxc"], // don't include anything in categories or name
		dateAdded:"2024/03/24", // YYYY/MM/DD
		lastModified:"2024/03/24", // YYYY/MM/DD
	},
	{
		name:"International Space Station (ISS)",
		defaultAngle:2,
		sideImage:"International_Space_Station_ISS-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/24", // YYYY/MM/DD
		frontImage:"International_Space_Station_ISS-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/24", // YYYY/MM/DD
		topImage:"International_Space_Station_ISS-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/24", // YYYY/MM/DD
		width:0.08,
		length:0.108,
		height:0.026,
		category1:"transportation",
		category2:"spacecraft",
		category3:"satellites",
		tags:["research"], // don't include anything in categories or name
		dateAdded:"2024/03/24", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Avocado",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Avocado-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/26", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000073,
		length:0.000073,
		height:0.0001,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["berry","vegetable"], // don't include anything in categories or name
		dateAdded:"2024/03/26", // YYYY/MM/DD
		lastModified:"2024/03/26", // YYYY/MM/DD
	},
	{
		name:"Bathtub",
		defaultAngle:0,
		sideImage:"Bathtub-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Mels",
		sideImageDate:"2024/03/27", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000976,
		length:0.0019,
		height:0.00144,
		category1:"miscellaneous",
		category2:"household-items",
		category3:"objects",
		tags:["bathe","container"], // don't include anything in categories or name
		dateAdded:"2024/03/27", // YYYY/MM/DD
		lastModified:"2024/03/27", // YYYY/MM/DD
	},
	{
		name:"Watermelon",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Watermelon-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/27", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000325,
		length:0.000325,
		height:0.000381,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["berry"], // don't include anything in categories or name
		dateAdded:"2024/03/27", // YYYY/MM/DD
		lastModified:"2024/03/27", // YYYY/MM/DD
	},
	{
		name:"Jackfruit",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Jackfruit-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/27", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00042,
		length:0.00042,
		height:0.000762,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["bumpy"], // don't include anything in categories or name
		dateAdded:"2024/03/27", // YYYY/MM/DD
		lastModified:"2024/03/27", // YYYY/MM/DD
	},
	{
		name:"Bacteriophage",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Bacteriophage-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000000001,
		length:0.0000000001,
		height:0.0000000001,
		category1:"miscellaneous",
		category2:"particles",
		category3:"viruses",
		tags:["icosahedral"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Japanese Spider Crab",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Japanese_Spider_Crab-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"Japanese_Spider_Crab-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/28", // YYYY/MM/DD
		width:0.0038,
		length:0.00323,
		height:0.00167,
		category1:"nature",
		category2:"animals",
		category3:"crustaceans",
		tags:["largest"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Megalodon",
		defaultAngle:0,
		sideImage:"Megalodon-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/28", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0059,
		length:0.0183,
		height:0.00622,
		category1:"nature",
		category2:"animals",
		category3:"fish",
		tags:["megatooth","shark"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Tardigrade (Water Bear)",
		defaultAngle:0,
		sideImage:"Tardigrade_Water_Bear-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/28", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000018,
		length:0.0000005,
		height:0.0000002,
		category1:"nature",
		category2:"animals",
		category3:"micro-animals",
		tags:["invertebrate"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Golden Gate Bridge",
		defaultAngle:0,
		sideImage:"Golden_Gate_Bridge-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/28", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.027,
		length:2.5,
		height:0.227,
		category1:"structures",
		category2:"bridges",
		category3:"cable-stayed",
		tags:["san francisco"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"CCTV Headquarters",
		defaultAngle:0,
		sideImage:"CCTV_Headquarters-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/28", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"bottom",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.2256,
		length:0.2256,
		height:0.237,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["china central television"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"One World Trade Center",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"One_World_Trade_Center-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0655,
		length:0.0655,
		height:0.546,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["new york"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Petronas Towers",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Petronas_Towers-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.194,
		length:0.09,
		height:0.452,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["malaysia"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"UN Headquarters",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"UN_Headquarters-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0954,
		length:0.02,
		height:0.154,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["united nations"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Willis Tower",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"bottom",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Willis_Tower-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/28", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0738,
		length:0.0738,
		height:0.527,
		category1:"structures",
		category2:"buildings",
		category3:"skyscrapers",
		tags:["sears"], // don't include anything in categories or name
		dateAdded:"2024/03/28", // YYYY/MM/DD
		lastModified:"2024/03/28", // YYYY/MM/DD
	},
	{
		name:"Human Egg",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Egg-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/31", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000012,
		length:0.00000012,
		height:0.00000012,
		category1:"miscellaneous",
		category2:"particles",
		category3:"cells",
		tags:["female","ovum","reproductive"], // don't include anything in categories or name
		dateAdded:"2024/03/31", // YYYY/MM/DD
		lastModified:"2024/03/31", // YYYY/MM/DD
	},
	{
		name:"Human Sperm",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Human_Sperm-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/03/31", // YYYY/MM/DD
		width:0.00000000588,
		length:0.000000042,
		height:0.00000000588,
		category1:"miscellaneous",
		category2:"particles",
		category3:"cells",
		tags:["male","reproductive"], // don't include anything in categories or name
		dateAdded:"2024/03/31", // YYYY/MM/DD
		lastModified:"2024/03/31", // YYYY/MM/DD
	},
	{
		name:"Mimivirus",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Mimivirus-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/31", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000000000665,
		length:0.000000000665,
		height:0.0000000007,
		category1:"miscellaneous",
		category2:"particles",
		category3:"viruses",
		tags:["dna","giant"], // don't include anything in categories or name
		dateAdded:"2024/03/31", // YYYY/MM/DD
		lastModified:"2024/03/31", // YYYY/MM/DD
	},
	{
		name:"Escherichia Coli (E. Coli)",
		defaultAngle:0,
		sideImage:"Escherichia_Coli_E._Coli-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/31", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00000000045,
		length:0.0000000015,
		height:0.00000000045,
		category1:"miscellaneous",
		category2:"particles",
		category3:"bacteria",
		tags:["enterobacteriaceae"], // don't include anything in categories or name
		dateAdded:"2024/03/31", // YYYY/MM/DD
		lastModified:"2024/03/31", // YYYY/MM/DD
	},
	{
		name:"Human Immunodeficiency Virus (HIV)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Human_Immunodeficiency_Virus_HIV-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/03/31", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000000001,
		length:0.0000000001,
		height:0.0000000001,
		category1:"miscellaneous",
		category2:"particles",
		category3:"viruses",
		tags:["aids"], // don't include anything in categories or name
		dateAdded:"2024/03/31", // YYYY/MM/DD
		lastModified:"2024/03/31", // YYYY/MM/DD
	},
	{
		name:"Keratinocyte (Human Skin Cell)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Keratinocyte_Human_Skin_Cell-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/04/02", // YYYY/MM/DD
		width:0.00000001044,
		length:0.000000012,
		height:0.000000002,
		category1:"miscellaneous",
		category2:"particles",
		category3:"cells",
		tags:["epidermis"], // don't include anything in categories or name
		dateAdded:"2024/04/02", // YYYY/MM/DD
		lastModified:"2024/04/02", // YYYY/MM/DD
	},
	{
		name:"Paramecium",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Paramecium-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/04/02", // YYYY/MM/DD
		width:0.000000043,
		length:0.0000001,
		height:0.000000043,
		category1:"miscellaneous",
		category2:"particles",
		category3:"cells",
		tags:["organism"], // don't include anything in categories or name
		dateAdded:"2024/04/02", // YYYY/MM/DD
		lastModified:"2024/04/02", // YYYY/MM/DD
	},
	{
		name:"Hemoglobin",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Hemoglobin-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/04/02", // YYYY/MM/DD
		width:0.00000000000475,
		length:0.000000000005,
		height:0.000000000005,
		category1:"miscellaneous",
		category2:"particles",
		category3:"molecules",
		tags:["protein"], // don't include anything in categories or name
		dateAdded:"2024/04/02", // YYYY/MM/DD
		lastModified:"2024/04/02", // YYYY/MM/DD
	},
	{
		name:"Quasi Star (Hypothetical)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Quasi_Star_Hypothetical-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/04/03", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:10000000000,
		length:10000000000,
		height:10000000000,
		category1:"space",
		category2:"stars",
		category3:"supergiants",
		tags:["large"], // don't include anything in categories or name
		dateAdded:"2024/04/03", // YYYY/MM/DD
		lastModified:"2024/04/03", // YYYY/MM/DD
	},
	{
		name:"Hydrogen Atom",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Hydrogen_Atom-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/04/03", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000000000001,
		length:0.0000000000001,
		height:0.0000000000001,
		category1:"miscellaneous",
		category2:"particles",
		category3:"atoms",
		tags:["simplest"], // don't include anything in categories or name
		dateAdded:"2024/04/03", // YYYY/MM/DD
		lastModified:"2024/04/03", // YYYY/MM/DD
	},
	{
		name:"Francium Atom",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Hydrogen_Atom-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/04/03", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000000000000348,
		length:0.000000000000348,
		height:0.000000000000348,
		category1:"miscellaneous",
		category2:"particles",
		category3:"atoms",
		tags:["radioactive"], // don't include anything in categories or name
		dateAdded:"2024/04/03", // YYYY/MM/DD
		lastModified:"2024/04/03", // YYYY/MM/DD
	},
	{
		name:"Lacrymaria Olor",
		defaultAngle:0,
		sideImage:"Lacrymaria_Olor-side",
		sideImageAlign:"none",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/03/28", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000000008,
		length:0.0000001,
		height:0.000000008,
		category1:"nature",
		category2:"animals",
		category3:"micro-animals",
		tags:["ciliate protozoan","swan tear"], // don't include anything in categories or name
		dateAdded:"2024/04/04", // YYYY/MM/DD
		lastModified:"2024/04/04", // YYYY/MM/DD
	},
	{
		name:"White Blood Cell",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"White_Blood_Cell-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/04/06", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.000000014,
		length:0.000000014,
		height:0.000000014,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["immune system","wbc"], // don't include anything in categories or name
		dateAdded:"2024/04/06", // YYYY/MM/DD
		lastModified:"2024/04/06", // YYYY/MM/DD
	},
	{
		name:"Stentor",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Stentor-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/04/06", // YYYY/MM/DD
		width:0.0000007,
		length:0.000002,
		height:0.0000007,
		category1:"miscellaneous",
		category2:"particles",
		category3:"cells",
		tags:["ciliate","sedentary"], // don't include anything in categories or name
		dateAdded:"2024/04/06", // YYYY/MM/DD
		lastModified:"2024/04/06", // YYYY/MM/DD
	},
	{
		name:"Liebherr R 9800",
		defaultAngle:0,
		sideImage:"Liebherr_R_9800-side",
		sideImageAlign:"bottom",
		sideImageArtist:"felax",
		sideImageDate:"2024/04/08", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0105,
		length:0.025435,
		height:0.0117,
		category1:"transportation",
		category2:"vehicles",
		category3:"construction",
		tags:["digger","excavator","largest"], // don't include anything in categories or name
		dateAdded:"2024/04/08", // YYYY/MM/DD
		lastModified:"2024/04/15", // YYYY/MM/DD
	},
	{
		name:"20ft Intermodal Container",
		defaultAngle:0,
		sideImage:"20ft_Intermodal_Container-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/04/15", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00244,
		length:0.0061,
		height:0.00259,
		category1:"transportation",
		category2:"containers",
		category3:"industrial",
		tags:["freight","shipping"], // don't include anything in categories or name
		dateAdded:"2024/04/15", // YYYY/MM/DD
		lastModified:"2024/04/15", // YYYY/MM/DD
	},
	{
		name:"40ft Intermodal Container",
		defaultAngle:0,
		sideImage:"40ft_Intermodal_Container-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/04/15", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00244,
		length:0.012192,
		height:0.00259,
		category1:"transportation",
		category2:"containers",
		category3:"industrial",
		tags:["freight","shipping"], // don't include anything in categories or name
		dateAdded:"2024/04/15", // YYYY/MM/DD
		lastModified:"2024/04/15", // YYYY/MM/DD
	},
	{
		name:"Strawberry",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Strawberry-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.0000195,
		length:0.0000195,
		height:0.00003048,
		category1:"miscellaneous",
		category2:"food",
		category3:"fruit",
		tags:["fragaria"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Jalapeño",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Jalapeno-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00002682,
		length:0.00002682,
		height:0.00008128,
		category1:"miscellaneous",
		category2:"food",
		category3:"vegetables",
		tags:["hot","jalapeno","pepper","spice","spicy"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Spinosaurus Aegyptiacus",
		defaultAngle:0,
		sideImage:"Spinosaurus_Aegyptiacus-side",
		sideImageAlign:"bottom",
		sideImageArtist:"Daniel Roberts (BlenderTimer)",
		sideImageDate:"2024/06/25", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.002,
		length:0.0152,
		height:0.00532,
		category1:"nature",
		category2:"animals",
		category3:"reptiles",
		tags:["dinosaur"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"North Sentinel Island",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"North_Sentinel_Island-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/25", // YYYY/MM/DD
		width:8.73,
		length:7.5,
		height:0.122,
		category1:"nature",
		category2:"geography",
		category3:"land",
		tags:["andaman"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Continental United States",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Continental_United_States-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/25", // YYYY/MM/DD
		width:3094,
		length:4912,
		height:4.418,
		category1:"nature",
		category2:"geography",
		category3:"land",
		tags:["america","conterminous","north","u.s.a.","usa"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Robert Waldow",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Robert_Waldow-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.00073408,
		length:0.0006,
		height:0.00272,
		category1:"nature",
		category2:"animals",
		category3:"humans",
		tags:["alton","giant","largest","man","perishing","person","tallest"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Vesta",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Vesta-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:530,
		length:430,
		height:429,
		category1:"space",
		category2:"objects",
		category3:"asteroids",
		tags:["largest"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Sirius B",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Sirius_B-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:11687,
		length:11687,
		height:11687,
		category1:"space",
		category2:"stars",
		category3:"white-dwarfs",
		tags:["pup"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"J1407b Rings",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"J1407b_Rings-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/25", // YYYY/MM/DD
		width:180000000,
		length:180000000,
		height:100,
		category1:"space",
		category2:"planets",
		category3:"gaseous",
		tags:["exoplanet"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Charon (Pluto's Moon)",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Charon_Plutos_Moon-front",
		frontImageAlign:"none",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:606,
		length:606,
		height:606,
		category1:"space",
		category2:"planets",
		category3:"moons",
		tags:["i","largest"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Taj Mahal",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Taj_Mahal-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.114,
		length:0.095,
		height:0.073,
		category1:"structures",
		category2:"buildings",
		category3:"religious-buildings",
		tags:["crown of the palace","mausoleum","temple"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Statue of Unity",
		defaultAngle:1,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"Statue_of_Unity-front",
		frontImageAlign:"bottom",
		frontImageArtist:"Daniel Roberts (BlenderTimer)",
		frontImageDate:"2024/06/25", // YYYY/MM/DD
		topImage:"",
		topImageAlign:"none",
		topImageArtist:"",
		topImageDate:"", // YYYY/MM/DD
		width:0.071,
		length:0.061,
		height:0.182,
		category1:"structures",
		category2:"monuments",
		category3:"statues",
		tags:["largest","tallest"], // don't include anything in categories or name
		dateAdded:"2024/06/25", // YYYY/MM/DD
		lastModified:"2024/06/25", // YYYY/MM/DD
	},
	{
		name:"Cat's Eye Nebula",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Cats_Eye_Nebula-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/26", // YYYY/MM/DD
		width:29326000000000,
		length:47300000000000,
		height:29326000000000,
		category1:"space",
		category2:"objects",
		category3:"nebulae",
		tags:["nebulas"], // don't include anything in categories or name
		dateAdded:"2024/06/26", // YYYY/MM/DD
		lastModified:"2024/06/26", // YYYY/MM/DD
	},
	{
		name:"Oort Cloud",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Oort_Cloud-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/26", // YYYY/MM/DD
		width:14959800000000,
		length:14959800000000,
		height:14959800000000,
		category1:"space",
		category2:"objects",
		category3:"clusters",
		tags:["solar system"], // don't include anything in categories or name
		dateAdded:"2024/06/26", // YYYY/MM/DD
		lastModified:"2024/06/26", // YYYY/MM/DD
	},
	{
		name:"Hub Island (Just Enough Room Island)",
		defaultAngle:2,
		sideImage:"",
		sideImageAlign:"none",
		sideImageArtist:"",
		sideImageDate:"", // YYYY/MM/DD
		frontImage:"",
		frontImageAlign:"none",
		frontImageArtist:"",
		frontImageDate:"", // YYYY/MM/DD
		topImage:"Hub_Island_Just_Enough_Room_Island-top",
		topImageAlign:"none",
		topImageArtist:"Daniel Roberts (BlenderTimer)",
		topImageDate:"2024/06/29", // YYYY/MM/DD
		width:0.03713,
		length:0.02859,
		height:0.005,
		category1:"nature",
		category2:"geography",
		category3:"land",
		tags:["smallest","thousand"], // don't include anything in categories or name
		dateAdded:"2024/06/29", // YYYY/MM/DD
		lastModified:"2024/06/29", // YYYY/MM/DD
	},
];

//	———————— STEPS FOR UPDATING ————————
//	1. Update the tool version.
//	2. Regenerate SEO tags.
//  3. Upload image(s) to Github (/web-tools/compare-size/images/...).
//  4. Upload compare-size.html and cs-object-info.js to Github (/web-tools/).
//	5. Update Looker Studio stats