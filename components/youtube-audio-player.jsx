import React, { useEffect, useState } from 'react';

const YouTubeAudioPlayer = ({ youtubeId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Check if the YouTube API is already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      tag.onload = () => initializePlayer();
      document.body.appendChild(tag);
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (window.YT && window.YT.Player) {
        const newPlayer = new window.YT.Player('youtube-player', {
          videoId: youtubeId,
          height: '0',
          width: '0',
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
          },
          events: {
            onReady: (event) => {
              console.log('YouTube Player Ready');
              setPlayer(event.target);
            },
            onError: (error) => console.error('YouTube Player Error:', error)
          }
        });
      } else {
        console.error("YT.Player not available");
      }
    }
  }, [youtubeId]);

  const togglePlayPause = () => {
    if (player) {
      const state = player.getPlayerState();
      if (state === window.YT.PlayerState.PLAYING) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    } else {
      console.error('Player not initialized yet.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hidden YouTube Player */}
      <div id="youtube-player" className="hidden"></div>

      {/* Play/Pause Button */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-500"
        onClick={togglePlayPause}
      >
        🎶 Play/Pause Audio
      </button>
    </div>
  );
};

export default YouTubeAudioPlayer;
