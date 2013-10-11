// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);
    params.library.on('dequeue', function(){
      this.get('songQueue').remove();
    }, this);
    params.library.on('ended', function(){
      // this.get('songQueue').dequeue();
      this.get('songQueue').playFirst();
    }, this);
  }
});
