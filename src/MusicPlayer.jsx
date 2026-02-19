import { useState, useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying]   = useState(false)
  const [volume,  setVolume]    = useState(40)
  const [ready,   setReady]     = useState(false)
  const playerRef               = useRef(null)

  useEffect(() => {
    function initPlayer() {
      playerRef.current = new window.YT.Player('yt-music-player', {
        height: '1',
        width:  '1',
        videoId: 'NmyFjHqTmlo',
        playerVars: {
          autoplay:    0,
          controls:    0,
          loop:        1,
          playlist:    'NmyFjHqTmlo',
          modestbranding: 1,
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(40)
            setReady(true)
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag  = document.createElement('script')
        tag.src    = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
    }

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy() } catch (_) {}
        playerRef.current = null
      }
    }
  }, [])

  const toggle = () => {
    if (!ready) return
    if (playing) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
    setPlaying(v => !v)
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    if (playerRef.current && ready) {
      playerRef.current.setVolume(v)
    }
  }

  return (
    <div style={styles.container}>
      {/* Contenedor invisible del iframe de YouTube */}
      <div
        id="yt-music-player"
        style={{ width: 1, height: 1, overflow: 'hidden', opacity: 0, position: 'absolute' }}
      />

      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FA8112" style={{ opacity: 0.8, flexShrink: 0 }}>
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z"/>
      </svg>

      <button
        onClick={toggle}
        style={styles.btn}
        title={playing ? 'Pausar música' : 'Reproducir música'}
        disabled={!ready}
      >
        {playing ? '⏸' : '▶'}
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolume}
        style={styles.slider}
        title="Volumen"
      />
    </div>
  )
}

const styles = {
  container: {
    position:       'fixed',
    bottom:         '62px',
    right:          '12px',
    zIndex:         200,
    display:        'flex',
    alignItems:     'center',
    gap:            '8px',
    background:     'rgba(42, 26, 10, 0.92)',
    border:         '1px solid rgba(250, 129, 18, 0.4)',
    borderRadius:   '24px',
    padding:        '6px 14px',
    boxShadow:      '0 2px 14px rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(6px)',
  },
  icon: {
    fontSize: '0.9rem',
    opacity:  0.75,
  },
  btn: {
    background:  'none',
    border:      'none',
    color:       '#FA8112',
    fontSize:    '1rem',
    cursor:      'pointer',
    lineHeight:  1,
    padding:     '0 2px',
    transition:  'opacity 0.2s',
    opacity:     1,
  },
  slider: {
    width:       '72px',
    accentColor: '#FA8112',
    cursor:      'pointer',
  },
}
