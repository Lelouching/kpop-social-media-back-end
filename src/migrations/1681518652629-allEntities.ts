import { MigrationInterface, QueryRunner } from "typeorm";

export class AllEntities1681518652629 implements MigrationInterface {
    name = 'AllEntities1681518652629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "musical_group" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text NOT NULL, "membersQuantity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b2278cd2d0a9209514afae5dfc2" UNIQUE ("name"), CONSTRAINT "PK_58a9979d2c77f7ab3fe1551f9f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "kpop_artists" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "image" character varying(256) NOT NULL, "vocal" numeric(2,2) NOT NULL, "dance" numeric(2,2) NOT NULL, "standardKorean" numeric(2,2) NOT NULL, "popularity" numeric(2,2) NOT NULL, "rap" numeric(2,2) NOT NULL, "stagePresence" numeric(2,2) NOT NULL, "averagePoints" numeric(2,2) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "musicalGroupId" integer, CONSTRAINT "PK_4b4953d46f9a4eff1fdedaadf6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "username" character varying(20) NOT NULL, "image" character varying(256), "description" text, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_favourite_musical_groups_musical_group" ("usersId" integer NOT NULL, "musicalGroupId" integer NOT NULL, CONSTRAINT "PK_ee47a838e8a31ecf42195961a60" PRIMARY KEY ("usersId", "musicalGroupId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ebb29b0ddc2ecb351223adcc4a" ON "users_favourite_musical_groups_musical_group" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ed64eefefd37ce2cd24b1cdca" ON "users_favourite_musical_groups_musical_group" ("musicalGroupId") `);
        await queryRunner.query(`CREATE TABLE "users_favourite_kpop_artists_kpop_artists" ("usersId" integer NOT NULL, "kpopArtistsId" integer NOT NULL, CONSTRAINT "PK_244a3279d602b4fc4bda7028785" PRIMARY KEY ("usersId", "kpopArtistsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba" ON "users_favourite_kpop_artists_kpop_artists" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6275891f6bbe24a680411ab539" ON "users_favourite_kpop_artists_kpop_artists" ("kpopArtistsId") `);
        await queryRunner.query(`ALTER TABLE "kpop_artists" ADD CONSTRAINT "FK_dac7a7109111cb819a3b10fbea2" FOREIGN KEY ("musicalGroupId") REFERENCES "musical_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_favourite_musical_groups_musical_group" ADD CONSTRAINT "FK_ebb29b0ddc2ecb351223adcc4a9" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favourite_musical_groups_musical_group" ADD CONSTRAINT "FK_6ed64eefefd37ce2cd24b1cdca4" FOREIGN KEY ("musicalGroupId") REFERENCES "musical_group"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favourite_kpop_artists_kpop_artists" ADD CONSTRAINT "FK_ee6b0d6bf155c4d1a374ab12bac" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favourite_kpop_artists_kpop_artists" ADD CONSTRAINT "FK_6275891f6bbe24a680411ab5399" FOREIGN KEY ("kpopArtistsId") REFERENCES "kpop_artists"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_favourite_kpop_artists_kpop_artists" DROP CONSTRAINT "FK_6275891f6bbe24a680411ab5399"`);
        await queryRunner.query(`ALTER TABLE "users_favourite_kpop_artists_kpop_artists" DROP CONSTRAINT "FK_ee6b0d6bf155c4d1a374ab12bac"`);
        await queryRunner.query(`ALTER TABLE "users_favourite_musical_groups_musical_group" DROP CONSTRAINT "FK_6ed64eefefd37ce2cd24b1cdca4"`);
        await queryRunner.query(`ALTER TABLE "users_favourite_musical_groups_musical_group" DROP CONSTRAINT "FK_ebb29b0ddc2ecb351223adcc4a9"`);
        await queryRunner.query(`ALTER TABLE "kpop_artists" DROP CONSTRAINT "FK_dac7a7109111cb819a3b10fbea2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6275891f6bbe24a680411ab539"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ee6b0d6bf155c4d1a374ab12ba"`);
        await queryRunner.query(`DROP TABLE "users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ed64eefefd37ce2cd24b1cdca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ebb29b0ddc2ecb351223adcc4a"`);
        await queryRunner.query(`DROP TABLE "users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "kpop_artists"`);
        await queryRunner.query(`DROP TABLE "musical_group"`);
    }

}
