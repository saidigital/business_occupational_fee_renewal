/* global describe, it */
(function () {
  'use strict';
  describe('Business Occupational', function () {

    describe('#_findGrossRevenueBracket()', function () {
      it('should be an object', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.be.a('object');
      });

      it('should have a min property', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.have.property('min');
      });

      it('should have a max property', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.have.property('max');
      });

      it('should have a rate property', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.have.property('rate');
      });

      it('should have a minbracket property', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.have.property('minbracket');
      });

      it('should have a bracketminimum property', function () {
        BusinessOccupational._findGrossRevenueBracket(0).should.have.property('bracketminimum');
      });

      it('should have a bracketminimum of 0 if revenue is -1000', function () {
        BusinessOccupational._findGrossRevenueBracket(-1000).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 0 if revenue is 1000', function () {
        BusinessOccupational._findGrossRevenueBracket(1000).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 0 if revenue is 1999', function () {
        BusinessOccupational._findGrossRevenueBracket(1999).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 800000 if revenue is 800000', function () {
        BusinessOccupational._findGrossRevenueBracket(800000).bracketminimum.toString().should.equal('800000');
      });

      it('should have a bracketminimum of 800000 if revenue is 894561', function () {
        BusinessOccupational._findGrossRevenueBracket(894561).bracketminimum.toString().should.equal('800000');
      });

      it('should have a bracketminimum of 800000 if revenue is 899999', function () {
        BusinessOccupational._findGrossRevenueBracket(899999).bracketminimum.toString().should.equal('800000');
      });

      it('should have a bracketminimum of 92000000 if revenue is 92000000', function () {
        BusinessOccupational._findGrossRevenueBracket(92000000).bracketminimum.toString().should.equal('92000000');
      });

      it('should have a bracketminimum of 92000000 if revenue is 9999999999999', function () {
        BusinessOccupational._findGrossRevenueBracket(9999999999999).bracketminimum.toString().should.equal('92000000');
      });

    });

    describe('#_findWorkerRate()', function () {
      it('should be an object', function () {
        BusinessOccupational._findWorkerRate(0).should.be.a('object');
      });

      it('should have a min property', function () {
        BusinessOccupational._findWorkerRate(0).should.have.property('min');
      });

      it('should have a max property', function () {
        BusinessOccupational._findWorkerRate(0).should.have.property('max');
      });

      it('should have a rate property', function () {
        BusinessOccupational._findWorkerRate(0).should.have.property('rate');
      });

      it('should have a minbracket property', function () {
        BusinessOccupational._findWorkerRate(0).should.have.property('minbracket');
      });

      it('should have a bracketminimum property', function () {
        BusinessOccupational._findWorkerRate(0).should.have.property('bracketminimum');
      });

      it('should have a bracketminimum of 0 if workers is -1000', function () {
        BusinessOccupational._findWorkerRate(-1000).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 0 if workers is 1', function () {
        BusinessOccupational._findWorkerRate(1).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 0 if workers is 2', function () {
        BusinessOccupational._findWorkerRate(2).bracketminimum.toString().should.equal('0');
      });

      it('should have a bracketminimum of 10 if workers is 10', function () {
        BusinessOccupational._findWorkerRate(10).bracketminimum.toString().should.equal('10');
      });

      it('should have a bracketminimum of 10 if workers is 50', function () {
        BusinessOccupational._findWorkerRate(50).bracketminimum.toString().should.equal('10');
      });

      it('should have a bracketminimum of 10 if workers is 99', function () {
        BusinessOccupational._findWorkerRate(99).bracketminimum.toString().should.equal('10');
      });

      it('should have a bracketminimum of 500 if workers is 500', function () {
        BusinessOccupational._findWorkerRate(500).bracketminimum.toString().should.equal('500');
      });

      it('should have a bracketminimum of 500 if workers is 98765432', function () {
        BusinessOccupational._findWorkerRate(98765432).bracketminimum.toString().should.equal('500');
      });

    
    });

    describe('#calculateRegistrationFee()', function () {
      it('should be 65', function () {
        BusinessOccupational.calculateRegistrationFee().toString().should.equal('65');
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
