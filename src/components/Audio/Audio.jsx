import React from "react";
import Audio from "../../assets/audio/01-Genshin-Impact-Main-ThemeGens.mp3";

const AudioBackground = () => {
	return (
		<div className="sticky-top">
			<audio autoPlay loop playsInline>
				<source src={Audio} type="audio/mpeg"/>
			</audio>
		</div>
	);
};

export default AudioBackground;
