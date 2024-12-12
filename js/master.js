// Load required json files
let jsonURLs = ['/json/settings.json', '/json/pages.json', '/json/games.json', '/json/spotlight.json'];

let functions = [generateMain];
function runFunctions(){
    Promise.all(jsonURLs.map(url => fetch(url).then(response => response.json())))
    .then(jsons => functions.forEach(f => {
        f(jsons); 
    }))
    .catch(error => console.error('Error:', error));
}
// --

function generateSocials(socialData){
    let socials = ``;
    for(let i = 0; i < socialData.length; i++){
        socials += `
            <a href="https://${socialData[i].url}" target="_blank" rel="noopener noreferrer">
                <img src="/content\\siteimages\\socials\\${socialData[i].icon}" alt="${socialData[i].name}" class="button">
            </a>
        `;
    }
    return socials
}

function generateMain(data){
    // Generate Info
    let settings = data[0];
    element = document.getElementById("head");    
    element.innerHTML += `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href=${settings.favicon}">                  
    `;

    element = document.querySelector(".page-title");
    element.innerHTML = settings.title + " || " + element.innerHTML;
    // ---

    // NAV MENU
    element = document.querySelector(".navbar")
    element.innerHTML = `        
        <li class="navlogo">
            <a href="/" class="navlink">
                <span class="navtext"><img src="">Astral Candle</span>
                <h1 class="navfold">></h1>
            </a>
        </li>
    `;
    let pages = data[1];
    for(let i = 0; i < pages.length; i++){
        if(pages[i].name.toLowerCase() == "games" && data[2].length <= 1){ continue; }
        element.innerHTML += `
            <li class="navitem">
                <a href="/pages\\${pages[i].url}.html" class="navlink">
                    <img src="/content\\siteimages\\pageicons\\${pages[i].icon}">
                    <span class="navtext">${pages[i].name}</span>
                </a>
            </li>
        `;
    }

    // socials
    element = document.getElementById("socials");
    let socials = generateSocials(data[0].socials);
    if(element != null){ element.innerHTML = socials; }

    element = document.querySelector(".wrapper");
    element.innerHTML += `
        <div class="footer">
            <span id="socials">${socials}</span>
            <span class="footermsg">©${settings.sitedob}-${new Date().getFullYear()}. Astral Candle. All Rights Reserved</span>
        </div>
    `;
    // --- footer
}