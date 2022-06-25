exports.base = (header, populer, post) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Font -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600%7CUbuntu:300,400,500,700" rel="stylesheet">
    
        <!-- CSS -->
        
        <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="css/owl.carousel.min.css">
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
        <link rel="stylesheet" href="css/nouislider.min.css">
        <link rel="stylesheet" href="css/ionicons.min.css">
        <link rel="stylesheet" href="css/plyr.css">
        <link rel="stylesheet" href="css/photoswipe.css">
        <link rel="stylesheet" href="css/default-skin.css">
        <link rel="stylesheet" href="css/main.css">
    
        <!-- Favicons -->
        <link rel="icon" type="image/png" href="icon/favicon-32x32.png" sizes="32x32">
        <link rel="apple-touch-icon" href="icon/favicon-32x32.png">
        <link rel="apple-touch-icon" sizes="72x72" href="icon/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="icon/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="144x144" href="icon/apple-touch-icon-144x144.png">
    
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Dmitry Volkov">
        <title>RajaDoujin - Baca Doujin Gratis</title>
</head>
    <body class="body">
        
        <!-- header -->
        ${header}
        <!-- end header -->
    
        <!-- home -->
    
        <section class="home">
            <!-- home bg -->
            <div class="owl-carousel home__bg">
                <div class="item home__cover" data-bg="img/home/home__bg.jpg"></div>
                <div class="item home__cover" data-bg="img/home/home__bg2.jpg"></div>
                <div class="item home__cover" data-bg="img/home/home__bg3.jpg"></div>
                <div class="item home__cover" data-bg="img/home/home__bg4.jpg"></div>
            </div>
            <!-- end home bg -->
    
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="home__title"><b>Popular</b></h1>
    
                        <button class="home__nav home__nav--prev" type="button">
                            <i class="icon ion-ios-arrow-round-back"></i>
                        </button>
                        <button class="home__nav home__nav--next" type="button">
                            <i class="icon ion-ios-arrow-round-forward"></i>
                        </button>
                    </div>
    
                    <div class="col-12">
                    <div class="owl-carousel home__carousel">
                    ${populer}
                    </div>
                    </div>
                </div>
            </div>
    
        
        </section>
    
       
        <!-- end home -->
    
    
            
        
        <section class="section section--bg" data-bg="img/section/section.jpg">
            <div class="container">
                <div class="row">
                    <!-- section title -->
                    <div class="col-12">
                        <h2 class="section__title">Last Update</h2>
                    </div>
                    <!-- end section title -->
    
                    <!-- card -->
                ${post}
             
                
                    <!-- end card -->
    
                
    
                    <!-- section btn -->
                    
                    <!-- end section btn -->
                </div>
            </div>
        </section>
        <!-- end expected premiere -->
        <div class="blox mlb kln"><center><a href="/pages/2"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Next >> </span></h3></a></center>
        <!-- partners -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <!-- section title -->
                    <div class="col-12">
                        <h2 class="section__title section__title--no-margin">Our Partners</h2>
                    </div>
                    <!-- end section title -->
    
                    <!-- section text -->
                    <div class="col-12">
                        <p class="section__text section__text--last-with-margin">It is a long <b>established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                    </div>
                    <!-- end section text -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/themeforest-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/audiojungle-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/codecanyon-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/photodune-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/activeden-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
    
                    <!-- partner -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <a href="#" class="partner">
                            <img src="img/partners/3docean-light-background.png" alt="" class="partner__img">
                        </a>
                    </div>
                    <!-- end partner -->
                </div>
            </div>
        </section>
        <!-- end partners -->
    
        <!-- footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <!-- footer list -->
                    <div class="col-12 col-md-3">
                        <h6 class="footer__title">Download Our App</h6>
                        <ul class="footer__app">
                            <li><a href="#"><img src="img/Download_on_the_App_Store_Badge.svg" alt=""></a></li>
                            <li><a href="#"><img src="img/google-play-badge.png" alt=""></a></li>
                        </ul>
                    </div>
                    <!-- end footer list -->
    
                    <!-- footer list -->
                    <div class="col-6 col-sm-4 col-md-3">
                        <h6 class="footer__title">Resources</h6>
                        <ul class="footer__list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Pricing Plan</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <!-- end footer list -->
    
                    <!-- footer list -->
                    <div class="col-6 col-sm-4 col-md-3">
                        <h6 class="footer__title">Legal</h6>
                        <ul class="footer__list">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                    <!-- end footer list -->
    
                    <!-- footer list -->
                    <div class="col-12 col-sm-4 col-md-3">
                        <h6 class="footer__title">Contact</h6>
                        <ul class="footer__list">
                            <li><a href="tel:+18002345678">+1 (800) 234-5678</a></li>
                            <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                        </ul>
                        <ul class="footer__social">
                            <li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
                            <li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
                            <li class="twitter"><a href="#"><i class="icon ion-logo-twitter"></i></a></li>
                            <li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
                        </ul>
                    </div>
                    <!-- end footer list -->
    
                    <!-- footer copyright -->
                    <div class="col-12">
                        <div class="footer__copyright">
                            <small><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></small>
    
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- end footer copyright -->
                </div>
            </div>
        </footer>
        <!-- end footer -->
    
        <!-- JS -->
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.mousewheel.min.js"></script>
        <script src="js/jquery.mCustomScrollbar.min.js"></script>
        <script src="js/wNumb.js"></script>
        <script src="js/nouislider.min.js"></script>
        <script src="js/plyr.min.js"></script>
        <script src="js/jquery.morelines.min.js"></script>
        <script src="js/photoswipe.min.js"></script>
        <script src="js/photoswipe-ui-default.min.js"></script>
        <script src="js/main.js"></script>
        <script>
