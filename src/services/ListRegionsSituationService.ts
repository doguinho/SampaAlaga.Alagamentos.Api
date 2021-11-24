import { getMongoManager } from "typeorm"
import { Region } from "../database/entities/Region";

interface Situation {
  id: number,
  color: string,
  name: string,
  class: string,
  regions: number[]
}

class ListRegionSituationService {

  async execute() {

    const manager = getMongoManager()

    const regions = await manager.find(Region,
      {
        where: {
          idSituacao: { $not: { $in: [1] } },
        }
      })

    const situation: Situation[] = [
      {
        id: 2,
        name: 'Atenção',
        class: 'attention',
        color: 'rgba(255,255,0)',
        regions: regions.filter(r => r.idSituacao === 2).map(r => r.sp_cod)
      },
      {
        id: 3,
        name: 'Alerta',
        color: 'rgb(255,153,0)',
        class: 'alert',
        regions: regions.filter(r => r.idSituacao === 3).map(r => r.sp_cod)
      },
      {
        id: 4,
        name: 'Alagamentos',
        class: 'overflow',
        color: 'rgb(255,0,0)',
        regions: regions.filter(r => r.idSituacao === 4).map(r => r.sp_cod)
      }
    ]

    return situation

  }

}

export { ListRegionSituationService }