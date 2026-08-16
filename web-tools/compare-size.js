// —————————— MISC FUNCTIONS ——————————
Array.prototype.minimum = function() {let min = Infinity; for (const val of this) {if (val < min) {min = val}}; return min};
Array.prototype.maximum = function() {let max = -Infinity; for (const val of this) {if (val > max) {max = val}}; return max};

// —————————— DOCUMENT OBJECTS & GLOBAL VARIABLES ——————————
const body = document.body;
const header = document.getElementsByTagName('header')[0];

const toolTitle = document.getElementById('tool-title');
const toolContainer = document.getElementById('tool-container');

const toolLeftSidebar = document.getElementById('tool-left-sidebar');

const catalogCount = document.getElementById('catalog-count');
const objectCatalogSearch = document.getElementById('object-catalog-search');
const objectCatalogSortButton = document.getElementById('object-catalog-sort-button');
const objectCatalogSortDropdown = document.getElementById('object-catalog-sort-dropdown');
const objectCatalogEmpty = document.getElementById('object-catalog-empty');
const objectCatalogContainer = document.getElementById('object-catalog-container');
const objectCatalogList = document.getElementById('object-catalog-list');
let catalog = [];
const objectIndexMap = new Map();

const canvasObjectsEmpty = document.getElementById('object-list-empty');
const canvasObjectsList = document.getElementById('object-list');

const canvasWelcomeStarter = document.getElementById('canvas-welcome-starter');

const toolCanvas = document.getElementById('tool-canvas');
const canvasObjectsSVG = document.getElementById('canvas-objects');
const canvasCamera = document.getElementById('canvas-camera');
const canvasObjectsGroup = document.getElementById('canvas-objects-group');
const canvasSelectionGroup = document.getElementById('canvas-selection-group');
const canvasLabelsGroup = document.getElementById('canvas-labels-group');
const canvasScrollWarning = document.getElementById('canvas-scroll-warning');
const groundLine = document.getElementById('ground-line');
const groundLineRect = document.getElementById('ground-line-rect');
let canvasObjects = [];
const svgCache = new Map();
let labelsRAF = null;
const textWidthCache = new Map();
let labelMeasureCtx = null;

const scaleToUnit = {
	1e-30: 'qm',
	1e-27: 'rm',
	1e-24: 'ym',
	1e-21: 'zm',
	1e-18: 'am',
	1e-15: 'fm',
	1e-12: 'pm',
	1e-9: 'nm',
	1e-6: 'μm',
	1e-3: 'mm',
	0.01: 'cm',
	0.1: 'dm',
	1: 'm',
	1000: 'km',
	0.0254: 'in',
	0.3048: 'ft',
	0.9144: 'yd',
	1609.34: 'mi',
	695700000: 'R⊙',
	1.496e11: 'au',
	9.461e15: 'ly',
	3.0856775814913700e16: 'pc',
	3.0856775814913700e19: 'kpc',
	3.0856775814913700e22: 'Mpc',
	3.0856775814913700e25: 'Gpc',
};

const UNIT_SYSTEMS = {
	'metric-length': {
		grid: 10,
		units: [
			{ abbr: 'qm', scale: 1e-30, threshold: 1 },
			{ abbr: 'rm', scale: 1e-27, threshold: 1 },
			{ abbr: 'ym', scale: 1e-24, threshold: 1 },
			{ abbr: 'zm', scale: 1e-21, threshold: 1 },
			{ abbr: 'am', scale: 1e-18, threshold: 1 },
			{ abbr: 'fm', scale: 1e-15, threshold: 1 },
			{ abbr: 'pm', scale: 1e-12, threshold: 1 },
			{ abbr: 'nm', scale: 1e-9, threshold: 1 },
			{ abbr: 'μm', scale: 1e-6, threshold: 1 },
			{ abbr: 'mm', scale: 1e-3, threshold: 1 },
			{ abbr: 'cm', scale: 0.01, threshold: 10 },
			{ abbr: 'm', scale: 1, threshold: 2 },
			{ abbr: 'km', scale: 1000, threshold: 1 },
			{ abbr: 'R⊙', scale: 6.957e+8, threshold: 10 },
			{ abbr: 'au', scale: 1.496e11, threshold: 2 },
			{ abbr: 'ly', scale: 9.461e15, threshold: 1 },
			{ abbr: 'pc', scale: 3.0856775814913700e16, threshold: 1 },
			{ abbr: 'kpc',scale: 3.0856775814913700e19, threshold: 1 },
			{ abbr: 'Mpc',scale: 3.0856775814913700e22, threshold: 1 },
			{ abbr: 'Gpc',scale: 3.0856775814913700e25, threshold: 1 },
		],
	},
	'imperial-length': {
		grid: 4,
		units: [
			{ abbr: 'in', scale: 0.0254, threshold: 1 },
			{ abbr: 'ft', scale: 0.3048, threshold: 1 },
			{ abbr: 'yd', scale: 0.9144, threshold: 10 },
			{ abbr: 'mi', scale: 1609.34, threshold: 1 },
		],
	},
	'metric-area': {
		grid: 8,
		units: [
			{ abbr: 'qm²', scale: 1e-60, threshold: 1 },
			{ abbr: 'rm²', scale: 1e-54, threshold: 1 },
			{ abbr: 'ym²', scale: 1e-48, threshold: 1 },
			{ abbr: 'zm²', scale: 1e-42, threshold: 1 },
			{ abbr: 'am²', scale: 1e-36, threshold: 1 },
			{ abbr: 'fm²', scale: 1e-30, threshold: 1 },
			{ abbr: 'pm²', scale: 1e-24, threshold: 1 },
			{ abbr: 'nm²', scale: 1e-18, threshold: 1 },
			{ abbr: 'μm²', scale: 1e-12, threshold: 1 },
			{ abbr: 'mm²', scale: 1e-6, threshold: 1 },
			{ abbr: 'cm²', scale: 1e-4, threshold: 10 },
			{ abbr: 'm²', scale: 1, threshold: 2 },
			{ abbr: 'km²', scale: 1e6, threshold: 1 },
			{ abbr: 'R⊙²', scale: 4.8396849e17, threshold: 10 },
			{ abbr: 'au²', scale: 2.238016e22, threshold: 2 },
			{ abbr: 'ly²', scale: 8.9510521e31, threshold: 1 },
		],
	},

	'imperial-area': {
		grid: 4,
		units: [
			{ abbr: 'in²', scale: 0.00064516, threshold: 1 },
			{ abbr: 'ft²', scale: 0.09290304, threshold: 1 },
			{ abbr: 'yd²', scale: 0.83612736, threshold: 10 },
			{ abbr: 'mi²', scale: 2589988.110336, threshold: 1 },
		],
	},

	'metric-volume': {
		grid: 8,
		units: [
			{ abbr: 'qm³', scale: 1e-90, threshold: 1 },
			{ abbr: 'rm³', scale: 1e-81, threshold: 1 },
			{ abbr: 'ym³', scale: 1e-72, threshold: 1 },
			{ abbr: 'zm³', scale: 1e-63, threshold: 1 },
			{ abbr: 'am³', scale: 1e-54, threshold: 1 },
			{ abbr: 'fm³', scale: 1e-45, threshold: 1 },
			{ abbr: 'pm³', scale: 1e-36, threshold: 1 },
			{ abbr: 'nm³', scale: 1e-27, threshold: 1 },
			{ abbr: 'μm³', scale: 1e-18, threshold: 1 },
			{ abbr: 'mm³', scale: 1e-9, threshold: 1 },
			{ abbr: 'cm³', scale: 1e-6, threshold: 10 },
			{ abbr: 'mL', scale: 1e-6, threshold: 10 }, // 1 cm³
			{ abbr: 'L', scale: 1e-3, threshold: 10 }, // 1 dm³
			{ abbr: 'm³', scale: 1,	 threshold: 2 },
			{ abbr: 'km³', scale: 1e9, threshold: 1 },
			{ abbr: 'ly³', scale: 8.468255e47, threshold: 1 },
		],
	},

	'imperial-volume': {
		grid: 9,
		units: [
			{ abbr: 'fl oz', scale: 2.95735295625e-5, threshold: 1 },
			{ abbr: 'cup', scale: 2.36588236e-4, threshold: 1 },
			{ abbr: 'pt', scale: 4.73176473e-4,	threshold: 1 },
			{ abbr: 'qt', scale: 9.46352946e-4,	threshold: 1 },
			{ abbr: 'gal', scale: 3.785411784e-3, threshold: 1 },
			{ abbr: 'in³', scale: 1.6387064e-5, threshold: 1 },
			{ abbr: 'ft³', scale: 0.028316846592, threshold: 1 },
			{ abbr: 'yd³', scale: 0.764554857984, threshold: 10 },
			{ abbr: 'mi³', scale: 4168181825.44058, threshold: 1 },
		],
	},
};

// Backwards-compatible aliases
const metricUnits = UNIT_SYSTEMS['metric-length'].units;
const imperialUnits = UNIT_SYSTEMS['imperial-length'].units;

function getMeasurementCategory(measurementType) {
	if (measurementType === 'volume') return 'volume';
	if (measurementType === 'visual-area' || measurementType === 'surface-area') return 'area';
	return 'length';
}

function unitSetKey(system, category) {
	return `${system === 'imperial' ? 'imperial' : 'metric'}-${category}`;
}
function getUnitList(system, category) {
	return UNIT_SYSTEMS[unitSetKey(system, category)].units;
}
function getUnitGrid(system, category) {
	return UNIT_SYSTEMS[unitSetKey(system, category)].grid;
}

let unitMode = 'metric';

function init() {
	if (sidebar === false) {setSidebar('hide')};
	document.getElementById('bg-color').value = window.getComputedStyle(document.documentElement).getPropertyValue('--bgcol').trim();
	updateCanvas();
	loadObjectCatalog();
	refreshObjectCatalog();
	loadContributors();

	const um = getCookie('unit_system');
	if (um === 'imperial') {setUnitMode('imperial')};

	// Check URL parameters
	const params = new URL(window.location.href).searchParams;
	const objects = params.get('objects');
	const user = params.get('user');

	if (objects !== null) {
		const objList = objects.split(' ');
		for (let i=0; i < objList.length; i++) {
			addObjectToCanvas(catalog[objectIndexMap.get(parseInt(objList[i]))], true);
		}
	}

	if (user !== null) {
		const userFilter = contributors.filter(a => a.name === user);
		if (userFilter.length > 0) {modal('contributor', {parent:'page', contributor:userFilter[0]})};
	}
}

const surprises = [
		// YOU
		{title:'A Man and a Boeing 747', ids:[4,113]},
		{title:'A Man and the Stratolaunch', ids:[4,140]},
		{title:'A Man and a Starlink Satellite', ids:[4,119]},
		{title:'A Man and the James Webb Space Telescope', ids:[4,110]},
		{title:'A Man and the Hubble Space Telescope', ids:[4,451]},
		{title:'A Man and a Liebherr R 9800', ids:[4,223]},
		{title:'A Man and a BelAZ 75710', ids:[4,109]},
		{title:'A Man and Robert Wadlow', ids:[4,231]},
		{title:'A Man and the Statue of Liberty', ids:[4,88]},
		{title:'A Man, the Statue of Liberty, and the Statue of Unity', ids:[4,88,237]},
		{title:'A Man and a California Redwood', ids:[4,138]},
		{title:'A Man, a California Redwood, and a Ponderosa Pine', ids:[4,138,90]},
		{title:'A Man and Jackfruit', ids:[4,198]},
		// YOU vs ANIMAL
		{title:'A Man and an Amphicoelias Fragillimus', ids:[4,392]},
		{title:'A Man and an African Bush Elephant', ids:[4,177]},
		{title:'A Man and an American Bison', ids:[4,438]},
		{title:'A Man and a Lion', ids:[4,185]},
		{title:'A Man and a Giraffe', ids:[4,26]},
		{title:'A Man and a Ostrich', ids:[4,269]},
		{title:'A Man and a Dodo', ids:[4,313]},
		{title:'A Man and a Wandering Albatross', ids:[4,180]},
		{title:'A Man and a Emperor Penguin', ids:[4,184]},
		{title:'A Man and a Hippopotamus', ids:[4,267]},
		{title:'A Man and a Capybara', ids:[4,295]},
		{title:'A Man and a Grizzly Bear', ids:[4,182]},
		{title:'A Man and a Polar Bear', ids:[4,183]},
		{title:'A Man, a Polar Bear, and a Grizzly Bear', ids:[4,182,183]},
		{title:'A Man and a Green Anaconda', ids:[4,274]},
		{title:'A Man and a Saltwater Crocodile', ids:[4,260]},
		{title:'A Man and a Blue Whale', ids:[4,93]},
		{title:'A Man and a Sperm Whale', ids:[4,27]},
		{title:'A Man and a Whale Shark', ids:[4,318]},
		{title:'A Man and a Great White Shark', ids:[4,29]},
		{title:'A Man and Megalodon', ids:[4,201]},
		{title:'A Man and a Colossal Squid', ids:[4,422]},
		{title:'A Man and a Common Octopus', ids:[4,441]},
		{title:'A Man and a Bigfin Squid', ids:[4,421]},
		{title:'A Man and a Japanese Spider Crab', ids:[4,200]},
		{title:'A Man and a Leatherback Sea Turtle', ids:[4,442]},
		{title:'A Man and a Tyrannosaurus Rex', ids:[4,108]},
		{title:'A Man and a Titanoboa Cerrejonensis', ids:[4,405]},
		// ANIMAL vs ANIMAL
		{title:'An African Bush Elephant and a Giraffe', ids:[177,26]},
		{title:'A Hippopotamus and an African Bush Elephant', ids:[267,177]},
		{title:'An American Bison and an African Bush Elephant', ids:[438,177]},
		{title:'A White Rhinoceros and an African Bush Elephant', ids:[443,177]},
		{title:'A Male Lion and an African Bush Elephant', ids:[185,177]},
		{title:'An African Bush Elephant and a Woolly Mammoth', ids:[177,178]},
		{title:'A Triceratops Horridus and a Tyrannosaurus Rex', ids:[271,108]},
		{title:'A Great White Shark and Megalodon', ids:[29,201]},
		{title:'Megalodon and a Blue Whale', ids:[201,93]},
		{title:'A Great White Shark and a Blue Whale', ids:[29,93]},
		{title:'A Green Anaconda and a Titanoboa Cerrejonensis', ids:[274,405]},
		//ANIMAL vs OTHER
		{title:'The Titanic and a Blue Whale', ids:[84,93]},
		{title:'A Boeing 747 and a Blue Whale', ids:[113,93]},
		{title:'A House and Tyrannosaurus Rex', ids:[417,108]},
		{title:`A Man, a Giraffe, and Noah's Ark`, ids:[4,26,181]},
		// SPACE
		{title:'Earth and the Moon', ids:[1,49]},
		{title:'Earth and Jupiter', ids:[1,9]},
		{title:'Earth and Saturn', ids:[1,65]},
		{title:'The Sun and the Earth', ids:[13,1]},
		{title:'The Sun and Jupiter', ids:[13,9]},
		{title:'The Sun and Sirius A', ids:[13,14]},
		{title:'The Sun and Rigel', ids:[13,43]},
		// SMALL THINGS
		{title:'A Coronavirus and a Red Blood Cell', ids:[115,3]},
		{title:'A Red Blood Cell and a Grain of Sand', ids:[3,53]},
		{title:'RoboBee and a Human Hand', ids:[419,79]},
		// MEDIUM THINGS
		{title:'An Apple, Watermelon, and Jackfruit', ids:[167,197,198]},
		{title:'A Chicken Egg and an Ostrich Egg', ids:[166,270]},
		// LARGE THINGS
		{title:'The Burj Khalifa and the Eiffel Tower', ids:[32,70]},
		{title:'The Statue of Liberty and the Eiffel Tower', ids:[88,70]},
		{title:'The Statue of Liberty and the Burj Khalifa', ids:[88,32]},
		{title:'The Statue of Liberty and the International Space Station', ids:[88,194]},
		{title:'The Statue of Liberty and a California Redwood', ids:[88,138]},
		{title:'Lightning and the Eiffel Tower', ids:[190,70]},
		{title:'Lightning and the Statue of Liberty', ids:[190,88]},
		{title:'The Falcon 9 and a Boeing 747', ids:[171,113]},
		{title:'The Space Shuttle, Falcon 9, and Saturn V', ids:[73,171,72]},
		{title:'A Boeing 747 and the Bagger 293', ids:[113,103]},
		{title:'A Boeing 747 and the International Space Station', ids:[113,194]},
		{title:'A Bell 206L4 and a Mil Mi-26', ids:[135,136]},
		{title:'A Cessna 172 Skyhawk and a Boeing 747', ids:[74,113]},
		{title:'The Titanic and a Cruise Ship', ids:[84,87]},
		{title:`Noah's Ark and a Cruise Ship`, ids:[181,87]},
		{title:'A Cruise Ship and a Nuclear Submarine', ids:[87,187]},
		{title:'Mauna Kea and Mt. Everest', ids:[192,59]},
		{title:'Mt. Everest and the Mariana Trench', ids:[192,139]},
		{title:'The Grand Canyon and the Mariana Trench', ids:[106,139]},
		{title:'The Grand Canyon and Valles Marineris', ids:[106,107]},
		{title:'Mt. Everest and Olympus Mons', ids:[192,104]},
		{title:'Russia and the United States', ids:[420,230]},
		{title:'The James Webb Space Telescope and the Hubble Space Telescope', ids:[110,451]},
	];

async function surpriseMe() {
	const surprise = surprises[Math.round(Math.random()*(surprises.length-1))];
	for (let i=0; i < surprise.ids.length; i++) {
		addObjectToCanvas(catalog[objectIndexMap.get(surprise.ids[i])], true);
	}
}

