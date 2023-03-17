import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Artist } from "./kpopArtists.entities";

@Entity("musical_group")
export class MusicalGroup{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 50 })
    name: string

    @OneToMany(() => Artist, (artist) => artist.musicalGroup)
    kpopArtists: Artist[]
}