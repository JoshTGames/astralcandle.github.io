functions.unshift(generateParallax);

function generateParallax(data){
    // Generate Tab Info
    elements = document.querySelectorAll(".parallax");    
    elements.forEach(element => {
        element.innerHTML += `
            
            <img src="/content\\siteimages\\parallax\\stars1.png?" class = "star1">
            <img src="/content\\siteimages\\parallax\\constellations.png?" class = "constellations">
            <img src="/content\\siteimages\\parallax\\stars2.png?" class = "star2">
            <img src="/content\\siteimages\\parallax\\stars3.png?" class = "star3">
            <img src="/content\\siteimages\\parallax\\nebula1.png?" class = "nebula1">
            <img src="/content\\siteimages\\parallax\\nebula2.png?" class = "nebula2">       

        `;
    });
}