// —————————— FULLSCREEN ——————————
let fullscreen = false;
function setFullscreen(fs = 'toggle') {
	if (fs === 'toggle') {
		if (fullscreen === true) {disableFullscreen()}
		else {enableFullscreen()};
	}
	else if (fs === 'disable') {disableFullscreen()}
	else if (fs === 'enable') {enableFullscreen()};

	toolContainer.addEventListener('transitionend', function handler(e) {
		if (e.target === toolContainer) {
			updateCanvas();
			toolContainer.removeEventListener('transitionend', handler);
		}
	});

	function disableFullscreen() {
		toolContainer.classList.remove('fullscreen');
		body.removeAttribute('style');
		header.removeAttribute('style')
		header.children[0].removeAttribute('style')
		toolTitle.removeAttribute('style');
		fullscreen = false;
	}

	function enableFullscreen() {
		toolContainer.classList.add('fullscreen');
		window.scrollTo(0, 0);
		body.style.paddingTop = "0px";
		body.style.overflow = "hidden";
		header.style.top = "-50px";
		header.style.boxShadow = "none";
		toolTitle.style.height = "0";
		toolTitle.style.minHeight = '0';
		toolTitle.style.paddingTop = '0';
		toolTitle.style.paddingBottom = '0';
		fullscreen = true;
	}
}

// —————————— SIDEBAR ——————————
let sidebar = window.innerWidth < 800 ? false : true;
let sidebarUserInteraction = false;
function setSidebar(sb = 'toggle', userInteraction = true) {
	if (sb === 'toggle') {
		if (sidebar === true) {hideSidebar()}
		else {showSidebar()};
	}
	else if (sb === 'hide') {hideSidebar()}
	else if (sb === 'show') {showSidebar()};

	function hideSidebar() {
		toolLeftSidebar.style.display = 'none';
		canvasWelcomeStarter.style.left = '0px';
		canvasWelcomeStarter.style.transition = 'none';
		canvasScrollWarning.style.left = '0px';
		canvasScrollWarning.style.transition = 'none';
		sidebar = false;
		if (userInteraction) {sidebarUserInteraction = true};
		setTimeout(() => {
			autoPositionObjects();
			autoFitCanvas();
			updateCanvas();
			canvasWelcomeStarter.style.transition = null;
			canvasScrollWarning.style.transition = null;
		}, 10);
	}

	function showSidebar() {
		toolLeftSidebar.removeAttribute('style');
		canvasWelcomeStarter.style.left = null;
		canvasWelcomeStarter.style.transition = 'none';
		canvasScrollWarning.style.left = null;
		canvasScrollWarning.style.transition = 'none';
		sidebar = true;
		if (userInteraction) {sidebarUserInteraction = true};
		setTimeout(() => {
			autoPositionObjects();
			autoFitCanvas();
			updateCanvas();
			canvasWelcomeStarter.style.transition = null;
			canvasScrollWarning.style.transition = null;
		}, 10);
	}
}
// —————————— OBJECT CATALOG ——————————
const customObjects = [
	{
		name:'Sphere/Circle',
		tag:'sphere',
		category:'custom objects',
		tags:['ball','ellipse','volume'],
		width:1,length:1,height:1,
		measurementType:'diameter',
		image:'circle.svg',
		angles:'all',
	},
	{
		name:'Cube/Square',
		tag:'cube',
		category:'custom objects',
		tags:['box','block','area','volume'],
		width:1,length:1,height:1,
		measurementType:'diameter',
		image:'square.svg',
		angles:'all',
	},
	{
		name:'Line',
		tag:'line',
		category:'custom objects',
		tags:['measurement','length','distance','flat'],
		length:1,
		measurementType:'length',
		angles:'side',
	},
]

let catalogState = {
	query:'',
	sort:'default',
	objectsFound:[],
	categoriesFound:[],
};
const catalogItemObjects = new WeakMap();

const catalogImageObserver = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (!entry.isIntersecting) continue;
		loadCatalogItemImage(entry.target);
		catalogImageObserver.unobserve(entry.target);
	}
}, {
	root: objectCatalogContainer,
	rootMargin: `600px 0px`,
	threshold: 0
});

function loadCatalogItemImage(div) {
	const obj = catalogItemObjects.get(div);
	if (!obj) return;

	const imageContainer = div.querySelector('.catalog-item-image');
	if (!imageContainer || imageContainer.firstChild) return; // already loaded / no slot

	const imgData = getObjectImageData(obj);
	const img = document.createElement('img');
	img.src = obj.tag
		? `/web-tools/compare-size/images/custom/${imgData.file}`
		: `/web-tools/compare-size/images/${imgData.file}`;
	img.alt = imgData.name;
	img.loading = 'lazy';
	img.decoding = 'async';
	if (obj.rotation && obj.rotation !== 0) {
		img.addEventListener('load', () => {
			const container = imageContainer.getBoundingClientRect();
			const containerWidth = container.width;
			const containerHeight = container.height;

			const imageWidth = img.naturalWidth;
			const imageHeight = img.naturalHeight;

			const baseScale = Math.min(
				containerWidth / imageWidth,
				containerHeight / imageHeight
			);

			const width = imageWidth * baseScale;
			const height = imageHeight * baseScale;

			// Size of the image's bounding box after rotation
			const angle = obj.rotation * Math.PI / 180;
			const cos = Math.abs(Math.cos(angle));
			const sin = Math.abs(Math.sin(angle));

			const rotatedWidth = width * cos + height * sin;
			const rotatedHeight = width * sin + height * cos;

			// Additional scale needed to keep rotated image inside container
			const rotationScale = Math.min(
				1,
				containerWidth / rotatedWidth,
				containerHeight / rotatedHeight
			);

			img.style.transform =
				`rotate(${obj.rotation}deg) scale(${rotationScale})`;
		});
	};
	imageContainer.appendChild(img);

	catalogItemObjects.delete(div);
}

function loadObjectCatalog() {
	catalog = structuredClone([...objects, ...customObjects]);

	// Sort alphabetically by name
	catalog.sort((a, b) => a.name.localeCompare(b.name));

	// Add additional parameters and store index map
	catalog.forEach((obj, index) => {
		obj.rank = catalog.length - index;
		objectIndexMap.set(obj.id, index);

		// Collect unique artists from all angles
		obj.artists = [...new Set(
			Object.values(obj)
				.filter(value => value && typeof value === 'object' && 'artist' in value)
				.map(value => value.artist)
		)];
	});
}

function inputSearch(e) {
	catalogState.query = e.target.value;
	refreshObjectCatalog();
}

function inputSort(e) {
	catalogState.sort = e.target.innerHTML.toLowerCase();
	objectCatalogSortButton.lastChild.innerHTML = catalogState.sort.toUpperCase();
	closeCatalogSortDropdown();
	refreshObjectCatalog(true);
}

function openCatalogSortDropdown() {objectCatalogSortDropdown.removeAttribute('style')};
function closeCatalogSortDropdown() {objectCatalogSortDropdown.style.display = 'none'};

function toggleCatalogSortDropdown(e) {
	if (objectCatalogSortDropdown.style.display) {openCatalogSortDropdown()}
	else {closeCatalogSortDropdown()};
}

// —————————— SEARCH ——————————

const opts = {};
		const weights = Object.assign({ name: 10, category: 6, tags: 4 }, opts.weights);
		const fuzzyMax = opts.fuzzyMaxDistance ?? 2;
		const fuzzyMinLen = opts.minTokenLenForFuzzy ?? 4;
		const minSubstringLen = opts.minSubstringLen ?? 3; // shorter token must be at least this long

const SYNONYM_GROUPS = [
	['plane', 'airplane', 'aeroplane', 'aircraft', 'jet'],
];

// word pairs that look similar (share a prefix/substring) but are NOT related
const EXCLUDED_PAIRS = [
	[["plane", "planes"], ["planet", "planets", "plant", "plants"]],
	[["planet", "planets"], ["plant", "plants"]],
];

const synonymWeight = opts.synonymWeight ?? 0.85;
const synonymMap = new Map();
for (const group of SYNONYM_GROUPS) {
	for (const word of group) {
		if (!synonymMap.has(word)) synonymMap.set(word, new Set());
		for (const other of group) if (other !== word) synonymMap.get(word).add(other);
	}
}

const excludedSet = new Set();
for (const [leftGroup, rightGroup] of EXCLUDED_PAIRS) {
	for (const a of leftGroup) {
		for (const b of rightGroup) {
			excludedSet.add(a + '|' + b);
			excludedSet.add(b + '|' + a);
		}
	}
}
const isExcluded = (a, b) => excludedSet.has(a + '|' + b);

function queryCatalog() {
	const q = catalogState.query.trim();
	const query = catalogState.query.trim().toLowerCase();
	if (q.length === 0) {
		catalogState.objectsFound = [...catalog];
	}
	else if (q.startsWith('id:')) {
		catalogState.objectsFound = [...catalog.filter(item => item.id === parseInt(q.substring(3)))];
	}
	else if (q.startsWith('user:') || q.startsWith('artist:')) {
		const artist = q.substring(q.indexOf(':')+1).toLowerCase();
		catalogState.objectsFound = [...catalog.filter(item => item.artists.some(a => a.toLowerCase() === artist))];
	}
	else {
		catalogState.objectsFound = [];

		const tokenize = (s) =>
			String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
				.split(/[^a-z0-9]+/).filter(Boolean);

		const levenshtein = (a, b, max) => {
			if (Math.abs(a.length - b.length) > max) return -1;
			let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
			for (let i = 1; i <= a.length; i++) {
				const curr = [i];
				let rowMin = i;
				for (let j = 1; j <= b.length; j++) {
					curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
					rowMin = Math.min(rowMin, curr[j]);
				}
				if (rowMin > max) return -1;
				prev = curr;
			}
			return prev[b.length];
		};

		// build inverted index: token -> Map<itemIndex, weight>
		const index = new Map();
		catalog.forEach((item, i) => {
			const fieldTokens = [];
			(item.name ? tokenize(item.name) : []).forEach((t) => fieldTokens.push([t, weights.name]));
			(item.category ? String(item.category).split(">") : []).forEach((seg) =>
				tokenize(seg).forEach((t) => fieldTokens.push([t, weights.category]))
			);
			(item.tags || []).forEach((tag) => tokenize(tag).forEach((t) => fieldTokens.push([t, weights.tags])));

			for (const [t, w] of fieldTokens) {
				if (!index.has(t)) index.set(t, new Map());
				const m = index.get(t);
				m.set(i, Math.max(m.get(i) || 0, w));
			}
		});
		const allTokens = [...index.keys()];

		const queryTokens = tokenize(query);
		if (!queryTokens.length) return [];
		const totalQueryTokens = new Set(queryTokens).size;

		const acc = new Map(); // itemIndex -> { rawScore, matched: Set }
		for (const q of queryTokens) {
			const best = new Map(); // itemIndex -> weight, best tier for this query token

			const applyTier = (token, multiplier) => {
				for (const [i, w] of index.get(token)) {
					const val = w * multiplier;
					if (!best.has(i) || best.get(i) < val) best.set(i, val);
				}
			};

			if (index.has(q)) applyTier(q, 1);

			if (synonymMap.has(q)) {
				for (const related of synonymMap.get(q)) {
					if (index.has(related)) applyTier(related, synonymWeight);
				}
			}

			for (const t of allTokens) {
				if (t === q || isExcluded(t, q)) continue;
				const shorter = Math.min(t.length, q.length);
				if (shorter < minSubstringLen) continue;
				if (t.startsWith(q) || q.startsWith(t)) applyTier(t, 0.7);
				else if (t.includes(q) || q.includes(t)) applyTier(t, 0.5);
			}

			if (q.length >= fuzzyMinLen) {
				for (const t of allTokens) {
					if (best.has(t) || isExcluded(t, q)) continue;
					const d = levenshtein(q, t, fuzzyMax);
					if (d !== -1) applyTier(t, 0.4 * (1 - d / (fuzzyMax + 1)));
				}
			}
	 
			for (const [i, w] of best) {
				if (!acc.has(i)) acc.set(i, { rawScore: 0, matched: new Set() });
				const e = acc.get(i);
				e.rawScore += w;
				e.matched.add(q);
			}
		}

		const results = [];
		for (const [i, e] of acc) {
			const coverage = e.matched.size / totalQueryTokens;
			if (opts.minScore != null && e.rawScore < opts.minScore) continue;
			const score = coverage * 1_000_000 + e.rawScore;
			results.push(Object.assign({}, catalog[i], { score, relevance: score }));
		}

		catalogState.objectsFound = opts.limit ? results.slice(0, opts.limit) : results;
	}
	catalogState.categoriesFound = buildCategoryTree([...new Set(catalogState.objectsFound.map(obj => obj.category))]);
}

function refreshObjectCatalog(skipQuery = false, skipSort = false) {
	if (!skipQuery) {queryCatalog()};

	if (catalogState.sort === 'default' && !skipSort) {
		if (catalogState.query.trim().length > 0) {
			catalogState.objectsFound.sort((a, b) => b.relevance - a.relevance);
			sortCategories(catalogState.categoriesFound, catalogState.sort);
		}
		else {
			catalogState.objectsFound.sort((a, b) => a.name.localeCompare(b.name));
			sortCategories(catalogState.categoriesFound, catalogState.sort);
		}
	}
	else if (catalogState.sort === 'name' && !skipSort) {
		catalogState.objectsFound.sort((a, b) => a.name.localeCompare(b.name));
		sortCategories(catalogState.categoriesFound, catalogState.sort);
	}
	else if (catalogState.sort === 'newest' && !skipSort) {
		catalogState.objectsFound.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
		sortCategories(catalogState.categoriesFound, catalogState.sort);
	}
	else if (catalogState.sort === 'oldest' && !skipSort) {
		catalogState.objectsFound.sort((a, b) => (a.id ?? 1e10) - (b.id ?? 1e10));
		sortCategories(catalogState.categoriesFound, catalogState.sort);
	}
	else if (catalogState.sort === 'largest' && !skipSort) {
		catalogState.objectsFound.sort((a, b) => (((b.width ?? 1) + (b.length ?? 1) + (b.height ?? 1)) * (b.scale ?? 1)) - (((a.width ?? 1) + (a.length ?? 1) + (a.height ?? 1)) * (a.scale ?? 1)));
		sortCategories(catalogState.categoriesFound, catalogState.sort);
	}
	else if (catalogState.sort === 'smallest' && !skipSort) {
		catalogState.objectsFound.sort((a, b) => (((a.width ?? 1) + (a.length ?? 1) + (a.height ?? 1)) * (a.scale ?? 1)) - (((b.width ?? 1) + (b.length ?? 1) + (b.height ?? 1)) * (b.scale ?? 1)));
		sortCategories(catalogState.categoriesFound, catalogState.sort);
	}

	if (catalogState.objectsFound.length > 0) {
		hideCatalogEmpty();
		catalogImageObserver.disconnect();
		while (objectCatalogList.firstChild) {objectCatalogList.removeChild(objectCatalogList.firstChild)};
		objectCatalogList.appendChild(buildCategoryDOM(catalogState.categoriesFound, Object.groupBy(catalogState.objectsFound, obj => obj.category)));
	} else {
		showCatalogEmpty();
	}
	catalogCount.innerHTML = `${catalogState.objectsFound.length.toLocaleString()}/${catalog.length.toLocaleString()}`;
}

function sortCategories(categories, mode = 'default') {
	categories.sort((a, b) => a.name.localeCompare(b.name));
	for (const c of categories) {sortCategories(c.children, mode)};
}

function buildCategoryDOM(categories, objectsByCategory, parentPath = "") {
	const fragment = document.createDocumentFragment();

	if (catalogState.query.trim().length > 0 || catalogState.sort !== 'default') {
		const itemsContainer = document.createElement("div");
		itemsContainer.className = "catalog-items";

		for (const obj of catalogState.objectsFound) {
			itemsContainer.appendChild(getCatalogItem(obj));
		}

		fragment.appendChild(itemsContainer);
		return fragment;
	}

	for (const c of categories) {
		const path = parentPath ? `${parentPath}>${c.name}` : c.name;

		const category = document.createElement("div");
		category.className = "catalog-category";

		const title = document.createElement("div");
		title.className = "catalog-category-title";
		title.innerHTML = `<img src="/static/images/icons/right.svg" alt="Arrow">${c.name}`;
		title.addEventListener('click', (e) => {
			if (title.parentNode.classList.contains('category-open')) {title.parentNode.classList.remove('category-open')}
			else {title.parentNode.classList.add('category-open')}
		});
		category.appendChild(title);

		const contents = document.createElement("div");
		contents.className = "catalog-category-contents";

		const subcategories = document.createElement("div");
		subcategories.className = "catalog-subcategories";

		subcategories.appendChild(buildCategoryDOM(c.children, objectsByCategory, path));

		const itemsContainer = document.createElement("div");
		itemsContainer.className = "catalog-items";

		for (const obj of objectsByCategory[path] ?? []) {
			itemsContainer.appendChild(getCatalogItem(obj));
		}

		contents.append(subcategories, itemsContainer);
		category.appendChild(contents);
		fragment.appendChild(category);
	}

	return fragment;
}

function buildCategoryTree(categories) {
	const root = [];

	for (const category of categories) {
		const parts = category.split(">");
		let current = root;

		for (const part of parts) {
			let category = current.find(c => c.name === part);

			if (!category) {
				category = {name: part, children: []};
				current.push(category);
			}

			current = category.children;
		}
	}

	return root;
}

function hideCatalogEmpty() {objectCatalogEmpty.style.display = 'none'; objectCatalogList.removeAttribute('style')};
function showCatalogEmpty() {objectCatalogEmpty.removeAttribute('style'); objectCatalogList.style.display = 'none'};

