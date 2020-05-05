/** There is a <template> elt on the front page containing all of the projects. 
 *  And there is a dropdown filter for the grid. This function puts the correct
 *  items into the grid.
 * 
 *  parameter `selected` will be 'all' | 'branding' | etc... reflecting the options
 *  of the grid filter
 * */
export default function putItemsIntoHomeGrid(selected) {
  // select template elt
  const template = document.querySelector('#template-grid')
  const templateChildren = template.content.children
  const gridElt = document.querySelector('.grid')
  gridElt.innerHTML = ''
  // Append keeper elts
  for (let i of templateChildren) {
    if (!i.classList || !i.classList.contains || !i.classList.contains('grid__item')) {
      continue
    }

    if (selected === 'all' || i.dataset.categories.includes(selected)) {
      gridElt.appendChild(i.cloneNode(true))
    }
  }
}