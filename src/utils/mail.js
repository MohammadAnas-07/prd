import Mailgen from "mailgen";


const emailVerificationMailgenContent = (username, verifivationUrl)=>{
  return {
    body:{
      name: username,
      intro: "Welcome to our App! we're excited to have you on board.",
      action:{
        instructions: "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verifivationUrl
        },
      },
      outro: "Need help, or have questions? Just reply this email, we'd love help."
    },
  }
}

const forgotPasswordMailgentContent = (username, passwordResetUrl)=>{
  return {
    body:{
      name: username,
      intro: "We got a request to reset the password of your account.",
      action:{
        instructions: "To reset your password click on the following button or link",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl
        },
      },
      outro: "Need help, or have questions? Just reply this email, we'd love help."
    },
  }
}

export{
  emailVerificationMailgenContent,
  forgotPasswordMailgentContent
}