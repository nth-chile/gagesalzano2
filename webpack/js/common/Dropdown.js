export default class Dropdown {
  arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="none" fill-rule="evenodd" stroke="#4D4545" stroke-width="1.5" d="M11.13256879.75868655L6.0460822 6.59228518.95959486.75868634"/></svg>'

  constructor(config) {
    this.$elt = $(config.element)
    this.handleSelect = config.handleSelect
    this.options = config.options
    this.selected = config.initialValue
  }

  init() {
    this.$elt.find("li").click(e => {
      // Set selected
      this.selected = e.target.dataset.value
      // Get new list
      const selectedIndex = this.options.findIndex(option => option.value === this.selected)
      const listItems = [...this.options]
      listItems.splice(selectedIndex, 1)
      // Inject selected value
      this.$elt.find(".header-dropdown-val").html(`Viewing ${e.target.innerHTML} examples ${this.arrow}`)
      // Inject list items
      this.$elt.find("li").each((index, elt) => {
        $(elt)
          .html(listItems[index].HTMLDisplayText)
          .attr('data-value', listItems[index].value)
      })
      this.handleSelect(this.options[selectedIndex], this.options)
    })
  }
}