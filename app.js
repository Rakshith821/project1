var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   var url = req.url;
   if (url === '/sunday') {
      res.write(`<h1>${dates(0)}<h1>`);
      res.end();
   } else if (url === '/monday') {
      res.write(`<h1>${dates(1)}<h1>`);
      res.end();
   } else if (url === '/tuesday') {
      res.write(`<h1>${dates(2)}<h1>`);
      res.end();
   } else if (url === '/wednesday') {
      res.write(`<h1>${dates(3)}<h1>`);
      res.end();
   } else if (url === '/thursday') {
      res.write(`<h1>${dates(4)}<h1>`);
      res.end();
   } else if (url === '/friday') {
      res.write(`<h1>${dates(5)}<h1>`);
      res.end();
   } else if (url === '/saturday') {
      res.write(`<h1>${dates(6)}<h1>`);
      res.end();
   } else {
      res.write('<h1>Hello World!<h1><br><a href="/sunday">Sunday</a><br><a href="/monday">Monday</a><br><a href="/tuesday">Tuesday</a><br><a href="/wednesday">Wednesday</a><br><a href="/thursday">Thursday</a><br><a href="/friday">Friday</a><br><a href="/saturday">Saturday</a><br>');
      res.end();
   }
}).listen(3000, function () {
   console.log("server start at port 3000");
});

function dates(selectedDay) {
  let currentDay = new Date().getDay();
  let displayDate;
  if(currentDay < selectedDay) {
   displayDate = new Date().getDate() + (selectedDay - currentDay);
  } else {
   displayDate = new Date().getDate() - (currentDay - selectedDay);
  }
  let currentMonth = new Date().getMonth() + 1;
  let currentYear = new Date().getFullYear();
  return new Date(`${currentMonth}-${displayDate}-${currentYear}`);
}