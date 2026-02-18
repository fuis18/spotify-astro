import { PlayerVolumeIconComponent } from "@/components/PlayerVolumeIconComponent";

export const PlayerVolumeControl = () => {
	return (
		<div className="flex justify-center gap-x-2 text-white">
			<button className="opacity-70 hover:opacity-100 transition">
				<PlayerVolumeIconComponent />
			</button>
		</div>
	);
};
