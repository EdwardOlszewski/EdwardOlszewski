import dbConnect from '../../../utils/dbConnect'
import Graphics from '../../../models/GraphicsProjects'

dbConnect()

export default async function index(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const project = await Graphics.findById(id)
        res.status(200).json({ success: true, data: project })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break

    case 'DELETE':
      try {
        const deletedItem = await Graphics.deleteOne({ _id: id })

        if (!deletedItem) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break
  }
}