//<![CDATA[ var allow =[‘google’,’facebook’,’bing’,’yandex’,’yahoo’,’geevv’,'(tambahkan yang lain boleh)’, dst]; //Sumber lalu lintas yang diizinkan untuk mengakses Blog
var valid = false;
if(!document.referrer==”){
for(var i =allow.length; i–;){ if(document.referrer.toLowerCase().includes(allow[i].toLowerCase())){
valid = true;
break;
}
}
if(valid==false){

window.location =document.referrer; //Arahkan ke Web Jingling jika tidak sesuai dengan sumber lalulintas diatas
}
}//]]>
</script>
    </body>
    
    </html>
    `
}
exports.header = () => {
    return `
    <header class="header">
    <div class="header__wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__content">
                        <!-- header logo -->
                        <a href="/" class="header__logo">
                            <img src="https://telegra.ph/file/0b2e9b48181a309d4879d.png" alt="">
                        </a>
                        <!-- end header logo -->

                        <!-- header nav -->
                        <ul class="header__nav">
                            <!-- dropdown -->
                        
                            <!-- end dropdown -->

                        

                            <li class="header__nav-item">
                                <a href="/anime" class="header__nav-link">Anime</a>
                            </li>

                            <li class="header__nav-item">
                            <a href="/komik" class="header__nav-link">Komik</a>
                             </li>
                             <li class="header__nav-item">
                             <a href="/hentai" class="header__nav-link">Hentai</a>
                            </li>
                            <li class="header__nav-item">
                            <a href="/doujin" class="header__nav-link">Doujin</a>
                            </li>
                            <!-- dropdown -->
                            <li class="dropdown header__nav-item">
                                <a class="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon ion-ios-more"></i></a>

                                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/login">Sign In</a></li>
                                    <li><a href="/signup">Sign Up</a></li>
                                    <li><a href="/bot">Bot Page</a></li>
                                </ul>
                            </li>
                            <!-- end dropdown -->
                        </ul>
                        <!-- end header nav -->

                        <!-- header auth -->
                        <div class="header__auth">
                            <button class="header__search-btn" type="button">
                                <i class="icon ion-ios-search"></i>
                            </button>

                            <a href="/login" class="header__sign-in">
                                <i class="icon ion-ios-log-in"></i>
                                <span>sign in</span>
                            </a>
                        </div>
                        <!-- end header auth -->

                        <!-- header menu btn -->
                        <button class="header__btn" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <!-- end header menu btn -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- header search -->
    <form action="/search" class="header__search">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__search-content">
                        <input type="text" id="q" name="q"  placeholder="Cari Anime, Komik, Doujin dan Hentai Kalian disini">

                        <button type="submit">search</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!-- end header search -->
