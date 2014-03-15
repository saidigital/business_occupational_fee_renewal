/* global describe, it */

(function () {
  "use strict";
  describe('Business Occupational', function () {
    describe('#calculateRegistrationFee()', function () {
      it('should be 65', function () {
        BusinessOccupational.calculateRegistrationFee().toString().should.equal("65");
      });

      it('should be an object', function () {
        BusinessOccupational.calculateRegistrationFee().should.be.a('object');
      });

    });

    describe('#calculateGrossRevenue()', function () {
      it('should be an object', function () {
        BusinessOccupational.calculateGrossRevenue(0).should.be.a('object');
      });
    });

    describe('#calculateWorkerRate()', function () {
      it('should be an object', function () {
        BusinessOccupational.calculateWorkerRate(0).should.be.a('object');
      });
    });

    describe('#calculateTotal()', function () {
      it('should be an object', function () {
        BusinessOccupational.calculateTotal(0, 0, 0).should.be.a('object');
      });
    });

    describe('#getCalculations()', function () {
      it('should be an object', function () {
        BusinessOccupational.getCalculations(0, 0, 0).should.be.a('object');
      });
    });
  });
})();
