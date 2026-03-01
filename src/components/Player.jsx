import { PlayerControlButtonBar } from "@/components/PlayerControlButtonBar";
import { PlayerCurrentSong } from "@/components/PlayerCurrentSong";
import { PlayerSoundControl } from "@/components/PlayerSoundControl";
import { PlayerVolumeControl } from "@/components/PlayerVolumeControl";
import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/store/playerStore";

export function Player() {
	const { currentMusic, isPlaying, volume, setCurrentMusic } = usePlayerStore(
		(state) => state,
	);
	const audioRef = useRef(null);

	const play = () => {
		audioRef.current.play().catch((e) => console.log("error playing: ", e));
	};

	useEffect(() => {
		if (!currentMusic.song) {
			return;
		}
		isPlaying ? play() : audioRef.current.pause();
	}, [isPlaying]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	useEffect(() => {
		const { song, playlist } = currentMusic;
		if (song) {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.src = "";
			}

			const src = `/music/${playlist?.id}/0${song.id}.mp3`;
			audioRef.current = new Audio(src);
			play();
		}
	}, [currentMusic]);

	return (
		<div className="flex flex-row justify-between w-full px-4 z-50">
			<div className="w-50">
				<PlayerCurrentSong {...currentMusic.song} />
			</div>

			<div className="grid place-content-center gap-4 flex-1">
				<div className="flex justify-center flex-col items-center">
					<PlayerControlButtonBar />
					<PlayerSoundControl audio={audioRef} />
				</div>
			</div>

			<div className="grid place-content-center">
				<PlayerVolumeControl />
			</div>
		</div>
	);
}
