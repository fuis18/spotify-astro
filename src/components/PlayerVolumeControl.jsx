import { PlayerVolumeIconComponent } from "@/components/PlayerVolumeIconComponent";
import { Slider } from "./Slider";

export const PlayerVolumeControl = () => {
	return (
		<div className="flex justify-center gap-x-2 text-white">
			<button className="opacity-70 hover:opacity-100 transition">
				<PlayerVolumeIconComponent />
			</button>
			<Slider
				defaultValue={[100]}
				max={100}
				min={0}
				value={[volume * 100]}
				className="w-23.75"
				onValueChange={(value) => {
					const [newVolume] = value;
					const volumeValue = newVolume / 100;
					setVolume(volumeValue);
				}}
			/>
		</div>
	);
};
