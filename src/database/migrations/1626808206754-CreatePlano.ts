import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlano1626808206754 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "planos",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "tipo",
          type: "varchar"
        },
        {
          name: "plano",
          type: "varchar"
        },
        {
          name: "deezer",
          type: "boolean",
          default: false
        },
        {
          name: "looke",
          type: "boolean",
          default: false
        },
        {
          name: "feature1",
          type: "varchar"
        },
        {
          name: "feature2",
          type: "varchar"
        },
        {
          name: "feature3",
          type: "varchar"
        },
        {
          name: "feature4",
          type: "varchar"
        },
        {
          name: "feature5",
          type: "varchar"
        },
        {
          name: "feature6",
          type: "varchar"
        },
        {
          name: "feature7",
          type: "varchar"
        },
        {
          name: "feature8",
          type: "varchar"
        },
        {
          name: "feature9",
          type: "varchar"
        },
        {
          name: "feature10",
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
          name: "FKTagCompliments",
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
    await queryRunner.dropTable("planos")
  }

}
