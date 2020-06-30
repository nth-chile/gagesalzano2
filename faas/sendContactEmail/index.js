const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("No request body");
    }

    const msg = {
      to: "office@studioapt.co",
      from: "office@studioapt.co",
      subject:
        req.body.subject || `New email via studioapartment.co contact form`,
      text: req.body.from,
    };

    const sgResponse = await sgMail.send(msg);

    return res.send(sgResponse);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

exports.handler = handler;
