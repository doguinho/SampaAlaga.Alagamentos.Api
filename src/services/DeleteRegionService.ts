import { getMongoManager } from "typeorm"
import { Region } from "../database/entities/Region";


class DeleteRegionService {

  async execute(region: {sigla: string, sp_cod:number}) {

    const manager = getMongoManager();

    const reqElements = [
      region.sigla,
      region.sp_cod,
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

    try {
      await manager.delete(Region,{sigla: region.sigla, sp_cod:region.sp_cod})      
    } catch (error) {
      console.log(error)
      return "Não foi possível atualizar"
    }
    
    return region

  }

}

export {DeleteRegionService}