import React, { useState } from "react";
import Video from "../../assets/videos/background.mp4";

function VideoDisplay() {
	const [loaded, setLoaded] = useState(false);

	const setLoadedVideo = () => {
		setLoaded(true);
	};

	return (
		<>
			{loaded ? (
				<div class="spinner-grow text-primary" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<video autoPlay loop playsInline muted className="Video-background">
					<source src={Video} type="video/mp4" onLoadedData={() => setLoadedVideo()} />
				</video>
			)}
		</>
	);
}

export default VideoDisplay;
