const seccionPag = new fullpage('#fullpage', {
    autoScroll: true,
    fitToSection: false,
    fitToSectionDelay: 500,
    easing: 'easeInOutCubic',
    scrollingSpeed: 800,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: true,
    

    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'peliculas', 'contacto'],
    navigationTooltips: ['Inicio', 'Peliculas', 'Contacto'],
    showActiveTooltip: false,


    sectionColor: ['#000', '#1010F', '#fff'],
    verticalCenter: true,


});