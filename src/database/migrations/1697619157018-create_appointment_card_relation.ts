import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointmentCardRelation1697619157018
  implements MigrationInterface
{
  name = 'CreateAppointmentCardRelation1697619157018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "card" ADD "appointmentId" integer`);
    await queryRunner.query(
      `ALTER TABLE "card" ADD CONSTRAINT "FK_4e3e82331646bb7efdf5ed3544a" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card" DROP CONSTRAINT "FK_4e3e82331646bb7efdf5ed3544a"`,
    );
    await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "appointmentId"`);
  }
}
