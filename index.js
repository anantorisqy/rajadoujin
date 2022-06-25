// Import Function
const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')
const nanaApi = require('nana-api');
const countapi = require('countapi-js');
const {
	JSDOM: JSDOM
} = require("jsdom");

//WA Setup


(async () => {

//Call Function
const app = express()
const nana = new nanaApi()
const web = require('./app');
const { header } = require('express/lib/request');
//Custom Function
const home = ''
const custom = {
	"User-Agent": "Mozilla/5.0 (Linux; Android 11; Redmi 3S/3X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36"
};
let post = ``
let populer = ''
countapi.visits('global').then((result) => {
    console.log(`Sukses Get Api From Nana\nTotal Visitor: ${result.value}`);
    
    
    
  });
//Express Function
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static(path.join(__dirname, 'assets')))
app.use('/pages', express.static(path.join(__dirname, 'assets')))
app.use('/g', express.static(path.join(__dirname, 'assets')))
app.use('/info', express.static(path.join(__dirname, 'assets')))
app.use('/search', express.static(path.join(__dirname, 'assets')))
//Homepage
app.get('/', (async (req, res) => {
    try {
        let host = await nana.homepage(1)
        let host2 = await nana.popular()
		let doujin = host.results
        let popular = host2.results
		let type = `doujin`
        let header = web.header()
        countapi.visits('global').then((result) => {
            console.log(`+1 Visitor(${result.value})[Homepage]`);
    
          });
        for (let i = 0; i < popular.length; i++){
            let thumb = popular[i].thumbnail.s
            let id = popular[i].id
            let title = popular[i].title
            populer += `
            ${web.popular(thumb, id, title, type)}
            `
        }
		for (let i = 0; i < doujin.length; i++){
            let thumb = doujin[i].thumbnail.s
            let id = doujin[i].id
            let title = doujin[i].title
			post += `
			${web.postt(thumb, id, title, type)}
			`
		}
    res.send(web.base(header, populer, post))

} catch (e) {
    console.log(e)
    let errorz = fs.readFileSync('./assets/html/404.html', 'utf8')
res.send(errorz)
}
}))
app.get('/search', (async (req, res) => {
    try {
		var q = req.query.q
		let pages = req.query.pages
		let pgs = ``
		if (!pages){
			pgs += `1`
		} else {
			pgs += `${pages}`
		}

        let header = web.header()
        let title = `Search: ${q}`
		let pnm = parseInt(pgs)
		let pdoujin = await nana.search(q, pnm)
		let doujin = pdoujin.results
		let nnumber = parseInt(pnm-1)
		let pnumber = parseInt(pnm+1)
		console.log(pnumber)
		let numberp = `<div class="blox mlb kln"><center><a href="/search?q=${q}&pages=${nnumber}"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Prev << </span></h3></a></center>				
		<div class="blox mlb kln"><center><a href="/search?q=${q}&pages=${pnumber}"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Next >> </span></h3></a></center>
		`
		let type = `doujin`
		let djpost = ``
		for (let i = 0; i < doujin.length; i++){
			djpost += `
          
			<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
			<div class="card">
				<div class="card__cover">
					<img src="https://external-content.duckduckgo.com/iu/?u=${doujin[i].thumbnail.s}" alt="">
					<a href="/info/${doujin[i].id}" class="card__play">
						<i class="icon ion-ios-play"></i>
					</a>
				</div>
				<div class="card__content">
					<h3 class="card__title"><a href="/info/${doujin[i].id}">${doujin[i].title}</a></h3>
					<span class="card__category">
						<a href="/${type}">${type}</a>
					</span>
					<span class="card__rate"><i class="icon ion-ios-star"></i>Nhentai</span>
				</div>
			</div>
		</div>
			`
		}
        console.log(djpost)
		res.send(web.base2(header, title, djpost, numberp))
       
	} catch (e) {
		console.log(e)
    res.send({status: 404, result: 'error'})
	}
  }))
app.get('/info/*', (async (req, res) => {
    try {
        var id = req.params[0];
        let server = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${id}?apikey=noer`)
        let data = server.data.result
        let thumbnail = data.image[0]
        let title_romaji = data.title_romaji
        let title_native = data.title_native
        let parod = data.info.parodies
        let chara = data.info.characters
        let tgs = data.info.tags
        let artists = data.info.artists
        let grp = data.info.groups
        let lang = data.info.languages
        let categories = data.info.categories
        let pages = data.info.pages
        let uploaded = data.info.uploaded
        let header = web.headernosc()
        let characters = ``
        let tags = ``
        let languages = ``
        let parodies = ``
        let groups = ``
        countapi.visits('global').then((result) => {
            console.log(`+1 Visitor(${result.value})[Info]`);
          });
       
        if (!grp){
            groups += `<span class="tags"><a href="/" class="tag"><span class="name">ga ada info</span></a></span><div class="tag-container field-name ">`
        } else {
            groups += `<span class="tags"><a href="/" class="tag"><span class="name">${groups}</span></a></span><div class="tag-container field-name ">`
        }
        if (!parod){
            parodies += `<span class="tags"><a href="/" class="tag"><span class="name">ga ada info</span></a></span><div class="tag-container field-name ">`
        } else {
            parodies += `<span class="tags"><a href="/" class="tag"><span class="name">${parodies}</span></a></span><div class="tag-container field-name ">`
        }
        if (!chara){
            characters += `<span class="tags"><a href="/" class="tag"><span class="name">ga ada info</span></a></span><div class="tag-container field-name ">`
        } else {
        for (let i = 0; i < chara.length; i++){
            characters += `
            <span class="tags"><a href="/" class="tag"><span class="name">${chara[i]}</span></a></span>`
        }
    }
   
        if (!tgs){
            tags += `<span class="tags"><a href="/" class="tag"><span class="name">ga ada info</span></a></span><div class="tag-container field-name ">`
        } else {
        for (let i = 0; i < tgs.length; i++){
            tags += `<span class="tags"><a href='/' class='tag'><span class="name">${tgs[i]}</span></a></span> `   
        }
    }
    if (!lang){
        languages += `<span class="tags"><a href="/" class="tag"><span class="name">ga ada info</span></a></span><div class="tag-container field-name ">`
    } else {
        for (let i = 0; i < lang.length; i++){
            languages += `<span class="tags"><a href="/" class="tag"><span class="name">${lang[i]}</span></a></span>`
        }
    }
        res.send(web.info(header, id, thumbnail, title_romaji, title_native, parodies, characters, tags, artists, groups, languages, categories, pages, uploaded))
    } catch (e) {
        console.log(e)
        let errorz = fs.readFileSync('./assets/html/404.html', 'utf8')
    res.send(errorz)
    }
    }))
app.get('/g/*', (async (req, res) => {
        try {
            var id = req.params[0];
            let e = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${id}?apikey=noer`)
            let data = e.data.result
            let notice = `Website Masih tahap pembangunan, maaf jika banyak bug`
            let homelink = 'http://139.162.30.101'
            let mlink = `http://139.162.30.101/g/${id}`
            let img = ``
            let gbr = data.image
            countapi.visits('global').then((result) => {
                console.log(`+1 Visitor(${result.value})[Read]`);
              });
            for (let i = 0; i < gbr.length; i++) {
                img += `<img src="${gbr[i]}"></img>`
            }
            let html = `${web.kojin(id, data, notice, img,  homelink, mlink)}`
            res.send(html)
        } catch (e) {
            console.log(e)
        res.send({status: 404, result: 'error'})
        }
      }))
