import express from 'express'

import { upload } from './upload'

const router = new express.Router()
export default router

/**
* @swagger
* '/upload':
*   post:
*     tags:
*       - Upload
*     summary: Uploads file
*     produces:
*       - application/json
*     consumes:
*       - multipart/form-data
*     parameters:
*       - name: filename
*         in: formData
*         required: true
*         type: file
*       - name: Authorization
*         in: "header"
*         description: base64 encoded username:password
*         required: true
*         type: "string"
*         x-example: Basic Zm9vOmJhcg==
*
*     responses:
*        200:
*          description: "Accepted"
*        400:
*          description: "Bad request description"
*        500:
*          description: "'Internal Server Error' if any error occurs."
*/
router.post('/upload', upload)