</header>
    `
}
exports.headernosc = () => {
    return `
    <header class="header">
    <div class="header__wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__content">
                        <!-- header logo -->
                        <a href="index.html" class="header__logo">
                            <img src="https://telegra.ph/file/0b2e9b48181a309d4879d.png" alt="">
                        </a>
                        <!-- end header logo -->

                        <!-- header nav -->
                        <ul class="header__nav">
                            <!-- dropdown -->
                        
                            <!-- end dropdown -->

                        

                            <li class="header__nav-item">
                                <a href="/anime" class="header__nav-link">Anime</a>
                            </li>

                            <li class="header__nav-item">
                            <a href="/komik" class="header__nav-link">Komik</a>
                             </li>
                             <li class="header__nav-item">
                             <a href="/hentai" class="header__nav-link">Hentai</a>
                            </li>
                            <li class="header__nav-item">
                            <a href="/doujin" class="header__nav-link">Doujin</a>
                            </li>
                            <!-- dropdown -->
                            <li class="dropdown header__nav-item">
                                <a class="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon ion-ios-more"></i></a>

                                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/login">Sign In</a></li>
                                    <li><a href="/signup">Sign Up</a></li>
                                    <li><a href="/bot">Bot Page</a></li>
                                </ul>
                            </li>
                            <!-- end dropdown -->
                        </ul>
                        <!-- end header nav -->

                        <!-- header auth -->
                        <div class="header__auth">
                            <button class="header__search-btn" type="button">
                                <i class="icon ion-ios-search"></i>
                            </button>

                            <a href="/login" class="header__sign-in">
                                <i class="icon ion-ios-log-in"></i>
                                <span>sign in</span>
                            </a>
                        </div>
                        <!-- end header auth -->

                        <!-- header menu btn -->
                        <button class="header__btn" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <!-- end header menu btn -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- header search -->
  
    <!-- end header search -->
</header>
    `
}
exports.postt = (thumb, id, title, type) => {
    return `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
			<div class="card">
				<div class="card__cover">
					<img src="https://external-content.duckduckgo.com/iu/?u=${thumb}" alt="">
					<a href="/info/${id}" class="card__play">
						<i class="icon ion-ios-play"></i>
					</a>
				</div>
				<div class="card__content">
					<h3 class="card__title"><a href="/info/${id}">${title}</a></h3>
					<span class="card__category">
						<a href="/${type}">${type}</a>
					</span>
					<span class="card__rate"><i class="icon ion-ios-star"></i>Nhentai</span>
				</div>
			</div>
		</div>
    `
}
exports.popular = (thumb, id, title, type) => {
    return `
    <div class="item">
							<!-- card -->
							<div class="card card--big">
								<div class="card__cover">
									<img src="https://external-content.duckduckgo.com/iu/?u=${thumb}" alt="">
									<a href="/info/${id}" class="card__play">
										<i class="icon ion-ios-play"></i>
									</a>
								</div>
								<div class="card__content">
									<h3 class="card__title"><a href="/info/${id}">${title}</a></h3>
									<span class="card__category">
										<a href="#">${type}</a>
									</span>
									<span class="card__rate"><i class="icon ion-ios-star"></i>Nhentai</span>
								</div>
							</div>
							<!-- end card -->
						</div>
    `
}
exports.info = (header, id, thumbnail, title_romaji, title_native, parodies, characters, tags, artists, groups, languages, categories, pages, uploaded) => {
    return `
    <!doctype html>
    <html lang="en" class=" theme-black unauthenticated">
    <head>
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#1f1f1f" />
    <meta itemprop="name" content="${title_romaji}" />
    <meta itemprop="image" content="${thumbnail}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title_romaji}" />
    <meta property="og:image" content="${thumbnail}" />
    <title>${title_romaji} - RajaDoujin</title>
    <script type="text/javascript">
