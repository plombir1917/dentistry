import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateServiceEntity1697617368054 implements MigrationInterface {
  name = 'CreateServiceEntity1697617368054';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "service"`);
  }
}
