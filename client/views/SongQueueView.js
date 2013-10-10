// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(){this.render();}, this);
    this.collection.on('remove', function(){this.render();}, this);
    this.render();
  },

  render: function() {
    console.log('SongQueuView render');
    this.$el = $('<div class="song-queue"><h4>Song Queue</h4></div>');
    this.collection.forEach(function(song){
      var aSong = new SongQueueEntryView({model: song});
      aSong.render();
      this.$el.append(aSong.$el);
    }, this);
    $('.song-queue').html(this.$el);
    //go through each item in the collection and append to this.$el
    return this;
  }
  // ,this.collection.on('add', function(){....render....})
  // this.collection.on('remove', function(){...render...})

});

//Creating a SongQueueView--will need render, initialize, want to loop through all the items in SongQueue (which has access to all the items in Songs) and
//then render those items on the screen. Need to also add some event handlers to handle changes to the SongQueue structure