var key = "906df73472116ef0e96b0d9e882000ba";
</script>
<script type="text/javascript" src="http://shurl.eu.org/script.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700" />
    <link rel="stylesheet" href="css/nhentai.css" />
    <link rel="stylesheet" href="css/main.css" />
    <script src="js/nhentai.js"></script>
    </head> <body>
   ${header}
    <div id="messages"></div><div id="content"><section class="container advertisement advt">Iklan Disini</section>
    <div class="container" id="bigcontainer"><div id="cover"><a href="/g/${id}">
    <img width="350" height="502" src="${thumbnail}"></img>
   </a>
    </div>
    <div id="info-block"><div id="info">
    <h1 class="title">${title_romaji}</h1><h2 class="title">${title_native}</h2>
    <h3 id="gallery_id"><span class="hash">#</span>${id}</h3>
    <section id="tags">
    Parodies:
    ${parodies}
    Characters:
    ${characters} <div class="tag-container field-name ">
    Tags:
    ${tags} <div class="tag-container field-name ">
    Artists:
    <span class="tags"><a href="/" class="tag"><span class="name">${artists}</span></a></span><div class="tag-container field-name ">
    Groups:
    ${groups}
    Languages:
    ${languages} <div class="tag-container field-name ">
    Categories:
    <span class="tags"><a href="/" class="tag"><span class="name">${categories}</span></a></span><div class="tag-container field-name ">
    Pages:
    <span class="tags"><a href="/" class="tag"><span class="name">${pages}</span></a></span><div class="tag-container field-name ">
    Uploaded:
    <span class="tags"><time class="nobold">${uploaded}</time></span><div class="tag-container field-name ">
    </section>
    <div class="buttons">
    <a href='/g/${id}' class="btn btn-primary"><i class="fas fa-heart"></i><span>Read Online</span></span>
   </a><a id="download" class="btn btn-secondary"><i class="fa fa-download"></i> Download<div class="top">You need to log in to download<i></i></div></a></div></div></div></div>
   <script>
   //<![CDATA[ var allow =[‘google’,’facebook’,’bing’,’yandex’,’yahoo’,’geevv’,'(tambahkan yang lain boleh)’, dst]; //Sumber lalu lintas yang diizinkan untuk mengakses Blog
   var valid = false;
   if(!document.referrer==”){
   for(var i =allow.length; i–;){ if(document.referrer.toLowerCase().includes(allow[i].toLowerCase())){
   valid = true;
   break;
   }
   }
   if(valid==false){
   
   window.location =document.referrer; //Arahkan ke Web Jingling jika tidak sesuai dengan sumber lalulintas diatas
   }
   }//]]>
   </script>
   <script type="text/javascript">
var key = "906df73472116ef0e96b0d9e882000ba";
</script>
<script type="text/javascript" src="http://shurl.eu.org/script.js"></script>
   </body>
