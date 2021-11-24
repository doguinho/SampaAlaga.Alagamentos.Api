import {Request,Response} from 'express'
import { UpdateRegionService, RegionRequest } from '../services/UpdateRegionService'

class UpdateRegionController {

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

    const updateRegionService = new UpdateRegionService()
    const region = await updateRegionService.execute(newRegion)
    return response.json(region)
  }

}

export {UpdateRegionController}