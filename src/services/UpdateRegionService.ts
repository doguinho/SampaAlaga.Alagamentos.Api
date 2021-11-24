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

class UpdateRegionService {

  async execute(region: RegionRequest) {

    const manager = getMongoManager();

    const reqElements = [
      region.sigla,
      region.sp_cod,
      region.nome,
      region.idZona,
      region.nomeZona
    ]

    if (reqElements.findIndex(e => e === undefined) > -1) {
      return "Parâmetros incorretos"
    }

    const regionExists = await manager.find(Region,{
      where: { sp_cod:region.sp_cod}
      }
    )

    if (!regionExists) {
      return "Registro não existe"            
    } 
    
    const newRegion = new Region(region.sp_cod,region.sigla,region.nome,region.idZona,region.nomeZona)

    try {
      await manager.update(Region,{sigla: region.sigla, sp_cod:region.sp_cod},newRegion)      
    } catch (error) {
      console.log(error)
      return "Não foi possível atualizar"
    }
    
    return region

  }

}

export {UpdateRegionService}