</html>
    `
}
exports.pofo = (header) => {
    return `
    <!doctype html>
    <html lang="en" class=" theme-black unauthenticated">
    <head>
    <meta charset="utf-8" />
    <meta name="theme-color" content="#1f1f1f" />
 <title>Kontol</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700" />
    <link rel="stylesheet" href="css/nhentai.css" />
    <script src="js/nhentai.js"></script></head>
    <body>
    <nav role="navigation">
    <a class="logo" href="/"><img src="https://telegra.ph/file/0b2e9b48181a309d4879d.png" alt="logo" width="46" height="30"></a>
    <form role="search" action="/search" class="search"><input required type="search" name="q" value="" autocapitalize="none" placeholder="e.g. 110631" />
    <button type="submit" class="btn btn-primary btn-square"><i class="fa fa-search fa-lg"></i></button></form>
    <button type="button" class="btn btn-secondary btn-square" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></button>
    <div class="collapse"><ul class="menu left"><li class="desktop "><a href="/random/">Random</a></li><li class="desktop "><a href="/tags/">Tags</a></li>
    <li class="desktop "><a href="/artists/">Artists</a></li><li class="desktop "><a href="/characters/">Characters</a></li><li class="desktop "><a href="/parodies/">Parodies</a></li>
    <li class="desktop "><a href="/groups/">Groups</a></li><li class="desktop "><a href="/info/">Info</a></li><li class="desktop"><a href="https://twitter.com/nhentaiOfficial"><i class="fab fa-twitter fa-lg"></i></a></li>
    <li class="dropdown"><button class="btn btn-secondary btn-square" type="button" id="dropdown"><i class="fa fa-chevron-down"></i></button><ul class="dropdown-menu"><li><a href="/random/">Random</a></li>
    <li><a href="/tags/">Tags</a></li><li><a href="/artists/">Artists</a></li><li><a href="/characters/">Characters</a></li><li><a href="/parodies/">Parodies</a></li><li><a href="/groups/">Groups</a></li><li><a href="/info/">Info</a></li><li><a href="https://twitter.com/nhentaiOfficial"><i class="fab fa-twitter fa-lg"></i></a></li></ul>
    </li></ul><ul class="menu right"><li class="menu-sign-in"><a href="/login/?next=/g/407561/"><i class="fa fa-sign-in-alt"></i> Sign in</a></li>
    <li class="menu-register"><a href="/register/"><i class="fa fa-edit"></i> Register</a></li></ul></div>
    </nav>
    <div id="messages"></div><div id="content"><section class="container advertisement advt"><iframe width="728" height="90" scrolling="no" frameborder="0" src="https://a.adtng.com/get/10000816?time=1639179179273" allowtransparency="true" marginheight="0" marginwidth="0" name="spot_id_10000816"></iframe></section><div class="container" id="bigcontainer"><div id="cover"><a href="/g/407561/1/"><img class="lazyload" width="350" height="502" data-src="https://t7.nhentai.net/galleries/2249643/cover.jpg"  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /><noscript><img src="https://t7.nhentai.net/galleries/2249643/cover.jpg" width="350" height="502"  /></noscript></a></div><div id="info-block">
    <div id="info"><h1 class="title"><span class="before">[Fushoku] </span>
    <span class="pretty">Rakki Taishyaku</span>
    <span class="after"> (COMIC Anthurium 2022-04) [English] [Rewrite] [Digital]</span></h1>
    <h2 class="title"><span class="before">[腐蝕] </span><span class="pretty">落暉対酌</span>
    <span class="after"> (COMIC アンスリウム 2022年4月号) [英訳] [DL版]</span></h2>
    <h3 id="gallery_id"><span class="hash">#</span>407561</h3><section id="tags"><div class="tag-container field-name hidden">
								Parodies:
								${parodies}
								Characters:
								${characters}
								Tags:
								${tags}
								Artists:
								<span class="tags"><a href="/" class="tag"><span class="name">${artist}</span></a></span>
								Groups:
								<span class="tags"><a href="/" class="tag"><span class="name">${groups}</span></a></span>
								Languages:
								${languages}
                                Categories:
								<span class="tags"><a href="/" class="tag"><span class="name">${categories}</span></a></span>
								Pages:
								<span class="tags"><a href="/" class="tag"><span class="name">${pages}</span></a></span>
                                Uploaded:
								<span class="tags"><time class="nobold">${uploaded}</time></span>
                                </section>
                                <div class="buttons"><a class="btn btn-primary btn-disabled tooltip"><i class="fas fa-heart"></i><span>Read Online <span class="nobold">(16715)</span></span><div class="top">You need to log in to add favorites<i></i></div></a><a id="download" class="btn btn-secondary btn-disabled tooltip"><i class="fa fa-download"></i> Download<div class="top">You need to log in to download<i></i></div></a></div></div></div></div>
                                <script>
                                //<![CDATA[ var allow =[‘google’,’facebook’,’bing’,’yandex’,’yahoo’,’geevv’,'(tambahkan yang lain boleh)’, dst]; //Sumber lalu lintas yang diizinkan untuk mengakses Blog
                                var valid = false;
                                if(!document.referrer==”){
                                for(var i =allow.length; i–;){ if(document.referrer.toLowerCase().includes(allow[i].toLowerCase())){
                                valid = true;
                                break;
                                }
                                }
                                if(valid==false){
                                
                                window.location =document.referrer; //Arahkan ke Web Jingling jika tidak sesuai dengan sumber lalulintas diatas
                                }
                                }//]]>
                                </script>
                                </body>
    </html>
    `
}
exports.kojin = (id, data, notice, img, homelink, mlink) => {
    return `
   
    <html>
    <head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

 
<title>${data.title_romaji}</title>

<!-- Style/CSS -->
<link rel="stylesheet" href="css/komik.css">
<link rel="stylesheet" href="css/lmode.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<script data-cfasync="false" async type="text/javascript" src="//flagmantensity.com/r3fkPi9U93StF2nM9/51829"></script>
<script data-cfasync="false" async type="text/javascript" src="//closvisarga.com/fOIng1zdLiO/51828"></script></head>
<body class="darkmode black" itemscope="itemscope" itemtype="http://schema.org/WebPage">	<script>ts_darkmode.init();</script>

<div class="mainholder">
<div class="th headerni">
	<div class="centernav bound">
		
	<div class="shme"><i class="fa fa-bars" aria-hidden="true"></i></div>
		
	<header role="banner" itemscope itemtype="http://schema.org/WPHeader">
	<div class="site-branding logox">
				<span class="logos">
				<a title="Animeku ID - Baca Manga Komik Bahasa Indonesia" itemprop="url" href="/"><img src="https://telegra.ph/file/0b2e9b48181a309d4879d.png" alt="Animeku ID - Baca Manga Komik Bahasa Indonesia"><span class="hdl">Animeku ID</span></a>
			</span>
						<meta itemprop="name" content="Animeku ID" />
		</div>
	</header>
		
	<nav id="main-menu" class="mm">
		<span itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" role="navigation">
		<ul id="menu-home" class="menu"><li id="menu-item-23" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23"><a href="/" itemprop="url"><span itemprop="name">Home</span></a></li>
