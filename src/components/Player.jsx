import { PlayerControlButtonBar } from "@/components/PlayerControlButtonBar";
import { PlayerCurrentSong } from "@/components/PlayerCurrentSong";
import { PlayerSoundControl } from "@/components/PlayerSoundControl";
import { PlayerVolumeControl } from "@/components/PlayerVolumeControl";

export function Player() {
	// const [currentSong, setCurrentSong] = useState(null);

	return (
		<div className="flex flex-row justify-between w-full px-4 z-50">
			<div className="w-50">
				<PlayerCurrentSong />
			</div>

			<div className="grid place-content-center gap-4 flex-1">
				<div className="flex justify-center">
					<PlayerControlButtonBar />
					<PlayerSoundControl />
				</div>
			</div>

			<div className="grid place-content-center">
				<PlayerVolumeControl />
			</div>
		</div>
	);
}