app.get('/pages/*', (async (req, res) => {
        try {
            var id = req.params[0];
            let pdoujin = await nana.homepage(id)
            let doujin = pdoujin.results
            let header = web.header()
            let type = `doujin`
            let djpost = ``
            for (let i = 0; i < doujin.length; i++){
                djpost += `
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                <div class="card">
                    <div class="card__cover">
                        <img src="https://external-content.duckduckgo.com/iu/?u=${doujin[i].thumbnail.s}" alt="">
                        <a href="/g/${doujin[i].id}" class="card__play">
                            <i class="icon ion-ios-play"></i>
                        </a>
                    </div>
                    <div class="card__content">
                        <h3 class="card__title"><a href="/g/${doujin[i].id}">${doujin[i].title}</a></h3>
                        <span class="card__category">
                            <a href="/${type}">${type}</a>
                        </span>
                        <span class="card__rate"><i class="icon ion-ios-star"></i>Nhentai</span>
                    </div>
                </div>
            </div>
                `
            }
            let title = `Pages - ${id}`
            let pnm = parseInt(id)
            let nnumber = parseInt(pnm-1)
            let pnumber = parseInt(pnm+1)
            console.log(pnumber)
            let numberp = `<div class="blox mlb kln"><center><a href="${nnumber}"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Prev << </span></h3></a></center>				
            <div class="blox mlb kln"><center><a href="/pages/${pnumber}"><h3 style="background:#6f88df;color:#ffffff;padding:5px;border-radius:10px;max-width: 950px;" >Next >> </span></h3></a></center>
            `
          res.send(web.base2(header, title, djpost, numberp))
        } catch (e) {
            console.log(e)
        res.send({status: 404, result: 'error'})
        }
      }))
app.get('/login', function(req,res){
    let data = fs.readFileSync('./assets/html/signin.html', 'utf8')
    res.send(data)
})
app.get('/register', function(req,res){
        let data = fs.readFileSync('./assets/html/signup.html', 'utf8')
        res.send(data)
})
app.listen(80, function(){
    console.log(`Localhost:8000`)
  });
  
  module.exports = app;
})()