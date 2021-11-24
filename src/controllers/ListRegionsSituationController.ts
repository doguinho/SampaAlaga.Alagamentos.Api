import {Request,Response} from 'express'
import { ListRegionSituationService } from '../services/ListRegionsSituationService'

class ListRegionsSituationController {

  async handle(request:Request, response:Response) {
    const service = new ListRegionSituationService()
    const regions = await service.execute()
    return response.json(regions)
  }

}

export {ListRegionsSituationController}