function getCatalogItem(obj, skipImage = true) {
	const div = document.createElement('div');
	div.classList.add('catalog-item');
	if (!obj.tag) {
		div.setAttribute('object', `obj-${obj.id.toString()}`);
		div.id = `search-object-${obj.id.toString()}`;
		div.innerHTML = `
			<span class="catalog-item-hover"><img src="/static/images/icons/add.svg" alt="Add icon" loading="lazy" decoding="async"></span>
			<div class="catalog-item-image"></div>
			<b>${obj.name}</b>
		`;
		div.addEventListener('click', () => addObjectToCanvas(obj));
	}
	else {
		div.setAttribute('object', `custom-${obj.tag}`);
		if (obj.tag === 'line') {
			div.innerHTML = `
				<span class="catalog-item-hover"><img src="/static/images/icons/add.svg" alt="Add icon" loading="lazy" decoding="async"></span>
				<div class="catalog-item-image"><div class="custom-line"></div></div>
				<b>${obj.name}</b>
			`;
			div.addEventListener('click', () => addObjectToCanvas(obj));
			return div;
		}
		div.innerHTML = `
			<span class="catalog-item-hover"><img src="/static/images/icons/add.svg" alt="Add icon" loading="lazy" decoding="async"></span>
			<div class="catalog-item-image"></div>
			<b>${obj.name}</b>
		`;
		div.addEventListener('click', () => addObjectToCanvas(obj));
	}

	if (skipImage) {
		catalogItemObjects.set(div, obj);
		catalogImageObserver.observe(div);
	}

	return div;
}

function getObjectImageData(obj, angle = 'default') {
	let imgFile = '';
	let imgName = '';
	let defaultAngle = '';
	if (angle === 'side') {
		if (!obj.tag) {
			if (obj.side) {
				if (obj.side.file) {imgFile = obj.side.file}
				else {imgFile = `${obj.id}-side`};
				imgName = `${obj.name} - Side View`;
				imgFile += '.svg';
			}
			else {return null}
		}
		else { // Custom objects
			imgFile = obj.image;
			imgName = `${obj.name} - Side View`;
		}
		return {file:imgFile, name:imgName};
	}
	else if (angle === 'front') {
		if (!obj.tag) {
			if (obj.front) {
				if (obj.front.file) {imgFile = obj.front.file}
				else {imgFile = `${obj.id}-front`};
				imgName = `${obj.name} - Front View`;
				imgFile += '.svg';
			}
			else {return null}
		}
		else { // Custom objects
			imgFile = obj.image;
			imgName = `${obj.name} - Front View`;
		}
		return {file:imgFile, name:imgName};
	}
	else if (angle === 'top') {
		if (!obj.tag) {
			if (obj.top) {
				if (obj.top.file) {imgFile = obj.top.file}
				else {imgFile = `${obj.id}-top`};
				imgName = `${obj.name} - Top View`;
				imgFile += '.svg';
			}
			else {return null}
		}
		else { // Custom objects
			imgFile = obj.image;
			imgName = `${obj.name} - Front View`;
		}
		return {file:imgFile, name:imgName};
	}
	else {
		if (!obj.tag) {
			if (obj.side && obj.side.keys && obj.side.keys.includes('default')) {
				if (obj.side.file) {imgFile = obj.side.file}
				else {imgFile = `${obj.id}-side`};
				imgName = `${obj.name} - Side View`;
				defaultAngle = 'side';
			}
			else if (obj.front && obj.front.keys && obj.front.keys.includes('default')) {
				if (obj.front.file) {imgFile = obj.front.file}
				else {imgFile = `${obj.id}-front`};
				imgName = `${obj.name} - Front View`;
				defaultAngle = 'front';
			}
			else if (obj.top && obj.top.keys && obj.top.keys.includes('default')) {
				if (obj.top.file) {imgFile = obj.top.file}
				else {imgFile = `${obj.id}-top`};
				imgName = `${obj.name} - Top View`;
				defaultAngle = 'top';
			}
			imgFile += '.svg';
		}
		else { // Custom objects
			imgFile = obj.image;
			imgName = `${obj.name} - Side View`;
			defaultAngle = 'side';
		}
		return {file:imgFile, name:imgName, default:defaultAngle};
	}
}

function getObject(id) {return objects[id-1]};
function getCustomObject(tag) {return customObjects.filter(obj => obj.tag === tag)[0]};

// —————————— CONTRIBUTORS ——————————
const contributorList = document.getElementById('contributor-list');
let contributors = [];
let totalContributions = 0;
const contributorLevels = [
	{id:1, contributions:1, title:'Newbie', color:'#cdcdcd'},
	{id:2, contributions:5, title:'Beginner', color:'#86ff2d'},
	{id:3, contributions:10, title:'Intermediate', color:'#14ffe0'},
	{id:4, contributions:20, title:'Skilled', color:'#ffb300'},
	{id:5, contributions:40, title:'Advanced', color:'#ffb300'},
	{id:6, contributions:60, title:'Pro', color:'#bb5fff'},
	{id:7, contributions:100, title:'Expert', color:'#6570ff'},
	{id:8, contributions:200, title:'Veteran', color:'#fd2f4a'},
	{id:9, contributions:300, title:'Elite', color:'#6570ff'},
	{id:10, contributions:500, title:'Legend', color:'#fd2f4a'},
];

function loadContributors() {
	const map = new Map();

	for (const obj of catalog) {
		for (const [key, angle] of Object.entries(obj)) {
			if (!angle || typeof angle !== 'object' || !('artist' in angle)) continue;

			totalContributions++;

			if (!map.has(angle.artist)) {
				map.set(angle.artist, {
					name: angle.artist,
					objects: [],
					contributions: 0,
					totalContributions: 0,
					latestId: obj.id,
					latestDate: parseDate(obj.createdOn),
					firstId: obj.id,
					firstDate: parseDate(obj.createdOn),
					daysActive: [obj.createdOn],
				});
			}

			const contributor = map.get(angle.artist);

			if (!obj.similar) {contributor.contributions++};
			contributor.totalContributions++;

			// Only add each object once
			if (!contributor.objects.includes(obj.id)) {
				contributor.objects.push(obj.id);
			}

			if (obj.id > contributor.latestId) {
				contributor.latestId = obj.id;
				contributor.latestDate = parseDate(obj.createdOn);
			}
			if (obj.id < contributor.firstId) {
				contributor.firstId = obj.id;
				contributor.firstDate = parseDate(obj.createdOn);
			}

			if (!contributor.daysActive.includes(obj.createdOn)) {
				contributor.daysActive.push(obj.createdOn);
			}
		}
	}

	contributors = [...map.values()].sort((a, b) => (b.contributions - a.contributions) || (b.latestId - a.latestId));
	contributors.forEach((c, index) => {
		c.objects.sort((a, b) => b - a);
		c.time = Math.ceil((c.latestDate - c.firstDate + 86400000)/86400000);
		c.rank = index + 1;
		c.level = contributorLevels.findLast(level => c.contributions >= level.contributions);
		c.surprises = c.objects.filter(a => surprises.some(b => b.ids.includes(a)));
	});

	document.getElementById('contributors-title').children[1].innerHTML = `Huge thanks to the ${contributors.length.toLocaleString()} artists that have collectively contributed ${totalContributions.toLocaleString()} images to this tool!`;
	buildContributorDOM();
}

