'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');

Blockly.Blocks['webmobdev_block_multi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Multiplikation:");
    this.appendValueInput("Value_1")
        .setCheck("Number")
        .appendField("Wert 1");
    this.appendValueInput("Value_2")
        .setCheck("Number")
        .appendField("Wert 2");
    this.appendValueInput("Value_3")
        .setCheck("Number")
        .appendField("Wert 3");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['webmobdev_block_if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(new Blockly.FieldDropdown([["is true", "v_TRUE"], ["is false", "v_false"]]), "bool_values")
        .appendField("else");
    this.appendStatementInput("if_clause")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else");
    this.appendStatementInput("else_clause")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
