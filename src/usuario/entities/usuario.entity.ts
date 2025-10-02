import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_usuario"})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    usuario: string;

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    senha: string;

    @Column({length: 5000})
    foto: string;

    // @OneToMany(() => Corrida, (corrida) => corrida.usuario, {cascade: true})
    // corrida: Corrida[];
}