function buildContributorDOM() {
	let contributorsHTML = '';
	for (let i=0; i < contributors.length; i++) {
		const c = contributors[i];
		contributorsHTML += `<div class="contributor">
			<div class="contributor-rank">${c.rank <= 3 ? `<img src="/static/images/icons/award-${c.rank}.svg" alt="Award icon">` : `<p>#<b>${c.rank.toLocaleString()}</b></p>`}</div>
			<div class="contributor-level"><img src="/static/images/compare-size-levels/level-${c.level.id}.svg" alt="Level ${c.level.id}"></div>
			<div class="contributor-name"><h1>${c.name}</h1></div>
			<div class="contributor-contributions"><b>${c.contributions.toLocaleString()}${c.contributions !== c.totalContributions ? '*':''}</b><p>${c.contributions === 1 ? 'image' : 'images'}</p></div>
			<div class="contributor-time"><b>${c.time}</b><p>${c.time === 1 ? 'day' : 'days'}</p></div>
		</div>`;
	}
	contributorList.innerHTML = contributorsHTML;
	for (let c of contributorList.children) {
		c.addEventListener('click', () => {modal('contributor', {parent:'page', contributor:contributors.filter(a => a.name === c.children[2].textContent)[0]})});
	}
}

function parseDate(date) {
	return new Date(parseInt(date.substring(0, 4)), parseInt(date.substring(5, 7))-1, parseInt(date.substring(8, 10)));
}

function convertDays(days) {
	const years = Math.floor(days / 365);
	const months = Math.floor((days % 365) / 30);
	const remainingDays = days % 30;

	if (years > 0) {
	return `${years}yr ${months}mo`;
	}

	if (months > 0) {
	return `${months}mo ${remainingDays}d`;
	}

	return `${remainingDays}d`;
}

function convertDateDifference(startDate, endDate) {
	const start = new Date(startDate);
	const end = new Date(endDate);

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	let days = end.getDate() - start.getDate();

	if (days < 0) {
		months--;

		const previousMonth = new Date(
			end.getFullYear(),
			end.getMonth(),
			0
		);

		days += previousMonth.getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	days++;
	const daysInEndMonth = new Date(
		end.getFullYear(),
		end.getMonth() + 1,
		0
	).getDate();

	if (days > daysInEndMonth) {
		days -= daysInEndMonth;
		months++;

		if (months >= 12) {
			years++;
			months = 0;
		}
	}

	if (years > 0) {
		return `${years}yr ${months}mo`;
	}

	if (months > 0) {
		return `${months}mo ${days}d`;
	}

	return `${days}d`;
}

// —————————— CANVAS CONTROLS ——————————
let canvasData = {
	x: 0,
	y: 0,
	zoom: 1,
	autoFit: true,
	panning: false,
	padding: 0.85, // 85% of the canvas
	objectSpacing: 5,
	scale: 1,
	// 	—————————— VISUAL ——————————
	grid: true,
	ground: true,
	groundThickness: 3,
	groundExtent: 1.3, // 130% total objects width
	labels: true,
	labelType: 'name+dimensions',
	labelSize: 16,
	labelFont: 'sans-serif',
	labelColor: 'white',
	labelObjColor: false,
	labelSpacing: 10,
	labelDimSize: 12,
	labelAlign: 'above',
	defaultColor: '#ffffff',
	// 	—————————— GRID ——————————
	pixelsPerMajor: 80,
	minorSpacing: 6,
	gridLevels: [
		1e-36,					// 0.000001 qm
		1e-35,					// 0.00001 qm
		1e-34,					// 0.0001 qm
		1e-33,					// 0.001 qm
		1e-32,					// 0.01 qm
		1e-31,					// 0.1 qm
		1e-30,					// 1 qm (quectometers)
		1e-29,					// 10 qm
		1e-28,					// 100 qm

		1e-27,					// 1 rm (rontometers)
		1e-26,					// 10 rm
		1e-25,					// 100 rm

		1e-24,					// 1 ym (yoctometers)
		1e-23,					// 10 ym
		1e-22,					// 100 ym

		1e-21,					// 1 zm (zeptometers)
		1e-20,					// 10 zm
		1e-19,					// 100 zm

		1e-18,					// 1 am (attometers)
		1e-17,					// 10 am
		1e-16,					// 100 am

		1e-15,					// 1 fm (femtometers)
		1e-14,					// 10 fm
		1e-13,					// 100 fm

		1e-12,					// 1 pm (picometers)
		1e-11,					// 10 pm
		1e-10,					// 100 pm

		1e-9,					// 1 nm (nanometers)
		1e-8,					// 10 nm
		1e-7,					// 100 nm

		1e-6,					// 1 µm (micrometers)
		1e-5,					// 10 µm
		1e-4,					// 100 µm

		0.001,					// 1 mm (millimeters)
		0.01,					// 1 cm
		0.1,					// 10 cm

		1,						// 1 m (meters)
		10,						// 10 m
		100,					// 100 m

		1e3,					// 1 km (kilometers)
		1e4,					// 10 km
		1e5,					// 100 km

		1e6,					// 1 Mm (megameters)
		1e7,					// 10 Mm
		1e8,					// 100 Mm

		1e9,					// 1 Gm (gigameters)
		1e10,					// 10 Gm
		1e11,					// 100 Gm

		1e12,					// 1 Tm (terameters)
		1e13,					// 10 Tm
		1e14,					// 100 Tm

		1e15,					// 1 Pm (petameters)
		1e16,					// 10 Pm
		1e17,					// 100 Pm

		1e18,					// 1 Em (exameters)
		1e19,					// 10 Em
		1e20,					// 100 Em

		1e21,					// 1 Zm (zettameters)
		1e22,					// 10 Zm
		1e23,					// 100 Zm

		1e24,					// 1 Ym (yottameters)
		1e25,					// 10 Ym
		1e26,					// 100 Ym

		1e27,					// 1 Rm (ronnameter)
		1e28,					// 10 Rm
		1e29,					// 100 Rm
	],
};

// PANNING
let canvasPanStart = {x:0, y:0, ox:0, oy:0};

toolCanvas.addEventListener('mousedown', (e) => {
	if (e.button === 0) {
		canvasData.panning = true;
		canvasPanStart = {x:e.clientX, y:e.clientY, ox:canvasData.x, oy:canvasData.y};
		toolCanvas.style.cursor = "grabbing";
	}
});
window.addEventListener('mousemove', (e) => {
	if (canvasData.panning === true) {
		canvasData.x = canvasPanStart.ox+e.clientX-canvasPanStart.x;
		canvasData.y = canvasPanStart.oy+e.clientY-canvasPanStart.y;
		toolCanvas.style.cursor = "grabbing";
		updateCanvas();
	}
});
window.addEventListener('mouseup', (e) => {
	if (canvasData.panning === true) {
		canvasData.x = canvasPanStart.ox+e.clientX-canvasPanStart.x;
		canvasData.y = canvasPanStart.oy+e.clientY-canvasPanStart.y;
		toolCanvas.removeAttribute('style');
		canvasData.panning = false;
		canvasData.autoFit = false;
		updateCanvas();
	}
});

// ZOOMING
let lastScroll = Date.now();
toolCanvas.addEventListener('wheel', (e) => {
	if (fullscreen === true || e.ctrlKey === true) {e.preventDefault(); canvasScrollWarning.removeAttribute('style')}
	else {lastScroll = Date.now(); canvasScrollWarning.style.opacity = '1'; const scrollInt = setInterval(() => {if (Date.now() - lastScroll >= 500) {canvasScrollWarning.removeAttribute('style'); clearInterval(scrollInt)}}, 250); return}

	zoom('wheel', e);
});

function zoom(mode = 'wheel', e) {
	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const canvasRect = toolCanvas.getBoundingClientRect();

	const centerX = visibleRect.left - canvasRect.left + visibleRect.width / 2;
	const centerY = visibleRect.top - canvasRect.top + visibleRect.height / 2;

	if (mode === 'wheel') {
		const mouseX = e.clientX - canvasRect.left;
		const mouseY = e.clientY - canvasRect.top;

		const oldZoom = canvasData.zoom;
		const zoomFactor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
		canvasData.zoom *= zoomFactor;

		const worldX = (mouseX - centerX - canvasData.x) / oldZoom;
		const worldY = (mouseY - centerY - canvasData.y) / oldZoom;
		canvasData.x = mouseX - centerX - worldX * canvasData.zoom;
		canvasData.y = mouseY - centerY - worldY * canvasData.zoom;

		canvasData.autoFit = false;
	}
	else if (mode === 'out') {
		const oldZoom = canvasData.zoom;
		const zoomFactor = 1 / 1.1;
		canvasData.zoom *= zoomFactor;

		const worldX = (canvasData.x) / oldZoom;
		const worldY = (canvasData.y) / oldZoom;
		canvasData.x = worldX * canvasData.zoom;
		canvasData.y = worldY * canvasData.zoom;

		canvasData.autoFit = false;
	}
	else if (mode === 'in') {
		const oldZoom = canvasData.zoom;
		const zoomFactor = 1.1;
		canvasData.zoom *= zoomFactor;

		const worldX = (canvasData.x) / oldZoom;
		const worldY = (canvasData.y) / oldZoom;
		canvasData.x = worldX * canvasData.zoom;
		canvasData.y = worldY * canvasData.zoom;

		canvasData.autoFit = false;
	}
	else if (mode === 'reset') {
		canvasData.autoFit = true;
		autoFitCanvas();
	}
	updateCanvas();
}

function zoomOut() {zoom('out')};
function zoomIn() {zoom('in')};
function zoomReset() {zoom('reset')};

function setGrid(g = 'toggle') {
	if (g === 'toggle') {
		if (canvasData.grid === true) {disableGrid()}
		else {enableGrid()};
	}
	else if (g === 'disable') {disableGrid()}
	else if (g === 'enable') {enableGrid()};
	
	updateCanvas();

	function disableGrid() {canvasData.grid = false}
	function enableGrid() {canvasData.grid = true}
}

function setLabels(l = 'toggle') {
	if (l === 'toggle') {
		if (canvasData.labels === true) {disableLabels()}
		else {enableLabels()};
	}
	else if (l === 'disable') {disableLabels()}
	else if (l === 'enable') {enableLabels()};
	
	updateCanvas();

	function disableLabels() {canvasData.labels = false}
	function enableLabels() {canvasData.labels = true}
}

function setUnitMode(um = 'cycle') {
	if (um === 'cycle') {
		if (unitMode === 'imperial') {setMetric()}
		else {setImperial()};
	}
	else if (um === 'imperial') {setImperial()}
	else {setMetric()};
	
	document.getElementById('unit-mode').innerHTML = unitMode.toUpperCase();
	updateCanvas();
	setCookie('unit_system', unitMode);

	function setImperial() {unitMode = 'imperial'}
	function setMetric() {unitMode = 'metric'}
}

function setCookie(name, value, days = 365) {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
	const cookies = document.cookie.split("; ");

	for (const cookie of cookies) {
		const [key, value] = cookie.split("=");
		if (key === name) {return decodeURIComponent(value)};
	}

	return null;
}

function setBGColor(e) {
	canvasData.backgroundColor = e.target.value;
	updateCanvas();
}

function getGridSpacing(zoom) {
	const pixelsPerMeter = zoom / canvasData.scale;
	for (const spacing of canvasData.gridLevels) {
		if (spacing * pixelsPerMeter >= canvasData.pixelsPerMajor) {
			return {
				major: spacing,
				minor: spacing / canvasData.minorSpacing,
			};
		}
	}
	const major = canvasData.gridLevels[canvasData.gridLevels.length - 1];
	return { major, minor: major / canvasData.minorSpacing };
}

function updateCanvas() {
	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const canvasRect = toolCanvas.getBoundingClientRect();
	const centerX = visibleRect.left - canvasRect.left + visibleRect.width / 2;
	const centerY = visibleRect.top - canvasRect.top + visibleRect.height / 2;

	if (canvasData.grid) {
		const { major, minor } = getGridSpacing(canvasData.zoom);
		const ppm = canvasData.zoom / canvasData.scale;
		const majorPx = major * ppm;
		const minorPx = majorPx / canvasData.minorSpacing;
		const majorPos = `${(centerX + canvasData.x) % majorPx}px ${(centerY + canvasData.y) % majorPx}px`;
		const minorPos = `${(centerX + canvasData.x) % minorPx}px ${(centerY + canvasData.y) % minorPx}px`;

		toolCanvas.removeAttribute('style');
		toolCanvas.style.backgroundPosition = `${majorPos}, ${majorPos}, ${minorPos}, ${minorPos}`;
		toolCanvas.style.backgroundSize = `${majorPx}px ${majorPx}px, ${majorPx}px ${majorPx}px, ${minorPx}px ${minorPx}px, ${minorPx}px ${minorPx}px`;
	}
	else {
		toolCanvas.removeAttribute('style');
		toolCanvas.style.backgroundImage = 'none';
	}

	toolCanvas.style.backgroundColor = canvasData.backgroundColor;

	canvasCamera.setAttribute('transform',
		`translate(${centerX + canvasData.x}, ${centerY + canvasData.y})
		 scale(${canvasData.zoom})`
	);

	updateGroundLine();
	scheduleUpdateLabels();
	updateSelectionBoxes();
}

function autoFitCanvas() {
	const visibleObjects = canvasObjects.filter(obj => obj.visible !== false);
	if (!canvasData.autoFit || visibleObjects.length === 0) return;

	let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

	visibleObjects.forEach(obj => {
		const { hw, hh } = getRotatedHalfExtents(obj);
		minX = Math.min(minX, obj.x - hw);
		minY = Math.min(minY, obj.y - hh);
		maxX = Math.max(maxX, obj.x + hw);
		maxY = Math.max(maxY, obj.y + hh);
	});

	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const contentWidth = maxX - minX;
	const contentHeight = maxY - minY;

	if (contentWidth <= 0 && contentHeight <= 0) return; // truly nothing to fit (e.g. a single point)

	const zoomX = contentWidth > 0 ? (visibleRect.width * canvasData.padding) / contentWidth : Infinity;
	const zoomY = contentHeight > 0 ? (visibleRect.height * canvasData.padding) / contentHeight : Infinity;
	canvasData.zoom = Math.min(zoomX, zoomY);

	canvasData.x = -((minX + maxX) / 2) * canvasData.zoom;
	canvasData.y = -((minY + maxY) / 2) * canvasData.zoom;
}

function setCanvasScale() {
	const visibleObjects = canvasObjects.filter(obj => obj.visible !== false);
	if (visibleObjects.length === 0) { canvasData.scale = 1; return; }
	canvasData.scale = visibleObjects
		.flatMap(o => [(o.scaleX ?? o.scale ?? 1), (o.scaleY ?? o.scale ?? 1)])
		.maximum();
}

// —————————— CANVAS OBJECTS ——————————
canvasObjectsList.addEventListener('reorder', async () => {
	setCanvasScale();
	await reRenderAllSVGs();
	autoPositionObjects();
	autoFitCanvas();
	updateCanvas();
});

async function addObjectToCanvas(obj, updateUI = true) {
	const instance = structuredClone(obj);
	const defaultAngle = getObjectImageData(instance).default;
	canvasObjects.push(instance);
	Object.assign(canvasObjects[canvasObjects.length - 1], {
		autoPosition: true,
		angle: defaultAngle,
		visible: true,
		selected: false,
		color: canvasObjects[canvasObjects.length - 1].color || canvasData.defaultColor,
		x: 0,
		y: 0,
		translation: null,
		rotation: canvasObjects[canvasObjects.length - 1].rotation || 0,
		cScale: null,
		docElement: null,
	});
	hideCanvasWelcomeStarter();
	hideCanvasObjectsEmpty();

	if (updateUI === true) {
		canvasObjectsList.appendChild(getObjectListItem(instance));

		const s = await getObjectSVG(instance);
		canvasObjectsGroup.appendChild(s.element);
		attachCanvasObjectInteraction(s.element, canvasObjects[canvasObjects.length - 1]);
		if (!instance.tag) {canvasObjectsGroup.lastChild.setAttribute('object', `obj-${instance.id}`)}
		else {canvasObjectsGroup.lastChild.setAttribute('object', `custom-${instance.tag}`)};
		canvasObjectsGroup.lastChild.setAttribute('angle', `${defaultAngle}`);

		Object.assign(canvasObjects[canvasObjects.length - 1], {
			translation: s.translation,
			cScale: s.scale || 1,
			cScaleY: s.scaleY || s.scale || 1,
			docElement: s.element,
		});

		if ((window.innerWidth < 800 && sidebarUserInteraction === false) || window.innerWidth < 700) {setSidebar('hide')};

		setCanvasScale();
		await reRenderAllSVGs()
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	}
}

// —— UNIT HELPERS ——
function unitToMeters(value, units, abbr) {
	const u = units.find(u => u.abbr === abbr);
	return u ? value * u.scale : value;
}
function metersToUnit(meters, units, abbr) {
	const u = units.find(u => u.abbr === abbr);
	return u ? meters / u.scale : meters;
}
function round2(n) { return Math.round(n * 100) / 100; }

// —— shape formulas: meters (characteristic dimension) <-> displayed value ——
const shapeConversions = {
	sphere: {
		direct:		 { toMeters: v => v,							toValue: d => d },
		diameter:		 { toMeters: v => v,							toValue: d => d },
		circumference:	{ toMeters: v => v / Math.PI,				toValue: d => d * Math.PI },
		'visual-area':	{ toMeters: v => 2 * Math.sqrt(v / Math.PI), toValue: d => Math.PI * (d / 2) ** 2 },
		'surface-area': { toMeters: v => Math.sqrt(v / Math.PI),	 toValue: d => Math.PI * d ** 2 },
		volume:		 { toMeters: v => Math.cbrt(6 * v / Math.PI), toValue: d => (Math.PI / 6) * d ** 3 },
	},
	cube: {
		direct:			{ toMeters: v => v,				toValue: s => s },
		width:			 { toMeters: v => v,				toValue: s => s },
		perimeter:		 { toMeters: v => v / 4,			toValue: s => s * 4 },
		'visual-diagonal': { toMeters: v => v / Math.SQRT2,	 toValue: s => s * Math.SQRT2 },
		'volume-diagonal': { toMeters: v => v / Math.sqrt(3), toValue: s => s * Math.sqrt(3) },
		'visual-area':	 { toMeters: v => Math.sqrt(v),	 toValue: s => s ** 2 },
		'surface-area':	{ toMeters: v => Math.sqrt(v / 6), toValue: s => 6 * s ** 2 },
		volume:			{ toMeters: v => Math.cbrt(v),	 toValue: s => s ** 3 },
	},
};

const SLIDER_STEPS = 1000; // slider's raw 0–1000 position range
const EXP_VALUE_MIN = 1;
const EXP_VALUE_MAX = 1000;

function sliderToValue(pos) {
	const t = pos / SLIDER_STEPS;
	return EXP_VALUE_MIN * Math.pow(EXP_VALUE_MAX / EXP_VALUE_MIN, t);
}
function valueToSlider(value) {
	const clamped = Math.max(EXP_VALUE_MIN, Math.min(EXP_VALUE_MAX, value));
	const t = Math.log(clamped / EXP_VALUE_MIN) / Math.log(EXP_VALUE_MAX / EXP_VALUE_MIN);
	return t * SLIDER_STEPS;
}

function getObjectListItem(obj) {
	const imgData = getObjectImageData(obj);

	const div = document.createElement('div');
	div.classList.add('object-list-item');
	if (!obj.tag) {div.setAttribute('object', `obj-${obj.id.toString()}`)}
	else {div.setAttribute('object', `custom-${obj.tag}`)};
	div.setAttribute('can-obj', `id-${canvasObjectsList.children.length.toString()}`);
	let image = `<img src="/web-tools/compare-size/images${obj.tag ? '/custom':''}/${imgData.file}" alt="${imgData.name}" loading="lazy" decoding="async">`;
	if (obj.tag === 'line') {image = '<div class="custom-line"></div>'};
	let objectAngles = [];
	if (obj.tag === 'line') {
		objectAngles = ['Length'];
	}
	else if (obj.tag) {
		if (obj.length && obj.height) {objectAngles.push('Side')};
		if (obj.width && obj.height) {objectAngles.push('Front')};
		if (obj.width && obj.length) {objectAngles.push('Top')};
	}
	else {
		if (obj.side) {objectAngles.push('Side')};
		if (obj.front) {objectAngles.push('Front')};
		if (obj.top) {objectAngles.push('Top')};
	}
	const angleGroup = crypto.randomUUID();
	const extraGroup = crypto.randomUUID();
	const custdimGroup = crypto.randomUUID();
	const xid = `x-${crypto.randomUUID()}`;
	const yid = `y-${crypto.randomUUID()}`;
	const rotid = `y-${crypto.randomUUID()}`;
	const colorid = `color-${crypto.randomUUID()}`;

	const isCustomObject = obj.tag;

	let measurementTypes = [];
	let measurementTypeGrid = 4;
	if (isCustomObject) {
		if (obj.tag === 'line') {
			measurementTypes = [{id: 'length', label: 'Length'}];
			measurementTypeGrid = 1;
		} else if (obj.tag === 'sphere') {
			measurementTypes = [
				{id: 'direct', label: 'Direct'},
				{id: 'diameter', label: 'Diameter'},
				{id: 'circumference', label: 'Circumference'},
				{id: 'visual-area', label: '2D Area'},
				{id: 'surface-area', label: '3D Area'},
				{id: 'volume', label: 'Volume'},
			];
			measurementTypeGrid = 3;
		} else if (obj.tag === 'cube') {
			measurementTypes = [
				{id: 'direct', label: 'Direct'},
				{id: 'width', label: 'Width'},
				{id: 'perimeter', label: 'Perimeter'},
				{id: 'visual-diagonal', label: '2D Diagonal'},
				{id: 'volume-diagonal', label: '3D Diagonal'},
				{id: 'visual-area', label: '2D Area'},
				{id: 'surface-area', label: '3D Area'},
				{id: 'volume', label: 'Volume'},
			];
			measurementTypeGrid = 4;
		} else {
			measurementTypes = [{id: 'direct', label: 'Direct'}];
			measurementTypeGrid = 3;
		}
	}
	const selectedMeasurementType = measurementTypes.some(m => m.id === obj.measurementType)
		? obj.measurementType
		: (measurementTypes[0]?.id || 'direct');

	// Dimensions for "direct" mode
	const dimLabels = [];
	if (obj.tag === 'line') {
		if (obj.length != null) dimLabels.push({ key: 'length', label: 'Length' });
	} else {
		if (obj.width != null) dimLabels.push({ key: 'width', label: 'Width' });
		if (obj.length != null) dimLabels.push({ key: 'length', label: 'Length' });
		if (obj.height != null) dimLabels.push({ key: 'height', label: 'Height' });
	}

	// --- Units ---
	const selectedUnitSystem = unitMode === 'imperial' ? 'imperial' : 'metric';
	const measurementCategory = getMeasurementCategory(selectedMeasurementType);
	const unitList = getUnitList(selectedUnitSystem, measurementCategory);
	const unitGrid = getUnitGrid(selectedUnitSystem, measurementCategory);

	const scale = obj.scale || 1;

	function pickUnit(units, meters) {
		const exact = units.find((u) => u.scale === meters);
		if (exact) return exact;

		let chosen = units[0];
		for (const u of units) {
			if (Math.abs(meters) / u.scale >= u.threshold) chosen = u;
		}
		return chosen;
	}

	const dimValues = [obj.width, obj.length, obj.height].filter((v) => typeof v === 'number');
	const maxDimMeters = (dimValues.length ? Math.max(...dimValues) : 1) * scale;

	let initialMeasurementMeters = maxDimMeters;
	if (measurementCategory !== 'length') {
		const conv = shapeConversions[obj.tag]?.[selectedMeasurementType];
		initialMeasurementMeters = conv ? conv.toValue(maxDimMeters) : maxDimMeters;
	}
	const selectedUnit = pickUnit(unitList, initialMeasurementMeters);

	const measurementTypeGroup = crypto.randomUUID();
	const unitSystemGroup = crypto.randomUUID();
	const unitGroup = crypto.randomUUID();
	div.innerHTML = `
		<div class="object-list-item-main">
			<div class="object-list-item-drag">
				<svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
					<g fill="#fff">
						<circle cx="3" cy="3" r="1.5"/>
						<circle cx="9" cy="3" r="1.5"/>
						<circle cx="3" cy="9" r="1.5"/>
						<circle cx="9" cy="9" r="1.5"/>
						<circle cx="3" cy="15" r="1.5"/>
						<circle cx="9" cy="15" r="1.5"/>
					</g>
				</svg>
			</div>
			<div class="object-list-item-image">${image}</div>
			<div class="object-list-item-controls">
				<div class="object-list-item-control-group olicg-rows">
					${!obj.tag ? `<h1>${obj.name}</h1>`:`<input class="custom-name" type="text" placeholder="Object name" name="${crypto.randomUUID()}" value="${obj.name}" maxLength=100>`}
					<div class="angle-selector angle-selector${objectAngles.length}">${objectAngles.map((a) => {const id = a.toLowerCase() + '-' + crypto.randomUUID(); return `<input type="radio" name="${angleGroup}" id="${id}"><label for="${id}">${a}</label>`}).join('')}</div>
				</div>
				<div class="object-list-item-controls-separator"></div>
				<div class="object-list-item-control-group ${!obj.tag ? 'olicg-grid':'olicg-grid3'}">${!obj.tag ? `
					<div class="olicg-grid-button"><img src="/static/images/icons/eye-open2.svg" alt="Open eye icon" title="Toggle visibility"></div>
					<div class="olicg-grid-button"><img src="/static/images/icons/info.svg" alt="Info icon" title="More info"></div>
					<div class="olicg-grid-button"><img src="/static/images/icons/trash.svg" alt="Trash icon" title="Remove"></div>
					<div class="olicg-grid-button"><img src="/static/images/icons/3-dots.svg" alt="Menu icon" title="Custom controls"></div>`:
					`
					<div class="olicg-grid-button"><img src="/static/images/icons/eye-open2.svg" alt="Open eye icon" title="Toggle visibility"></div>
					<div class="olicg-grid-button"><img src="/static/images/icons/trash.svg" alt="Trash icon" title="Remove"></div>
					<div class="olicg-grid-button"><img src="/static/images/icons/3-dots.svg" alt="Menu icon" title="Custom controls"></div>`}
				</div>
			</div>
		</div>
		<div class="object-list-item-extra">
			<div class="object-list-item-main" style="padding-right: 7px; width: calc(100% - 7px)">
				<label class="checkbox autoposition" style="flex-flow: column-reverse; margin: 0 10px 0 7px;">
					<input type="checkbox" name="${extraGroup}" checked>
					<span>Auto</span>
				</label>
				<div class="olicg-rows xy" style="max-width: 70px;">
					<div class="extra-input">
						${`<label for="${xid}">X</label><input type="number" id="${xid}" name="${extraGroup}" value="${obj.x}">`}
					</div>
					<div class="extra-input">
						${`<label for="${yid}">Y</label><input type="number" id="${yid}" name="${extraGroup}" value="${obj.y}">`}
					</div>
				</div>
				<div class="object-list-item-controls-separator"></div>
				<div class="olicg-rows rotcol">
					<div class="extra-input">
						${`<label for="${rotid}">Rotation</label><input type="range" id="${rotid}" min="-180" max="180" value="${obj.rotation}"><input type="number" id="${rotid}" name="${extraGroup}" value="${obj.rotation}" style="width: 50px;">`}
					</div>
					<div class="extra-input">
						<label for="${colorid}">Color</label>
						<input type="color" id="${colorid}" name="${extraGroup}" value="${obj.color || '#ffffff'}">
					</div>
				</div>
			</div>${!obj.id ? `
			<div class="object-list-item-main" style="padding: 0 7px 7px 7px; width: calc(100% - 14px); height: auto">
				<div class="olicg-rows custdim">
					<div class="object-list-item-control-group olicg-rows">
						<label>Measurement Type</label>
						<div class="wrapping-selector measurement-type-selector wrapping-selector-grid${measurementTypeGrid}">${measurementTypes.map((m) => {
							const id = `mtype-${m.id}-${crypto.randomUUID()}`;
							return `<input type="radio" name="${measurementTypeGroup}" id="${id}" value="${m.id}" ${m.id === selectedMeasurementType ? 'checked' : ''}><label for="${id}">${m.label}</label>`;
						}).join('')}</div>
					</div>
					<div class="object-list-item-control-group olicg-rows">
						<label>Units</label>
						<div class="extra-input olicg-rows">
							<div class="wrapping-selector unit-system-selector wrapping-selector-grid2">
								<input type="radio" name="${unitSystemGroup}" id="metric-${unitSystemGroup}" value="metric" ${selectedUnitSystem === 'metric' ? 'checked' : ''}><label for="metric-${unitSystemGroup}">Metric</label>
								<input type="radio" name="${unitSystemGroup}" id="imperial-${unitSystemGroup}" value="imperial" ${selectedUnitSystem === 'imperial' ? 'checked' : ''}><label for="imperial-${unitSystemGroup}">Imperial</label>
							</div>
							<div class="wrapping-selector unit-selector wrapping-selector-grid${unitGrid}">${unitList.map((u) => {
								const id = `unit-${u.abbr}-${crypto.randomUUID()}`;
								return `<input type="radio" name="${unitGroup}" id="${id}" value="${u.abbr}" ${u.abbr === selectedUnit.abbr ? 'checked' : ''}><label for="${id}">${u.abbr}</label>`;
							}).join('')}</div>
						</div>
					</div>
					<div class="object-list-item-controls-separator"></div>
					${measurementTypes.map((m) => {
						const rows = m.id === 'direct'
							? dimLabels.map(({ key, label }) => {
								const rid = `${key}-${crypto.randomUUID()}`;
								const val = obj[key] != null ? obj[key] : 1;
								return `<div class="extra-input">
									<label for="${rid}">${label}</label>
									<input type="range" id="${rid}" min="0" max="${SLIDER_STEPS}" step="1" value="${valueToSlider(val)}" data-dim="${key}">
									<input type="number" value="${val}" data-dim="${key}" style="width: 50px;">
								</div>`;
							}).join('')
							: `<div class="extra-input">
							<label>${m.label}</label>
							<input type="range" min="0" max="${SLIDER_STEPS}" step="1" value="${valueToSlider(obj[m.id] != null ? obj[m.id] : 1)}" data-measurement="${m.id}">
							<input type="number" value="${obj[m.id] != null ? obj[m.id] : 1}" data-measurement="${m.id}" style="width: 50px;">
						</div>`;
						return `<div class="custdim-group" data-measurement-type="${m.id}" style="${m.id === selectedMeasurementType ? '' : 'display:none;'}">${rows}</div>`;
					}).join('')}
				</div>
			</div>` : ''}
		</div>
	`;
	if (isCustomObject) {
		const getSelectedValue = (groupName) => {
			const checked = div.querySelector(`input[name="${groupName}"]:checked`);
			return checked ? checked.value : null;
		};

		const getActiveDimState = () => {
			const checkedRadio = div.querySelector(`input[name="${measurementTypeGroup}"]:checked`);
			const activeGroup = checkedRadio
				? div.querySelector(`.custdim-group[data-measurement-type="${checkedRadio.value}"]`)
				: div.querySelector('.custdim-group:not([style*="display: none"])'); // fallback, shouldn't normally hit
			if (!activeGroup) return null;
			const input = activeGroup.querySelector('input[type="number"]');
			if (!input) return null;
			return {
				valueType: input.dataset.dim || input.dataset.measurement,
				value: Number(input.value),
			};
		};

		const applyMeasurementChange = (valueType, value) => {
			const measurementType = getSelectedValue(measurementTypeGroup);
			const unitSystem = getSelectedValue(unitSystemGroup);
			const unit = getSelectedValue(unitGroup);
			updateObjectMeasurement(parseInt(div.getAttribute('can-obj').substring(3)), {
				measurementType,
				unitSystem,
				unit,
				valueType,
				value,
			});
		};

		function syncVisibleInputsFromObject() {
			const currentObj = canvasObjects[parseInt(div.getAttribute('can-obj').substring(3))];
			const unitSystem = getSelectedValue(unitSystemGroup);
			const unitAbbr = getSelectedValue(unitGroup);
			const mType = getSelectedValue(measurementTypeGroup);
			const units = getUnitList(unitSystem, getMeasurementCategory(mType));
			const group = div.querySelector(`.custdim-group[data-measurement-type="${mType}"]`);
			if (!group) return;

			const applyToInputs = (inputs, displayVal) => {
				inputs.forEach(inp => {
					inp.value = inp.type === 'range' ? valueToSlider(displayVal) : displayVal;
				});
			};

			if (mType === 'direct') {
				group.querySelectorAll('[data-dim]').forEach(inp => {
					const meters = currentObj[inp.dataset.dim] ?? 1;
					const displayVal = round2(metersToUnit(meters, units, unitAbbr));
					inp.value = inp.type === 'range' ? valueToSlider(displayVal) : displayVal;
				});
			} else {
				const conv = shapeConversions[currentObj.tag]?.[mType];
				const meters = currentObj.width ?? 1;
				const value = conv ? conv.toValue(meters) : meters;
				const displayVal = round2(metersToUnit(value, units, unitAbbr));
				applyToInputs(group.querySelectorAll('input'), displayVal);
			}
		}

		const bindUnitRadios = () => {
			div.querySelectorAll(`input[name="${unitGroup}"]`).forEach((radio) => {
				radio.addEventListener('change', () => {
					const active = getActiveDimState();
					if (active) syncVisibleInputsFromObject();
				});
			});
		};

		function rebuildUnitSelector() {
			const unitSystem = getSelectedValue(unitSystemGroup);
			const mType = getSelectedValue(measurementTypeGroup);
			const category = getMeasurementCategory(mType);
			const newList = getUnitList(unitSystem, category);
			const grid = getUnitGrid(unitSystem, category);

			const currentObj = canvasObjects[parseInt(div.getAttribute('can-obj').substring(3))];
			const dim = currentObj.width ?? currentObj.length ?? currentObj.height ?? 1;
			let referenceMeters;
			if (mType === 'direct') {
				const dims = [currentObj.width, currentObj.length, currentObj.height].filter(v => typeof v === 'number');
				referenceMeters = dims.length ? Math.max(...dims) : 1;
			} else {
				const conv = shapeConversions[currentObj.tag]?.[mType];
				referenceMeters = conv ? conv.toValue(dim) : dim;
			}
			const newUnit = pickUnit(newList, referenceMeters);

			const unitSelector = div.querySelector('.unit-selector');
			unitSelector.innerHTML = newList.map((u) => {
				const id = `unit-${u.abbr}-${crypto.randomUUID()}`;
				return `<input type="radio" name="${unitGroup}" id="${id}" value="${u.abbr}" ${u.abbr === newUnit.abbr ? 'checked' : ''}><label for="${id}">${u.abbr}</label>`;
			}).join('');

			unitSelector.className = `wrapping-selector unit-selector wrapping-selector-grid${grid}`;

			bindUnitRadios();

			const active = getActiveDimState();
			if (active) syncVisibleInputsFromObject();
		}

		div.querySelectorAll(`input[name="${measurementTypeGroup}"]`).forEach((radio) => {
			radio.addEventListener('change', () => {
				div.querySelectorAll('.custdim-group').forEach((g) => {
					g.style.display = g.dataset.measurementType === radio.value ? '' : 'none';
				});
				rebuildUnitSelector();
			});
		});

		div.querySelectorAll(`input[name="${unitSystemGroup}"]`).forEach((radio) => {
			radio.addEventListener('change', () => rebuildUnitSelector());
		});

		bindUnitRadios();

		div.querySelectorAll('.custdim-group .extra-input').forEach((row) => {
			const range = row.querySelector('input[type="range"]');
			const number = row.querySelector('input[type="number"]');
			const valueType = range.dataset.dim || range.dataset.measurement;

			range.addEventListener('input', () => {
				const val = sliderToValue(Number(range.value));
				number.value = round2(val);
				applyMeasurementChange(valueType, val);
			});
			number.addEventListener('input', () => {
				const val = Number(number.value);
				range.value = valueToSlider(val);
				applyMeasurementChange(valueType, val);
			});
		});
	}

	if (obj.tag) {
		div.querySelectorAll('.custom-name')[0].addEventListener('input', (e) => {
			const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
			canvasObjects[id].name = e.currentTarget.value.trim();
			updateLabels();
	})};

	const angles = div.querySelectorAll('.angle-selector')[0].querySelectorAll('input');
	angles[0].checked = true;
	for (const a of angles) {
		if (a.id.split('-')[0] === imgData.default.toLowerCase()) {a.checked = true};
		a.addEventListener('input', async (e) => {
			if (e.currentTarget.checked === true) {
				const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
				canvasObjects[id].angle = e.currentTarget.id.split('-')[0];

				setCanvasScale();
				await reRenderAllSVGs();
				autoPositionObjects();
				autoFitCanvas();
				updateCanvas();
			}
		});
	}

	const buttons = div.querySelectorAll('.olicg-grid-button');
	for (const btn of buttons) {
		if (btn.children[0].title === 'Toggle visibility') { // Toggle visibility
			btn.addEventListener('click', async (e) => {
				const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
				if (canvasObjects[id].visible === true) {
					canvasObjects[id].visible = false;
					e.target.children[0].src = e.target.children[0].src.replace(/open/g, 'closed');
					e.target.children[0].style.opacity = '0.3';
				}
				else {
					canvasObjects[id].visible = true;
					e.target.children[0].src = e.target.children[0].src.replace(/closed/g, 'open');
					e.target.children[0].removeAttribute('style');
				}

				setCanvasScale();
				await reRenderAllSVGs();
				autoPositionObjects();
				autoFitCanvas();
				updateCanvas();
			});
		}
		else if (btn.children[0].title === 'More info') { // More info
			btn.addEventListener('click', async (e) => {
				const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
				modal('more-info', {obj:canvasObjects[id]});
			});
		}
		else if (btn.children[0].title === 'Remove') { // Remove/delete object
			btn.addEventListener('click', async (e) => {
				const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
				canvasObjects.splice(id, 1);
				e.target.parentNode.parentNode.parentNode.parentNode.remove();

				setCanvasScale();
				updateCanvasObjectIDs();
				await reRenderAllSVGs();
				autoPositionObjects();
				autoFitCanvas();
				updateCanvas();
			});
		}
		else if (btn.children[0].title === 'Custom controls') { // Custom controls
			btn.addEventListener('click', async (e) => {
				const parent = e.target.parentNode.parentNode.parentNode.parentNode;
				const id = parseInt(parent.getAttribute('can-obj').substring(3));
				if (parent.classList.contains('oli-extra')) {
					parent.classList.remove('oli-extra');
				}
				else {
					parent.classList.add('oli-extra');
				}
			});
		}
	}
	const xy = div.querySelectorAll('.xy')[0].children;
	xy[0].children[1].addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		e.target.parentNode.parentNode.parentNode.children[0].children[0].checked = false;
		canvasObjects[id].autoPosition = false;
		if (e.target.value.length > 0) {canvasObjects[id].x = parseFloat(e.target.value)};

		await reRenderAllSVGs();
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	});
	xy[1].children[1].addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		e.target.parentNode.parentNode.parentNode.children[0].children[0].checked = false;
		canvasObjects[id].autoPosition = false;
		if (e.target.value.length > 0) {canvasObjects[id].y = parseFloat(e.target.value)};

		await reRenderAllSVGs();
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	});

	div.querySelectorAll('.autoposition')[0].children[0].addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		canvasObjects[id].autoPosition = e.target.checked;

		await reRenderAllSVGs();
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	});

	const rotcol = div.querySelectorAll('.rotcol')[0].children;
	rotcol[0].children[1].addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		e.target.parentNode.children[2].value = e.target.value;
		canvasObjects[id].rotation = e.target.value;

		updateSVGAttributes();
		await reRenderAllSVGs();
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	});
	rotcol[0].children[2].addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		if (e.target.value.length > 0) {
			e.target.parentNode.children[1].value = e.target.value;
			canvasObjects[id].rotation = e.target.value;
		}

		updateSVGAttributes();
		await reRenderAllSVGs();
		autoPositionObjects();
		autoFitCanvas();
		updateCanvas();
	});
	const colorInput = div.querySelector(`#${colorid}`);
	colorInput.addEventListener('input', async (e) => {
		const id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('can-obj').substring(3));
		canvasObjects[id].color = e.target.value;

		await reRenderAllSVGs();
		updateSVGAttributes();
		updateCanvas();
	});

	div.addEventListener('click', (event) => {
		// Ignore clicks on these elements
		if (event.target.classList.contains('olicg-grid-button') ||
			event.target.classList.contains('object-list-item-drag') ||
			event.target.classList.contains('checkbox') ||
			event.target.parentNode.classList.contains('checkbox') ||
			event.target.tagName === 'INPUT' ||
			event.target.tagName === 'LABEL'
			) { return; }

		const id = parseInt(event.currentTarget.getAttribute('can-obj').substring(3));
		setObjectSelection(id, event);
	});
	const { attachDragHandle } = initDragToReorder(canvasObjects, canvasObjectsList);
	attachDragHandle(div);
	return div;
}

