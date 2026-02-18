export const PlayerSoundControl = ({ audio }) => {
	const duration = audio?.current?.duration ?? 0;

	return (
		<div className="flex gap-x-3 text-xs pt-2">
			{/* <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span> */}

			<span className="opacity-50 w-12">
				{duration ? formatTime(duration) : "0:00"}
			</span>
		</div>
	);
};
