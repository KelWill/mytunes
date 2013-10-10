// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// var SongQueueEntryView = SongQueueView.extend({});
var SongQueueEntryView = Backbone.View.extend({
  render: function(){
    this.$el.html('<div> (' + this.model.get("artist") + ") " + this.model.get("title")+ '</div>');
    return this.$el;
  }
});

//What is the SongQueueEntryView going to be used for? It's based off of the same SongQueue, right?