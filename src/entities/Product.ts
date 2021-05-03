import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'


@Entity('products')
export class Product {

    @PrimaryColumn()
    id: string

    @Column()
    name: string
    
    @Column()
    price: number
    
    @Column()
    sales: number
    
    @Column()
    variant: string
    
    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date

    constructor() {
        // o constructor será chamado toda vex que for criada um instancia dessa classe (ex: new Setting)
        // Queremos popular o campo de id dentro do servidor, então vamos criar essa condicao:
        if (!this.id) {
            // se nao houver id ao inserir um dado, o id será gerado aqui pelo uuid v4
            this.id = uuid()
        }
    }
}