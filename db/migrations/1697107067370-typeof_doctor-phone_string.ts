import { MigrationInterface, QueryRunner } from "typeorm";

export class TypeofDoctorPhoneString1697107067370 implements MigrationInterface {
    name = 'TypeofDoctorPhoneString1697107067370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "phone" integer NOT NULL`);
    }

}
