$(document).ready(function () {
    
    var banner = {
        padre: $('#banner'),
        numeroSlide: $('#banner').children('.slide').length,
        position: 1
    }

    // Calcular la altura de cada Slide del banner
    var altoBanner = function() {
        var alto = banner.padre.children('.slide').outerHeight();

        // Ponerle la altura calculada a cada slide segun su tamaño
        banner.padre.css({
            'height': alto + 'px'
        });

        console.log(alto);
        
    }
    
    banner.padre.children('.slide').first().css({
        'left': 0
    });

    // Ejecutar la funcion al inicio de la pagina
    altoBanner();

    // Ejecutar la funcion cada vez que haya un cambio de pantalla
    $(window).resize(function () { 
        altoBanner();
    });
    
    var info = {
        padre: $('#info'),
        numeroSlide: $('#info').children('.slide').length,
        position: 1
    }

    // Calcular la altura de cada Slide de la info
    var altoInfo = function() {
        var alto = info.padre.children('.active').outerHeight();

        // Ponerle la altura calculada a cada slide segun su tamaño
        info.padre.animate({
            'height': alto + 'px'
        });

        console.log(alto);
        
    }

    info.padre.children('.slide').first().css({
        'left': 0
    });

    // Ejecutar la funcion al inicio de la pagina
    altoInfo();

    // Ejecutar la funcion cada vez que haya un cambio de pantalla
    $(window).resize(function () { 
        altoInfo();
    });

    //console.log(banner.numeroSlide);

    $('#info').children('.slide').each(function() {
        $('#botones').append('<span>');
    });

    $('#botones').children('span').first().addClass('active');

    var altoContenedor = function() {
        var altoVentana = $(window).height();

        if (altoVentana <= $('#contenedor').outerHeight() + 200) {
            $('#contenedor').css({
                'height': ''
            });
        } else {
            $('#contenedor').css({
                'height': altoVentana + 'px'
            });
        }
    }

    altoContenedor();

    $(window).resize(function () { 
        altoContenedor();
    });

// ---------------------------------------
// ----- Banner
// ---------------------------------------

    // Boton siguiente
    $('#banner-next').on('click', function(e) {
        e.preventDefault();

        if (banner.position < banner.numeroSlide) {

            // Nos aseguramos de que las demas slides empiecen desde la derecha.
            banner.padre.children().not('.active').css({
                'left': '100%'
            });

            // Quitamos la clase active y se la ponemos al siguiente elemento. Y los animamos para que vaya hacia la izquierda.
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            // Animamos el slide anterior al elemento seleccionado para que se deslice hacia la izquierda tambien.
            $('#banner .active').prev().animate({
                'left':'-100%'
            });

            // Le sumamos 1 a la posicion para que obtenga el otro elemento.
            banner.position = banner.position + 1;  
        }else {

            // Hacemos que el slide activo ( es decir el ultimo ), se anime hacia la derecha.
            $('#banner .active').animate({
                'left': '-100%'
            });

            // Seleccionamos todos los slides que no tengas la clase .active y los posicionamos a la derecha.
            banner.padre.children().not('.active').css({
                'left': '100%'
            });

            // Eliminamos la clase .active  y se la ponemos al primer elemento y lo animamo nuevamente.
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            // Reiniciamos la posicion de los slides
            banner.position = 1;
        }
    });  
    
    // Boton anterior
    $('#banner-prev').on('click', function(e) {
        e.preventDefault();
       
        if (banner.position > 1) {

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#banner .active').animate({
               'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            banner.position = banner.position - 1;
            
        } else {
            
            banner.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
                'left': '0'
            });

            banner.position = banner.numeroSlide;

        }

    })

// ---------------------------------------
// ----- Info
// ---------------------------------------

    // Boton siguiente
    $('#info-next').on('click', function(e) {
        e.preventDefault();

        if (info.position < info.numeroSlide) {

            // Nos aseguramos de que las demas slides empiecen desde la derecha.
            info.padre.children().not('.active').css({
                'left': '100%'
            });

            // Quitamos la clase active y se la ponemos al siguiente elemento. Y los animamos para que vaya hacia la izquierda.
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            // Animamos el slide anterior al elemento seleccionado para que se deslice hacia la izquierda tambien.
            $('#info .active').prev().animate({
                'left':'-100%'
            });

            // Seleccionamos los botones y le quitamos la clase active y se la ponemos al siguiente elemento 
            $('#botones').children('.active').removeClass('active').next().addClass('active');

            // Le sumamos 1 a la posicion para que obtenga el otro elemento.
            info.position = info.position + 1;  
        }else {

            // Hacemos que el slide activo ( es decir el ultimo ), se anime hacia la derecha.
            $('#info .active').animate({
                'left': '-100%'
            });

            // Seleccionamos todos los slides que no tengas la clase .active y los posicionamos a la derecha.
            info.padre.children().not('.active').css({
                'left': '100%'
            });

            // Eliminamos la clase .active  y se la ponemos al primer elemento y lo animamo nuevamente.
            $('#info .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            //
            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').first().addClass('active');

            // Reiniciamos la posicion de los slides
            info.position = 1;
        }

        altoInfo();
    });  
    
    // Boton anterior
    $('#info-prev').on('click', function(e) {
        e.preventDefault();
       
        if (info.position > 1) {

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#info .active').animate({
               'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            $('#botones').children('.active').removeClass('active').prev().addClass('active');

            info.position = info.position - 1;
            
        } else {
            
            info.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.padre.children().last().addClass('active').animate({
                'left': '0'
            });

            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').last().addClass('active');

            info.position = info.numeroSlide;

        }

        altoInfo();

    })
    

});