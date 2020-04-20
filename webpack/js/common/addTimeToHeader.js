export default function addTimeToHeader() {
  // Get time string
  const ESTLocaleStr = new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  const ESTDateObj = new Date(ESTLocaleStr)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric' })
  const parts = dateTimeFormat.formatToParts(ESTDateObj)
  const ESTFormattedTimeStr = `${parts[0].value}:${parts[2].value}${parts[4].value.toLowerCase()}`
  // Get elt
  const elt = document.querySelector('#ESTTime')
  elt.innerHTML = ESTFormattedTimeStr
}