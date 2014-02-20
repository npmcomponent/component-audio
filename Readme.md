*This repository is a mirror of the [component](http://component.io) module [component/audio](http://github.com/component/audio). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/component-audio`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# audio

  Sexy radial audio player skin for the `<audio>` tag.
  
  ![html5 audio tag style](http://f.cl.ly/items/2Y3l3t3K0y281X0r2U0L/audio.png)

## Installation

    $ component install component/audio

## Example

```html
<audio src="your-source-here"></audio>
<script>
  var audio = require('audio');
  var el = document.querySelector('audio');
  audio(el);
</script>
```

## API

### .toggle()

  Toggle play state.

### .play()

  Start playback.

### .pause()

  Pause playback.

## License

  MIT
