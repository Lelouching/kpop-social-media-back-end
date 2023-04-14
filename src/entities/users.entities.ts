import { Artist } from "./kpopArtists.entities"
import { MusicalGroup } from "./musicalGroup.entities"
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 20 })
    name: string

    @Column({ type: "varchar", length: 20, unique: true })
    uniqueName: string

    @Column({ type: "varchar", length: 256, nullable: true, default: false })
    image?: string | undefined | null

    @Column({ type: "text", nullable: true, default: true })
    description?: string | undefined | null

    @Column({ type: "varchar", length: 50, unique: true })
    email: string

    @Column({ type: "varchar", length: 120 })
    password: string

    @Column({ type: "boolean", default: false })
    admin: boolean

    @CreateDateColumn({ type: "datetime" })
    createdAt: string

    @UpdateDateColumn({ type: "datetime" })
    updatedAt: string

    @DeleteDateColumn({ type: "datetime" })
    deletedAt: string

    @ManyToMany(() => MusicalGroup)
    @JoinTable()
    favouriteMusicalGroups: MusicalGroup[]

    @ManyToMany(() => Artist)
    @JoinTable()
    favouriteKpopArtists: Artist[]
}