function setObjectSelection(id, event) {
	const selectedIndices = canvasObjects
		.map((obj, i) => obj.selected ? i : -1)
		.filter(i => i !== -1);

	if (event.shiftKey && selectedIndices.length > 0) {
		const lastSelected = selectedIndices[selectedIndices.length - 1];
		const [start, end] = lastSelected < id ? [lastSelected, id] : [id, lastSelected];
		for (let i = start; i <= end; i++) canvasObjects[i].selected = true;

	} else if (event.ctrlKey || event.metaKey) {
		canvasObjects[id].selected = !canvasObjects[id].selected;

	} else {
		if (canvasObjects[id].selected) {
			if (selectedIndices.length > 1) {
				canvasObjects.forEach(o => o.selected = false);
				canvasObjects[id].selected = true;
			} else {
				canvasObjects[id].selected = false;
			}
		} else {
			canvasObjects.forEach(o => o.selected = false);
			canvasObjects[id].selected = true;
		}
	}

	refreshSelectionVisuals();
}

function refreshSelectionVisuals() {
	canvasObjects.forEach((obj, i) => {
		const item = canvasObjectsList.children[i];
		if (!item) return;
		if (obj.selected) item.style.outline = '2px solid white';
		else item.removeAttribute('style');
	});
	updateSelectionBoxes();
}

function syncXYInputsFromObjects() {
	for (const item of canvasObjectsList.children) {
		const o = canvasObjects[parseInt(item.getAttribute('can-obj').substring(3))];
		if (!o) continue;
		const xy = item.querySelectorAll('.xy');
		if (xy.length) {
			xy[0].children[0].children[1].value = o.x.round(3);
			xy[0].children[1].children[1].value = o.y.round(3);
		}
		const autoCb = item.querySelectorAll('.autoposition')[0];
		if (autoCb) autoCb.children[0].checked = (o.autoPosition === true);
	}
}

function attachCanvasObjectInteraction(el, obj) {
	el.style.cursor = 'move';
	el.addEventListener('mousedown', (e) => {
		if (e.button !== 0) return;

		const id = canvasObjects.indexOf(obj);
		if (id === -1) return;

		const wasSelected = obj.selected;

		if (wasSelected) {e.stopPropagation()}

		const startX = e.clientX, startY = e.clientY;
		let dragged = false;
		let dragSet = null;

		function onMove(ev) {
			if (!dragged) {
				if (Math.abs(ev.clientX - startX) <= 2 && Math.abs(ev.clientY - startY) <= 2) return;
				dragged = true;

				if (!wasSelected) {
					window.removeEventListener('mousemove', onMove);
					window.removeEventListener('mouseup', onUp);
					return;
				}
				dragSet = canvasObjects.filter(o => o.selected).map(o => ({ obj: o, x: o.x, y: o.y }));
			}
			if (!dragSet) return;

			const dx = (ev.clientX - startX) / canvasData.zoom;
			const dy = (ev.clientY - startY) / canvasData.zoom;
			dragSet.forEach(({ obj: o, x, y }) => {
				o.x = x + dx;
				o.y = y + dy;
				o.autoPosition = false;
			});
			autoPositionObjects();
			updateSVGAttributes();
			updateCanvas();
		}

		function onUp(ev) {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseup', onUp);

			if (dragged) {
				if (wasSelected) syncXYInputsFromObjects();
				// If !wasSelected, the canvas's own pan mouseup already handled cleanup.
			} else {
				setObjectSelection(id, ev);
			}
		}

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onUp);
	});
}

async function updateObjectMeasurement(objID, { measurementType, unitSystem, unit, valueType, value }) {
	if (value === null || value === undefined || Number.isNaN(value)) return;

	const obj = canvasObjects[objID];
	const units = getUnitList(unitSystem, getMeasurementCategory(valueType));
	const valueInMeters = unitToMeters(value, units, unit);

	if (valueType === 'width' || valueType === 'length' || valueType === 'height') {
		obj[valueType] = valueInMeters;
	} else {
		const conv = shapeConversions[obj.tag]?.[valueType];
		if (!conv) return;
		const d = conv.toMeters(valueInMeters);
		obj.width = d;
		obj.length = d;
		obj.height = d;
	}

	await reRenderAllSVGs();
	updateSVGAttributes();
	autoPositionObjects();
	autoFitCanvas();
	updateCanvas();
}

