<!DOCTYPE html>
<html lang="pl">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Blog</title>
	<base href="{{base_url}}" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<meta name="description" content=" I MIĘDZYNARODOWY DZIEŃ BURAKA CUKROWEGO AGRO TARGI WSCHÓD  PODKARACKI ZWIĄZEK BURAKA CUKROWEGO W PRZEWORSKU 17-18.06.2017 W SKOŁOSZOWIE UL. PRZEMYSKA 37, GMINA RADYMNO, POWIAT JAROSŁAWSKI, WOJ. PODKARPACKIE
PRZY WĘŹLE „PRZEMYŚL” AUTOSTRADY A4

W GOSPODARSTWIE PANA STANISŁAWA SAWY" />
	<meta name="keywords" content="Blog" />
		
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/main.js?v=1.0.8" type="text/javascript"></script>

	<link href="css/site.css?v=1.1.49" rel="stylesheet" type="text/css" />
	<link href="css/common.css?ts=1494388777" rel="stylesheet" type="text/css" />
	<link href="css/blog.css?ts=1494388777" rel="stylesheet" type="text/css" />
	<meta name="google-site-verification" content="rhNoW6X6LtViAJCR0_ZnmAZw6M9fEdwmRWyJNOUY9rY" />
	<script type="text/javascript">var currLang = '';</script>		
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>


<body>{{ga_code}}<div class="root"><div class="vbox wb_container" id="wb_header">
	
<div id="wb_element_instance53" class="wb_element wb-menu wb-menu-mobile"><a class="btn btn-default btn-collapser"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a><ul class="hmenu"><li><a href="Strona-g%C5%82%C3%B3wna/" target="_self" title="Strona główna">Strona główna</a></li><li><a href="O-nas/" target="_self" title="O nas">O nas</a></li><li><a href="Partnerzy/" target="_self" title="Partnerzy">Partnerzy</a></li><li><a href="Kontakty/" target="_self" title="Kontakty">Kontakty</a></li></ul><div class="clearfix"></div></div><div id="wb_element_instance54" class="wb_element wb_element_picture"><img alt="gallery/agroprojects_logo" src="gallery_gen//ab3b658838c5fe93caf8bbe725a528f0_116x61.png"></div><div id="wb_element_instance55" class="wb_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle">Agro projekty</h4></div></div>
<div class="vbox wb_container" id="wb_main">
	
<div id="wb_element_instance57" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(blog);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance57");
					var comments = block.children(".wb_comments").eq(0);
					var contentBlock = $("#wb_main");
					contentBlock.height(contentBlock.height() + comments.height());
				});
			</script>
			<?php
				} else {
			?>
			<script type="text/javascript">
				$(function() {
					$("#wb_element_instance57").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div>
<div class="vbox wb_container" id="wb_footer" style="height: 114px;">
	
<div id="wb_element_instance56" class="wb_element" style=" line-height: normal;"><p class="wb-stl-footer"> © 2017 <a href="http://agrotargiwschod.pl"><strong>agro</strong></a><a href="http://targiwschod.com">targiwschod.</a><a href="http://agrotargiwschod.pl"><strong>pl</strong></a> </p>

<p class="wb-stl-footer"><b>E-mail: biuro@agrotargiwschod.pl</b></p>
</div><div id="wb_element_instance58" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#wb_footer");
					footer.height(34);
				}
			});
			</script></div></div><div class="wb_sbg"></div></div>{{hr_out}}</body>
</html>
