import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";
import { Image } from './Image';

@Entity("lojas")
class Loja {
  static findOne(arg0: { where: { id: any; }; }) {
    throw new Error('Method not implemented.');
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  url_maps: string;

  @Column({ nullable: true})
  url_gmn?: string;

  @Column()
  cidade_id: string;

  @ManyToOne(() => Cidade)
  @JoinColumn({ name: "cidade_id" })
  cidade: Cidade;

  @OneToMany(() => Image, image => image.loja)
  images: Image[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export {
  Loja
}
