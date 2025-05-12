-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "link_id" TEXT NOT NULL,
    "song_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("link_id")
);

-- CreateTable
CREATE TABLE "LinkPermission" (
    "link_permission_id" TEXT NOT NULL,
    "link_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "can_view" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "LinkPermission_pkey" PRIMARY KEY ("link_permission_id")
);

-- CreateTable
CREATE TABLE "Music" (
    "music_id" TEXT NOT NULL,
    "song_id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "uploaded_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("music_id")
);

-- CreateTable
CREATE TABLE "MusicSong" (
    "music_song_id" TEXT NOT NULL,
    "song_id" TEXT NOT NULL,
    "music_id" TEXT NOT NULL,

    CONSTRAINT "MusicSong_pkey" PRIMARY KEY ("music_song_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MusicSong_song_id_music_id_key" ON "MusicSong"("song_id", "music_id");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkPermission" ADD CONSTRAINT "LinkPermission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkPermission" ADD CONSTRAINT "LinkPermission_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "Link"("link_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicSong" ADD CONSTRAINT "MusicSong_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicSong" ADD CONSTRAINT "MusicSong_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "Music"("music_id") ON DELETE RESTRICT ON UPDATE CASCADE;
