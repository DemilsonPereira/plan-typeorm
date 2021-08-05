import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Loja } from "./Loja";

@Entity("images")
class Image {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column()
  url: string;

  @JoinColumn({ name: "loja_id" })
  @ManyToOne(() => Loja)
  loja_id: Loja

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
  Image
}
