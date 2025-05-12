/*
  Warnings:

  - You are about to drop the `MusicSong` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `music_id` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MusicSong" DROP CONSTRAINT "MusicSong_music_id_fkey";

-- DropForeignKey
ALTER TABLE "MusicSong" DROP CONSTRAINT "MusicSong_song_id_fkey";

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "music_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "MusicSong";

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "Music"("music_id") ON DELETE RESTRICT ON UPDATE CASCADE;
