import addTimeToHeader from './common/addTimeToHeader'

$(document).ready(function () {
  /////////////////
  // Definitions //
  /////////////////

  function checkboxClickHandler(e) {

  }

  function getContactFormValues() {
    // console.log($form.serializeArray())
  }


  ////////
  // Do //
  ////////
  addTimeToHeader()
  getContactFormValues()

  // Prevent default on form submit
  $('form').submit(e => e.preventDefault())

  // Handle form change 
  $('#contact-form :input').change(function (e) {
    console.log("changed")
  })
})