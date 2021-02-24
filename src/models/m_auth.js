const db = require('../config/mySQL')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otp = require('otp-generator')
const nodemailer = require('nodemailer')
const { error } = require('../helpers/form')

module.exports = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            const saltRounds = Math.floor(Math.random() * 10) + 1
            //hashPw
            bcrypt.hash(body.password, saltRounds, (err, hashedPassword) => {
                //generate newBody from newPw
                const newUser = { ...body, password: hashedPassword }
                const queryStr = `INSERT INTO users SET ?`
                db.query(queryStr, newUser, (err, data) => {
                    if (!err) {
                        const otpCode = otp.generate(6, { alphabets: true, upperCase: true, specialChars: false })
                        const OTPsend = {
                            email: body.email,
                            otp: otpCode
                        }
                        const queryStr = `INSERT INTO tb_otp_activation SET ?`
                        db.query(queryStr, OTPsend, (err, data) => {
                            if (!err) {
                                let transporter = nodemailer.createTransport({
                                    service: 'gmail',
                                    host: 'smtp.gmail.com',
                                    port: 578,
                                    secure: false,
                                    auth: {
                                        user: process.env.USER_EMAIL,
                                        pass: process.env.PASS_EMAIL
                                    }
                                })
                                // console.log(process.env.USER_EMAIL, process.env.PASS_EMAIL)

                                let mailOptions = {
                                    from: "Blanja <admin@blanja.com>",
                                    to: body.email,
                                    subject: 'Account - Blanja',
                                    html:
                                        `<html>
                                        <head>
                                          <title></title>
                                          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                                          <meta name="viewport" content="width=device-width, initial-scale=1" />
                                          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                                          <style type="text/css">
                                            /* FONTS */
                                            @media screen {
                                              @font-face {
                                                font-family: "Lato";
                                                font-style: normal;
                                                font-weight: 400;
                                                src: local("Lato Regular"), local("Lato-Regular"),
                                                  url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                                                    format("woff");
                                              }
                                      
                                              @font-face {
                                                font-family: "Lato";
                                                font-style: normal;
                                                font-weight: 700;
                                                src: local("Lato Bold"), local("Lato-Bold"),
                                                  url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                                                    format("woff");
                                              }
                                      
                                              @font-face {
                                                font-family: "Lato";
                                                font-style: italic;
                                                font-weight: 400;
                                                src: local("Lato Italic"), local("Lato-Italic"),
                                                  url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                                                    format("woff");
                                              }
                                      
                                              @font-face {
                                                font-family: "Lato";
                                                font-style: italic;
                                                font-weight: 700;
                                                src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
                                                  url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                                                    format("woff");
                                              }
                                            }
                                      
                                            /* CLIENT-SPECIFIC STYLES */
                                            body,
                                            table,
                                            td,
                                            a {
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                            }
                                            table,
                                            td {
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            }
                                            img {
                                              -ms-interpolation-mode: bicubic;
                                            }
                                      
                                            /* RESET STYLES */
                                            img {
                                              border: 0;
                                              height: auto;
                                              line-height: 100%;
                                              outline: none;
                                              text-decoration: none;
                                            }
                                            table {
                                              border-collapse: collapse !important;
                                            }
                                            body {
                                              height: 100% !important;
                                              margin: 0 !important;
                                              padding: 0 !important;
                                              width: 100% !important;
                                            }
                                      
                                            /* iOS BLUE LINKS */
                                            a[x-apple-data-detectors] {
                                              color: inherit !important;
                                              text-decoration: none !important;
                                              font-size: inherit !important;
                                              font-family: inherit !important;
                                              font-weight: inherit !important;
                                              line-height: inherit !important;
                                            }
                                      
                                            /* ANDROID CENTER FIX */
                                            div[style*="margin: 16px 0;"] {
                                              margin: 0 !important;
                                            }
                                          </style>
                                        </head>
                                        <body
                                          style="
                                            background-color: #f4f4f4;
                                            margin: 0 !important;
                                            padding: 0 !important;
                                          "
                                        >
                                          <!-- HIDDEN PREHEADER TEXT -->
                                          <div
                                            style="
                                              display: none;
                                              font-size: 1px;
                                              color: #fefefe;
                                              line-height: 1px;
                                              font-family: 'Lato', Helvetica, Arial, sans-serif;
                                              max-height: 0px;
                                              max-width: 0px;
                                              opacity: 0;
                                              overflow: hidden;
                                            "
                                          >
                                            Looks like you tried signing in a few too many times. Let's see if we can
                                            get you back into your account.
                                          </div>
                                      
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <!-- LOGO -->
                                            <tr>
                                              <td bgcolor="#f4f4f4" align="center">
                                                <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      valign="top"
                                                      style="padding: 40px 10px 40px 10px"
                                                    >
                                                      <img
                                                        alt="Logo"
                                                        src="https://i.ibb.co/QrC6w3f/Group-1158.png"
                                                        width="100"
                                                        height="100"
                                                        style="
                                                          display: block;
                                                          font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                          color: #ffffff;
                                                          font-size: 18px;
                                                        "
                                                        border="0"
                                                      />
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                            <!-- HERO -->
                                            <tr>
                                              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                  <tr>
                                                    <td
                                                      bgcolor="#ffffff"
                                                      align="center"
                                                      valign="top"
                                                      style="
                                                        padding: 40px 20px 20px 20px;
                                                        border-radius: 4px 4px 0px 0px;
                                                        color: #111111;
                                                        font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                        font-size: 48px;
                                                        font-weight: 400;
                                                        letter-spacing: 4px;
                                                        line-height: 48px;
                                                      "
                                                    >
                                                      <h1 style="font-size: 32px; font-weight: 400; margin: 0">
                                                        Welcome
                                                      </h1>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                            <!-- COPY BLOCK -->
                                            <tr>
                                              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                  <!-- COPY -->
                                                  <tr>
                                                    <td
                                                      bgcolor="#ffffff"
                                                      align="left"
                                                      style="
                                                        padding: 20px 30px 40px 30px;
                                                        color: #666666;
                                                        font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                        font-size: 18px;
                                                        font-weight: 400;
                                                        line-height: 25px;
                                                      "
                                                    >
                                                      <p style="margin: 0">
                                                        Thank you for register to Blanja. You can buy or sell goods
                                                        now.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <!-- BULLETPROOF BUTTON -->
                                                  <tr>
                                                    <td bgcolor="#ffffff" align="left">
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                          <td
                                                            bgcolor="#ffffff"
                                                            align="center"
                                                            style="padding: 20px 30px 60px 30px"
                                                          >
                                                            <table border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                <td
                                                                  align="center"
                                                                  style="border-radius: 3px"
                                                                  bgcolor="#DB3022"
                                                                >
                                                                  <a
                                                                    href="${process.env.LOCAL}"
                                                                    style="
                                                                      font-size: 20px;
                                                                      font-family: Helvetica, Arial, sans-serif;
                                                                      color: #ffffff;
                                                                      text-decoration: none;
                                                                      color: #ffffff;
                                                                      text-decoration: none;
                                                                      padding: 15px 25px;
                                                                      border-radius: 2px;
                                                                      border: 1px solid #7c72dc;
                                                                      display: inline-block;
                                                                    "
                                                                    >Login</a
                                                                  >
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                      
                                            <!-- COPY CALLOUT -->
                                            <tr>
                                              <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                  <!-- SUPPORT CALLOUT -->
                                                  <tr>
                                                    <td
                                                      bgcolor="#f4f4f4"
                                                      align="center"
                                                      style="padding: 30px 10px 0px 10px"
                                                    >
                                                      <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                        <!-- HEADLINE -->
                                                        <tr>
                                                          <td
                                                            bgcolor="#C6C2ED"
                                                            align="center"
                                                            style="
                                                              padding: 30px 30px 30px 30px;
                                                              border-radius: 4px 4px 4px 4px;
                                                              color: #666666;
                                                              font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                              font-size: 18px;
                                                              font-weight: 400;
                                                              line-height: 25px;
                                                            "
                                                          >
                                                            <h2
                                                              style="
                                                                font-size: 20px;
                                                                font-weight: 400;
                                                                color: #111111;
                                                                margin: 0;
                                                              "
                                                            >
                                                              If you dit not register, please reply to let us know.
                                                            </h2>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                  <!-- PERMISSION REMINDER -->
                                                  <tr>
                                                    <td
                                                      bgcolor="#f4f4f4"
                                                      align="left"
                                                      style="
                                                        padding: 0px 30px 30px 30px;
                                                        color: #666666;
                                                        font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                        font-size: 14px;
                                                        font-weight: 400;
                                                        line-height: 18px;
                                                      "
                                                    >
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </body>
                                      </html>`
                                }
                                transporter.sendMail(mailOptions, (err, data) => {
                                    if (err) {
                                        console.log("Its Error: ", err);
                                    } else {
                                        console.log(`Sent to ${body.email} Success!!!!`);
                                        resolve({
                                            status: 200,
                                            message: `Register success`
                                        })
                                    }
                                })

                            } else {
                                reject({
                                    status: 500,
                                    message: `Internal server error`,
                                    details: err
                                })
                            }
                        })
                    } else {
                        reject({
                            msg: `ERROR!`,
                            details: err
                        })
                    }
                })
            })
        })
    },
    activate: (email, otp) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT * FROM tb_otp_activation WHERE email = ? AND otp = ?`
            db.query(queryStr, [email, otp], (err, data) => {
                if (!err) {
                    if (data[0]) {
                        const qs = `DELETE FROM tb_otp_activation WHERE email = ? and otp = ?`
                        db.query(qs, [email, otp], (err, data) => {
                            if (!err) {
                                const activateAcc = `UPDATE tb_user SET isActive = 1 WHERE email = ?`
                                db.query(activateAcc, email, (err, data) => {
                                    if (!err) {
                                        resolve({
                                            status: 200,
                                            message: `Selamat akun anda berhasil diaktivasi`,
                                            email: email
                                        })
                                    } else {
                                        reject({
                                            status: 500,
                                            message: `INTERNAL SERVER ERROR`,
                                            details: err
                                        })
                                    }
                                })
                            } else {
                                reject({
                                    status: 500,
                                    message: `INTERNAL SERVER ERROR`,
                                    details: err
                                })
                            }
                        })
                    } else {
                        reject({
                            status: 404,
                            message: `Kode OTP tidak sesuai atau email belum terdaftar atau akun sudah pernah di aktivasi`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: `INTERNAL SERVER ERROR`,
                        details: err
                    })
                }
            })
        })
    },
    resend: (email) => {
        return new Promise((resolve, reject) => {
            const getUser = `SELECT email, isActive FROM tb_user WHERE email = ?`
            db.query(getUser, email, (err, data) => {
                if (!err) {
                    if (data[0]) {
                        if (data[0].isActive != 0) {
                            resolve({
                                status: 200,
                                message: `Akun anda sudah pernah di aktivasi`
                            })
                        } else {
                            const delOtp = `DELETE FROM tb_otp_activation WHERE email = ?`
                            db.query(delOtp, email, (err, data) => {
                                if (!err) {
                                    const otpCode = otp.generate(6, { alphabets: true, upperCase: true, specialChars: false })
                                    const dataResend = {
                                        email: email,
                                        otp: otpCode
                                    }
                                    const queryStr = `INSERT INTO tb_otp_activation SET ?`
                                    db.query(queryStr, dataResend, (err, data) => {
                                        if (!err) {
                                            let transporter = nodemailer.createTransport({
                                                service: 'gmail',
                                                host: 'smtp.gmail.com',
                                                port: 578,
                                                secure: false,
                                                auth: {
                                                    user: process.env.USER_EMAIL,
                                                    pass: process.env.PASS_EMAIL
                                                }
                                            })
                                            // console.log(process.env.USER_EMAIL, process.env.PASS_EMAIL)

                                            let mailOptions = {
                                                from: "Blanja <admin@blanja.com>",
                                                to: email,
                                                subject: 'OTP Code Activation Account',
                                                html:
                                                    ` 
                                                <h1> OTP CODE from Blanja.in Team </h1>
                                                <p> Hello, this is you OTP code</p> 
                                                <h2>${otpCode}</h2>
                                                <p> Use it to Activate Account </p>
                                                `
                                            }
                                            transporter.sendMail(mailOptions, (err, data) => {
                                                if (err) {
                                                    console.log("Its Error: ", err);
                                                } else {
                                                    console.log("Sent Success!!!!");
                                                    resolve({
                                                        status: 200,
                                                        message: `Kode OTP telah dikirim ulang ke email anda`
                                                    })
                                                }
                                            })

                                        } else {
                                            reject({
                                                status: 500,
                                                message: `Internal server error`,
                                                details: err
                                            })
                                        }
                                    })
                                } else {
                                    reject({
                                        status: 500,
                                        message: `Internal server error`,
                                        details: err
                                    })
                                }
                            })
                        }
                    } else {
                        reject({
                            status: 404,
                            message: `Email tidak ditemukan`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err
                    })
                }
            })

        })
    },
    postLogin: (body) => {
        return new Promise((resolve, reject) => {
            const { email, password } = body
            const queryStr = `SELECT id, email, password, level_id, name, isVerified FROM users WHERE email = ?`
            db.query(queryStr, email, (err, data) => {
                if (err) {
                    reject({
                        status: 500,
                        msg: `Error ditemukan pada query`
                    })
                } else {
                    //no result data 
                    if (data.length < 1) {
                        reject({
                            status: 404,
                            msg: `Username atau password salah!`
                        })
                    } else if (data[0].isVerified == 0) {
                        reject({
                            status: 401,
                            msg: `Please activate your account first!`
                        })
                    } else {
                        //comparing pw
                        bcrypt.compare(password, data[0].password, (error, result) => {
                            //what is this ?
                            if (error) {
                                reject({
                                    status: 500,
                                    msg: `Proses Hash Error!`
                                })
                            }
                            //result error ?
                            if (!result) {
                                reject({
                                    status: 404,
                                    msg: `Username atau Password salah!`
                                })
                            } else {
                                //sign result to payload jwt
                                const payload = {
                                    user_id: data[0].id,
                                    email,
                                    fullname: data[0].name,
                                    level: data[0].level_id
                                }
                                //generate token 
                                const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" })
                                //resolve token to user(FE)
                                resolve({
                                    user_id: data[0].id,
                                    email,
                                    name: data[0].name,
                                    level: data[0].level_id,
                                    token
                                })
                            }

                        })

                    }
                }

            })
        })
    },
    postForgot: (email) => {
        return new Promise((resolve, reject) => {
            const getUser = `SELECT email FROM users WHERE email = ?`
            db.query(getUser, email, (err, data) => {
                if (!err) {
                    if (data[0]) {
                        const delOtp = `DELETE FROM tb_otp WHERE email = ?`
                        db.query(delOtp, email, (err, data) => {
                            if (!err) {
                                const otpCode = otp.generate(6, { alphabets: false, upperCase: false, specialChars: false })
                                const dataResend = {
                                    email: email,
                                    otp: otpCode
                                }
                                const queryStr = `INSERT INTO tb_otp SET ?`
                                db.query(queryStr, dataResend, (err, data) => {
                                    if (!err) {
                                        let transporter = nodemailer.createTransport({
                                            service: 'gmail',
                                            host: 'smtp.gmail.com',
                                            port: 578,
                                            secure: false,
                                            auth: {
                                                user: process.env.USER_EMAIL,
                                                pass: process.env.PASS_EMAIL
                                            }
                                        })
                                        // console.log(process.env.USER_EMAIL, process.env.PASS_EMAIL)

                                        let mailOptions = {
                                            from: "Blanja <admin@blanja.com>",
                                            to: email,
                                            subject: 'Reset Password - Blanja',
                                            html:
                                                `<html>
                                                <head>
                                                  <title></title>
                                                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                                                  <style type="text/css">
                                                    /* FONTS */
                                                    @media screen {
                                                      @font-face {
                                                        font-family: "Lato";
                                                        font-style: normal;
                                                        font-weight: 400;
                                                        src: local("Lato Regular"), local("Lato-Regular"),
                                                          url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                                                            format("woff");
                                                      }
                                              
                                                      @font-face {
                                                        font-family: "Lato";
                                                        font-style: normal;
                                                        font-weight: 700;
                                                        src: local("Lato Bold"), local("Lato-Bold"),
                                                          url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                                                            format("woff");
                                                      }
                                              
                                                      @font-face {
                                                        font-family: "Lato";
                                                        font-style: italic;
                                                        font-weight: 400;
                                                        src: local("Lato Italic"), local("Lato-Italic"),
                                                          url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                                                            format("woff");
                                                      }
                                              
                                                      @font-face {
                                                        font-family: "Lato";
                                                        font-style: italic;
                                                        font-weight: 700;
                                                        src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
                                                          url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                                                            format("woff");
                                                      }
                                                    }
                                              
                                                    /* CLIENT-SPECIFIC STYLES */
                                                    body,
                                                    table,
                                                    td,
                                                    a {
                                                      -webkit-text-size-adjust: 100%;
                                                      -ms-text-size-adjust: 100%;
                                                    }
                                                    table,
                                                    td {
                                                      mso-table-lspace: 0pt;
                                                      mso-table-rspace: 0pt;
                                                    }
                                                    img {
                                                      -ms-interpolation-mode: bicubic;
                                                    }
                                              
                                                    /* RESET STYLES */
                                                    img {
                                                      border: 0;
                                                      height: auto;
                                                      line-height: 100%;
                                                      outline: none;
                                                      text-decoration: none;
                                                    }
                                                    table {
                                                      border-collapse: collapse !important;
                                                    }
                                                    body {
                                                      height: 100% !important;
                                                      margin: 0 !important;
                                                      padding: 0 !important;
                                                      width: 100% !important;
                                                    }
                                              
                                                    /* iOS BLUE LINKS */
                                                    a[x-apple-data-detectors] {
                                                      color: inherit !important;
                                                      text-decoration: none !important;
                                                      font-size: inherit !important;
                                                      font-family: inherit !important;
                                                      font-weight: inherit !important;
                                                      line-height: inherit !important;
                                                    }
                                              
                                                    /* ANDROID CENTER FIX */
                                                    div[style*="margin: 16px 0;"] {
                                                      margin: 0 !important;
                                                    }
                                                  </style>
                                                </head>
                                                <body
                                                  style="
                                                    background-color: #f4f4f4;
                                                    margin: 0 !important;
                                                    padding: 0 !important;
                                                  "
                                                >
                                                  <!-- HIDDEN PREHEADER TEXT -->
                                                  <div
                                                    style="
                                                      display: none;
                                                      font-size: 1px;
                                                      color: #fefefe;
                                                      line-height: 1px;
                                                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                      max-height: 0px;
                                                      max-width: 0px;
                                                      opacity: 0;
                                                      overflow: hidden;
                                                    "
                                                  >
                                                    Looks like you tried signing in a few too many times. Let's see if we can
                                                    get you back into your account.
                                                  </div>
                                              
                                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <!-- LOGO -->
                                                    <tr>
                                                      <td bgcolor="#f4f4f4" align="center">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                          <tr>
                                                            <td
                                                              align="center"
                                                              valign="top"
                                                              style="padding: 40px 10px 40px 10px"
                                                            >
                                                                <img
                                                                  alt="Logo"
                                                                  src="https://i.ibb.co/QrC6w3f/Group-1158.png"
                                                                  width="100"
                                                                  height="100"
                                                                  style="
                                                                    display: block;
                                                                    font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                                    color: #ffffff;
                                                                    font-size: 18px;
                                                                  "
                                                                  border="0"
                                                                />
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- HERO -->
                                                    <tr>
                                                      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                          <tr>
                                                            <td
                                                              bgcolor="#ffffff"
                                                              align="center"
                                                              valign="top"
                                                              style="
                                                                padding: 40px 20px 20px 20px;
                                                                border-radius: 4px 4px 0px 0px;
                                                                color: #111111;
                                                                font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                                font-size: 48px;
                                                                font-weight: 400;
                                                                letter-spacing: 4px;
                                                                line-height: 48px;
                                                              "
                                                            >
                                                              <h1 style="font-size: 32px; font-weight: 400; margin: 0">
                                                                One Time Password
                                                              </h1>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- COPY BLOCK -->
                                                    <tr>
                                                      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                          <!-- COPY -->
                                                          <tr>
                                                            <td
                                                              bgcolor="#ffffff"
                                                              align="left"
                                                              style="
                                                                padding: 20px 30px 40px 30px;
                                                                color: #666666;
                                                                font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                                font-size: 18px;
                                                                font-weight: 400;
                                                                line-height: 25px;
                                                              "
                                                            >
                                                              <p style="margin: 0">
                                                                You recently requested to reset your password for your Blanja
                                                                Account.
                                                              </p>
                                                            </td>
                                                          </tr>
                                                          <!-- BULLETPROOF BUTTON -->
                                                          <tr>
                                                            <td bgcolor="#ffffff" align="left">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                  <td
                                                                    bgcolor="#ffffff"
                                                                    align="center"
                                                                    style="padding: 20px 30px 60px 30px"
                                                                  >
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                        <td
                                                                          align="center"
                                                                          style="
                                                                            border-radius: 3px;
                                                                            font-size: 20px;
                                                                            font-family: Helvetica, Arial, sans-serif;
                                                                            color: #ffffff;
                                                                            text-decoration: none;
                                                                            color: #ffffff;
                                                                            text-decoration: none;
                                                                            padding: 15px 25px;
                                                                            border-radius: 2px;
                                                                            border: 1px solid #7c72dc;
                                                                            display: inline-block;
                                                                          "
                                                                          bgcolor="#DB3022"
                                                                        >
                                                                          ${otpCode}
                                                                        </td>
                                                                      </tr>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- COPY CALLOUT -->
                                                    <tr>
                                                      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                          <!-- SUPPORT CALLOUT -->
                                                          <tr>
                                                            <td
                                                              bgcolor="#f4f4f4"
                                                              align="center"
                                                              style="padding: 30px 10px 0px 10px"
                                                            >
                                                              <table border="0" cellpadding="0" cellspacing="0" width="480">
                                                                <!-- HEADLINE -->
                                                                <tr>
                                                                  <td
                                                                    bgcolor="#C6C2ED"
                                                                    align="center"
                                                                    style="
                                                                      padding: 30px 30px 30px 30px;
                                                                      border-radius: 4px 4px 4px 4px;
                                                                      color: #666666;
                                                                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                                      font-size: 18px;
                                                                      font-weight: 400;
                                                                      line-height: 25px;
                                                                    "
                                                                  >
                                                                    <h2
                                                                      style="
                                                                        font-size: 20px;
                                                                        font-weight: 400;
                                                                        color: #111111;
                                                                        margin: 0;
                                                                      "
                                                                    >
                                                                      If you dit not request a password reset, please ignore
                                                                      this email or reply to let us know.
                                                                    </h2>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                          <!-- PERMISSION REMINDER -->
                                                          <tr>
                                                            <td
                                                              bgcolor="#f4f4f4"
                                                              align="left"
                                                              style="
                                                                padding: 0px 30px 30px 30px;
                                                                color: #666666;
                                                                font-family: 'Lato', Helvetica, Arial, sans-serif;
                                                                font-size: 14px;
                                                                font-weight: 400;
                                                                line-height: 18px;
                                                              "
                                                            >
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </body>
                                              </html>`
                                        }
                                        transporter.sendMail(mailOptions, (err, data) => {
                                            if (err) {
                                                console.log("Its Error: ", err);
                                            } else {
                                                console.log("Sent Success!!!!");
                                                resolve({
                                                    status: 200,
                                                    message: `Kode OTP telah dikirim ulang ke email anda`
                                                })
                                            }
                                        })

                                    } else {
                                        reject({
                                            status: 500,
                                            message: `Internal server error`,
                                            details: err
                                        })
                                    }
                                })
                            } else {
                                reject({
                                    status: 500,
                                    message: `Internal server error`,
                                    details: err
                                })
                            }
                        })
                    } else {
                        reject({
                            status: 404,
                            message: `Email tidak ditemukan`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err
                    })
                }
            })

        })
    },
    getOtp: (email, otp) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT * FROM tb_otp WHERE email = ? AND otp = ?`
            db.query(queryStr, [email, otp], (err, data) => {
                if (!err) {
                    if (data[0]) {
                        const qs = `DELETE FROM tb_otp WHERE email = ? and otp = ?`
                        db.query(qs, [email, otp], (err, data) => {
                            if (!err) {
                                resolve({
                                    status: 200,
                                    message: `Silahkan set ulang password anda`,
                                    email: email
                                })
                            } else {
                                reject({
                                    status: 500,
                                    message: `INTERNAL SERVER ERROR`,
                                    details: err
                                })
                            }
                        })
                    } else {
                        reject({
                            status: 404,
                            message: `Kode OTP tidak sesuai`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: `INTERNAL SERVER ERROR`,
                        details: err
                    })
                }
            })
        })
    },
    resetPassword: (email, newPassword) => {
        return new Promise((resolve, reject) => {
            const saltRounds = Math.floor(Math.random() * 10) + 1
            bcrypt.hash(newPassword, saltRounds, (err, hashedPassword) => {
                if (!err) {
                    newPassword = hashedPassword
                    const queryStr = `UPDATE users SET password = ? WHERE email = ?`
                    db.query(queryStr, [newPassword, email], (err, data) => {
                        console.log(err, data)
                        if (!err) {
                            console.log('sukses')
                            resolve({
                                status: 200,
                                message: `Password berhasil di ubah`
                            })
                        } else {
                            reject({
                                status: 500,
                                message: `INTERNAL SERVER ERROR`,
                                details: err
                            })
                        }
                    })
                } else {
                    reject({
                        status: 500,
                        message: `INTERNAL SERVER ERROR`,
                        details: err
                    })
                }
            })

        })
    },
    postLogout: (blacklisToken) => {
        return new Promise((resolve, reject) => {
            const queryStr = "INSERT INTO blacklist_token SET ?"
            db.query(queryStr, blacklisToken, (err, data) => {
                if (!err) {
                    resolve({
                        msg: `Logout succesful`
                    })
                } else {
                    reject({
                        msg: `GAGAL!`
                    })
                }
            })
        })
    },
    expiredToken: (token) => {
        return new Promise((resolve, reject) => {
            try {
                const tokenNotExpired = jwt.verify(token, process.env.SECRET_KEY)
                console.log(tokenNotExpired)
                resolve({
                    status: 200,
                    message: `Token masih berfungsi`
                })
            } catch (error) {
                reject({
                    status: 401,
                    message: 'token Expired'
                })
            }
        })
    },

}