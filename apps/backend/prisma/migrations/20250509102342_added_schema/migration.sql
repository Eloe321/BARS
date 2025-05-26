/*
  Warnings:

  - Added the required column `bpm` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Music" ADD COLUMN     "bpm" INTEGER NOT NULL;
