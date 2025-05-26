/*
  Warnings:

  - You are about to drop the column `song_id` on the `Music` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_song_id_fkey";

-- AlterTable
ALTER TABLE "Music" DROP COLUMN "song_id";
