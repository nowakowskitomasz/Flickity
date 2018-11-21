'use strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
});

flkty.on( 'scroll', function( progress ) {
  console.log( 'Flickity scrolled ' + progress * 100 + '%' )
});

