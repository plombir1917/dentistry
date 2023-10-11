import { MigrationInterface, QueryRunner } from 'typeorm';

export class First1697016869630 implements MigrationInterface {
  name = 'First1697016869630';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "card" ("id" SERIAL NOT NULL, "diagnosis" character varying NOT NULL, "conclusion" character varying NOT NULL, "recommendations" character varying NOT NULL, "appointmentId" integer, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "doctor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" integer NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "patient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" integer NOT NULL, "insurance" integer NOT NULL, "birth" TIMESTAMP NOT NULL, CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tooth" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "condition" character varying NOT NULL, CONSTRAINT "PK_0a71cafc77eae5d19645aff3d63" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointment_tooth" ("id" SERIAL NOT NULL, "appointmentId" integer, "toothId" integer, CONSTRAINT "PK_2010da027fc4803dc2f0ea5ef77" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointment" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "description" character varying NOT NULL, "patientId" integer, "doctorId" integer, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointment_service" ("id" SERIAL NOT NULL, "serviceId" integer, "appointmentId" integer, CONSTRAINT "PK_a170b01d5845a629233fb80a51a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "card" ADD CONSTRAINT "FK_4e3e82331646bb7efdf5ed3544a" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" ADD CONSTRAINT "FK_df5b48b7404a788e0f3355d863b" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" ADD CONSTRAINT "FK_d8b6135696bc5fb79f4d4c366c7" FOREIGN KEY ("toothId") REFERENCES "tooth"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD CONSTRAINT "FK_5ce4c3130796367c93cd817948e" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
    await queryRunner.query(
      `ALTER TABLE "appointment" DROP CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment" DROP CONSTRAINT "FK_5ce4c3130796367c93cd817948e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" DROP CONSTRAINT "FK_d8b6135696bc5fb79f4d4c366c7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "appointment_tooth" DROP CONSTRAINT "FK_df5b48b7404a788e0f3355d863b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "card" DROP CONSTRAINT "FK_4e3e82331646bb7efdf5ed3544a"`,
    );
    await queryRunner.query(`DROP TABLE "appointment_service"`);
    await queryRunner.query(`DROP TABLE "appointment"`);
    await queryRunner.query(`DROP TABLE "appointment_tooth"`);
    await queryRunner.query(`DROP TABLE "tooth"`);
    await queryRunner.query(`DROP TABLE "patient"`);
    await queryRunner.query(`DROP TABLE "doctor"`);
    await queryRunner.query(`DROP TABLE "card"`);
    await queryRunner.query(`DROP TABLE "service"`);
  }
}
