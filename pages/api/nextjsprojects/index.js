import dbConnect from '../../../utils/dbConnect'
import NextjsProject from '../../../models/NextjsProject'

dbConnect()

export default async function index(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const projects = await NextjsProject.find({})
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break

    case 'POST':
      try {
        const project = await NextjsProject.create(req.body)
        res.status(200).json({ success: true, data: project })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break

    default:
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      res.status(400).json({ success: false, error: message })
      break
  }
}
