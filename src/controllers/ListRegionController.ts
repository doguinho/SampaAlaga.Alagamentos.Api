import {Request,Response} from 'express'
import { ListRegionService } from '../services/ListRegionService'

class ListRegionController {

  async handle(request:Request, response:Response) {
    const listRegionService = new ListRegionService()
    const regions = await listRegionService.execute()
    return response.json(regions)
  }

}

export {ListRegionController}