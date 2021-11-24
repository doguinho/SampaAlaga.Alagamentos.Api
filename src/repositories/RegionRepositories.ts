import {EntityRepository, Repository} from 'typeorm'
import {Region} from '../database/entities/Region'

@EntityRepository(Region)
class RegionRepo extends Repository<Region> {

}

export {RegionRepo}