/*
  Warnings:

  - You are about to drop the column `music_id` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the `Music` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MusicSource" AS ENUM ('PREMADE', 'UPLOADED');

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_music_id_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "music_id",
ADD COLUMN     "musicSource" "MusicSource" NOT NULL DEFAULT 'PREMADE',
ADD COLUMN     "premade_music_id" TEXT,
ADD COLUMN     "uploaded_music_id" TEXT;

-- DropTable
DROP TABLE "Music";

-- CreateTable
CREATE TABLE "PremadeMusic" (
    "music_id" TEXT NOT NULL,
    "bpm" INTEGER NOT NULL,
    "uploaded_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PremadeMusic_pkey" PRIMARY KEY ("music_id")
);

-- CreateTable
CREATE TABLE "UploadedMusic" (
    "music_id" TEXT NOT NULL,
    "uploaded_by" TEXT NOT NULL,

    CONSTRAINT "UploadedMusic_pkey" PRIMARY KEY ("music_id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_premade_music_id_fkey" FOREIGN KEY ("premade_music_id") REFERENCES "PremadeMusic"("music_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_uploaded_music_id_fkey" FOREIGN KEY ("uploaded_music_id") REFERENCES "UploadedMusic"("music_id") ON DELETE SET NULL ON UPDATE CASCADE;
