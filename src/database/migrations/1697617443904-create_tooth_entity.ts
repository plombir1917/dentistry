import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateToothEntity1697617443904 implements MigrationInterface {
  name = 'CreateToothEntity1697617443904';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tooth" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "condition" character varying NOT NULL, CONSTRAINT "PK_0a71cafc77eae5d19645aff3d63" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tooth"`);
  }
}
