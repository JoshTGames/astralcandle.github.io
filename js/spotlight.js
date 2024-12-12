functions.push(generateSpotlight);

function generateSpotlight(data){
    let spotlight = data[3];
    // Generate Tab Info
    element = document.querySelector(".spotlight");    
    element.innerHTML += `
        <div class="spotlight-box">
            <div class="spotlight-background">
                <img src="/content\\spotlight\\${spotlight.bgimage}">
            </div>
            <span class="spotlight-visual">                
                <div class="spotlight-icon">
                    <img src="/content\\spotlight\\${spotlight.icon}">
                </div>
                
                <div class="spotlight-info">
                    <h1 class="spotlight-title">${spotlight.name}</h1>
                    <h2 class="spotlight-description">${spotlight.description}</h2>
                </div>
            </span>
        </div>
    `;
}