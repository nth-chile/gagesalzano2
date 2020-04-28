import Dropdown from './common/Dropdown'
import addTimeToHeader from './common/addTimeToHeader'
import addWeatherToHeader from './common/addWeatherToHeader'
import putItemsIntoHomeGrid from './common/putItemsIntoHomeGrid'

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
        // Remove all classes from grid
        $grid.removeClass(options.map(i => i.value).join(" "))
        // Add class to .grid
        $grid.addClass(selected.value)
        // Put items in grid
        putItemsIntoHomeGrid(selected.value)
      }, 100)

      setTimeout(() => {
        $grid.removeClass("grid--hide")
      }, 150)
    },
    initialValue: "all",
    options: [
      { value: "all", HTMLDisplayText: 'all' },
      { value: "branding", HTMLDisplayText: 'branding' },
      { value: "digital", HTMLDisplayText: 'web sites & applications' },
      { value: "print", HTMLDisplayText: 'print' }
    ]
  })

  ////////
  // Do //
  ////////
  headerDropdown.init()
  addTimeToHeader()
  addWeatherToHeader()
  putItemsIntoHomeGrid('all')
})