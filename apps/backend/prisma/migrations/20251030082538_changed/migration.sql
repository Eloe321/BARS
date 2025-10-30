/*
  Warnings:

  - You are about to drop the `Song` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_song_id_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_premade_music_id_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_uploaded_music_id_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_user_id_fkey";

-- DropTable
DROP TABLE "Song";

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'untitled',
    "user_id" TEXT NOT NULL,
    "musicSource" "MusicSource" NOT NULL DEFAULT 'PREMADE',
    "premade_music_id" TEXT,
    "uploaded_music_id" TEXT,
    "audio_timeline" JSONB NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StickyNotes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "user_id" TEXT NOT NULL,
    "music_id" TEXT,

    CONSTRAINT "StickyNotes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_premade_music_id_fkey" FOREIGN KEY ("premade_music_id") REFERENCES "PremadeMusic"("music_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_uploaded_music_id_fkey" FOREIGN KEY ("uploaded_music_id") REFERENCES "UploadedMusic"("music_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StickyNotes" ADD CONSTRAINT "StickyNotes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StickyNotes" ADD CONSTRAINT "StickyNotes_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "UploadedMusic"("music_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
