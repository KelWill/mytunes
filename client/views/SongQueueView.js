// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // events: {
  //   "add": "render",

  // }

  initialize: function() {
    this.collection.on('add', function(){this.render();}, this);
    this.collection.on('remove', function(){this.render();}, this);
  },

  render: function() {
    // var self = this;
    console.log("rendered");
    this.$el = $('<div></div>');
    this.collection.forEach(function(song){
      var aSong = new SongQueueEntryView({model: song});
      aSong.render();
      this.$el.append(aSong.$el);
    }, this);
    //go through each item in the collection and append to this.$el
    return this.$el;
  }
  // ,this.collection.on('add', function(){....render....})
  // this.collection.on('remove', function(){...render...})

});

//Creating a SongQueueView--will need render, initialize, want to loop through all the items in SongQueue (which has access to all the items in Songs) and
//then render those items on the screen. Need to also add some event handlers to handle changes to the SongQueue structure