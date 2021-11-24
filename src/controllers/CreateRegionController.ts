import {Request,Response} from 'express'
import { CreateRegionService, RegionRequest } from '../services/CreateRegionService'

class CreateRegionController {

  async handle(request:Request, response:Response) {

    const {
      sp_cod,
      sigla,
      nome,
      idZona,
      nomeZona,
      dtUltSituacao,
      idSituacao,
      nomeSituacao,
      rgb
    } = request.body

    const newRegion:RegionRequest = {
      sp_cod:sp_cod,
      sigla:sigla,
      nome:nome,
      idZona:idZona,
      nomeZona:nomeZona,
      dtUltSituacao:dtUltSituacao,
      idSituacao:idSituacao,
      nomeSituacao:nomeSituacao,
      rgb:rgb,
    }

    const createRegionService = new CreateRegionService()
    const region = await createRegionService.execute(newRegion)
    return response.json(region)
  }

}

export {CreateRegionController}