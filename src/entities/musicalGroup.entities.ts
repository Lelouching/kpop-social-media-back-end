import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Artist } from "./kpopArtists.entities";

@Entity("musical_group")
export class MusicalGroup{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 50, unique: true })
    name: string

    @Column({ type: "text"})
    description: string

    @Column({ type: "integer" })
    membersQuantity: number

    @CreateDateColumn({ type: "datetime"})
    createdAt: string

    @UpdateDateColumn({ type: "datetime" })
    updatedAt: string

    @OneToMany(() => Artist, (artist) => artist.musicalGroup)
    kpopArtists: Artist[]
}