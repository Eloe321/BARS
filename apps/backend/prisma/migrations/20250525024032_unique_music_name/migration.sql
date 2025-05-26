/*
  Warnings:

  - A unique constraint covering the columns `[music_name]` on the table `PremadeMusic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[music_name]` on the table `UploadedMusic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PremadeMusic_music_name_key" ON "PremadeMusic"("music_name");

-- CreateIndex
CREATE UNIQUE INDEX "UploadedMusic_music_name_key" ON "UploadedMusic"("music_name");
