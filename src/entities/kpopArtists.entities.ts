import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { MusicalGroup } from "./musicalGroup.entities"

@Entity("kpop_artists")
export class Artist{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 20 })
    name: string

    @Column({ type: "varchar", length: 256 })
    image: string

    @Column({ type: "decimal", precision: 2, scale: 2 })
    vocal: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    dance: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    standardKorean: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    popularity: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    rap: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    stagePresence: number

    @Column({ type: "decimal", precision: 2, scale: 2 })
    averagePoints: number

    @CreateDateColumn({ type: "datetime"})
    createdAt: string

    @UpdateDateColumn({ type: "datetime" })
    updatedAt: string

    @ManyToOne(() => MusicalGroup, (musicalGroup) => musicalGroup.kpopArtists)
    musicalGroup: MusicalGroup
}