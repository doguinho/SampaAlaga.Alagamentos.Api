import {Request,Response} from 'express'
import { CreateRegionService } from '../services/CreateRegionService'
import { DeleteRegionService } from '../services/DeleteRegionService'

class DeleteRegionController {

  async handle(request:Request, response:Response) {

    const {
      sp_cod,
      sigla,
    } = request.body

    const newRegion = {
      sp_cod:sp_cod,
      sigla:sigla
    }

    const deleteRegionService = new DeleteRegionService()
    const region = await deleteRegionService.execute(newRegion)
    return response.json(region)
  }

}

export {DeleteRegionController}