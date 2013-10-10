// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// var SongQueueEntryView = SongQueueView.extend({});
var SongQueueEntryView = Backbone.View.extend({
  render: function(){
    console.log('SongQueuEntryView Render');
    this.$el.html('<div> (' + this.model.get("artist") + ") " + this.model.get("title")+ '</div>');
    console.log(this.$el);
    return this.$el;
  }
});

//What is the SongQueueEntryView going to be used for? It's based off of the same SongQueue, right?