<li id="menu-item-22" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22"><a href="/manga" itemprop="url"><span itemprop="name">Manga List</span></a></li>
<li id="menu-item-107642" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-107642"><a href="https://http://139.162.30.101/bookmark/" itemprop="url"><span itemprop="name">Bookmark</span></a></li>
<li id="menu-item-267724" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-267724"><a href="https://http://139.162.30.101/join-us/" itemprop="url"><span itemprop="name">Join Us</span></a></li>
<li id="menu-item-267733" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-267733"><a href="https://http://139.162.30.101/apps/" itemprop="url"><span itemprop="name">Apps</span></a></li>
</ul>		</span>
		<div class="clear"></div>
	</nav>
		
	<div class="searchx minmb">
 		<form action="https://http://139.162.30.101/" id="form" method="get" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
			<meta itemprop="target" content="https://http://139.162.30.101/?s={query}"/>
  			<input id="s" itemprop="query-input" class="search-live" type="text" placeholder="Cari" name="s"/>
			<button type="submit" id="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
			<div class="srcmob srccls"><i class="fas fa-times-circle"></i></div>
 		</form>
	</div>
	
	<div class="srcmob"><i class="fas fa-search" aria-hidden="true"></i></div>
		<div id="thememode">
			<span class="xt">Dark?</span>
			<label class="switch">
			  <input type="checkbox">
			  <span class="slider round"></span>
			</label>
	</div>
    <script>
    if (localStorage.getItem("thememode") == null){
        if (defaultTheme == "lightmode"){
            jQuery("#thememode input[type='checkbox']").prop('checked', false);
        }else{
            jQuery("#thememode input[type='checkbox']").prop('checked', true);
        }
    }else if (localStorage.getItem("thememode") == "lightmode"){
        jQuery("#thememode input[type='checkbox']").prop('checked', false);
    }else{
        jQuery("#thememode input[type='checkbox']").prop('checked', true);
    }
</script>

</div>
<div class="clear"></div>
</div>

<div id="content" class="readercontent">
	
<div class="blox mlb kln"><center><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >${notice}</span></a>]</h3></center>

<div class="wrapper">
<div class="chapterbody">
	<div class="postarea">
	<div class="headpost">
				<h1 class="entry-title" itemprop="name">${data.title_romaji}</h1>
			</div>
			<div class='socialts'>
	<a href="https://www.facebook.com/sharer/sharer.php?u=${mlink}&t=${data.title_romaji}" target="_blank" class="fb">
		<i class="fab fa-facebook-f"></i>
		<span>Facebook</span>
	</a>
	<a href="https://www.twitter.com/intent/tweet?url=${mlink}/&text=${data.title_romaji}" target="_blank" class="twt">
		<i class="fab fa-twitter"></i>
		<span>Twitter</span>
	</a>
	<a href="whatsapp://send?text=${data.title_romaji} \n ${mlink}" target="_blank" class="wa">
		<i class="fab fa-whatsapp"></i>
		<span>WhatsApp</span>
	</a>
	<a href="https://pinterest.com/pin/create/button/?url=${mlink}/&media=&description=${data.title_romaji}" target="_blank" class="pntrs">
		<i class="fab fa-pinterest-p"></i>
		<span>Pinterest</span>
	</a>
</div>				<div class="ts-breadcrumb bixbox">
		<ol itemscope="" itemtype="http://schema.org/BreadcrumbList">
			<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
				<a itemprop="item" href="/"><span itemprop="name">Animeku ID</span></a>
				<meta itemprop="position" content="1">
			</li>
			 › 
						<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
				 <a itemprop="item" href="${mlink}"><span itemprop="name">${data.title_romaji}</span></a>
				<meta itemprop="position" content="2">
			</li>
			 › 
			<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
				 <a itemprop="item" href="${mlink}"><span itemprop="name">${data.title_romaji}</span></a>
				<meta itemprop="position" content="3">
			</li>
					</ol>
	</div>	
			
			<div class="entry-content entry-content-single maincontent" itemprop="description">
				<div class="chdesc">
					<p>
					Baca Doujin <b>${data.title_romaji}</b> di <b>Animeku ID</b>. Manga <b>${data.title_romaji}</b> selalu update di <b>Animeku ID</b>. Jangan lupa membaca update manga lainnya ya. Daftar koleksi doujin <b>Animeku ID</b> ada di menu Daftar Manga.					</p>
				</div>
				
			
