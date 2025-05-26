/*
  Warnings:

  - Added the required column `music_name` to the `PremadeMusic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `music_name` to the `UploadedMusic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PremadeMusic" ADD COLUMN     "music_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UploadedMusic" ADD COLUMN     "music_name" TEXT NOT NULL;
