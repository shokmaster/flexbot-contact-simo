/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Contacta con Flexbot",
    short_name: "Flexbot",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#337ab7",
    icons: [
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
