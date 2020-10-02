wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();




var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();




try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
        method: 'HEAD',
        mode: 'no-cors'
    })).then(function (response) {
        return true;
    }).catch(function (e) {
        var carbonScript = document.createElement("script");
        carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
    console.log(error);
}



$(document).ready(function () {

    $(".brand").click(function () {
        $("#brand-names").slideToggle('slow');
    });
    $(".colors").click(function () {
        $("#color-names").slideToggle('slow');
    });
    $(".price").click(function () {
        $("#price-options").slideToggle('slow');
    });

    // all products



    // first product

    $(".img2").mouseover(function () {
        $(".img2").attr("src", "images/a1.jpg");
    });
    $(".img2").mouseout(function () {
        $(".img2").attr("src", "images/1.jpg");
    });


    // second product


    $(".img1").mouseover(function () {
        $(".img1").attr("src", "images/a2.jpg");
    });
    $(".img1").mouseout(function () {
        $(".img1").attr("src", "images/dell.jpg");
    });




    // third product

    $(".img3").mouseover(function () {
        $(".img3").attr("src", "images/a3.jpg");
    });
    $(".img3").mouseout(function () {
        $(".img3").attr("src", "images/3.jpg");
    });




    // fourth product


    $(".img4").mouseover(function () {
        $(".img4").attr("src", "images/a4.jpg");
    });
    $(".img4").mouseout(function () {
        $(".img4").attr("src", "images/bag1.jpg");
    });



    // fifth product

    $(".img5").mouseover(function () {
        $(".img5").attr("src", "images/a5.jpg");
    });
    $(".img5").mouseout(function () {
        $(".img5").attr("src", "images/shoe1.jpg");
    });



    // sixth product

    $(".img6").mouseover(function () {
        $(".img6").attr("src", "images/a6.jpg");
    });
    $(".img6").mouseout(function () {
        $(".img6").attr("src", "images/necless1.jpg");
    });



    // seventh product


    $(".img7").mouseover(function () {
        $(".img7").attr("src", "images/a2.jpg");
    });
    $(".img7").mouseout(function () {
        $(".img7").attr("src", "images/dell.jpg");
    });



    // Eighth product

    $(".img8").mouseover(function () {
        $(".img8").attr("src", "images/a3.jpg");
    });
    $(".img8").mouseout(function () {
        $(".img8").attr("src", "images/3.jpg");
    });



    // ninth product


    $(".img9").mouseover(function () {
        $(".img9").attr("src", "images/a4.jpg");
    });
    $(".img9").mouseout(function () {
        $(".img9").attr("src", "images/bag1.jpg");
    });


    // tenth product

    $(".img10").mouseover(function () {
        $(".img10").attr("src", "images/a5.jpg");
    });
    $(".img10").mouseout(function () {
        $(".img10").attr("src", "images/shoe1.jpg");
    });



    // eleventh product

    $(".img11").mouseover(function () {
        $(".img11").attr("src", "images/a3.jpg");
    });
    $(".img11").mouseout(function () {
        $(".img11").attr("src", "images/3.jpg");
    });


    // twelfth product

    $(".img12").mouseover(function () {
        $(".img12").attr("src", "images/a1.jpg");
    });
    $(".img12").mouseout(function () {
        $(".img12").attr("src", "images/1.jpg");
    });



});