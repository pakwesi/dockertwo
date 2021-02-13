import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player';
import { PlayCircleFilled, PauseCircleFilled  } from '@ant-design/icons';

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled  />}
      </button>
    )
  }
}

export default withMediaProps(CustomPlayPause)