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

      it('should have a registrationfee property', function () {
        BusinessOccupational.getCalculations(0, 0, 0).should.have.property('registrationfee');
      });

      it('should have a grossrevenue property', function () {
        BusinessOccupational.getCalculations(0, 0, 0).should.have.property('grossrevenue');
      });

      it('should have a workertax property', function () {
        BusinessOccupational.getCalculations(0, 0, 0).should.have.property('workertax');
      });

      it('should have a total property', function () {
        BusinessOccupational.getCalculations(0, 0, 0).should.have.property('total');
      });

      it('The registrationfee property should be 65.00', function () {
        BusinessOccupational.getCalculations(0, 0, 0).registrationfee.should.equal('65.00');
      });
    });
  });
})();
