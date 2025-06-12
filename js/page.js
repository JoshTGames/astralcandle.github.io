functions.unshift(generatePage);

function generatePage(data){
    // Generate Tab Info
    element = document.querySelector(".parallax");    
    title = document.querySelector(".page-title");  

    let counter = 0;
    for(counter; counter < data[1].length; counter++){
        if(data[1][counter].name == title.innerHTML){ break; }
    }
    console.log(counter);
    element.innerHTML += `
        <div class="header-info">
            <span class="title-parent"><h1 class="title">${title.innerHTML}</h1></span>
            <h2 id="words">${data[1][counter].description}</h2>
            <img src="/content\\siteimages\\scroll.png?" id="scrollindicator">
        </div>    
    `;
}