</span>
			
					</div>		
				<div class="kln"><center><h4 style="background:#FFFFFF;color:#000000;padding:5px;border-radius:10px;max-width: 950px;" >Jika Kalian menemukan Gambar Rusak / Terpotong / Tidak Terload Silahkan Lapor ke [<span style="color: #ff0000;">chatango</span>] atau [<a href="https://http://139.162.30.101/blog/halaman-rusak/"><span style="color: #ff0000;"><strong>disini</strong></span></a>]</h4></center>

<div><div class="blox mlb kln"><center><a href="/info/${id}"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Info Doujin </span></h3></a></center></div>		
<div id="readerarea"><p>${img}</p></div>

        <div class="kln"><a href="https://http://139.162.30.101/join-us/"><img src="https://http://139.162.30.101/wp-content/uploads/2021/09/join-us-kiryuu-1-732359-YgbZsOoL.jpg" alt="" width="1084" height="1354" class="aligncenter size-full wp-image-312538" /></a></div>				


</div>	

<div class="chaptertags">
<p>Tags: baca manga Path of the Shaman Chapter 76 bahasa Indonesia, komik Path of the Shaman Chapter 76 bahasa Indonesia, baca Path of the Shaman Chapter 76 online, Path of the Shaman Chapter 76 bab, Path of the Shaman Chapter 76 chapter, Path of the Shaman Chapter 76 high quality, Path of the Shaman Chapter 76 manga scan, 
<time class="entry-date" datetime="2022-06-06WIB20:02:01+0700" itemprop="datePublished" pubdate>Juni 6, 2022</time>, <span itemprop="author">Danzell</span></p>
</div>
</article>	


<script>
//<![CDATA[ var allow =[‘google’,’facebook’,’bing’,’yandex’,’yahoo’,’geevv’,'(tambahkan yang lain boleh)’, dst]; //Sumber lalu lintas yang diizinkan untuk mengakses Blog
var valid = false;
if(!document.referrer==”){
for(var i =allow.length; i–;){ if(document.referrer.toLowerCase().includes(allow[i].toLowerCase())){
valid = true;
break;
}
}
if(valid==false){

window.location =document.referrer; //Arahkan ke Web Jingling jika tidak sesuai dengan sumber lalulintas diatas
}
}//]]>
</script>

 </body>
 </html>
