const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname+'/public/CSS')));
app.use(express.static(path.join(__dirname+'/public/img')));
app.use(express.static(path.join(__dirname+'/public/JS')));
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/HTML/index.html'));
    //__dirname : It will resolve to your project folder.
  });
//app.get('/', (req, res) => {
    //res.send('An alligator approaches!');
//});
app.use('/', router);
app.listen(3000, () => console.log('Gator app listening on port 3000!'));
