import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePatientEntity1697617256984 implements MigrationInterface {
  name = 'CreatePatientEntity1697617256984';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "patient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "insurance" integer NOT NULL, "birth" TIMESTAMP NOT NULL, CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "patient"`);
  }
}