function initDragToReorder(canvasObjects, canvasObjectsList) {
	let dragState = null;

	// Creates the floating ghost element
	function createGhost(item) {
	const ghost = item.cloneNode(true);
		ghost.querySelectorAll('input[type="radio"]').forEach(r => r.removeAttribute('name'));

		const rect = item.getBoundingClientRect();
		ghost.style.cssText = `
			position: fixed;
			left: ${rect.left}px;
			top: ${rect.top}px;
			width: ${rect.width}px;
			height: ${rect.height}px;
			opacity: 0.75;
			z-index: 9999;
			border-radius: 4px;
			box-shadow: 0 4px 12px rgba(0,0,0,0.4);
			transition: none !important;
			animation: none !important;
		`;
		ghost.querySelectorAll('*').forEach(el => {
			el.style.transition = 'none';
			el.style.animation = 'none';
			el.style.pointerEvents = 'none';
		});
		document.body.appendChild(ghost);
		return ghost;
	}

	// Gets the drop index based on cursor Y position
	function getDropIndex(clientY) {
		const items = [...canvasObjectsList.children];
		for (let i = 0; i < items.length; i++) {
			if (items[i] === dragState.placeholder) continue;
			const rect = items[i].getBoundingClientRect();
			const mid = rect.top + rect.height / 2;
			if (clientY < mid) return i;
		}
		return items.length - 1;
	}

	function onMouseMove(e) {
		if (!dragState) return;

		const dy = e.clientY - dragState.startY;
		const dx = e.clientX - dragState.startX;

		if (!dragState.started) {
			if (Math.abs(dy) < 4 && Math.abs(dx) < 4) return;
			if (dragState.placeholder) return;
			dragState.started = true;
			dragState.ghost = createGhost(dragState.item);

			const placeholder = document.createElement('div');
			placeholder.className = 'object-list-item-drag-placeholder';
			placeholder.style.cssText = `
				height: ${dragState.item.getBoundingClientRect().height}px;
				background: var(--pricol);
				border: 2px dashed var(--pricol-light);
				opacity: 0.8;
				border-radius: 4px;
				box-sizing: border-box;
				pointer-events: none;
			`;

			// Use the item's own method — guaranteed to work regardless of parent state
			dragState.item.replaceWith(placeholder);
			dragState.placeholder = placeholder;

			document.body.style.cursor = 'grabbing';
			document.body.style.userSelect = 'none';
		}

		dragState.ghost.style.top = `${dragState.ghostOriginTop + dy}px`;

		// Calculate drop index using only real items (not the placeholder)
		const items = [...canvasObjectsList.children].filter(
			el => el !== dragState.placeholder
		);

		let dropIndex = items.length; // default: after all real items
		for (let i = 0; i < items.length; i++) {
			const rect = items[i].getBoundingClientRect();
			if (e.clientY < rect.top + rect.height / 2) {
				dropIndex = i;
				break;
			}
		}

		// Insert placeholder at the correct position among all children
		const allChildren = [...canvasObjectsList.children].filter(
			el => el !== dragState.placeholder
		);
		const refNode = allChildren[dropIndex] || null;
		canvasObjectsList.insertBefore(dragState.placeholder, refNode);
	}

	function onMouseUp(e) {
		if (!dragState) return;
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);

		document.body.style.cursor = '';
		document.body.style.userSelect = '';

		if (!dragState.started) {
			dragState = null;
			return;
		}

		dragState.placeholder.replaceWith(dragState.item);
		dragState.ghost.remove();

		// Sync canvasObjects array to new DOM order
		const newOrder = [...canvasObjectsList.children]
			.filter(el => el.hasAttribute('can-obj'));

		newOrder.forEach((el, i) => {
			canvasObjects[i] = el._canvasObject;
			el.setAttribute('can-obj', `id-${i}`);
		});

		dragState = null;

		canvasObjectsList.dispatchEvent(new CustomEvent('reorder', { bubbles: true }));
	}

	// Attach mousedown to every drag handle
	function attachDragHandle(item, index) {
		if (item._dragAttached) return;
		item._dragAttached = true;

		const handle = item.querySelector('.object-list-item-drag');
		if (!handle) return;

		handle.addEventListener('mousedown', (e) => {
			if (e.button !== 0) return;
			e.preventDefault();

			const itemRect = item.getBoundingClientRect();

			// Snapshot the entire order right now, before any DOM changes
			const objectSnapshot = [...canvasObjectsList.children]
				.filter(el => el.hasAttribute('can-obj'))
				.map(el => {
					const id = parseInt(el.getAttribute('can-obj').substring(3));
					return { el, obj: canvasObjects[id] };
				});

			// Stamp each element with its object right now while indices are correct
			objectSnapshot.forEach(({ el, obj }) => {
				el._canvasObject = obj;
			});

			dragState = {
				item,
				parent: item.parentNode,
				startX: e.clientX,
				startY: e.clientY,
				ghostOriginTop: itemRect.top,
				ghost: null,
				placeholder: null,
				started: false,
			};

			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		});
	}

	[...canvasObjectsList.children].forEach((el, i) => attachDragHandle(el, i));
	return { attachDragHandle };
}

function updateCanvasObjectIDs() {
	for (let i=0; i < canvasObjects.length; i++) {
		canvasObjectsList.children[i].setAttribute('can-obj', `id-${i}`);
	}
}

function hideCanvasObjectsEmpty() {canvasObjectsEmpty.style.display = 'none'};
function showCanvasObjectsEmpty() {canvasObjectsEmpty.removeAttribute('style')};

function hideCanvasWelcomeStarter() {
	canvasWelcomeStarter.style.opacity = '0';
	canvasWelcomeStarter.style.pointerEvents = 'none';
	canvasWelcomeStarter.style.userSelect = 'none';
};
function showCanvasWelcomeStarter() {canvasWelcomeStarter.removeAttribute('style')};

async function getObjectSVG(obj, angle = 'default') {
	if (obj.tag === 'line') {return getLineSVG(obj)}

	const imgData = getObjectImageData(obj, angle);
	let src;
	if (!obj.tag) {
		src = new DOMParser().parseFromString(
			await svg(`/web-tools/compare-size/images/${imgData.file}`),
			'image/svg+xml'
		).querySelector('svg');
	}
	else {
		src = new DOMParser().parseFromString(
			await svg(`/web-tools/compare-size/images/custom/${imgData.file}`),
			'image/svg+xml'
		).querySelector('svg');
	}

	const vb = src.viewBox.baseVal;
	const natW = vb?.width	|| parseFloat(src.getAttribute('width'))	|| 100;
	const natH = vb?.height || parseFloat(src.getAttribute('height')) || 100;

	let scaleX, scaleY;
	if (obj.tag) {
		const angleDimMap = {
			front: ['width', 'height'],
			side: ['length', 'height'],
			top: ['width', 'length'],
		};
		const [wKey, hKey] = angleDimMap[angle] || angleDimMap.side;
		const presetScale = obj.scale || 1;
		const targetW = (obj[wKey] ?? 1) * presetScale;
		const targetH = (obj[hKey] ?? 1) * presetScale;
		obj.scaleX = targetW / natW;
		obj.scaleY = targetH / natH;
		scaleX = obj.scaleX / canvasData.scale;
		scaleY = obj.scaleY / canvasData.scale;
	} else {
		scaleX = scaleY = (obj.scale || 1) / canvasData.scale;
	}

	const translation = { x: -natW / 2, y: -natH / 2 };
	const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	g.setAttribute('transform', `scale(${scaleX}, ${scaleY}) translate(${translation.x}, ${translation.y})`);
	g.setAttribute('color', obj.color || canvasData.defaultColor);

	let target = g;
	if (vb?.width && vb?.height && (vb.x !== 0 || vb.y !== 0 || vb.width !== natW || vb.height !== natH)) {
		target = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		target.setAttribute('transform', `scale(${natW / vb.width}, ${natH / vb.height}) translate(${-vb.x}, ${-vb.y})`);
		g.appendChild(target);
	}

	[...src.childNodes].forEach(n => target.appendChild(document.importNode(n, true)));
	return { element: g, scale: scaleX, scaleY, translation };;
}

function getLineSVG(obj) {
	const scale = obj.scale || 1;
	const lengthMeters = (obj.length || 1) * scale;

	obj.scaleX = lengthMeters;
	obj.scaleY = lengthMeters;

	const renderScale = lengthMeters / canvasData.scale;
	const translation = { x: -0.5, y: 0 };

	const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	g.setAttribute('transform', `scale(${renderScale}) translate(${translation.x}, ${translation.y})`);
	g.setAttribute('color', obj.color || canvasData.defaultColor);

	const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	lineEl.setAttribute('x1', 0);
	lineEl.setAttribute('y1', 0);
	lineEl.setAttribute('x2', 1);
	lineEl.setAttribute('y2', 0);
	lineEl.setAttribute('stroke', obj.color || canvasData.defaultColor);
	lineEl.setAttribute('stroke-width', 3);
	lineEl.setAttribute('stroke-linecap', 'round');
	lineEl.setAttribute('vector-effect', 'non-scaling-stroke');
	g.appendChild(lineEl);

	return { element: g, scale: renderScale, translation };
}

async function svg(url) {
	if (!svgCache.has(url)) {
		const svgData = await fetch(url).then(r => r.text());
		svgCache.set(url, svgData);
	}
	return svgCache.get(url);
}

function autoPositionObjects() {
	if (canvasObjects.length === 0) return;

	const visibleObjects = canvasObjects.filter(obj => obj.visible !== false && obj.autoPosition === true);
	if (visibleObjects.length === 0) return;

	const firstObj = visibleObjects[0];
	const groundAligned = firstObj[firstObj.angle]?.keys?.includes('on-ground') ?? false;

	const dims = visibleObjects.map(obj => {
		const { hw, hh } = getRotatedHalfExtents(obj);
		return { w: hw * 2, h: hh * 2 };
	});

	const avgWidth = dims.reduce((sum, d) => sum + d.w, 0) / dims.length;
	const spacing = (canvasData.objectSpacing / 100) * avgWidth;

	let totalWidth = dims.reduce((sum, d) => sum + d.w, 0) + spacing * (visibleObjects.length - 1);
	const maxHeight = dims.map(d => d.h).maximum();
	let curX = -totalWidth / 2;

	visibleObjects.forEach((obj, i) => {
		const { w, h } = dims[i];
		obj.x = curX + w / 2;
		if (groundAligned) {
			const groundY = (maxHeight * (canvasData.padding)) / 2;
			obj.y = groundY - h / 2;
		} else {
			obj.y = 0;
		}
		curX += w + spacing;
	});

	for (const obj of canvasObjectsList.children) {
		const o = canvasObjects[parseInt(obj.getAttribute('can-obj').substring(3))];
		if (obj.querySelectorAll('.autoposition')[0].children[0].checked === true) {
			const inputs = obj.querySelectorAll('.xy');
			inputs[0].children[0].children[1].value = o.x.round(3);
			inputs[0].children[1].children[1].value = o.y.round(3);
		}
	}

	updateSVGAttributes();
	updateGroundLine();
}

function updateSVGAttributes() {
	for (let i = 0; i < canvasObjectsGroup.children.length; i++) {
		const e = canvasObjectsGroup.children[i];
		const obj = canvasObjects.find(o => o.docElement === e);
		if (obj) {
			e.setAttribute('transform', getAttributeString(obj));
		}
	}
}

function getAttributeString(obj) {
	const scaleRatioX = (obj.scaleX ?? obj.scale ?? 1) / canvasData.scale;
	const scaleRatioY = (obj.scaleY ?? obj.scale ?? 1) / canvasData.scale;
	return `translate(${obj.x}, ${obj.y}) rotate(${obj.rotation}) scale(${scaleRatioX}, ${scaleRatioY}) translate(${obj.translation.x}, ${obj.translation.y})`;
}

async function reRenderAllSVGs() {
	while (canvasObjectsGroup.firstChild) {
		canvasObjectsGroup.removeChild(canvasObjectsGroup.firstChild);
	}

	for (const obj of canvasObjects) {
		if (obj.visible !== false) {
			const s = await getObjectSVG(obj, obj.angle);
			canvasObjectsGroup.appendChild(s.element);
			attachCanvasObjectInteraction(s.element, obj);
			canvasObjectsGroup.lastChild.setAttribute('object', !obj.tag ? `obj-${obj.id}` : `custom-${obj.tag}`);
			canvasObjectsGroup.lastChild.setAttribute('angle', `${obj.angle}`);
			Object.assign(obj, {
				translation: s.translation,
				cScale: s.scale || 1,
				cScaleY: s.scaleY || s.scale || 1,
				docElement: s.element,
			});
		}
	}
}

function updateGroundLine() {
	if (!canvasData.ground) { groundLine.style.display = 'none'; return; }
	const visibleObjects = canvasObjects.filter(obj => obj.visible !== false);
	if (visibleObjects.length === 0) { groundLine.style.display = 'none'; return; }
	const firstObj = visibleObjects[0];
	const groundAligned = firstObj?.[firstObj.angle]?.keys?.includes('on-ground') ?? false;
	if (!groundAligned) { groundLine.style.display = 'none'; return; }

	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const canvasRect = toolCanvas.getBoundingClientRect();
	const centerX = visibleRect.left - canvasRect.left + visibleRect.width / 2;
	const cameraRect = canvasCamera.getBoundingClientRect();

	const screenY = cameraRect.bottom - canvasRect.top;

	const totalWidth = visibleObjects.reduce((sum, obj) => {
		const { hw } = getRotatedHalfExtents(obj);
		return sum + hw * 2;
	}, 0) + (canvasData.objectSpacing) * (visibleObjects.length - 1);

	const extendedWidthPx = totalWidth * canvasData.groundExtent * canvasData.zoom;

	const viewportLeft = visibleRect.left - canvasRect.left;
	const viewportRight = visibleRect.right - canvasRect.left;
	const centerScreenX = centerX + canvasData.x;

	const lineLeft = Math.max(viewportLeft, centerScreenX - extendedWidthPx / 2);
	const lineRight = Math.min(viewportRight, centerScreenX + extendedWidthPx / 2);

	groundLineRect.setAttribute('x',	 lineLeft);
	groundLineRect.setAttribute('y',	 screenY);
	groundLineRect.setAttribute('width', Math.max(0, lineRight - lineLeft));
	groundLineRect.setAttribute('height', canvasData.groundThickness);
	groundLine.style.display = 'block';
}

function segmentIntersectsRect(x1, y1, x2, y2, rect) {
	// Liang–Barsky line clipping against rect {cx, cy, w, h}
	const xmin = rect.cx - rect.w / 2, xmax = rect.cx + rect.w / 2;
	const ymin = rect.cy - rect.h / 2, ymax = rect.cy + rect.h / 2;
	let t0 = 0, t1 = 1;
	const dx = x2 - x1, dy = y2 - y1;
	const checks = [
		[-dx, x1 - xmin], [dx, xmax - x1],
		[-dy, y1 - ymin], [dy, ymax - y1],
	];
	for (const [p, q] of checks) {
		if (p === 0) { if (q < 0) return false; continue; }
		const r = q / p;
		if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; }
		else { if (r < t0) return false; if (r < t1) t1 = r; }
	}
	return true;
}

function rectEdgePoint(rect, towardX, towardY) {
	// Point where the segment from rect center to (towardX, towardY) exits the rect
	const dx = towardX - rect.cx, dy = towardY - rect.cy;
	if (dx === 0 && dy === 0) return { x: rect.cx, y: rect.cy };
	const hw = rect.w / 2, hh = rect.h / 2;
	const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
	const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;
	const t = Math.min(tx, ty);
	return { x: rect.cx + dx * t, y: rect.cy + dy * t };
}

function rectCorners(rect, pad) {
	const hw = rect.w / 2 + pad, hh = rect.h / 2 + pad;
	return [
		{ x: rect.cx - hw, y: rect.cy - hh },
		{ x: rect.cx + hw, y: rect.cy - hh },
		{ x: rect.cx - hw, y: rect.cy + hh },
		{ x: rect.cx + hw, y: rect.cy + hh },
	];
}

function findBlockers(ax, ay, ex, ey, obstacles) {
	return obstacles.filter(ob => segmentIntersectsRect(ax, ay, ex, ey, ob));
}

function clearLabels() {
	while (canvasLabelsGroup.firstChild) canvasLabelsGroup.removeChild(canvasLabelsGroup.firstChild);
}

function scheduleUpdateLabels() {
	if (labelsRAF) return;
	labelsRAF = requestAnimationFrame(() => {
		labelsRAF = null;
		updateLabels();
	});
}

function measureTextWidth(text, fontSize, fontFamily, bold = false) {
	const key = `${bold?1:0}|${fontSize}|${fontFamily}|${text}`;
	if (textWidthCache.has(key)) return textWidthCache.get(key);
	if (!labelMeasureCtx) labelMeasureCtx = document.createElement('canvas').getContext('2d');
	labelMeasureCtx.font = `${bold ? 'bold ' : ''}${fontSize}px ${fontFamily}`;
	const w = labelMeasureCtx.measureText(text).width;
	textWidthCache.set(key, w);
	return w;
}

function clampToViewport(pt, anchor, maxDist) {
	const dx = pt.x - anchor.x, dy = pt.y - anchor.y;
	const dist = Math.hypot(dx, dy);
	if (dist <= maxDist) return pt;
	const t = maxDist / dist;
	return { x: anchor.x + dx * t, y: anchor.y + dy * t };
}

function rectsOverlap(a, b, pad = 0) {
	return Math.abs(a.cx - b.cx) < (a.w + b.w) / 2 + pad &&
		Math.abs(a.cy - b.cy) < (a.h + b.h) / 2 + pad;
}

function nearestPointOnRect(rect, px, py) {
	const halfW = rect.w / 2, halfH = rect.h / 2;
	return {
		x: Math.min(Math.max(px, rect.cx - halfW), rect.cx + halfW),
		y: Math.min(Math.max(py, rect.cy - halfH), rect.cy + halfH),
	};
}

function boundaryPointToward(rect, targetX, targetY) {
	const dx = targetX - rect.cx, dy = targetY - rect.cy;
	if (dx === 0 && dy === 0) return { x: rect.cx, y: rect.cy };
	const hw = rect.w / 2, hh = rect.h / 2;
	const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
	const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;
	const t = Math.min(tx, ty);
	return { x: rect.cx + dx * t, y: rect.cy + dy * t };
}

function clipSegmentToRect(x1, y1, x2, y2, rect) {
	let t0 = 0, t1 = 1;
	const dx = x2 - x1, dy = y2 - y1;
	const checks = [
		[-dx, x1 - rect.left], [dx, rect.right - x1],
		[-dy, y1 - rect.top], [dy, rect.bottom - y1],
	];
	for (const [p, q] of checks) {
		if (p === 0) { if (q < 0) return null; continue; }
		const r = q / p;
		if (p < 0) { if (r > t1) return null; if (r > t0) t0 = r; }
		else { if (r < t0) return null; if (r < t1) t1 = r; }
	}
	return {
		x1: x1 + t0 * dx, y1: y1 + t0 * dy,
		x2: x1 + t1 * dx, y2: y1 + t1 * dy,
	};
}

