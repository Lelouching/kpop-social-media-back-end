import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedColumnImageOnMusicalGroup1681706594442 implements MigrationInterface {
    name = 'AddedColumnImageOnMusicalGroup1681706594442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "musical_group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "image" varchar(256) NOT NULL, "description" text NOT NULL, "membersQuantity" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_b2278cd2d0a9209514afae5dfc2" UNIQUE ("name"))`);
        await queryRunner.query(`CREATE TABLE "kpop_artists" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL, "description" text, "image" varchar(256) NOT NULL, "vocal" decimal(2,2) NOT NULL, "dance" decimal(2,2) NOT NULL, "standardKorean" decimal(2,2) NOT NULL, "popularity" decimal(2,2) NOT NULL, "rap" decimal(2,2) NOT NULL, "stagePresence" decimal(2,2) NOT NULL, "averagePoints" decimal(2,2) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "musicalGroupId" integer)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(25) NOT NULL, "username" varchar(20) NOT NULL, "image" varchar(256), "description" text, "email" varchar(50) NOT NULL, "password" varchar(120) NOT NULL, "admin" boolean NOT NULL DEFAULT (0), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "users_favourite_musical_groups_musical_group" ("usersId" integer NOT NULL, "musicalGroupId" integer NOT NULL, PRIMARY KEY ("usersId", "musicalGroupId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ebb29b0ddc2ecb351223adcc4a" ON "users_favourite_musical_groups_musical_group" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ed64eefefd37ce2cd24b1cdca" ON "users_favourite_musical_groups_musical_group" ("musicalGroupId") `);
        await queryRunner.query(`CREATE TABLE "users_favourite_kpop_artists_kpop_artists" ("usersId" integer NOT NULL, "kpopArtistsId" integer NOT NULL, PRIMARY KEY ("usersId", "kpopArtistsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba" ON "users_favourite_kpop_artists_kpop_artists" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6275891f6bbe24a680411ab539" ON "users_favourite_kpop_artists_kpop_artists" ("kpopArtistsId") `);
        await queryRunner.query(`CREATE TABLE "temporary_kpop_artists" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL, "description" text, "image" varchar(256) NOT NULL, "vocal" decimal(2,2) NOT NULL, "dance" decimal(2,2) NOT NULL, "standardKorean" decimal(2,2) NOT NULL, "popularity" decimal(2,2) NOT NULL, "rap" decimal(2,2) NOT NULL, "stagePresence" decimal(2,2) NOT NULL, "averagePoints" decimal(2,2) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "musicalGroupId" integer, CONSTRAINT "FK_dac7a7109111cb819a3b10fbea2" FOREIGN KEY ("musicalGroupId") REFERENCES "musical_group" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_kpop_artists"("id", "name", "description", "image", "vocal", "dance", "standardKorean", "popularity", "rap", "stagePresence", "averagePoints", "createdAt", "updatedAt", "musicalGroupId") SELECT "id", "name", "description", "image", "vocal", "dance", "standardKorean", "popularity", "rap", "stagePresence", "averagePoints", "createdAt", "updatedAt", "musicalGroupId" FROM "kpop_artists"`);
        await queryRunner.query(`DROP TABLE "kpop_artists"`);
        await queryRunner.query(`ALTER TABLE "temporary_kpop_artists" RENAME TO "kpop_artists"`);
        await queryRunner.query(`DROP INDEX "IDX_ebb29b0ddc2ecb351223adcc4a"`);
        await queryRunner.query(`DROP INDEX "IDX_6ed64eefefd37ce2cd24b1cdca"`);
        await queryRunner.query(`CREATE TABLE "temporary_users_favourite_musical_groups_musical_group" ("usersId" integer NOT NULL, "musicalGroupId" integer NOT NULL, CONSTRAINT "FK_ebb29b0ddc2ecb351223adcc4a9" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6ed64eefefd37ce2cd24b1cdca4" FOREIGN KEY ("musicalGroupId") REFERENCES "musical_group" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("usersId", "musicalGroupId"))`);
        await queryRunner.query(`INSERT INTO "temporary_users_favourite_musical_groups_musical_group"("usersId", "musicalGroupId") SELECT "usersId", "musicalGroupId" FROM "users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`DROP TABLE "users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`ALTER TABLE "temporary_users_favourite_musical_groups_musical_group" RENAME TO "users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`CREATE INDEX "IDX_ebb29b0ddc2ecb351223adcc4a" ON "users_favourite_musical_groups_musical_group" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ed64eefefd37ce2cd24b1cdca" ON "users_favourite_musical_groups_musical_group" ("musicalGroupId") `);
        await queryRunner.query(`DROP INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba"`);
        await queryRunner.query(`DROP INDEX "IDX_6275891f6bbe24a680411ab539"`);
        await queryRunner.query(`CREATE TABLE "temporary_users_favourite_kpop_artists_kpop_artists" ("usersId" integer NOT NULL, "kpopArtistsId" integer NOT NULL, CONSTRAINT "FK_ee6b0d6bf155c4d1a374ab12bac" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6275891f6bbe24a680411ab5399" FOREIGN KEY ("kpopArtistsId") REFERENCES "kpop_artists" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("usersId", "kpopArtistsId"))`);
        await queryRunner.query(`INSERT INTO "temporary_users_favourite_kpop_artists_kpop_artists"("usersId", "kpopArtistsId") SELECT "usersId", "kpopArtistsId" FROM "users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`DROP TABLE "users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`ALTER TABLE "temporary_users_favourite_kpop_artists_kpop_artists" RENAME TO "users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`CREATE INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba" ON "users_favourite_kpop_artists_kpop_artists" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6275891f6bbe24a680411ab539" ON "users_favourite_kpop_artists_kpop_artists" ("kpopArtistsId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_6275891f6bbe24a680411ab539"`);
        await queryRunner.query(`DROP INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba"`);
        await queryRunner.query(`ALTER TABLE "users_favourite_kpop_artists_kpop_artists" RENAME TO "temporary_users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`CREATE TABLE "users_favourite_kpop_artists_kpop_artists" ("usersId" integer NOT NULL, "kpopArtistsId" integer NOT NULL, PRIMARY KEY ("usersId", "kpopArtistsId"))`);
        await queryRunner.query(`INSERT INTO "users_favourite_kpop_artists_kpop_artists"("usersId", "kpopArtistsId") SELECT "usersId", "kpopArtistsId" FROM "temporary_users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`DROP TABLE "temporary_users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`CREATE INDEX "IDX_6275891f6bbe24a680411ab539" ON "users_favourite_kpop_artists_kpop_artists" ("kpopArtistsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba" ON "users_favourite_kpop_artists_kpop_artists" ("usersId") `);
        await queryRunner.query(`DROP INDEX "IDX_6ed64eefefd37ce2cd24b1cdca"`);
        await queryRunner.query(`DROP INDEX "IDX_ebb29b0ddc2ecb351223adcc4a"`);
        await queryRunner.query(`ALTER TABLE "users_favourite_musical_groups_musical_group" RENAME TO "temporary_users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`CREATE TABLE "users_favourite_musical_groups_musical_group" ("usersId" integer NOT NULL, "musicalGroupId" integer NOT NULL, PRIMARY KEY ("usersId", "musicalGroupId"))`);
        await queryRunner.query(`INSERT INTO "users_favourite_musical_groups_musical_group"("usersId", "musicalGroupId") SELECT "usersId", "musicalGroupId" FROM "temporary_users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`DROP TABLE "temporary_users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`CREATE INDEX "IDX_6ed64eefefd37ce2cd24b1cdca" ON "users_favourite_musical_groups_musical_group" ("musicalGroupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ebb29b0ddc2ecb351223adcc4a" ON "users_favourite_musical_groups_musical_group" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "kpop_artists" RENAME TO "temporary_kpop_artists"`);
        await queryRunner.query(`CREATE TABLE "kpop_artists" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL, "description" text, "image" varchar(256) NOT NULL, "vocal" decimal(2,2) NOT NULL, "dance" decimal(2,2) NOT NULL, "standardKorean" decimal(2,2) NOT NULL, "popularity" decimal(2,2) NOT NULL, "rap" decimal(2,2) NOT NULL, "stagePresence" decimal(2,2) NOT NULL, "averagePoints" decimal(2,2) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "musicalGroupId" integer)`);
        await queryRunner.query(`INSERT INTO "kpop_artists"("id", "name", "description", "image", "vocal", "dance", "standardKorean", "popularity", "rap", "stagePresence", "averagePoints", "createdAt", "updatedAt", "musicalGroupId") SELECT "id", "name", "description", "image", "vocal", "dance", "standardKorean", "popularity", "rap", "stagePresence", "averagePoints", "createdAt", "updatedAt", "musicalGroupId" FROM "temporary_kpop_artists"`);
        await queryRunner.query(`DROP TABLE "temporary_kpop_artists"`);
        await queryRunner.query(`DROP INDEX "IDX_6275891f6bbe24a680411ab539"`);
        await queryRunner.query(`DROP INDEX "IDX_ee6b0d6bf155c4d1a374ab12ba"`);
        await queryRunner.query(`DROP TABLE "users_favourite_kpop_artists_kpop_artists"`);
        await queryRunner.query(`DROP INDEX "IDX_6ed64eefefd37ce2cd24b1cdca"`);
        await queryRunner.query(`DROP INDEX "IDX_ebb29b0ddc2ecb351223adcc4a"`);
        await queryRunner.query(`DROP TABLE "users_favourite_musical_groups_musical_group"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "kpop_artists"`);
        await queryRunner.query(`DROP TABLE "musical_group"`);
    }

}
