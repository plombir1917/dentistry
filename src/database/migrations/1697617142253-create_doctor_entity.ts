import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDoctorEntity1697617142253 implements MigrationInterface {
  name = 'CreateDoctorEntity1697617142253';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "doctor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "doctor"`);
  }
}
