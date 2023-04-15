import { getRounds, hashSync } from "bcryptjs";
import { Artist } from "./kpopArtists.entities"
import { MusicalGroup } from "./musicalGroup.entities"
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 25 })
    name: string

    @Column({ type: "varchar", length: 20, unique: true })
    username: string

    @Column({ type: "varchar", length: 256, nullable: true, default: null })
    image?: string | undefined | null

    @Column({ type: "text", nullable: true, default: null })
    description?: string | undefined | null

    @Column({ type: "varchar", length: 50, unique: true })
    email: string

    @Column({ type: "varchar", length: 120 })
    password: string

    @Column({ type: "boolean", default: false })
    admin: boolean

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @ManyToMany(() => MusicalGroup)
    @JoinTable()
    favouriteMusicalGroups: MusicalGroup[]

    @ManyToMany(() => Artist)
    @JoinTable()
    favouriteKpopArtists: Artist[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}