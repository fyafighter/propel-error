'use strict';

var chai = require('chai');
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// Chai's expect().to.exist style makes default jshint unhappy.
// jshint expr:true

describe('no protractor at all', function() {
  it('should still do normal tests', function() {
    should.equal(true,true);
  });
});
