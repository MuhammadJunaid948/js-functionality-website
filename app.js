

var gameCatogaries = {
    adventure: {
        Rdr2: {
            image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/red-dead-redemption-2-poster.jpg ",
            name: " Red dead Redmeption",
            gametype: "Open world",
            releaseYear: "Oct 2018",
            platfrom: " Pc , Console",
            Available: "Offline"
        },
        Rust: {
            image: "https://static.displate.com/857x1200/displate/2022-12-02/6d71a9bd069276808bdcd895507829e4_5315e09a71c1ab106c6bcccb30571089.jpg",
            name: " Rust",
            gametype: "Open world",
            releaseYear: "Feb 2018",
            platfrom: " Pc , Console",
            Available: "Online"
        },
        Batman: {
            image: "https://static.posters.cz/image/750/posters/batman-arkham-knight-battle-i30087.jpg",
            name: " Batman",
            gametype: "Open world",
            releaseYear: "Jun 2015",
            platfrom: " Pc , Console",
            Available: "Offline"

        },
        GTA: {
            image: "https://m.media-amazon.com/images/I/51MFu2e82VL._AC_UF894,1000_QL80_.jpg",
            name: "GTA 5",
            gametype: "Open world",
            releaseYear: "April 2015",
            platfrom: " Pc , Console",
            Available: "Offline,Online"
        }

    },
    cooperative: {
        Warframe: {
            image: "https://i.redd.it/u490vmrsd5861.jpg",
            name: " War Frame",
            gametype: "Shooter",
            releaseYear: "March 2015",
            platfrom: " Pc , Console",
            Available: "Online"
        },
        ApexLegends: {
            image: "https://i.redd.it/6fe6ba80t6281.jpg",
            name: " Apex legends",
            gametype: "Shooter",
            releaseYear: "Nov  2020",
            platfrom: " Pc , Console",
            Available: "Online"
        },
        Cod: {
            image: "https://static-01.daraz.pk/p/ef602cb63def7c60416de23e6128b7d2.jpg",
            name: " Call of duty Warzone",
            gametype: "Shooter",
            releaseYear: "March 2020",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        }
    },
    fighting: {
        MortalKombat: {
            image: "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2020/11/13/a596dc7c/mortalkombat11ultimate.jpg",
            name: " Mortal Kombat",
            gametype: "Fighting",
            releaseYear: "April 2019",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        }
        ,
        Tekken8: {
            image: "https://m.media-amazon.com/images/M/MV5BZTVjNDZkYTEtODZhYS00NDIwLTk0ZDktZTFmYjQwMDg3NGRkXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
            name: " Tekken 8",
            gametype: "Fighting",
            releaseYear: "Jan  2024",
            platfrom: " Pc , Console",
            Available: "Offline, Online"

        },
        WWE2k23: {
            image: "data:image/jpeg;base64,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",
            name: " WWE 2K23",
            gametype: "Fighting",
            releaseYear: "March 2023",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        }


    },
    Horror: {
        Hunt: {
            image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/HUNT-SHOWDOWN.jpg",
            name: " Hunt",
            gametype: "Open world ",
            releaseYear: "August 2019",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        },
        Dayz: {
            image: "data:image/jpeg;base64,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",
            name: " Dayz",
            gametype: "Survival",
            releaseYear: "Dec 2018",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        },
        Doom: {
            image: "https://static.displate.com/280x392/displate/2021-04-21/3d9d1c41e4a781ff0e6a09fdf980c1ff_bb158dfdaa6a8577459e0fb15ed5ace3.jpg",
            name: "Doom",
            gametype: "Fps",
            releaseYear: "May 2016",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        }

    },
    Racing: {
        ForzaHorizon5: {
            image: "https://m.media-amazon.com/images/I/613pyCuW1VL._AC_UF350,350_QL80_.jpg",
            name: " Forza Horizon 5",
            gametype: "Racing",
            releaseYear: "Nov 2021",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        },
        NfsHeat: {
            image: "https://m.media-amazon.com/images/M/MV5BN2MxMjk0MTMtNTFhYS00ZDkyLWJmN2EtNWZmZGEyNjY0MDE4XkEyXkFqcGdeQXVyMzc1MzYxMjc@._V1_.jpg",
            name: "Nfs Heat",
            gametype: "Racing",
            releaseYear: "Jan 2020",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        },
        Dirt: {
            image: "https://cdn2.steamgriddb.com/grid/e6bd786fa3fd7aa8113704422fe4c9c2.png",
            name: " Dirt 4",
            gametype: "Shooter",
            releaseYear: "Feb 2019",
            platfrom: " Pc , Console",
            Available: "Offline, Online"
        }
    }
}
var main = document.getElementById("main");
var catogary = document.getElementById("catogary");
var game = document.getElementById("game");
catogary.innerHTML += `<option>Select Catogary </option>`
game.innerHTML += `<option>Select Game</option>`


function renderAllGames(){
for (var key in gameCatogaries) {
    catogary.innerHTML += `<option>${key}</option>`
    for (var key1 in gameCatogaries[key]) {
        var object = gameCatogaries[key][key1]
        main.innerHTML += `
                <div class="col-10 col-sm-12 col-md-6 col-lg-3 mb-2">  
                <div class="card" style="width: 18rem;">
                <img src="${object.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${object.name.toUpperCase()}</h5>
                <p class="card-text">${object.releaseYear.toUpperCase()}
                <br />
                ${object.gametype.toUpperCase()}
                <br />
                 ${object.Available.toUpperCase()}
                <br />
                 ${object.platfrom.toUpperCase()}
                </p>
                <a href="#" class="btn btn-danger">Buy Now</a>
                </div>
                </div>
                </div>`
    }

}
}

renderAllGames();

function setgame() {
    game.innerHTML = "";
    game.innerHTML += `<option>Select Game</option>`
    for (var key in gameCatogaries[catogary.value]) {
        game.innerHTML += `<option value = '${key}'>${key}</option>`

    }
}
var gameDetail = document.getElementById('game-detail')

function searchGame() {
    main.innerHTML = "";
    main.style.display = "none";
    gameDetail.style.display = "flex";
    var gameFound = gameCatogaries[catogary.value][game.value];
    gameDetail.innerHTML = `<div class="row main-child g-0">
    <div class="col-md-4 p-4">
      <img src="${gameFound.image || "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/red-dead-redemption-2-poster.jpg "}"class="img-fluid rounded-start search_img" >
    </div>
    <div class="col-md-8 p-4">
      <div class="card-body">
        <h5 class="card-title">${gameFound.name}</h5>
        <p class="card-text">
        ${gameFound.releaseYear.toUpperCase()}
                <br />
                ${gameFound.gametype.toUpperCase()}
                <br />
                 ${gameFound.Available.toUpperCase()}
                <br />
                 ${gameFound.platfrom.toUpperCase()}
                 </p>
                 <a href="#" class="btn btn-danger">Buy Now</a>
      </div>
    </div>
  </div>`
}

function clearSearch(){
    gameDetail.innerHTML = ""

    gameDetail.style.display = "none"
    main.style.display = "flex"
    renderAllGames()

}










