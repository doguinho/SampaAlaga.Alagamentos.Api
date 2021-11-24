import { getCustomRepository } from "typeorm"
import { RegionRepo } from "../repositories/RegionRepositories"



class ListRegionService {

  async execute() {
    const regionRepo = getCustomRepository(RegionRepo)
    const list = await regionRepo.find()
    return list
  }

}

export {ListRegionService}