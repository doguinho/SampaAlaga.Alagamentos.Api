import { getMongoManager } from "typeorm"
import { Region } from "../database/entities/Region";

export interface RegionRequest {
  sp_cod:number,
  sigla:string
  nome:string
  idZona:string
  nomeZona:string
  dtUltSituacao?:number
  idSituacao?:number
  nomeSituacao?:string
  rgb?:string
}

class CreateRegionService {

  async execute(region: RegionRequest) {

    const manager = getMongoManager();

    const reqElements = [
      region.sigla,
      region.nome,
      region.idZona,
      region.nomeZona
    ]

    if (reqElements.findIndex(e => e === undefined) > -1) {
      return "Parâmetros incorretos"
    }

    const userExists = await manager.find(Region,{
      where: {
        $or: [
          {sigla: region.sigla, sp_cod:region.sp_cod}
          ]
      }
    })

    if (userExists) return "Sigla ou COD já existem"      

    const newRegion = new Region(region.sp_cod,region.sigla,region.nome,region.idZona,region.nomeZona)

    try {
      await manager.save(newRegion)      
    } catch (error) {
      console.log(error)
      return "Não foi possível cadastrar"
    }
    
    return region

  }

}

export {CreateRegionService}