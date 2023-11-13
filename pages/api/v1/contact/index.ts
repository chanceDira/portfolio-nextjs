import nodemailer from "nodemailer"


export default async function (req: any, res: any) {
    try {
        console.log('req: ', req.body.message)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'chancedesire61@gmail.com',
              pass: 'isadsftfqapsonuz',
            },
          });
          const emailOptions = {
            from: 'chancedesire61@gmail.com',
            to: 'chancedesire60@gmail.com',
            subject: 'Chancedira',
            text: `From: ${req.body.email} \n
            Subject: ${req.body.subject} \n\n
            Message: ${req.body.message}`, // Use the summary data from the API response
          };
      
          await transporter.sendMail(emailOptions);
          console.log('Email sent successfully');
          // ====================================== 
          res.status(200).json({ result: 'Email sent successfully' });
    } catch(error) {
        console.log('error: ', error)
        res.status(500).json({ error: 'Something went wrong. '})
    }
}