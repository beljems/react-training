const path = require('path');
const express = require('express');
const cors = require('cors')
const multer  = require('multer')
const app = express();

app.use(cors());

const randomNum = Math.floor(Math.random() * 11)

//path.parse(file.originalname).name+randomNum+path.parse(file.originalname).ext

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './../src/assets/images/post')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage })

// const router = express.Router();
// router.post('/file', upload.single('file'), (req, res, next) => {
//   console.log(req)
// });

// Upload Image
app.post('/file', upload.single('file'), (req, res, next) => {
  console.log(req)
});

app.listen(5000, () => console.log('Upload Server running to port 5000!'));
