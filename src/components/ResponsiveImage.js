import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveImage = ({ src, width, height }) => {
  return (
    <div
      style={{
        width,
      }}
      className="responsive-image"
    >
      <div
        style={{
          paddingBottom: (height / width) * 100 + '%',
        }}
      />
      <img alt="" src={src} className="responsive-image__image" />
    </div>
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default ResponsiveImage
