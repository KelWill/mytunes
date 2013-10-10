// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      debugger;
      this.model.play(); // alert!
      debugger;
      console.log("this", this);  //library view
      this.model.enqueue();  //song
    }
  },

  render: function(){   //renders using a simple table template
    return this.$el.html(this.template(this.model.attributes));
  }

});

//another click event needs to be bound to library entry view