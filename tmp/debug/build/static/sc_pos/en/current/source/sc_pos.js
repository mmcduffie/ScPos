// ==========================================================================
// Project:   ScPos
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals ScPos */

ScPos = SC.Application.create();

SC.ready(function() {
  ScPos.mainPane = SC.TemplatePane.append({
    layerId: 'sc_pos',
    templateName: 'sc_pos'
  });
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sc_pos');