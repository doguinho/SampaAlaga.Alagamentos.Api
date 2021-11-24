import {Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn} from "typeorm";

@Entity('regioes')
export class Region {

  @ObjectIdColumn()
  _id!: ObjectID;

  @PrimaryColumn()
  readonly sp_cod: number
  readonly sigla: string

  @Column()
  nome:string

  @Column()
  idZona:string

  @Column()
  dtUltSituacao = 1

  @Column()
  nomeZona:string

  @Column()
  idSituacao = 1

  @Column()
  nomeSituacao = 'Observação'

  @Column()
  rgb = "cccccc"

  constructor(
    sp_cod:number,
    sigla:string,
    nome:string,
    idZona:string,
    nomeZona:string
    ) {
    this.sp_cod = sp_cod
    this.sigla = sigla
    this.nome = nome
    this.idZona = idZona
    this.nomeZona = nomeZona
  }

}
