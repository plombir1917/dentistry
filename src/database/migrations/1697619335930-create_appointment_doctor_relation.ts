import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAppointmentDoctorRelation1697619335930 implements MigrationInterface {
    name = 'CreateAppointmentDoctorRelation1697619335930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" ADD "doctorId" integer`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_514bcc3fb1b8140f85bf1cde6e2"`);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "doctorId"`);
    }

}
