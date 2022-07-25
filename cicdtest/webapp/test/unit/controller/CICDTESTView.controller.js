/*global QUnit*/

sap.ui.define([
	"cicdtest/controller/CICDTESTView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CICDTESTView Controller");

	QUnit.test("I should test the CICDTESTView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
