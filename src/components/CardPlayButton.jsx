import { Pause, Play } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

const CardPlayButton = ({ id, size = "small" }) => {
	const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
		usePlayerStore((state) => state);

	const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

	const handleClick = () => {
		if (isPlayingPlaylist) {
			setIsPlaying(!isPlaying);
			return;
		}

		fetch(`/api/get-info-playlist.json?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				const { songs, playlist } = data;
				console.log(data);
				setCurrentMusic({ songs: songs, playlist: playlist, song: songs[0] });
			})
			.then(() => {
				setIsPlaying(true);
			});
	};

	const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

	return (
		<button
			onClick={handleClick}
			className="card-play-button rounded-full bg-green-500 p-4"
		>
			{isPlayingPlaylist ? (
				<Pause className={`fill-black ${iconClassName}`} />
			) : (
				<Play className={`fill-black ${iconClassName}`} />
			)}
		</button>
	);
};

export default CardPlayButton;
