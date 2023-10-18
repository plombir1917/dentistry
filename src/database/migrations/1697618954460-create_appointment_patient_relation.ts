import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointmentPatientRelation1697618954460
  implements MigrationInterface
{
  name = 'CreateAppointmentPatientRelation1697618954460';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD "patientId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD CONSTRAINT "FK_5ce4c3130796367c93cd817948e" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointment" DROP CONSTRAINT "FK_5ce4c3130796367c93cd817948e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" DROP COLUMN "patientId"`,
    );
  }
}
