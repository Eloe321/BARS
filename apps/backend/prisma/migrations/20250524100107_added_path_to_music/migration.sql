/*
  Warnings:

  - You are about to drop the column `bpm` on the `PremadeMusic` table. All the data in the column will be lost.
  - Added the required column `path` to the `PremadeMusic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PremadeMusic" DROP COLUMN "bpm",
ADD COLUMN     "path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UploadedMusic" ADD COLUMN     "path" TEXT NOT NULL DEFAULT '';
