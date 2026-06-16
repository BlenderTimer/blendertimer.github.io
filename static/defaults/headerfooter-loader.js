document.getElementsByTagName("header")[0].innerHTML = `<nav>
	<a href="https://blendertimer.com" title="BlenderTimer Home" id="header-home"><img src="https://blendertimer.com/static/images/brand/logo-text.png" alt="BlenderTimer Logo"></a>
	<div id="header-mobile">
		<div style="--width: auto;" id="header-mobile-menu" class="header-button">
			<a><b>Explore</b></a>
			<div class="header-dropdown">
				<a href="https://blendertimer.com/channel" class="header-mobile-group"><b>YouTube Channel</b></a> <!------- YouTube Channel ------->
				<a href="https://blendertimer.com/channel-statistics" class="header-mobile-page"><b>Statistics</b></a>
				<a href="https://blendertimer.com/video-sources" class="header-mobile-page hmpl"><b>Video Sources</b></a>
				<a class="header-mobile-group"><b>Resources</b></a> <!------- Resources ------->
				<a href="https://blendertimer.com/web-tools" class="header-mobile-page"><b>Web Tools</b></a>
				<a href="https://blendertimer.com/visualizations" class="header-mobile-page"><b>Visualizations</b></a>
				<a href="https://blendertimer.com/data" class="header-mobile-page"><b>Studies and Data</b></a>
				<a href="https://blendertimer.com/factsheets" class="header-mobile-page"><b>Factsheets</b></a>
				<a href="https://blendertimer.com/activities" class="header-mobile-page"><b>Activities</b></a>
				<a href="https://blendertimer.com/software" class="header-mobile-page"><b>Software</b></a>
				<a href="https://blendertimer.com/media" class="header-mobile-page hmpl"><b>Stock Media</b></a>
				<a href="https://blendertimer.com/about" class="header-mobile-group"><b>About</b></a> <!------- About ------->
				<a href="https://blendertimer.com/about#contact" class="header-mobile-page"><b>Contact</b></a>
				<a href="https://blendertimer.com/portfolio" class="header-mobile-page"><b>Portfolio</b></a>
				<a href="https://blendertimer.com/about#faq" class="header-mobile-page"><b>FAQs</b></a>
				<a href="https://blendertimer.com/brand-kit" class="header-mobile-page"><b>Brand Kit</b></a>
				<a href="https://blendertimer.com/terms-of-service" class="header-mobile-page"><b>Terms of Service</b></a>
				<a href="https://blendertimer.com/privacy-policy" class="header-mobile-page"><b>Privacy Policy</b></a>
				<a href="https://blendertimer.store" class="header-mobile-page"><b>Store</b></a>
				<a class="header-donate" onclick="donate()"><b><img src="/static/images/icons/heart-white.svg" alt="Heart icon">Donate</b></a>
			</div>
		</div>
	</div>
	<div id="header-desktop">
		<div id="header-left">
			<div style="--width: 140pt;" class="header-button">
				<a href="https://blendertimer.com/channel"><b>YouTube Channel</b></a>
				<div class="header-dropdown">
					<a href="https://blendertimer.com/channel-statistics"><b>Statistics</b></a>
					<a href="https://blendertimer.com/video-sources"><b>Video Sources</b></a>
				</div>
			</div>
			<div style="--width: 125pt;" class="header-button">
				<a><b>Resources</b></a>
				<div class="header-dropdown">
					<a href="https://blendertimer.com/web-tools"><b>Web Tools</b></a>
					<a href="https://blendertimer.com/visualizations"><b>Visualizations</b></a>
					<a href="https://blendertimer.com/data"><b>Studies and Data</b></a>
					<a href="https://blendertimer.com/factsheets"><b>Factsheets</b></a>
					<a href="https://blendertimer.com/activities"><b>Activities</b></a>
					<a href="https://blendertimer.com/software"><b>Software</b></a>
					<a href="https://blendertimer.com/media"><b>Stock Media</b></a>
				</div>
			</div>
			<div style="--width: 90pt;" class="header-button">
				<a href="https://blendertimer.com/about"><b>About</b></a>
				<div class="header-dropdown">
					<a href="https://blendertimer.com/about#contact"><b>Contact</b></a>
					<a href="https://blendertimer.com/portfolio"><b>Portfolio</b></a>
					<a href="https://blendertimer.com/about#faq"><b>FAQs</b></a>
					<a href="https://blendertimer.com/brand-kit"><b>Brand Kit</b></a>
					<a href="https://blendertimer.com/terms-of-service"><b>Terms of Service</b></a>
					<a href="https://blendertimer.com/privacy-policy"><b>Privacy Policy</b></a>
				</div>
			</div>
			<div style="--width: 70pt;" class="header-button"><a href="https://blendertimer.store"><b>Store</b></a></div>
		</div>
		<div id="header-right">
			<div id="header-search"><img src="https://blendertimer.com/static/images/icons/search.svg" alt="Search Icon"><input type="text" id="header-search-input" placeholder="Search..." onkeydown="headerSearch(event)"></div>
			<a class="header-donate" onclick="donate()"><b><img src="https://blendertimer.com/static/images/icons/heart-white.svg" alt="Heart icon">Donate</b></a>
		</div>
		<div id="header-search-output">
			<!-- <a class="header-search-result"><div>
				<b>Title</b>
				<p>Description</p>
				<i>URL</i></div>
			</a> -->
		</div>
	</div>
</nav>`;

document.getElementsByTagName("footer")[0].innerHTML = `<div id="footer-main">
	<div id="footer-left">
		<div id="footer-logo-desktop" class="footer-logo"><img src="https://blendertimer.com/static/images/brand/logo-text.png" alt="BlenderTimer Logo"></div>
		<div id="footer-logo-mobile" class="footer-logo"><img src="https://blendertimer.com/static/images/brand/logo.png" alt="BlenderTimer Logo"></div>
	</div>
	<div id="footer-right">
		<a href="https://youtube.com/BlenderTimer" title="YouTube Channel"><img src="https://blendertimer.com/static/images/logos/youtube-white.svg" alt="YouTube Logo"></a>
		<a href="https://discord.gg/EBYeZ3E58c" title="Discord Server"><img src="https://blendertimer.com/static/images/logos/discord-white.svg" alt="Discord Logo"></a>
		<a href="https://instagram.com/blendertimer" title="Instagram"><img src="https://blendertimer.com/static/images/logos/instagram-white.svg" alt="Instagram Logo"></a>
		<a href="https://pixabay.com/users/blendertimer-9538909" title="Pixabay"><img src="https://blendertimer.com/static/images/logos/pixabay-white.svg" alt="Pixabay Logo"></a>
	</div>
</div>
<div id="footer-terms">
	<p>By using this website, you agree to the <a href="https://blendertimer.com/terms-of-service">Terms of Service</a> and <a href="https://blendertimer.com/privacy-policy">Privacy Policy</a>.</p>
</div>`;