import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateImage1626808397890 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar"
        },
        {
          name: "path",
          type: "varchar"
        },
        {
          name: "url",
          type: "varchar"
        },
        {
          name: "loja_id",
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
          name: "FKLojaImage",
          referencedTableName: "lojas",
          referencedColumnNames: ["id"],
          columnNames: ["loja_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images")
  }

}