function updateLabels() {
	clearLabels();
	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const canvasRect = toolCanvas.getBoundingClientRect();
	const centerX = visibleRect.left - canvasRect.left + visibleRect.width / 2;
	const centerY = visibleRect.top - canvasRect.top + visibleRect.height / 2;
	const maxObstacleDim = Math.max(visibleRect.width, visibleRect.height) * 4;
	const spacing = canvasData.labelSpacing ?? 10;
	const nameSize = canvasData.labelSize ?? 14;
	const dimSize = canvasData.labelDimSize ?? 11;
	const showDims = canvasData.labelType === 'name+dimensions';

	const PAD = 4;
	const EDGE_PAD = 6;
	const LEADER_THRESHOLD = 14; // gap (px) before a connector line is drawn

	const bound = {
		left: visibleRect.left - canvasRect.left + EDGE_PAD,
		right: visibleRect.right - canvasRect.left - EDGE_PAD,
		top: visibleRect.top - canvasRect.top + EDGE_PAD,
		bottom: visibleRect.bottom - canvasRect.top - EDGE_PAD,
	};

	const visibleObjects = canvasObjects.filter(obj => {
		if (obj.visible === false) return false;
		if (!obj.translation || !obj.docElement) return false; // not actually rendered yet

		// Skip objects whose box doesn't come anywhere near the viewport —
		// avoids generating/searching for a label that would point at
		// something entirely off-screen.
		const objScreenX = obj.x * canvasData.zoom + centerX + canvasData.x;
		const objScreenY = obj.y * canvasData.zoom + centerY + canvasData.y;
		const { hw, hh } = getRotatedHalfExtents(obj);
		const halfW = Math.min(hw * canvasData.zoom, maxObstacleDim);
		const halfH = Math.min(hh * canvasData.zoom, maxObstacleDim);

		const margin = 20;
		return objScreenX + halfW >= bound.left - margin &&
			objScreenX - halfW <= bound.right + margin &&
			objScreenY + halfH >= bound.top - margin &&
			objScreenY - halfH <= bound.bottom + margin;
	});
	if (!canvasData.labels || visibleObjects.length === 0) return;

	function fitsInBounds(r) {
		return r.cx - r.w / 2 >= bound.left && r.cx + r.w / 2 <= bound.right &&
			r.cy - r.h / 2 >= bound.top && r.cy + r.h / 2 <= bound.bottom;
	}
	function clampCenterToBounds(r) {
		if (bound.right - bound.left < r.w || bound.bottom - bound.top < r.h) {
			return { cx: (bound.left + bound.right) / 2, cy: (bound.top + bound.bottom) / 2 };
		}
		return {
			cx: Math.min(Math.max(r.cx, bound.left + r.w / 2), bound.right - r.w / 2),
			cy: Math.min(Math.max(r.cy, bound.top + r.h / 2), bound.bottom - r.h / 2),
		};
	}
	function overlapAmount(r, obstacles) {
		let total = 0;
		for (const ob of obstacles) {
			const ox = Math.max(0, (r.w + ob.w) / 2 + PAD - Math.abs(r.cx - ob.cx));
			const oy = Math.max(0, (r.h + ob.h) / 2 + PAD - Math.abs(r.cy - ob.cy));
			total += ox * oy;
		}
		return total;
	}

	// Object obstacle boxes (screen-space AABB, post-rotation)
	const objBoxes = visibleObjects.map(obj => {
		const objScreenX = obj.x * canvasData.zoom + centerX + canvasData.x;
		const objScreenY = obj.y * canvasData.zoom + centerY + canvasData.y;
		const { hw, hh } = getRotatedHalfExtents(obj);
		return { obj, cx: objScreenX, cy: objScreenY, w: hw * 2 * canvasData.zoom, h: hh * 2 * canvasData.zoom };
	});

	const avoidableObjBoxes = objBoxes.filter(b => b.w <= maxObstacleDim && b.h <= maxObstacleDim);

	const placedLabelBoxes = [];
	const results = [];

	const startAngle = canvasData.labelAlign === 'below' ? Math.PI / 2
		: canvasData.labelAlign === 'center' ? 0
		: -Math.PI / 2; // 'above' (default)

	const orderedObjects = [...visibleObjects].sort((a, b) => {
		const ax = a.x * canvasData.zoom + centerX + canvasData.x;
		const bx = b.x * canvasData.zoom + centerX + canvasData.x;
		return ax - bx;
	});

	orderedObjects.forEach(obj => {
		const objBox = objBoxes.find(b => b.obj === obj);
		const dimStr = showDims ? formatDimensions(obj, unitMode, obj.angle ?? 'all') : '';
		const nameWidth = measureTextWidth(obj.name, nameSize, canvasData.labelFont, true);
		const dimWidth = showDims ? measureTextWidth(dimStr, dimSize, canvasData.labelFont, false) : 0;
		const w = Math.max(nameWidth, dimWidth) + 8;
		const h = showDims ? nameSize + dimSize + 8 : nameSize + 4;
		const nameOffset = showDims ? -(h / 2) + nameSize / 2 + 2 : 0;
		const dimOffset = showDims ? (h / 2) - dimSize / 2 - 2 : 0;

		const naturalCx = objBox.cx, naturalCy = objBox.cy;
		const obstacles = [...avoidableObjBoxes.map(b => ({ cx: b.cx, cy: b.cy, w: b.w, h: b.h })), ...placedLabelBoxes];

		function candidateValid(r) {
			if (!fitsInBounds(r)) return false;
			return !obstacles.some(ob => rectsOverlap(r, ob, PAD));
		}

		const vDir = canvasData.labelAlign === 'below' ? 1 : canvasData.labelAlign === 'center' ? 0 : -1;
		const objHalfH = objBox.h / 2;
		const objHalfW = objBox.w / 2;
		const ANGLE_THRESHOLD = 10 * Math.PI / 180;
		const maxTanAngle = Math.tan(ANGLE_THRESHOLD);
		const vStep = Math.max(8, h * 0.5);
		const edgeOffset = objHalfH + EDGE_PAD;

		function tryCandidate(cx, cy, obstacles, naturalCx, naturalCy) {
			const cand = { cx, cy, w, h };
			if (candidateValid(cand)) return { box: cand, dist: Math.abs(cy - naturalCy) };

			const clamped = { ...clampCenterToBounds(cand), w, h };
			const cutoffPenalty = fitsInBounds(cand) ? 0 : 5000;
			const horizDriftPenalty = Math.abs(cx - naturalCx) * 2;
			const score = overlapAmount(clamped, obstacles) + Math.abs(cy - naturalCy) * 0.01 + horizDriftPenalty + cutoffPenalty;
			return { box: null, clamped, score };
		}

		// Search in one vertical direction (dir: -1 = up, +1 = down). Returns the
		// first fully-valid candidate found, plus how far it had to travel — or,
		// failing that, the best fallback and its score.
		function searchDirection(dir, obstacles) {
			const farBound = dir < 0 ? bound.top : bound.bottom;
			const maxTravel = Math.abs(farBound - naturalCy) + h;
			let bestFallback = null, bestFallbackScore = Infinity;

			function consider(cx, cy) {
				const r = tryCandidate(cx, cy, obstacles, naturalCx, naturalCy);
				if (r.box) return r;
				if (r.score < bestFallbackScore) { bestFallbackScore = r.score; bestFallback = r.clamped; }
				return null;
			}

			// Pass 1: pure vertical
			for (let d = edgeOffset; d <= edgeOffset + maxTravel; d += vStep) {
				const r = consider(naturalCx, naturalCy + dir * d);
				if (r) return { found: r.box, dist: d, fallback: null, fallbackScore: Infinity };
			}
			// Pass 2: narrow cone
			for (let d = edgeOffset; d <= edgeOffset + maxTravel; d += vStep) {
				const maxH = d * maxTanAngle;
				for (let i = 1; i <= 4; i++) {
					const off = (maxH * i) / 4;
					const r = consider(naturalCx - off, naturalCy + dir * d) || consider(naturalCx + off, naturalCy + dir * d);
					if (r) return { found: r.box, dist: d, fallback: null, fallbackScore: Infinity };
				}
			}
			// Pass 3: wide fallback
			for (let d = edgeOffset; d <= edgeOffset + maxTravel; d += vStep) {
				const maxH = Math.max(objHalfW, w / 2) + d * 0.8;
				for (let i = 1; i <= 6; i++) {
					const off = (maxH * i) / 6;
					const r = consider(naturalCx - off, naturalCy + dir * d) || consider(naturalCx + off, naturalCy + dir * d);
					if (r) return { found: r.box, dist: d, fallback: null, fallbackScore: Infinity };
				}
			}

			return { found: null, dist: Infinity, fallback: bestFallback, fallbackScore: bestFallbackScore };
		}

		let found = null;
		let bestFallback = null, bestFallbackScore = Infinity;

		if (vDir === 0) {
			// 'center' alignment — unchanged, alternate close to the object
			for (let step = 0; step <= 24 && !found; step++) {
				const d = edgeOffset + step * vStep;
				const r = tryCandidate(naturalCx, naturalCy - d, obstacles, naturalCx, naturalCy);
				if (r.box) { found = r.box; break; }
				if (r.score < bestFallbackScore) { bestFallbackScore = r.score; bestFallback = r.clamped; }
				const r2 = tryCandidate(naturalCx, naturalCy + d, obstacles, naturalCx, naturalCy);
				if (r2.box) { found = r2.box; break; }
				if (r2.score < bestFallbackScore) { bestFallbackScore = r2.score; bestFallback = r2.clamped; }
			}
		} else {
			// Try both above and below, prefer above on a tie, otherwise take
			// whichever direction resolves in a shorter travel distance.
			const above = searchDirection(-1, obstacles);
			const below = searchDirection(1, obstacles);

			if (above.found && below.found) {
				found = above.dist <= below.dist ? above.found : below.found;
			} else if (above.found) {
				found = above.found;
			} else if (below.found) {
				found = below.found;
			} else {
				// Neither direction found a fully clear spot — take whichever
				// fallback scored better.
				if (above.fallbackScore <= below.fallbackScore) { bestFallback = above.fallback; }
				else { bestFallback = below.fallback; }
			}
		}

		const finalBox = found || bestFallback || { ...clampCenterToBounds({ cx: naturalCx, cy: naturalCy, w, h }), w, h };
		placedLabelBoxes.push(finalBox);
		results.push({ obj, dimStr, box: finalBox, objBox, nameOffset, dimOffset });
	});

	// —— Render ——
	results.forEach(r => {
		const { obj, dimStr, box, objBox } = r;
		const cx = box.cx, cy = box.cy;

		const objEdge = boundaryPointToward(objBox, cx, cy);
		const labelEdge = nearestPointOnRect(box, objEdge.x, objEdge.y);
		const gap = Math.hypot(labelEdge.x - objEdge.x, labelEdge.y - objEdge.y);

		if (gap > LEADER_THRESHOLD) {
			const clipRect = { left: bound.left - 20, right: bound.right + 20, top: bound.top - 20, bottom: bound.bottom + 20 };
			const clipped = clipSegmentToRect(objEdge.x, objEdge.y, labelEdge.x, labelEdge.y, clipRect);

			if (clipped) {
				const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				line.classList.add('canvas-label');
				line.setAttribute('x1', clipped.x1);
				line.setAttribute('y1', clipped.y1);
				line.setAttribute('x2', clipped.x2);
				line.setAttribute('y2', clipped.y2);
				line.setAttribute('stroke', obj.color || canvasData.labelColor);
				line.setAttribute('stroke-width', 1);
				line.setAttribute('stroke-dasharray', '2,2');
				line.setAttribute('opacity', '0.6');
				line.style.pointerEvents = 'none';
				canvasLabelsGroup.appendChild(line);
			}
		}

		const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g.classList.add('canvas-label');
		g.style.pointerEvents = 'none';

		const nameText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		nameText.setAttribute('text-anchor', 'middle');
		nameText.setAttribute('dominant-baseline', 'middle');
		nameText.setAttribute('font-size', nameSize);
		nameText.setAttribute('font-weight', 'bold');
		nameText.setAttribute('font-family', canvasData.labelFont);
		nameText.setAttribute('fill', canvasData.labelObjColor ? (obj.color || canvasData.labelColor) : canvasData.labelColor);
		nameText.textContent = obj.name;
		nameText.setAttribute('x', cx);
		nameText.setAttribute('y', cy + r.nameOffset);
		g.appendChild(nameText);

		if (showDims) {
			const dimText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			dimText.setAttribute('text-anchor', 'middle');
			dimText.setAttribute('dominant-baseline', 'middle');
			dimText.setAttribute('font-size', dimSize);
			dimText.setAttribute('font-family', canvasData.labelFont);
			dimText.setAttribute('fill', canvasData.labelObjColor ? (obj.color || canvasData.labelColor) : canvasData.labelColor);
			dimText.setAttribute('opacity', '0.7');
			dimText.textContent = dimStr;
			dimText.setAttribute('x', cx);
			dimText.setAttribute('y', cy + r.dimOffset);
			g.appendChild(dimText);
		}

		canvasLabelsGroup.appendChild(g);
	});
}

function clipPolygonToRect(poly, rect) {
	// rect = {left, right, top, bottom}
	function clipEdge(points, inside, computeIntersection) {
		const out = [];
		for (let i = 0; i < points.length; i++) {
			const curr = points[i];
			const prev = points[(i - 1 + points.length) % points.length];
			const currIn = inside(curr), prevIn = inside(prev);
			if (currIn) {
				if (!prevIn) out.push(computeIntersection(prev, curr));
				out.push(curr);
			} else if (prevIn) {
				out.push(computeIntersection(prev, curr));
			}
		}
		return out;
	}

	let pts = poly;
	pts = clipEdge(pts, p => p.x >= rect.left,	(a, b) => { const t = (rect.left - a.x) / (b.x - a.x); return { x: rect.left, y: a.y + t * (b.y - a.y) }; });
	pts = clipEdge(pts, p => p.x <= rect.right, (a, b) => { const t = (rect.right - a.x) / (b.x - a.x); return { x: rect.right, y: a.y + t * (b.y - a.y) }; });
	pts = clipEdge(pts, p => p.y >= rect.top,	 (a, b) => { const t = (rect.top - a.y) / (b.y - a.y); return { x: a.x + t * (b.x - a.x), y: rect.top }; });
	pts = clipEdge(pts, p => p.y <= rect.bottom,(a, b) => { const t = (rect.bottom - a.y) / (b.y - a.y); return { x: a.x + t * (b.x - a.x), y: rect.bottom }; });
	return pts;
}

function updateSelectionBoxes() {
	while (canvasSelectionGroup.firstChild) canvasSelectionGroup.removeChild(canvasSelectionGroup.firstChild);

	const visibleRect = canvasScrollWarning.getBoundingClientRect();
	const canvasRect = toolCanvas.getBoundingClientRect();
	const centerX = visibleRect.left - canvasRect.left + visibleRect.width / 2;
	const centerY = visibleRect.top - canvasRect.top + visibleRect.height / 2;

	const screenRadius = 6;
	const overshoot = 40; // draw a bit past the edge instead of cutting exactly at it
	const clipRect = {
		left:	 visibleRect.left - canvasRect.left - overshoot,
		right:	visibleRect.right - canvasRect.left + overshoot,
		top:	visibleRect.top - canvasRect.top - overshoot,
		bottom: visibleRect.bottom - canvasRect.top + overshoot,
	};

	canvasObjects.filter(o => o.selected && o.visible !== false && o.translation).forEach(obj => {
		const scaleRatioX = (obj.scaleX ?? obj.scale ?? 1) / canvasData.scale;
		const scaleRatioY = (obj.scaleY ?? obj.scale ?? 1) / canvasData.scale;
		const hw0 = -obj.translation.x * scaleRatioX;
		const hh0 = -obj.translation.y * scaleRatioY;

		const objScreenX = obj.x * canvasData.zoom + centerX + canvasData.x;
		const objScreenY = obj.y * canvasData.zoom + centerY + canvasData.y;
		const hwPx = hw0 * canvasData.zoom;
		const hhPx = hh0 * canvasData.zoom;
		const rad = ((obj.rotation || 0) * Math.PI) / 180;
		const cos = Math.cos(rad), sin = Math.sin(rad);

		// True corners of the (rotated) box, in screen space
		const localCorners = [
			{ x: -hwPx, y: -hhPx }, { x: hwPx, y: -hhPx },
			{ x: hwPx, y: hhPx },	{ x: -hwPx, y: hhPx },
		];
		const corners = localCorners.map(p => ({
			x: objScreenX + p.x * cos - p.y * sin,
			y: objScreenY + p.x * sin + p.y * cos,
		}));

		// Skip entirely if fully outside the padded viewport (nothing to draw)
		const allOutside = corners.every(c => c.x < clipRect.left || c.x > clipRect.right || c.y < clipRect.top || c.y > clipRect.bottom)
			&& !(objScreenX > clipRect.left && objScreenX < clipRect.right && objScreenY > clipRect.top && objScreenY < clipRect.bottom);
		if (allOutside) return;

		const clipped = clipPolygonToRect(corners, clipRect);
		if (clipped.length < 3) return;

		// Build a path: rounded corner at points that are true (unclipped)
		// box corners, straight line at points introduced by clipping.
		const isRealCorner = (p) => corners.some(c => Math.hypot(c.x - p.x, c.y - p.y) < 0.5);

		let d = '';
		const n = clipped.length;
		for (let i = 0; i < n; i++) {
			const curr = clipped[i];
			const prev = clipped[(i - 1 + n) % n];
			const next = clipped[(i + 1) % n];

			if (isRealCorner(curr)) {
				const r = Math.min(screenRadius, Math.hypot(curr.x - prev.x, curr.y - prev.y) / 2, Math.hypot(next.x - curr.x, next.y - curr.y) / 2);
				const toPrev = { x: (prev.x - curr.x), y: (prev.y - curr.y) };
				const toPrevLen = Math.hypot(toPrev.x, toPrev.y) || 1;
				const toNext = { x: (next.x - curr.x), y: (next.y - curr.y) };
				const toNextLen = Math.hypot(toNext.x, toNext.y) || 1;
				const p1 = { x: curr.x + (toPrev.x / toPrevLen) * r, y: curr.y + (toPrev.y / toPrevLen) * r };
				const p2 = { x: curr.x + (toNext.x / toNextLen) * r, y: curr.y + (toNext.y / toNextLen) * r };

				d += (i === 0 ? `M ${p1.x} ${p1.y} ` : `L ${p1.x} ${p1.y} `);
				d += `Q ${curr.x} ${curr.y} ${p2.x} ${p2.y} `;
			} else {
				d += (i === 0 ? `M ${curr.x} ${curr.y} ` : `L ${curr.x} ${curr.y} `);
			}
		}
		d += 'Z';

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', d);
		path.setAttribute('fill', 'none');
		path.setAttribute('stroke', '#4d8dff');
		path.setAttribute('stroke-width', 2);
		path.setAttribute('stroke-dasharray', '6,4');
		path.style.pointerEvents = 'none';
		canvasSelectionGroup.appendChild(path);
	});
}