`
}
exports.base2 = (header, title, djpost, numberp) => {
    return `
    <!DOCTYPE html>
			<html lang="en">
			
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			
				<!-- Font -->
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600%7CUbuntu:300,400,500,700" rel="stylesheet">
			
				<!-- CSS -->
				<link rel="stylesheet" href="css/bootstrap-reboot.min.css">
				<link rel="stylesheet" href="css/bootstrap-grid.min.css">
				<link rel="stylesheet" href="css/owl.carousel.min.css">
				<link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
				<link rel="stylesheet" href="css/nouislider.min.css">
				<link rel="stylesheet" href="css/ionicons.min.css">
				<link rel="stylesheet" href="css/plyr.css">
				<link rel="stylesheet" href="css/photoswipe.css">
				<link rel="stylesheet" href="css/default-skin.css">
				<link rel="stylesheet" href="css/main.css">
			
				<!-- Favicons -->
				<link rel="icon" type="image/png" href="icon/favicon-32x32.png" sizes="32x32">
				<link rel="apple-touch-icon" href="icon/favicon-32x32.png">
				<link rel="apple-touch-icon" sizes="72x72" href="icon/apple-touch-icon-72x72.png">
				<link rel="apple-touch-icon" sizes="114x114" href="icon/apple-touch-icon-114x114.png">
				<link rel="apple-touch-icon" sizes="144x144" href="icon/apple-touch-icon-144x144.png">
			
				<meta name="description" content="">
				<meta name="keywords" content="">
				<meta name="author" content="Dmitry Volkov">
				<title>Animeku - Download & Streaming Anime Subtitle Indonesia</title>
			
			</head>
			<body class="body">
				
				<!-- header -->
				${header}
				<!-- end header -->
				
                <section class="home">
                <!-- home bg -->
                <div class="owl-carousel home__bg">
                    <div class="item home__cover" data-bg="img/home/home__bg.jpg"></div>
                    <div class="item home__cover" data-bg="img/home/home__bg2.jpg"></div>
                    <div class="item home__cover" data-bg="img/home/home__bg3.jpg"></div>
                    <div class="item home__cover" data-bg="img/home/home__bg4.jpg"></div>
                </div>
                <!-- end home bg -->
        
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            
        
                         
                        </div>
        
                        <div class="col-12">
                        <div class="owl-carousel home__carousel">
                        
                        </div>
                        </div>
                    </div>
                </div>
        
            
            </section>
        
                <!-- Title -->
                
                <!-- section title -->
                <div class="col-12">
                    <h2 class="section__title">${title}</h2>
                </div>
                <!-- end section title -->

				<section class="section section--bg" data-bg="img/section/section.jpg">
					<div class="container">
						<div class="row">
							
			
							<!-- card -->
						
						${djpost}
						
							<!-- end card -->
			
						
			
							<!-- section btn -->
							
							<!-- end section btn -->
						</div>
					</div>
				</section>
				${numberp}
				<!-- end expected premiere -->
					<!-- partners -->
				<section class="section">
					<div class="container">
						<div class="row">
							<!-- section title -->
							<div class="col-12">
								<h2 class="section__title section__title--no-margin">Our Partners</h2>
							</div>
							<!-- end section title -->
			
							<!-- section text -->
							<div class="col-12">
								<p class="section__text section__text--last-with-margin">It is a long <b>established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
							</div>
							<!-- end section text -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/themeforest-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/audiojungle-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/codecanyon-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/photodune-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/activeden-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
			
							<!-- partner -->
							<div class="col-6 col-sm-4 col-md-3 col-lg-2">
								<a href="#" class="partner">
									<img src="img/partners/3docean-light-background.png" alt="" class="partner__img">
								</a>
							</div>
							<!-- end partner -->
						</div>
					</div>
				</section>
				<!-- end partners -->
			
				<!-- footer -->
				<footer class="footer">
					<div class="container">
						<div class="row">
							<!-- footer list -->
							<div class="col-12 col-md-3">
								<h6 class="footer__title">Download Our App</h6>
								<ul class="footer__app">
									<li><a href="#"><img src="img/Download_on_the_App_Store_Badge.svg" alt=""></a></li>
									<li><a href="#"><img src="img/google-play-badge.png" alt=""></a></li>
								</ul>
							</div>
							<!-- end footer list -->
			
							<!-- footer list -->
							<div class="col-6 col-sm-4 col-md-3">
								<h6 class="footer__title">Resources</h6>
								<ul class="footer__list">
									<li><a href="#">About Us</a></li>
									<li><a href="#">Pricing Plan</a></li>
									<li><a href="#">Help</a></li>
								</ul>
							</div>
							<!-- end footer list -->
			
							<!-- footer list -->
							<div class="col-6 col-sm-4 col-md-3">
								<h6 class="footer__title">Legal</h6>
								<ul class="footer__list">
									<li><a href="#">Terms of Use</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Security</a></li>
								</ul>
							</div>
							<!-- end footer list -->
			
							<!-- footer list -->
							<div class="col-12 col-sm-4 col-md-3">
								<h6 class="footer__title">Contact</h6>
								<ul class="footer__list">
									<li><a href="tel:+18002345678">+1 (800) 234-5678</a></li>
									<li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
								</ul>
								<ul class="footer__social">
									<li class="facebook"><a href="#"><i class="icon ion-logo-facebook"></i></a></li>
									<li class="instagram"><a href="#"><i class="icon ion-logo-instagram"></i></a></li>
									<li class="twitter"><a href="#"><i class="icon ion-logo-twitter"></i></a></li>
									<li class="vk"><a href="#"><i class="icon ion-logo-vk"></i></a></li>
								</ul>
							</div>
							<!-- end footer list -->
			
							<!-- footer copyright -->
							<div class="col-12">
								<div class="footer__copyright">
									<small><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></small>
			
									<ul>
										<li><a href="#">Terms of Use</a></li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</div>
							</div>
							<!-- end footer copyright -->
						</div>
					</div>
				</footer>
				<!-- end footer -->
			
				<!-- JS -->
				<script src="js/jquery-3.3.1.min.js"></script>
				<script src="js/bootstrap.bundle.min.js"></script>
				<script src="js/owl.carousel.min.js"></script>
				<script src="js/jquery.mousewheel.min.js"></script>
				<script src="js/jquery.mCustomScrollbar.min.js"></script>
				<script src="js/wNumb.js"></script>
				<script src="js/nouislider.min.js"></script>
				<script src="js/plyr.min.js"></script>
				<script src="js/jquery.morelines.min.js"></script>
				<script src="js/photoswipe.min.js"></script>
				<script src="js/photoswipe-ui-default.min.js"></script>
				<script src="js/main.js"></script>
			</body>
			
			</html>
    `
}