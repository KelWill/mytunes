var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(){this.render();}, this);
    this.collection.on('remove', function(){this.render();}, this);
    this.render();
  },

  render: function() {
    this.$el = $('<div class="song-queue"><h4>Song Queue</h4></div>');
    this.collection.forEach(function(song){
      var aSong = new SongQueueEntryView({model: song});
      aSong.render();
      this.$el.append(aSong.$el);
    }, this);
    $('.song-queue').html(this.$el);
    return this;
  }

});
