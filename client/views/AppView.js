// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    //App has an attribute 'currentSong' that it grabs to create playerView, which is a property of AppView, based on that song's model
    var songQueue = new SongQueue(); 
    this.songQueueView = new SongQueueView({collection: songQueue});
    this.model.on('change:currentSong', function(model){  //whenever you change that value for current song, run a function "setSong" TODO: what does setSong do?
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([   //set the html to be an array that has the view for the playerView and a new LibraryView in it
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      this.songQueueView.render()
    ]);
  }

});

//Render the songqueue view on init so that there's an empty list ready for stuff to be added to

