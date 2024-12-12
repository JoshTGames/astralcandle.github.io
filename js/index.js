functions.push(generateIndex);

function generateIndex(data){
    // Generate Tab Info
    element = document.getElementById("words");    
    element.innerHTML += `
        ${data[0].words}              
    `;
}