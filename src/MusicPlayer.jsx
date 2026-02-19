import { useState, useEffect, useRef } from 'react'

const MUSIC_VIDEO_ID = 'yuOIFZEgbec'
const DEFAULT_VOLUME = 10
const FLOATING_BOTTOM = 'var(--floating-controls-bottom)'
const FLOATING_SIZE = 'var(--floating-control-size)'

export default function MusicPlayer() {
  const [playing, setPlaying]   = useState(false)
  const [volume,  setVolume]    = useState(DEFAULT_VOLUME)
  const [ready,   setReady]     = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const playerRef               = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const syncMobileState = () => setIsMobile(media.matches)
    syncMobileState()
    media.addEventListener('change', syncMobileState)
    return () => media.removeEventListener('change', syncMobileState)
  }, [])

  useEffect(() => {
    function initPlayer() {
      playerRef.current = new window.YT.Player('yt-music-player', {
        height: '1',
        width:  '1',
        videoId: MUSIC_VIDEO_ID,
        playerVars: {
          autoplay:    1,
          controls:    0,
          loop:        1,
          playlist:    MUSIC_VIDEO_ID,
          playsinline: 1,
          rel:         0,
          modestbranding: 1,
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(DEFAULT_VOLUME)
            setReady(true)
            e.target.playVideo()
          },
          onStateChange: (e) => {
            if (!window.YT?.PlayerState) return
            if (e.data === window.YT.PlayerState.PLAYING) {
              setPlaying(true)
              return
            }
            if (e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED) {
              setPlaying(false)
            }
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
        try {
          playerRef.current.destroy()
        } catch {
          // Ignore teardown errors from iframe player.
        }
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

  const toggleCollapsed = () => {
    setCollapsed(v => !v)
  }

  const showControls = !collapsed

  return (
    <div style={{ ...styles.container, ...(isMobile ? styles.containerMobile : null), ...(collapsed ? styles.containerCollapsed : null) }}>
      {/* Contenedor invisible del iframe de YouTube */}
      <div
        id="yt-music-player"
        style={{ width: 1, height: 1, overflow: 'hidden', opacity: 0, position: 'absolute' }}
      />

      <button
        onClick={toggleCollapsed}
        style={{ ...styles.iconBtn, ...(isMobile ? styles.iconBtnMobile : null) }}
        title={collapsed ? 'Mostrar controles de música' : 'Ocultar controles de música'}
        aria-label={collapsed ? 'Mostrar controles de música' : 'Ocultar controles de música'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#FA8112" style={{ opacity: 0.92, flexShrink: 0 }}>
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z"/>
        </svg>
      </button>

      <div
        style={{
          ...styles.controlsWrap,
          ...(showControls ? styles.controlsWrapOpen : styles.controlsWrapClosed),
        }}
      >
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
    </div>
  )
}

const styles = {
  container: {
    position:       'fixed',
    bottom:         FLOATING_BOTTOM,
    right:          '10px',
    zIndex:         200,
    display:        'flex',
    alignItems:     'center',
    gap:            '8px',
    background:     'rgba(42, 26, 10, 0.92)',
    border:         '1px solid rgba(250, 129, 18, 0.4)',
    borderRadius:   '24px',
    padding:        '6px 12px',
    boxShadow:      '0 2px 12px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(6px)',
    maxWidth:       'min(calc(100vw - 20px), 220px)',
    minHeight:      FLOATING_SIZE,
    transition:     'padding 0.2s ease, border-radius 0.2s ease, width 0.24s ease, box-shadow 0.2s ease',
    overflow:       'hidden',
  },
  containerMobile: {
    padding:      '5px 10px',
    borderRadius: '22px',
    minHeight:    '38px',
  },
  containerCollapsed: {
    width:         FLOATING_SIZE,
    minWidth:      FLOATING_SIZE,
    maxWidth:      FLOATING_SIZE,
    height:        FLOATING_SIZE,
    minHeight:     FLOATING_SIZE,
    padding:       '0',
    gap:           '0',
    borderRadius:  '50%',
    justifyContent:'center',
  },
  iconBtn: {
    width:        '22px',
    height:       '22px',
    display:      'flex',
    alignItems:   'center',
    justifyContent: 'center',
    border:       'none',
    borderRadius: 0,
    background:   'none',
    padding:      0,
    cursor:       'pointer',
    flexShrink:   0,
  },
  iconBtnMobile: {
    width:  '22px',
    height: '22px',
  },
  controlsWrap: {
    display:        'flex',
    alignItems:     'center',
    gap:            '8px',
    overflow:       'hidden',
    transition:     'max-width 0.24s ease, opacity 0.18s ease, transform 0.24s ease',
    transformOrigin:'right center',
  },
  controlsWrapOpen: {
    maxWidth: '150px',
    opacity:  1,
    transform:'scaleX(1)',
  },
  controlsWrapClosed: {
    maxWidth: '0px',
    opacity:  0,
    transform:'scaleX(0.85)',
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
    width:       '68px',
    accentColor: '#FA8112',
    cursor:      'pointer',
  },
}
