import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterLojaAddColumn1628709169993 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "lojas",
      new TableColumn({
        name: "url_gmn",
        type: "varchar"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("lojas", "url_gmn");
  }

}
