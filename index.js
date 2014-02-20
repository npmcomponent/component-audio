
/**
 * Module dependencies.
 */

var domify = require('component-domify')
  , event = require('component-event')
  , html = require('./template')
  , Progress = require('./progress');

/**
 * Expose `Audio`.
 */

module.exports = Audio;

/**
 * Initialize a new `Audio` instance with the given `el`.
 *
 * @param {Element} el
 * @api public
 */

function Audio(el) {
  if (!(this instanceof Audio)) return new Audio(el);
  this.audio = el;
  this.el = domify(html);
  this.progress = new Progress;
  this.el.appendChild(this.progress.el);
  el.parentNode.insertBefore(this.el, this.audio);
  event.bind(this.el, 'click', this.toggle.bind(this));
  event.bind(el, 'timeupdate', this.ontimeupdate.bind(this));
}

/**
 * Update playback process indicator.
 *
 * @api private
 */

Audio.prototype.ontimeupdate = function(){
  var el = this.audio;
  var n = el.currentTime / el.duration * 100;
  this.progress.update(n);
};

/**
 * Toggle play state.
 *
 * @api public
 */

Audio.prototype.toggle = function(e){
  e.preventDefault();
  if (this.audio.paused) {
    this.play();
  } else {
    this.pause();
  }
};

/**
 * Start playing the audio.
 *
 * @api public
 */

Audio.prototype.play = function(){
  this.audio.play();
  this.el.className = 'audio playing';
};

/**
 * Start playing the audio.
 *
 * @api public
 */

Audio.prototype.pause = function(){
  this.audio.pause();
  this.el.className = 'audio paused';
};

