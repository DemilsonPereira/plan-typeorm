import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cidade } from "./Cidade";

@Entity("planos")
class Plano {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  tipo: string;

  @Column()
  plano: string;

  @Column()
  deezer: boolean;

  @Column()
  looke: boolean;

  @Column()
  feature1: string;

  @Column()
  feature2: string;

  @Column()
  feature3: string;

  @Column()
  feature4: string;

  @Column()
  feature5: string;

  @Column()
  feature6: string;

  @Column()
  feature7: string;

  @Column()
  feature8: string;

  @Column()
  feature9: string;

  @Column()
  feature10: string;

  @JoinColumn({ name: "cidade_id" })
  @ManyToOne(() => Cidade)
  cidade_id: Cidade

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
  Plano
}
