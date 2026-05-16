import React from 'react'

function ThumbCaption({ thumbCaptionText }) {
  const smallCaption = {
    display: 'block',
    marginTop: '12px',
    fontSize: '12px',
    color: '#ccc',
  }
  return (
    <div style={smallCaption}>
      {`${thumbCaptionText || 'Click on the image to watch the video'}`}
    </div>
  )
}

export default ThumbCaption
