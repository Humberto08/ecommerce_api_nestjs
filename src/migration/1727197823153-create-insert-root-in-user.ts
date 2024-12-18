import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInsertRootInUser1727197823153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public."user"(
                name, email, cpf, type_user, phone, password)
                VALUES ('root', 'root@root.com', '12345678901', 2, '31925325252', '$2b$10$FKchBvTosQubwJPYa5fZh.25qi3uCcbcn/j4Ipd5DwRWbu4vn/StS');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM public."user"
                WHERE email like 'root@root.com';
        `);
  }
}
