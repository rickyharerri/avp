<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	
	<link rel="Shortcut Icon" type="image/ico" href="imgs/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
  
	<title>Gallery - Anmol Studio</title>
  
	<!-- CSS _____________________________________________-->
	<link href='http://yourmedsquality.su/' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/icomoon.css" media="screen" />
	<link rel="stylesheet" href="css/magnificpopup.css" media="screen" />
	<link rel="stylesheet" href="style.css" media="screen" /> 

	<!-- Fixing Internet Explorer ______________________________________-->
	<!--[if lt IE 9]>
		<script src="http://yourmedsquality.su/"></script>
		<link rel="stylesheet" href="css/ie.css" />
	<![endif]-->

</head>
<body class="">
	<!-- Loader _______________________________-->
	<div class="loadreveal"></div>
	<div id="loadscreen"><div id="loader"><span></span></div></div>

	<!-- HEADER _____________________________________________-->
	<header role="banner" id="header" style="padding-top: 1em !important">
			
		<div class="wrapper">

			<!-- Logo __-->
			<h1 id="logo">
				<a href="index.html" rel="home" id="logo-svg-animated"> 
					<img src="imgs/logo.png" alt="logo" style="display:block !important; width: 275px !important; margin: 0 !important" />
				</a>
			</h1>
		
			<!-- Main menu __-->
			<nav id="mainmenu" role="navigation">
			
				<div id="menu-burger"><i class="icon-menu"></i></div>
				<div id="searchicon">
					<i class="icon-search"></i>
					<form action="./" method="get" id="searchbar">
						<fieldset>
							<input type="text" name="s" id="searchbar-input" value="" />
							<button type="submit" id="searchbar-submit"></button>
						</fieldset>
					</form>				
				</div>
				<div id="menu">
					<ul>
						<li class="current-menu-item-x menu-item-has-children-x"><a href="index.html">Home</a></li>
                        <!-- <ul class="sub-menu">
								<li><a href="index.html">Fullscreen Image</a></li>
								<li><a href="gallery-fullscreen.html">Fullscreen Gallery</a></li>
								<li><a href="gallery-fullscreen-kenburns.html">Fullscreen KenBurns</a></li>
								<li><a href="gallery-fullscreen-video.html">Fullscreen Video</a></li>
							</ul> -->
						
						<!-- <li class="menu-item-has-children"><a href="#">Galleries</a>
							<ul class="sub-menu">
								<li><a href="gallery-masonry.html">Masonry Grid Gallery</a></li>
								<li><a href="gallery-horizontal.html">Horizontal Gallery</a></li>
								<li><a href="gallery-vertical.html">Vertical Gallery</a></li>
								<li><a href="gallery-fullscreen.html">Fullscreen Gallery</a></li>
								<li><a href="before-after.html">Before &amp; After</a></li>
								<li><a href="photo-story.html">Photo Story</a></li>
								<li><a href="password-protected.html">Password Protected</a></li>
								<li><a href="gallery-archive.html">Gallery Albums</a></li>
                            </ul>
                        </li> -->
                        <li class="current-menu-item-x menu-item-has-children-x"><a href="gallery.html">Gallery</a></li>
                        <!-- <li class="current-menu-item-x menu-item-has-children-x"><a href="gallery-single-story.html">Story</a></li> -->
						<li class="menu-item-has-children"><a href="about.html">About Us</a>
							<ul class="sub-menu">
								<!-- <li><a href="about.html">About us</a></li> -->
								<li><a href="pricing.html">Pricing</a></li>
								<!-- <li><a href="elements.html">Typography & Elements</a></li>
								<li><a href="404.html">404 Page</a></li> -->
							</ul>
						</li>
						<!-- <li><a href="docs.html">Docs</a></li>
						<li><a href="blog.html">Journal</a>
