import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { MusicalGroup } from "./musicalGroup.entities"

@Entity("kpop_artists")
export class Artist{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 20 })
    name: string

    @Column({ type: "text", nullable: true, default: null })
    description?: string | undefined | null

    @Column({ type: "varchar", length: 256 })
    image: string

    @Column({ type: "integer" })
    vocal: number

    @Column({ type: "integer" })
    dance: number

    @Column({ type: "integer" })
    standardKorean: number

    @Column({ type: "integer" })
    popularity: number

    @Column({ type: "integer" })
    rap: number

    @Column({ type: "integer" })
    stagePresence: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @ManyToOne(() => MusicalGroup, (musicalGroup) => musicalGroup.kpopArtists, { onDelete: "CASCADE" })
    musicalGroup: MusicalGroup
}