var SongQueueEntryView = Backbone.View.extend({

  events: {
    'click': function(){
      this.model.dequeue();
    }
  },

  render: function(){
    this.$el.html('<div> (' + this.model.get("artist") + ") " + this.model.get("title")+ '</div>');
    return this.$el;
  }
});
