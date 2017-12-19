function scrollWin(target) {
    var width = window.innerWidth;
    var section;
    var scrollTo;
    if (target == 1) {
        section = document.getElementById('section2').scrollHeight;
        if (width <= 600) {
            scrollTo = section * 165 / 100;
        }
        else if (width > 600 && width <= 800) {
            scrollTo = section * 150 / 100;
        }
        else if (width > 800 && width <= 1100) {
            scrollTo = section * 125 / 100;
        }
        else {
            scrollTo = section * 115 / 100;
        }
        window.scroll({
            top: scrollTo, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
    else if (target == 2) {
        section = document.getElementById('section3').scrollHeight;
        console.log("width = " + width);
        if (width <= 600) {
            scrollTo = section * 180 / 100;
        }
        if (width > 600 && width <= 1200) {
            scrollTo = section * 175 / 100;
        }
        else if (width > 1200) {
            scrollTo = section * 185 / 100;
        }
        window.scroll({ 
            top: scrollTo, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
    else if (target == 3) {
        window.scroll({
            top: 999999, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
}