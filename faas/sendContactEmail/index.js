const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  if (!req.body) {
    throw new Error('No request body')
  }

  const msg = {
    to: 'jaredsalzano@gmail.com',
    from: req.body.from || 'anonymous@anonymous.com',
    subject: req.body.subject || 'New email via studioapartment.co contact form',
    text: req.body.text || 'Email sent via studioapartment.co contact form.'
  };

  const sgResponse = sgMail.send(msg)

  return res.send(sgResponse)
}

exports.handler = handler
