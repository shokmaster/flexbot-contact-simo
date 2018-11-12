/* eslint-env node */
'use strict';

module.exports = function( /* environment, appConfig */ ) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Contacta con Flexbot",
    short_name: "Flexbot",
    description: "",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#fff",
    theme_color: "#337ab7",
    icons: [{
      src: "icons/icon_logo_blue.png",
      type: "image/png",
      sizes: "16x16 32x32"
    }, {
      src: "icons/icon_logo_blue.png",
      type: "image/png",
      sizes: "48x48"
    }, {
      src: "icons/logo-aula-90x90.png",
      type: "image/png",
      sizes: "64x64 90x90"
    }, {
      src: "icons/logo-aula-144x144.png",
      type: "image/png",
      sizes: "144x144"
    }, {
      src: "icons/logo-aula-256x256.png",
      type: "image/png",
      sizes: "128x128 256x256"
    }, {
      src: "icons/logo-aula-512x512.png",
      type: "image/png",
      sizes: "512x512"
    }],
    ms: {
      tileColor: '#337ab7'
    }
  };

}
