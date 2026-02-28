import { Next, Pause, Play, Prev } from "@/icons/PlayerIcons";
import { useRef, useEffect } from "react";
import { usePlayerStore } from "@/store/playerStore";

export function PlayerControlButtonBar() {
	const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(
		(state) => state,
	);

	const onPlayPause = () => {
		if (currentMusic.song === null) return;
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="flex justify-center flex-row flex-nowrap items-center gap-4">
			<button className="hover:scale-110" title="Previous song">
				<Prev />
			</button>
			<button
				className="bg-white text-black rounded-full p-2 hover:scale-110"
				onClick={onPlayPause}
			>
				{isPlaying ? <Pause /> : <Play />}
			</button>
			<button className="hover:scale-110" title="Next song">
				<Next />
			</button>
		</div>
	);
}
