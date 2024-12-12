functions.unshift(generateSpotlight);

function generateSpotlight(data){
    
    let spotlight = data[3];

    let bg = ``;
    if(spotlight.bgvideo != ""){
        bg = `<video autoplay muted loop"><source src="/content\\spotlight\\${spotlight.bgvideo}" type="video/mp4"></video>`;
    }
    else if(spotlight.bgimage != ""){
        bg = `<img src="/content\\spotlight\\${spotlight.bgimage}">`
    }


    // Generate Tab Info
    element = document.querySelector(".spotlight");    
    element.innerHTML += `
        <div class="spotlight-box">
            <div class="spotlight-background">${bg}</div>
            <span class="spotlight-visual">                
                <div class="spotlight-icon">
                    <img src="/content\\spotlight\\${spotlight.icon}">
                </div>
                
                <div class="spotlight-info">
                    <h1 class="spotlight-title">${spotlight.name}</h1>
                    <h2 class="spotlight-description">${spotlight.description}</h2>
                    <a href="${spotlight.buttonurl}" class="spotlight-button">${spotlight.buttonlabel}</a>
                </div>
            </span>
        </div>
    `;
}