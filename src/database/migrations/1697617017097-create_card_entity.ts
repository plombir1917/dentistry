import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardEntity1697617017097 implements MigrationInterface {
  name = 'CreateCardEntity1697617017097';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card" ("id" SERIAL NOT NULL, "diagnosis" character varying NOT NULL, "conclusion" character varying NOT NULL, "recommendations" character varying NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "card"`);
  }
}
