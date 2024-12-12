functions.unshift(generateIndex);

function generateIndex(data){
    // Generate Tab Info
    element = document.querySelector(".parallax");    
    element.innerHTML += `
        <div class="header-info">
            <span class="title-parent"><img src="/content\\siteimages\\parallax\\logo.png?" class= "title"></span>
            <h1 id="words">${data[0].words}</h1>
            <span id="socials"></span>
            <img src="/content\\siteimages\\scroll.png?" id="scrollindicator">
        </div>    
    `;
}