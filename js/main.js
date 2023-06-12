window.addEventListener("load", function() {

    // DONUT PARALLAX EFFECT

    var logo = document.getElementById("masthead-logo");
    var topDonutRow = document.getElementById("top-donut-row");
    var middleDonutRow = document.getElementById("middle-donut-row");
    var bottomDonutRow = document.getElementById("bottom-donut-row");
    var dm1 = document.getElementById("dm1");
    var dm3 = document.getElementById("dm3");
    var dm4 = document.getElementById("dm4");
    var dm5 = document.getElementById("dm5");
    var db1 = document.getElementById("db1");
    var db3 = document.getElementById("db3");
    var db4 = document.getElementById("db4");
    var db5 = document.getElementById("db5");
    var db6 = document.getElementById("db6");
    var db7 = document.getElementById("db7");
    var db8 = document.getElementById("db8");
    var db9 = document.getElementById("db9");
    var dbl = document.getElementById("dbl");
    var dbr = document.getElementById("dbr");
    var section2 = document.getElementById("section-2-home");
    var sprinklesVideo = document.getElementById("sprinkles-video")


    window.addEventListener("scroll", function() {

        let scroll = window.scrollY/5;

        // logo
        logo.style.marginTop = (scroll*2.75)+50 + "px";

        // top donut
        topDonutRow.style.marginTop = "-" + scroll + "px";

        // middle donuts
        middleDonutRow.style.marginTop = "-" + scroll*1.5 + "px";
        dm1.style.marginTop = "-" + ((scroll*1.1)+65) + "px";
        dm3.style.marginTop = "-" + (scroll+65) + "px";
        dm4.style.marginTop = "-" + ((scroll*1.2)+100) + "px";
        dm5.style.marginTop = "-" + ((scroll*1.9)+65) + "px";

        // bottom donuts
        bottomDonutRow.style.marginTop = "-" + scroll*3 + "px";
        db1.style.marginTop = "-" + (scroll+65) + "px";
        db3.style.marginTop = "-" + ((scroll*1.2)+65) + "px";
        db4.style.marginTop = "-" + ((scroll*0.5)+80) + "px";
        db5.style.marginTop = "-" + ((scroll*1.1)+65) + "px";
        db6.style.marginTop = "-" + ((scroll*0.2)+80) + "px";
        db7.style.marginTop = "-" + ((scroll*1.4)+65) + "px";
        db8.style.marginTop = "-" + ((scroll*0.1)+128) + "px";
        db9.style.marginTop = "-" + ((scroll*0.4)+90) + "px";
        dbl.style.marginTop = "-" + scroll*2.5 + "px";
        dbr.style.marginTop = "-" + scroll*2.3 + "px";

        // solid block
        section2.style.marginTop = "-" + ((scroll*3)+100) + "px";

        // sprinkles video
        sprinklesVideo.style.marginTop =  (scroll*4-200) + "px";

    });

    // END DONUT PARALLAX EFFECT

    // MAGNETIC SPRINKLES








/*

    document.querySelector("body").addEventListener("mousemove", magneticSprinkles);

    function magneticSprinkles() {

        var spr = document.querySelectorAll(".home-sprinkle");

        spr.forEach(function (spr) {

            // rotate

            let x = (spr.getBoundingClientRect().left) + (spr.clientWidth / 2);
            let y = (spr.getBoundingClientRect().top) + (spr.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x,event.pageY - y);
            let rot = (radian * (180/ Math.PI) * -1) + 270;
            spr.style.transform = "rotate(" + rot + "deg)";

            // follow mouse

            let mousePosX = event.clientX;
            let mousePosY = event.clientY;

            spr.style.left = mousePosX + "px";
            spr.style.top = mousePosY + "px";


        });


    } */



    $('#sprinkle-1').click(function(e){

        var spr = document.getElementById("sprinkle-1");

        var rect = spr.getBoundingClientRect();
        //console.log(rect.top, rect.right, rect.bottom, rect.left);

        console.log(e.clientY - rect.top);
        console.log(e.clientX - rect.left);

    });


    document.getElementById("sprinkle-1").addEventListener("mouseover", function(e) {

        var spr1 = document.getElementById("sprinkle-1");
        var rect = spr1.getBoundingClientRect();


       // console.log(e.clientY - rect.top);
       // console.log(e.clientX - rect.left);








        // to keep:

        let hoverPosX = e.clientX - rect.left;
        let hoverPosY = e.clientY - rect.top;

        // get current bottom pixels, right pixels, and rotate:
        let spr1Style = window.getComputedStyle(spr1, null);
        let rightPx = spr1Style.getPropertyValue("right").slice(0, -2);
        let bottomPx = spr1Style.getPropertyValue("bottom").slice(0, -2);
        let rotate = spr1Style.getPropertyValue("transform");


        // left off: getting the rotate value, and then lower below, for each scenario, add a rotation to existing rotation
        // also make sure sprinkles stop before going off screen
        console.log(rotate);





       // spr1.style.right = (Number(rightPx)+30) + "px";
       // spr1.style.bottom = (Number(bottomPx)+30) + "px";

        /*
        if (hoverPosX > 22) {
            spr1.style.right = (Number(rightPx)+60) + "px";
        }
        else {
            spr1.style.right = (Number(rightPx)-60) + "px";
        }

        if (hoverPosY > 22) {
            spr1.style.bottom = (Number(bottomPx)+60) + "px";
        }
        else {
            spr1.style.bottom = (Number(bottomPx)-60) + "px";
        } */




        if (hoverPosX >= 75 && hoverPosY >= 75) {
            spr1.style.right = (Number(rightPx)+60) + "px";
            spr1.style.bottom = (Number(bottomPx)+60) + "px";
            spr1.style.transform = "rotate(45deg)";
        }
        else if (hoverPosX <= 25 && hoverPosY >= 75) {
            spr1.style.right = (Number(rightPx)-60) + "px";
            spr1.style.bottom = (Number(bottomPx)+60) + "px";
        }
        else if (hoverPosX >= 75 && hoverPosY <= 25) {
            spr1.style.right = (Number(rightPx)+60) + "px";
            spr1.style.bottom = (Number(bottomPx)-60) + "px";
        }
        else if (hoverPosX <= 25 && hoverPosY <= 25) {
            spr1.style.right = (Number(rightPx)-60) + "px";
            spr1.style.bottom = (Number(bottomPx)-60) + "px";
        }


        else if (hoverPosX <= 50 && hoverPosY >= 25 && hoverPosY <= 75) {
            spr1.style.right = (Number(rightPx)-120) + "px";
        }
        else if (hoverPosX >= 50 && hoverPosY >= 25 && hoverPosY <= 75) {
            spr1.style.right = (Number(rightPx)+120) + "px";
        }
        else if (hoverPosY <= 50 && hoverPosX >= 25 && hoverPosX <= 75) {
            spr1.style.bottom = (Number(bottomPx)-120) + "px";
        }
        else if (hoverPosY >= 50  && hoverPosX >= 25 && hoverPosX <= 75) {
            spr1.style.bottom = (Number(bottomPx)+120) + "px";
        }



/*
        let x = (spr1.getBoundingClientRect().left) + (spr1.clientWidth / 2);
        let y = (spr1.getBoundingClientRect().top) + (spr1.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x,event.pageY - y);
        let rot = (radian * (180/ Math.PI) * -1) + 270;
        spr1.style.transform = "rotate(" + rot + "deg)";


 */




    });








});


