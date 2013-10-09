// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(songdata){
    if (songdata) this.add(new Song(songdata));
    this.on('add', this.check);
    this.on('ended', this.end);
    this.on('dequeue', this.dequeue);
  },

  check: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  end: function(){
    this.shift();
    if (this.length) { this.playFirst(); }
  },

  dequeue: function(song){
    this.remove(song);
  }
});

//This is where most of our code will go. This is a Collection that is based off of Songs (so it has access to those properties? )
//Functionality: addSong, removeSong
