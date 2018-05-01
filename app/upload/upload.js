import multer from 'multer'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads')
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`)
  },
})

const multerUpload = multer({ storage }).single('filename')

export function upload(req, res) {
  multerUpload(req, res, (err) => {
    if (err) {
      res.status(500).json({ upload: `Error uploading file ${req.file.originalname}, ${err.message}` })
    } else {
      res.json({ upload: `successfully upload ${req.file.originalname}` })
    }
  })
}
