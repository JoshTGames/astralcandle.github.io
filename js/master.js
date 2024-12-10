// Load required json files
let jsonURLs = ['/json/settings.json'];
Promise.all(jsonURLs.map(url => fetch(url).then(response => response.json())))
.then(jsons => generateMain(jsons))
.catch(error => console.error('Error:', error));
// --

function generateMain(data){
    // Generate Info
    element = document.getElementById("head");    
    element.innerHTML += `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href=${data[0].favicon}">                  
    `;

    element = document.querySelector(".page-title");
    element.innerHTML = data[0].title + " || " + element.innerHTML;
    // ---
}