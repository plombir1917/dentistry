import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointmentToothMmEntityRelation1697618266190
  implements MigrationInterface
{
  name = 'CreateAppointmentToothMmEntityRelation1697618266190';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appointment_tooth" ("id" SERIAL NOT NULL, "appointmentId" integer, "toothId" integer, CONSTRAINT "PK_2010da027fc4803dc2f0ea5ef77" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" ADD CONSTRAINT "FK_df5b48b7404a788e0f3355d863b" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" ADD CONSTRAINT "FK_d8b6135696bc5fb79f4d4c366c7" FOREIGN KEY ("toothId") REFERENCES "tooth"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" DROP CONSTRAINT "FK_d8b6135696bc5fb79f4d4c366c7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" DROP CONSTRAINT "FK_df5b48b7404a788e0f3355d863b"`,
    );
    await queryRunner.query(`DROP TABLE "appointment_tooth"`);
  }
}
