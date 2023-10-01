import sgMail from "@sendgrid/mail";

const sendEmail = async ({ to, from, subject, text, html }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  // const info = await sgMail.send(msg);
  // res.json(info);
};
export default sendEmail;
