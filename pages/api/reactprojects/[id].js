import dbConnect from '../../../utils/dbConnect'
import ReactProject from '../../../models/ReactProject'

dbConnect()

export default async function index(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const project = await ReactProject.findById(id)
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
        const deletedItem = await ReactProject.deleteOne({ _id: id })

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

    case 'PUT':
      try {
        const project = await ReactProject.findById(id)
        var updatedProject = ''
        if (project) {
          project.gitHubLink = project.gitHubLink
          project.webLink = project.webLink
          project.myRole = project.myRole
          project.projectDif = project.projectDif
          project.mySolution = project.mySolution
          project.imgURL = project.imgURL

          updatedProject = await project.save()
        }

        res.status(200).json({ success: true, data: updatedProject })
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
