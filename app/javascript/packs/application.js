/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

const debug = require("debug")("application")

localStorage.debug = process.env.DEBUG || ""

import Rails from "rails-ujs"
import Turbolinks from "turbolinks"
import "semantic-ui-css"

import Timeago from "../timeago"
import Flash from "../flash"
import Notifications from "../notifications"

Rails.start()
debug("Rails UJS UP")

Turbolinks.start()
debug("Turbolinks UP")

Flash.start()

$(document).ready(function () {
  Notifications.start()
})

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown()
  debug("Semantic dropdown UP")

  Timeago.start()
})
