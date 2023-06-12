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

    // set rotation state to toggle between two states
    var rotateState = 1;

    // set right and bottom variables for changing values
    var rightVal;
    var bottomVal;

    // set box top, bottom and left variables for changing values
    var leftBoxVal;

    var topBoxVal = document.getElementById("donuts-video").getBoundingClientRect().height;

    // map values to range below
    // 768px W = 180px , 1920px W = -475px
    var width = window.innerWidth;
    var cropValue = (-475 - 180) * (width - 768) / (1920 - 768) + 180;
    topBoxVal = topBoxVal+cropValue;

    var bottomBoxVal = 0 + cropValue;

    // reset box top and bottom values whenever window is resized (as video block resizes)
    window.addEventListener("resize", function () {

        topBoxVal = document.getElementById("donuts-video").offsetHeight;

        // map values to range below
        // 768px W = 180px , 1920px W = -475px
        width = window.innerWidth;
        cropValue = (-475 - 180) * (width - 768) / (1920 - 768) + 180;
        topBoxVal = topBoxVal+cropValue;

        bottomBoxVal = 0 + cropValue;
    });








    // event listener for mouseover the sprinkles
    document.getElementById("sprinkle-1").addEventListener("mouseover", function(e) {

        let spr = document.getElementById("sprinkle-1");

        // get the sprinkle's position
        let pos = spr.getBoundingClientRect();

        // get the current hover coordinates over the sprinkle graphic
        let hoverPosX = e.clientX - pos.left;
        let hoverPosY = e.clientY - pos.top;

        // get current bottom and right pixels:
        let sprStyle = window.getComputedStyle(spr, null);
        let rightPx = sprStyle.getPropertyValue("right").slice(0, -2);
        let bottomPx = sprStyle.getPropertyValue("bottom").slice(0, -2);

        // get current right and bottom values
        if (!spr.style.right) {
            rightVal = Number(getComputedStyle(spr).right.slice(0, -2));
        }
        else {
            rightVal = Number(spr.style.right.slice(0, -2));
        }
        if (!spr.style.bottom) {
            bottomVal = Number(getComputedStyle(spr).bottom.slice(0, -2));
        }
        else {
            bottomVal = Number(spr.style.bottom.slice(0, -2));
        }

        // get current left value
        leftBoxVal = window.innerWidth*0.45;



        // move and rotate the sprinkle on every hover
        // bottom right hover
        if (hoverPosX >= 75 && hoverPosY >= 75) {

            spr.style.right = (Number(rightPx)+60) + "px";
            spr.style.bottom = (Number(bottomPx)+60) + "px";

            if (rotateState === 1) {
                spr.style.transform = "rotate(45deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(145deg)";
                rotateState = 1;
            }

        }

        // bottom left hover
        else if (hoverPosX <= 25 && hoverPosY >= 75) {
            spr.style.right = (Number(rightPx)-60) + "px";
            spr.style.bottom = (Number(bottomPx)+60) + "px";

            if (rotateState === 1) {
                spr.style.transform = "rotate(94deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(3deg)";
                rotateState = 1;
            }

        }

        // top right hover
        else if (hoverPosX >= 75 && hoverPosY <= 25) {
            spr.style.right = (Number(rightPx)+60) + "px";
            spr.style.bottom = (Number(bottomPx)-60) + "px";

            if (rotateState === 1) {
                spr.style.transform = "rotate(143deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(64deg)";
                rotateState = 1;
            }

        }

        // top left hover
        else if (hoverPosX <= 25 && hoverPosY <= 25) {
            spr.style.right = (Number(rightPx)-60) + "px";
            spr.style.bottom = (Number(bottomPx)-60) + "px";

            if (rotateState === 1) {
                spr.style.transform = "rotate(196deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(111deg)";
                rotateState = 1;
            }

        }










        // left hover
        else if (hoverPosX <= 50 && hoverPosY >= 25 && hoverPosY <= 75) {

            if ((rightVal-120) < 0) {
                spr.style.right = "-20px";
            }

            else {
                spr.style.right = (Number(rightPx)-120) + "px";
            }

            if (rotateState === 1) {
                spr.style.transform = "rotate(229deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(170deg)";
                rotateState = 1;
            }
        }


        // right hover
        else if (hoverPosX >= 50 && hoverPosY >= 25 && hoverPosY <= 75) {


            if ((rightVal+120) > leftBoxVal) {
                spr.style.right = leftBoxVal + "px";
            }

            else {
                spr.style.right = (Number(rightPx)+120) + "px";
            }

            if (rotateState === 1) {
                spr.style.transform = "rotate(268deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(203deg)";
                rotateState = 1;
            }
        }


        // top hover
        else if (hoverPosY <= 50 && hoverPosX >= 25 && hoverPosX <= 75) {

            if ((bottomVal-120) < bottomBoxVal+35) {
                spr.style.bottom = bottomBoxVal+35 + "px";

            }

            else {
                spr.style.bottom = (Number(bottomPx)-120) + "px";
            }


            if (rotateState === 1) {
                spr.style.transform = "rotate(328deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(207deg)";
                rotateState = 1;
            }
        }

        // bottom hover
        else if (hoverPosY >= 50  && hoverPosX >= 25 && hoverPosX <= 75) {

            if ((bottomVal+120) > topBoxVal-100) {
                spr.style.bottom = topBoxVal + "px";

            }

            else {
                spr.style.bottom = (Number(bottomPx)+120) + "px";
            }

            if (rotateState === 1) {
                spr.style.transform = "rotate(355deg)";
                rotateState = 0;
            }
            else {
                spr.style.transform = "rotate(302deg)";
                rotateState = 1;
            }
        }

    });
    // END MAGNETIC SPRINKLES


/*

to do:

1. add the functionality to corner hovers
2. fix section 2-3 intersection when resizing window (maybe change to still img when tablet size)
3. change sprinkle img src when resizing window
4. change where sprinkles appear too when resizing window (?)
5. make sprinkles behind see thru text (z-index)

 */



});


