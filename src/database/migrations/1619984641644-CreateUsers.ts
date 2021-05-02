import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619984641644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'cart_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
