import addTimeToHeader from './common/addTimeToHeader'
import addWeatherToHeader from './common/addWeatherToHeader'
import createTooltips from './common/createTooltips'

$(document).ready(function () {
  /////////////////
  // Definitions //
  /////////////////

  ////////
  // Do //
  ////////
  addTimeToHeader()
  addWeatherToHeader()
  createTooltips()
})