import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointmentEntity1697616813877
  implements MigrationInterface
{
  name = 'CreateAppointmentEntity1697616813877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appointment" ("id" SERIAL NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "status" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "appointment"`);
  }
}
