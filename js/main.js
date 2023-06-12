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




    var rotateState = 1;

    document.getElementById("sprinkle-1").addEventListener("mouseover", function(e) {

        var spr1 = document.getElementById("sprinkle-1");
        var rect = spr1.getBoundingClientRect();




        let hoverPosX = e.clientX - rect.left;
        let hoverPosY = e.clientY - rect.top;

        // get current bottom and right pixels:
        let spr1Style = window.getComputedStyle(spr1, null);
        let rightPx = spr1Style.getPropertyValue("right").slice(0, -2);
        let bottomPx = spr1Style.getPropertyValue("bottom").slice(0, -2);




        if (hoverPosX >= 75 && hoverPosY >= 75) {
            spr1.style.right = (Number(rightPx)+60) + "px";
            spr1.style.bottom = (Number(bottomPx)+60) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(45deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(145deg)";
                rotateState = 1;
            }

            console.log("1");

        }
        else if (hoverPosX <= 25 && hoverPosY >= 75) {
            spr1.style.right = (Number(rightPx)-60) + "px";
            spr1.style.bottom = (Number(bottomPx)+60) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(94deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(3deg)";
                rotateState = 1;
            }
            console.log("2");
        }
        else if (hoverPosX >= 75 && hoverPosY <= 25) {
            spr1.style.right = (Number(rightPx)+60) + "px";
            spr1.style.bottom = (Number(bottomPx)-60) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(143deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(64deg)";
                rotateState = 1;
            }
            console.log("3");
        }
        else if (hoverPosX <= 25 && hoverPosY <= 25) {
            spr1.style.right = (Number(rightPx)-60) + "px";
            spr1.style.bottom = (Number(bottomPx)-60) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(196deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(111deg)";
                rotateState = 1;
            }
            console.log("4");
        }


        else if (hoverPosX <= 50 && hoverPosY >= 25 && hoverPosY <= 75) {
            spr1.style.right = (Number(rightPx)-120) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(229deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(170deg)";
                rotateState = 1;
            }
            console.log("5");
        }
        else if (hoverPosX >= 50 && hoverPosY >= 25 && hoverPosY <= 75) {
            spr1.style.right = (Number(rightPx)+120) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(268deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(203deg)";
                rotateState = 1;
            }
            console.log("6");
        }
        else if (hoverPosY <= 50 && hoverPosX >= 25 && hoverPosX <= 75) {
            spr1.style.bottom = (Number(bottomPx)-120) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(328deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(207deg)";
                rotateState = 1;
            }
            console.log("7");
        }
        else if (hoverPosY >= 50  && hoverPosX >= 25 && hoverPosX <= 75) {
            spr1.style.bottom = (Number(bottomPx)+120) + "px";

            if (rotateState === 1) {
                spr1.style.transform = "rotate(355deg)";
                rotateState = 0;
            }
            else {
                spr1.style.transform = "rotate(302deg)";
                rotateState = 1;
            }
            console.log("8");
        }




    });

    // END MAGNETIC SPRINKLES






});


