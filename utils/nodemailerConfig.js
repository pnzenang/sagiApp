const nodemailerConfig = {
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "api",
    pass: process.env.SENDGRID_API_KEY,
  },
};
export default nodemailerConfig;
