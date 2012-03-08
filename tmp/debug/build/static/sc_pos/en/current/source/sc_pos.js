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

SC.ready(function() {
  ScPos.mainPane = SC.TemplatePane.append({
    layerId: 'sc_pos',
    templateName: 'sc_pos'
  });
});

ScPos.itemListController = SC.ArrayController.create({
  content: [],
  createItem: function(name) {
    var item = ScPos.Item.create({ name: name });
    this.pushObject(item);
  },
  openPage: function(name) {
    alert("HEY!");
  }
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sc_pos');