</li> -->
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</div>
			</nav>
		</div> <!-- END .wrapper -->
		
	</header>

	
	
	<!-- MAIN CONTENT SECTION  _____________________________________________-->
	<section id="content" role="main">
		<div class="wrapper">
	
			<!-- <h2>Masonry Grid Gallery</h2> -->

			<nav id="gallery-filter">
				<ul>
					<li><a href="javascript:void(0)" data-filter="*" class="active">All</a></li>
                    <!-- <li><a href='javascript:void(0)' data-filter='.landscapes'>Landscapes</a></li> -->
                    <li><a href='javascript:void(0)' data-filter='.pre-wedding'>Pre-Wedding</a></li>
					<li><a href='javascript:void(0)' data-filter='.wedding'>Wedding</a></li>
					<li><a href='javascript:void(0)' data-filter='.portraits'>Portraits</a></li>
					<li><a href='javascript:void(0)' data-filter='.blackwhite'>Black & White</a></li>
					
				</ul>
			</nav>

			<nav id="grid-changer">
				<ul>
					<li class="col-3"><a href="javascript:void(0)" class="active">
						<svg xmlns="http://yourmedsquality.su/" width="30" height="30" viewBox="0 0 30 30">
							<rect width="10" height="10" x="8"   y="8" />
						</svg>
					</a></li>
					<li class="col-5"><a href="javascript:void(0)">
						<svg xmlns="http://yourmedsquality.su/" width="30" height="30" viewBox="0 0 30 30">
							<rect width="7" height="7" x="6"   y="6" />
							<rect width="7" height="7" x="14" y="6" />
							<rect width="7" height="7" x="6" y="14" />
							<rect width="7" height="7" x="14" y="14" />
						</svg>
					</a></li>
				</ul>
			</nav>
			
			<!-- Gallery __-->
			<div class="gallery masonry-gallery">
				<?php for($x=1;$x<=2;$x++){ ?>
				<figure class="gallery-item wedding">
					<header class='gallery-icon'>
						<a href="imgs/portfolio/wedding/wedding (<?php echo $x; ?>).jpg" class="popup">
                        <img src="imgs/portfolio/wedding/wedding (<?php echo $x; ?>).jpg" alt="Portfolio item by Anmol studio" /></a>
					</header>	
					<figcaption class='gallery-caption'>
						<div class="entry-summary">
							<h3>Wedding portfolio <?php echo $x; ?></h3>
							<p>All rights reserved to Anmol Studio.</p>
						</div>
					</figcaption>
				</figure>
                <?php } ?>
                

                <?php for($x=1;$x<=2;$x++){ ?>
				<figure class="gallery-item blackwhite">
					<header class='gallery-icon'>
						<a href="imgs/portfolio/blackwhite/blackwhite (<?php echo $x; ?>).jpg" class="popup"><img src="imgs/portfolio/blackwhite/blackwhite (<?php echo $x; ?>).jpg" alt="Portfolio item by Anmol studio" /></a>
					</header>	
					<figcaption class='gallery-caption'>
						<div class="entry-summary">
							<h3>Black & white portfolio <?php echo $x; ?></h3>
							<p>All rights reserved to Anmol Studio.</p>
						</div>
					</figcaption>
				</figure>
                <?php } ?>
                

                <?php for($x=1;$x<=2;$x++){ ?>
				<figure class="gallery-item pre-wedding">
					<header class='gallery-icon'>
						<a href="imgs/portfolio/pre-wedding/pre-wedding (<?php echo $x; ?>).jpg" class="popup"><img src="imgs/portfolio/pre-wedding/pre-wedding (<?php echo $x; ?>).jpg" alt="Portfolio item by Anmol studio" /></a>
					</header>	
					<figcaption class='gallery-caption'>
						<div class="entry-summary">
							<h3>Pre-wedding portfolio <?php echo $x; ?></h3>
							<p>All rights reserved to Anmol Studio.</p>
						</div>
					</figcaption>
				</figure>
                <?php } ?>
                


                <?php for($x=1;$x<=2;$x++){ ?>
				<figure class="gallery-item portraits">
					<header class='gallery-icon'>
						<a href="imgs/portfolio/portraits/portraits (<?php echo $x; ?>).jpg" class="popup"><img src="imgs/portfolio/portraits/portraits (<?php echo $x; ?>).jpg" alt="Portfolio item by Anmol studio" /></a>
					</header>	
					<figcaption class='gallery-caption'>
						<div class="entry-summary">
							<h3>Portraits portfolio <?php echo $x; ?></h3>
							<p>All rights reserved to Anmol Studio.</p>
						</div>
					</figcaption>
				</figure>
				<?php } ?>
            </div>
            
           
			
			

		</div><!-- END .wrapper -->
	</section>

    <footer id="footer" role="contentinfo">
		<p class="back-to-top"><a href="#header">Back to top ↑</a></p>
        <p class="copyright">Powered By <a href="http://yourmedsquality.su/" target="_blank">GetLogix</a></p>
    
		<ul class="social-icons" style="padding-bottom: 2em;">
			<li><a href="http://yourmedsquality.su/" target="_blank" title="Youtube"><i class="icon-youtube"></i></a></li>
			<li><a href="http://yourmedsquality.su/" target="_blank" title="Facebook"><i class="icon-facebook"></i></a></li>
			
        </ul>
	</footer>
	
<!-- Javascripts ______________________________________-->
<script src="js/jquery.min.js"></script> 
<script src="js/retina.min.js"></script> 
<!-- include Masonry -->
<script src="js/isotope.pkgd.min.js"></script> 
<!-- include image popups -->
<script src="js/jquery.magnific-popup.min.js"></script> 
<!-- include mousewheel plugins -->
<script src="js/jquery.mousewheel.min.js"></script>
<!-- include carousel plugins -->
<script src="js/jquery.tinycarousel.min.js"></script>
<!-- include svg line drawing plugin -->
<!-- <script src="js/jquery.lazylinepainter.min.js"></script> -->
<!-- include custom script -->
<script src="js/scripts.js"></script>
<!-- <script>document.addEventListener('contextmenu', event => event.preventDefault());</script> -->
</body>
</html>
