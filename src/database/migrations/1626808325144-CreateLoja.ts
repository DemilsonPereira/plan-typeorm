import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLoja1626808325144 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "lojas",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "cep",
          type: "varchar"
        },
        {
          name: "logradouro",
          type: "varchar"
        },
        {
          name: "numero",
          type: "varchar"
        },
        {
          name: "complemento",
          type: "varchar"
        },
        {
          name: "bairro",
          type: "varchar"
        },
        {
          name: "url_maps",
          type: "varchar"
        },
        {
          name: "cidade_id",
          type: "uuid",
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()"
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()"
        }
      ],
      foreignKeys: [
        {
          name: "FKCidadeLoja",
          referencedTableName: "cidades",
          referencedColumnNames: ["id"],
          columnNames: ["cidade_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("lojas")
  }

}
