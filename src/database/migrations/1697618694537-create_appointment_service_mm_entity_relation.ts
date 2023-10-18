import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppointmentServiceMmEntityRelation1697618694537
  implements MigrationInterface
{
  name = 'CreateAppointmentServiceMmEntityRelation1697618694537';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appointment_service" ("id" SERIAL NOT NULL, "serviceId" integer, "appointmentId" integer, CONSTRAINT "PK_a170b01d5845a629233fb80a51a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_service" ADD CONSTRAINT "FK_1963f7aba7148362308fd7a5637" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_service" ADD CONSTRAINT "FK_040c82b23e660475d29615eaac5" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointment_service" DROP CONSTRAINT "FK_040c82b23e660475d29615eaac5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_service" DROP CONSTRAINT "FK_1963f7aba7148362308fd7a5637"`,
    );
    await queryRunner.query(`DROP TABLE "appointment_service"`);
  }
}
