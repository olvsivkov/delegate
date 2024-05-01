const express = require('express');
const router = express.Router();
const multer = require('multer')

const uploadDestination = 'uploads'

// показываем где хранить файлы
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function(req, file, cb) { // функция сделает имя файла уникальным.
    cb(null, file.originalname)
  }
});

const uploads = multer({storage: storage})

router.get('/register', (req, res) => {
  res.send('register ok');
})

module.exports = router;