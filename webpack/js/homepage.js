import Dropdown from './common/Dropdown'
import addTimeToHeader from './common/addTimeToHeader'
import addWeatherToHeader from './common/addWeatherToHeader'

$(document).ready(function () {
  /////////////////
  // Definitions //
  /////////////////
  const headerDropdown = new Dropdown({
    element: document.querySelector(".header-dropdown"),
    handleSelect: (selected, options) => {
      const $grid = $(".grid")
      // Hide grid
      $grid.addClass("grid--hide")
      setTimeout(() => {
        // Add class to .grid
        $grid.removeClass(options.join(" "))
        $grid.addClass(selected)
      }, 100)

      setTimeout(() => {
        $grid.removeClass("grid--hide")
      }, 150)
    },
    initialValue: "all",
    options: ["all", "branding", "digital", "print"]
  })

  ////////
  // Do //
  ////////
  headerDropdown.init()
  addTimeToHeader()
  addWeatherToHeader()
})