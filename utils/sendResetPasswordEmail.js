import sendEmail from "./sendEmail.js";
export const sendResetPasswordEmail = async ({
  name,
  email,
  token,
  origin,
}) => {
  const resetURL = `${origin}/reset-password?token=${token}&email=${email}`;
  const message = `<h3>Please reset password by clicking on the following link : 
  <a href="${resetURL}">Reset Password</a></h3>`;

  return sendEmail({
    to: email,
    from: "info@mysagi.org",
    subject: "Reset Password",
    html: `<h3>Hello, ${name}</h3>${message}`,
  });
};
