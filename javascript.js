/*EFEITO TRANSPARENTE MENU PRINCIPAL */
document.getElementById("navbar").setAttribute("style", "background-color: #ffffff0d;");
Array.from(document.querySelectorAll('#navbar ul li a')).forEach(el => el.setAttribute("style", "color: #fff;"));

/*SCROLL MOUSE*/
$(window).scroll(function () {
    if ($(this).scrollTop()  <= 0 ){
        document.getElementById("navbar").setAttribute("style", "background-color: #ffffff0d;");
        Array.from(document.querySelectorAll('#navbar ul li a')).forEach(el => el.setAttribute("style", "color: #fff;"))

    }else{
        document.getElementById("navbar").setAttribute("style", "background-color:#15314e;")
        Array.from(document.querySelectorAll('#navbar ul li a')).forEach(el => el.setAttribute("style", "color: #fff;"))
    }
});
/*SCROLL MOUSE [END]*/
/*EFEITO TRANSPARENTE MENU PRINCIPAL [END] */