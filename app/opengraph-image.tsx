import { ImageResponse } from 'next/og'

export const alt = 'OBX Studio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              marginBottom: 28,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            OBX STUDIO
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 400,
              color: '#222222',
              letterSpacing: '-0.02em',
              lineHeight: 1.4,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            We design how businesses are seen online.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
