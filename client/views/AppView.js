// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    //App has an attribute 'currentSong' that it grabs to create playerView, which is a property of AppView, based on that song's model
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      this.songQueueView.$el
    ]);
  }

});


