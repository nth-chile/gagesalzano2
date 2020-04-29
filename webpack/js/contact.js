import addTimeToHeader from './common/addTimeToHeader'
import addWeatherToHeader from './common/addWeatherToHeader'

$(document).ready(function () {
  // Definitions/selectors
  const $emailFormGroup = $('.email-form-group')
  const $form = $('form')

  // Do
  addTimeToHeader()
  addWeatherToHeader()

  // On form submit
  $form.submit(e => {
    e.preventDefault()
    const [{ value: selected }, { value: email }] = $form.serializeArray()

    const radioValToSubject = {
      project: 'I would like to talk to Studio Apt. about a project',
      work: 'I would like to work for/with Studio Apt.',
      hi: 'I would just like to say hi!',
    }

    const msg = {
      from: email || null,
      subject: radioValToSubject[selected] || null
    }

    $.post("https://us-central1-studio-apartment-gage.cloudfunctions.net/sendContactEmail", msg)
      .done((res) => console.log(res))

    $form.html(`
      <h2 style="margin-top: 40px;">Email sent, thank you!</h2>
      <p>You can expect a reply within the next 1-3 business days.</p>
    `)
  })

  // When a radio gets selected, reveal email inputs
  $('#contact-form input[type="radio"]').change((e) => {
    $emailFormGroup.removeClass('d-none')
  })
})