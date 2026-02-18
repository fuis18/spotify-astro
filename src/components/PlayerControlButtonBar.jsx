import { Next, Pause, Play, Prev } from "@/icons/PlayerIcons";
import { useState, useRef, useEffect } from "react";

export function PlayerControlButtonBar() {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const onPlayPause = () => {
		if (!audioRef.current) {
			audioRef.current = new Audio();
		}

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
			audioRef.current.volume = 0.1;
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		audioRef.current.src = `/music/1/01.mp3`;
	}, []);

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