function getRotatedHalfExtents(obj) {
	const scaleRatioX = (obj.scaleX ?? obj.scale ?? 1) / canvasData.scale;
	const scaleRatioY = (obj.scaleY ?? obj.scale ?? 1) / canvasData.scale;
	const hw0 = -obj.translation.x * scaleRatioX;
	const hh0 = -obj.translation.y * scaleRatioY;
	const rad = ((obj.rotation || 0) * Math.PI) / 180;
	const cos = Math.abs(Math.cos(rad));
	const sin = Math.abs(Math.sin(rad));
	return { hw: hw0 * cos + hh0 * sin, hh: hw0 * sin + hh0 * cos };
}

function getUnitFromScale(scale) {return scaleToUnit[scale] ?? 'm'};
function getUnitTypeFromScale(scale) {
	const unit = getUnitFromScale(scale);
	return imperialUnits.some(obj => obj.abbr === unit) ? 'imperial':'metric';
}

function convertDimension(value, fromScale, unitMode, precision = 0.005, originalUnits = false, alreadyInMeters = false) {
	const meters = alreadyInMeters ? value : value * fromScale;

	if (originalUnits) {
		const abbr = scaleToUnit[fromScale] ?? 'm';
		const exact = value; // value is already in original units
		let formatted;
		for (let sig = 1; sig <= 10; sig++) {
			const rounded = Number(exact.toPrecision(sig));
			const error = Math.abs((rounded - exact) / exact);
			if (error <= precision) {
				formatted = rounded.toLocaleString(undefined, {
					maximumSignificantDigits: sig,
					minimumSignificantDigits: sig
				});
				break;
			}
		}
		return `${formatted} ${abbr}`;
	}

	// Fall back to metric for very small imperial values
	const effectiveMode = (unitMode === 'imperial' && meters / 0.0254 < 0.01) ? 'metric' : unitMode;
	const units = effectiveMode === 'imperial' ? imperialUnits : metricUnits;
	let best = units[0];
	for (const unit of units) {
		if (meters / unit.scale >= unit.threshold) best = unit;
		else break;
	}
	// Prefer a larger unit when the value is an exact (whole-number) amount in
	// that unit, even if it wouldn't normally meet that unit's threshold yet.
	// e.g. 1m stays "1 m" (exact), but 1.73m still shows as "173 cm" (not exact).
	if (effectiveMode === 'metric') {
		const startIdx = units.indexOf(best);
		for (let i = startIdx + 1; i < units.length; i++) {
			const candidate = units[i];
			const val = meters / candidate.scale;
			const rounded = Math.round(val);
			const isExact = rounded === 1 && Math.abs(val - rounded) / Math.abs(val) <= precision; // rounded !== 0 && Math.abs(val - rounded) / Math.abs(val) <= precision;
			if (isExact) {
				best = candidate;
			} else {
				break;
			}
		}
	}

	const exact = meters / best.scale;
	// Imperial feet+inches special case — only when effectiveMode is imperial
	if (effectiveMode === 'imperial' && best.abbr === 'ft') {
		const totalInches = meters / 0.0254;
		const feet = Math.floor(totalInches / 12);
		const inches = totalInches % 12;
		const roundedInches = Math.round(inches);
		const reconstructed = feet * 12 + roundedInches;
		const error = Math.abs((reconstructed - totalInches) / totalInches);
		if (error <= 0.01) {
			if (feet === 0) return `${roundedInches}"`;
			if (roundedInches === 0) return `${feet}'`;
			return `${feet}' ${roundedInches}"`;
		}
		const inchesFormatted = parseFloat(inches.toFixed(1)).toLocaleString();
		return feet === 0 ? `${inchesFormatted}"` : `${feet}' ${inchesFormatted}"`;
	}
	// Standard rounding to within precision
	let formatted;
	for (let sig = 1; sig <= 10; sig++) {
		const rounded = Number(exact.toPrecision(sig));
		const error = Math.abs((rounded - exact) / exact);
		if (error <= precision) {
			formatted = rounded.toLocaleString(undefined, {
				maximumSignificantDigits: sig,
				minimumSignificantDigits: sig
			});
			break;
		}
	}
	return `${formatted} ${best.abbr}`;
}

function formatDimensions(obj, unitMode, angle, precision = 0.005, originalUnits = false) {
	const scale = obj.scale || 1;
	const w = () => convertDimension(obj.width, scale, unitMode, precision, originalUnits);
	const l = () => convertDimension(obj.length, scale, unitMode, precision, originalUnits);
	const h = () => convertDimension(obj.height, scale, unitMode, precision, originalUnits);

	const dimsForAngle = {
		front:	['width', 'height'],
		side:	 ['length', 'height'],
		top:	['width', 'length'],
		width:	['width'],
		length: ['length'],
		height: ['height'],
		all:	['width', 'length', 'height'],
	};

	const fns = { width: w, length: l, height: h };
	const keys = dimsForAngle[angle] || dimsForAngle.all;
	return keys
		.filter(k => obj[k] !== undefined && obj[k] !== null)
		.map(k => fns[k]())
		.join(' × ');
}

function modal(type = 'empty', args = {}) {
	if (type === 'more-info') {
		const m = newModal(true);
		const obj = args.obj;
		m.innerHTML = `
			<h1 class="modal-title">${obj.name}</h1>
			<b class="mim-id">ID: ${obj.id}</b>
			<div class="modal-grid">
				<div class="modal-details" style="flex-basis: 350px">
					<h1>Basic Details</h1>
					${obj.width ? `<span><p>Width</p><b>${formatDimensions(obj, unitMode, 'width')} <i>(${formatDimensions(obj, unitMode === 'metric' ? 'imperial':'metric', 'width')})</i></b></span>`:''}
					${obj.length ? `<span><p>Length</p><b>${formatDimensions(obj, unitMode, 'length')} <i>(${formatDimensions(obj, unitMode === 'metric' ? 'imperial':'metric', 'length')})</i></b></span>`:''}
					${obj.height ? `<span><p>Height</p><b>${formatDimensions(obj, unitMode, 'height')} <i>(${formatDimensions(obj, unitMode === 'metric' ? 'imperial':'metric', 'height')})</i></b></span>`:''}
					<span><p>Category</p><b>${obj.category.replace(/>/g, ' > ')}</b></span>
					<span><p>Created</p><b>${formatDate(obj.createdOn)}</b></stepspan>
					${obj.modifiedOn ? `<span><p>Modified</p><b>${formatDate(obj.modifiedOn)}</b></span>`:''}
				</div>
				<div class="modal-details">
					<h1>Angles</h1>
					<div class="mim-angles">${makeAngles(obj)}</div>
				</div>
				<div class="modal-details" style="flex-basis: 250px">
					<h1>Original Dimensions</h1>
					${obj.width ? `<span><p>Width</p><b>${formatDimensions(obj, unitMode, 'width', 0, true)}</b></span>`:''}
					${obj.length ? `<span><p>Length</p><b>${formatDimensions(obj, unitMode, 'length', 0, true)}</b></span>`:''}
					${obj.height ? `<span><p>Height</p><b>${formatDimensions(obj, unitMode, 'height', 0, true)}</b></span>`:''}
				</div>
				${obj.tags ? `
					<div class="modal-details" style="flex-basis: 200px">
						<h1>Tags</h1>
						<div class="mim-tags">${obj.tags.map(t => `<b>${t}</b>`).join('')}</div>
					</div>
				`:''}
				${obj.notes ? `
					<div class="modal-details" style="flex-basis: 400px">
						<h1>Notes</h1>
						<p>${obj.notes}</p>
					</div>
				`:''}
			</div>
		`;
		m.querySelectorAll('.mim-angles button').forEach(el => el.addEventListener('click', () => {
			modal('contributor', {contributor:contributors.filter(c => c.name === el.textContent.substring(9))[0]});
		}));
		m.querySelectorAll('.mim-tags b').forEach(el => el.addEventListener('click', () => {
			m.parentNode.parentNode.querySelector('.modal-exit').click();
			window.scrollTo(0, 0);
			objectCatalogSearch.value = `${el.textContent}`;
			objectCatalogSearch.dispatchEvent(new Event('input', { bubbles: true }));
			for (const s of objectCatalogSortDropdown.children) {
				if (s.textContent === 'Default') {s.click()};
			}
		}));
	}
	else if (type === 'contributor') {
		const m = newModal(true, args.parent);
		const c = args.contributor;
		m.innerHTML = `
			<h1 class="modal-title">${c.name}</h1>
			<div class="modal-overview">
				<div class="modal-overview-section">
					${c.rank <= 3 ? `<img src="/static/images/icons/award-${c.rank}.svg" alt="Award icon" class="rank-img">` : `<h1>#${c.rank.toLocaleString()}</h1>`}
					<p>Contributor</p>
				</div>
				<div class="modal-vertical-separator vsep-remove-700"></div>
				<div class="modal-overview-section">
					<img src="/static/images/compare-size-levels/level-${c.level.id}.svg" alt="Level ${c.level.id}" class="level-img">
					<p style="margin-bottom: -4px;">Level ${c.level.id}</p>
					<h2>${c.level.title}</h2>
					${c.level.id === contributorLevels.length ?
						'<div class="level-progress"><div width="100%"></div></div><p>MAX LEVEL REACHED</p>' :
						`<div class="level-progress"><div style="width:${Math.round(((c.contributions-c.level.contributions) / (contributorLevels[c.level.id].contributions-c.level.contributions))*1000)/10}%; background:${c.level.color}"></div></div>
						<p><b>${contributorLevels[c.level.id].contributions-c.contributions}</b> to level <b>${contributorLevels[c.level.id].title}</b></p>
						`}
				</div>
				<div class="modal-vertical-separator vsep-remove-700"></div>
				<div class="modal-overview-section">
					<h1${c.contributions !== c.totalContributions ? ' style="margin-bottom: 0px !important;"':''}>${c.contributions.toLocaleString()}</h1>
					${c.contributions !== c.totalContributions ? `<p style="margin-bottom: 15px !important;"><b>+${c.totalContributions-c.contributions}</b> near-duplicates</p>`:''}
					<p>${c.contributions === 1 ? 'Contribution' : 'Contributions'}</p>
					<div class="modal-horizontal-separator2"></div>
					<p><b>${c.objects.length.toLocaleString()}</b> total ${c.objects.length === 1 ? 'object' : 'objects'}</p>
				</div>
				<div class="modal-vertical-separator vsep-remove-700"></div>
				<div class="modal-overview-section">
					<h1>${convertDateDifference(c.firstDate, c.latestDate).replace(/yr/g, '<p>yr</p>').replace(/mo/g, '<p>mo</p>').replace(/d/g, '<p>d</p>')}</h1>
					<p>Time Contributing</p>
					<div class="modal-horizontal-separator2"></div>
					<p>Active on <b>${Math.round((c.daysActive.length / c.time) * 100)}%</b> of days</p>
				</div>
			</div>
			<div class="modal-grid">
				<div class="modal-details">
					<h1>Latest Contributions</h1>
					<div class="mim-angles">${makeLatestContributions(c)}</div>
					<button class="c-view-all">View All Objects</button>
				</div>
				<div class="modal-details" style="flex-basis: 350px">
					<h1>Additional Details</h1>
					<span><p>First upload date</p><b>${formatDateFromDate(c.firstDate)}</b></span>
					<span><p>Latest upload date</p><b>${formatDateFromDate(c.latestDate)}</b></span>
					<span><p>Total time contributing</p><b>${convertDateDifference(c.firstDate, c.latestDate)}</b></span>
					<span><p>Featured in a "surprise me"</p><b>${c.surprises.length.toLocaleString()} <i>${c.surprises.length === 1 ? 'time' : 'times'}</i></b></span>
					${c.contributions !== c.totalContributions ? `<span><p>Near-duplicates excluded from count</p><b>${(c.totalContributions-c.contributions).toLocaleString()}<i> images</i></b></span>` : ''}
					${c.contributions !== c.totalContributions ? `<span><p>Total contributions</p><b>${c.totalContributions.toLocaleString()}<i> images</i></b></span>` : ''}
				</div>
			</div>
		`;
		// <p>${c.contributions-c.level.contributions} / ${contributorLevels[c.level.id].contributions-c.level.contributions} contributions</p>
		m.querySelector('.c-view-all').addEventListener('click', () => {
			m.parentNode.parentNode.querySelector('.modal-exit').click();
			window.scrollTo(0, 0);
			objectCatalogSearch.value = `user:${c.name}`;
			objectCatalogSearch.dispatchEvent(new Event('input', { bubbles: true }));
			for (const s of objectCatalogSortDropdown.children) {
				if (s.textContent === 'Newest') {s.click()};
			}
		});
	}

	function makeAngles(obj) {
		let html = '';
		if (obj.side) {
			const imgData = getObjectImageData(obj, 'side');
			html += `
				<div class="mim-angle">
					<h1>Side</h1>
					<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					<button>Made by: ${obj.side.artist}</button>
				</div>
			`;
		}
		if (obj.front) {
			const imgData = getObjectImageData(obj, 'front');
			html += `
				<div class="mim-angle">
					<h1>Front</h1>
					<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					<button>Made by: ${obj.front.artist}</button>
				</div>
			`;
		}
		if (obj.top) {
			const imgData = getObjectImageData(obj, 'top');
			html += `
				<div class="mim-angle">
					<h1>Top</h1>
					<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					<button>Made by: ${obj.top.artist}</button>
				</div>
			`;
		}
		return html;
	}

	function makeLatestContributions(c) {
		let html = '';
		let contributionsLoaded = 0;
		const maxLoad = 8;
		for (let i=0; i < c.objects.length; i++) {
			const obj = catalog[objectIndexMap.get(c.objects[i])];
			if (obj.side && obj.side.artist === c.name) {
				const imgData = getObjectImageData(obj, 'side');
				html += `
					<div class="mim-angle">
						<h1>${obj.name} - Side</h1>
						<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					</div>
				`;
				contributionsLoaded++;
			}
			if (contributionsLoaded >= maxLoad) {break};
			if (obj.front && obj.front.artist === c.name) {
				const imgData = getObjectImageData(obj, 'front');
				html += `
					<div class="mim-angle">
						<h1>${obj.name} - Front</h1>
						<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					</div>
				`;
				contributionsLoaded++;
			}
			if (contributionsLoaded >= maxLoad) {break};
			if (obj.top && obj.top.artist === c.name) {
				const imgData = getObjectImageData(obj, 'top');
				html += `
					<div class="mim-angle">
						<h1>${obj.name} - Top</h1>
						<img src="/web-tools/compare-size/images/${imgData.file}" alt="${imgData.name}">
					</div>
				`;
				contributionsLoaded++;
			}
			if (contributionsLoaded >= maxLoad) {break};
		}
		return html;
	}

	function newModal(scrollable, parent = 'tool', w = 1000, h = 800) {
		const container = document.createElement('div');
		container.className = 'modal-container';
		container.style.opacity = '0';
		container.addEventListener('click', (e) => {
			if (e.target.classList.contains('modal-exit') || e.target.classList.contains('modal-container')) {
				const modal = e.currentTarget;
				modal.addEventListener('transitionend', function handler(ev) {
					if (ev.propertyName === 'opacity') {
						modal.remove();
						modal.removeEventListener('transitionend', handler);
					}
				});
				modal.style.opacity = '0';
			}
		});
		const m = document.createElement('div');
		m.className = 'modal';
		m.style.maxWidth = `${w}px`;
		m.style.maxHeight = `${h}px`;
		const x = document.createElement('img');
		x.className = 'modal-exit';
		x.src = '/static/images/icons/x-spaced.svg';
		m.appendChild(x);
		const c = document.createElement('div');
		c.className = 'modal-content-container';
		m.appendChild(c);
		container.appendChild(m);
		if (parent === 'page') {
			container.classList.add('page-modal');
			document.getElementById('content-main').appendChild(container);
		}
		else {toolContainer.appendChild(container)};
		setTimeout(() => {container.removeAttribute('style')}, 1);
		if (scrollable === true) {
			const s = document.createElement('div');
			s.className = 'modal-scroll-container';
			c.appendChild(s);
			return s;
		}
		return c;
	}
}

function formatDate(dateString) {
	const [year, month, day] = dateString.split('-');
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return `${months[month - 1]} ${Number(day)}, ${year}`;
}

function formatDateFromDate(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return `${months[month - 1]} ${Number(day)}, ${year}`;
}

init();