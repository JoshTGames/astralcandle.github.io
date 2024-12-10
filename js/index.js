// Load required json files
Promise.all(jsonURLs.map(url => fetch(url).then(response => response.json())))
.then(jsons => generateIndex(jsons))
.catch(error => console.error('Error:', error));
// --

function generateIndex(data){
    // Generate Tab Info
    element = document.getElementById("words");    
    element.innerHTML += `
        ${data[0].words}              
    `;

    element = document.getElementById("socials");
    for(let i = 0; i < data[0].socials.length; i++){
        element.innerHTML+= `
            <a href="https://www.${data[0].socials[i].url}">
                <img src="/content\\siteimages\\socials\\${data[0].socials[i].icon}" alt="${data[0].socials[i].name}" class="button">
            </a>
        `;
    }
}