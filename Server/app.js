const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, ()=> {
  console.log('App listening at port 3000');
});





/*router send email*/
const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465, // SMTP 端口
    auth: {
        user: 'm13538489980@163.com',
        pass: 'clz123456'
    }
});




app.post('/sendMail', function(req, res){ // 我们会在后面学到CSRF……目前，只提供一个虚拟值
  console.log("re", req.data);
  const data = {
    name: req.body.name,
    email: req.body.email,
    itemSubject: req.body.itemSubject,
    itemContent: req.body.itemContent
  }

  console.log(data);
  const mailOptions = {
      from: 'm13538489980@163.com', // 发件地址
      to: '314749816@qq.com', // 收件列表
      subject: '无人车技术问题', // 标题
      html: "姓名: " + data.name + "<br/>邮箱：" + data.email + "<br/>问题：" + data.itemSubject + "<br/>详细问题："
      + data.itemContent // html 内容
  };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log("错误：", error);
        } else {
          console.log('Message sent: ' + info.response);
          res.redirect('/success.html');
        }

    });




});
