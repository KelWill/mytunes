// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
