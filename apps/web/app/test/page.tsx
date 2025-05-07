import MusicUploader from "@workspace/ui/components/music-player/music-uploader";
import MusicPlayer from "@workspace/ui/components/music-player/music-player";

export default function Test() {
    return (
        <div>
            <h1>Music Uploader & Player</h1>
            <MusicUploader />
            <MusicPlayer />
        </div>
      );
    }