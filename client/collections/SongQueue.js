var SongQueue = Songs.extend({
  initialize: function(songdata){
    if (songdata) this.add(new Song(songdata));
    this.on('add', this.check);
    this.on('ended', this.end);
    this.on('dequeue', this.dequeue);
    this.on('enqueue', this.enqueue);
    this.on('playFirst', this.playFirst);
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
    if (this.length) this.playFirst();
  },

  dequeue: function(song){
    this.remove(song);
  },

  enqueue: function(song){
    console.log("derp");
    this.add(song);
  }
});
