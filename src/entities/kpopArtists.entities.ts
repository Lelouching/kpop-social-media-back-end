import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

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
}