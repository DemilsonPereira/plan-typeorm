import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterCidadeAddColumn1626808051300 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "cidades",
      new TableColumn({
        name: "estado",
        type: "varchar"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("cidades", "estado");
  }

}
