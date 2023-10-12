import { MigrationInterface, QueryRunner } from 'typeorm';

export class TypeofDateTimestampz1697098967532 implements MigrationInterface {
  name = 'TypeofDateTimestampz1697098967532';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD "date" TIMESTAMP WITH TIME ZONE NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "appointment" ADD "date" TIMESTAMP NOT NULL`,
    );
  }
}
