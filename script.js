function loaded(){
    var loader = document.getElementById("loader");
    var loaderImage = document.getElementById("loaderImage");
    var loadedBefore = document.getElementById("loadedBefore");
    var box = document.getElementById("box");

    var allItems = document.querySelector(".loadedAfter");

    loaderImage.animate(
        [
            { transform: 'rotate(360deg)' }
        ], {
            duration: 3000,
            iterations: 1,
        });
        
    setTimeout(function (){
        loaderImage.style.display = "none";
        loader.style.display = "none";
        allItems.animate(
            [
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 1500,
                iterations: 1,
            });
        allItems.style.display = "block";
    }, 3000);
}

function aboutMeLoaded(){
    var aboutMe = document.getElementById("aboutMeTextContainer")
    aboutMe.animate(
        [
            { color: 'white' }
        ]
    )
}