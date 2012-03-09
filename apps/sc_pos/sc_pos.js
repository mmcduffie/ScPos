// ==========================================================================
// Project:   ScPos
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals ScPos */

ScPos = SC.Application.create();

ScPos.Item = SC.Object.extend({
  name: null,
  description: null
});

ScPos.CreateItemView = SC.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');
 
    if (value) {
      ScPos.itemListController.createItem(value);
      this.set('value', '');
    }
  }
});

ScPos.LoginPassView = SC.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');
 
    if (value) {
      ScPos.itemListController.createItem(value);
      this.set('value', '');
    }
  }
});

SC.ready(function() {
  ScPos.mainPane = SC.TemplatePane.append({
    layerId: 'sc_pos_login',
    templateName: 'sc_pos_login'
  });
});

ScPos.itemListController = SC.ArrayController.create({
  content: [],
  createItem: function(name) {
    var item = ScPos.Item.create({ name: name });
    this.pushObject(item);
  },
  login: function(name) {
    ScPos.mainPane.remove();
		ScPos.pane2 = SC.TemplatePane.append({
      layerId: 'sc_pos_main_menu',
      templateName: 'sc_pos_main_menu'
    });
  }
});