var BusinessOccupational = (function(){
  'use strict';
  var registrationFee = new BigNumber(65.0);

  function bracketRow(minm, maxm, rate, minbracket, bracketminimum){
    return {'min': new BigNumber(minm), 'max': new BigNumber(maxm), 'rate': new BigNumber(rate), 'minbracket': new BigNumber(minbracket), 'bracketminimum': new BigNumber(bracketminimum) };
  }

  var grossRevenueBracket = [
    bracketRow(-Infinity, 1999, 5.153, 0.00, 0),
    bracketRow(2000, 4999, 1.502, 10.29, 2000),
    bracketRow(5000, 99999, 0.723, 14.77, 5000),
    bracketRow(100000, 199999, 0.661, 83.32, 100000),
    bracketRow(200000, 299999, 0.567, 149.71, 200000),
    bracketRow(300000, 399999, 0.536, 206.38, 300000),
    bracketRow(400000, 499999, 0.519, 259.87, 400000),
    bracketRow(500000, 599999, 0.509, 312.05, 500000),
    bracketRow(600000, 699999, 0.497, 362.97, 600000),
    bracketRow(700000, 799999, 0.481, 412.57, 700000),
    bracketRow(800000, 899999, 0.469, 460.85, 800000),
    bracketRow(900000, 999999, 0.457, 507.88, 900000),
    bracketRow(1000000, 1099999, 0.444, 553.63, 1000000),
    bracketRow(1100000, 1199999, 0.432, 598.12, 1100000),
    bracketRow(1200000, 1299999, 0.418, 641.29, 1200000),
    bracketRow(1300000, 1399999, 0.408, 683.13, 1300000),
    bracketRow(1400000, 1499999, 0.390, 723.74, 1400000),
    bracketRow(1500000, 1999999, 0.384, 763.01, 1500000),
    bracketRow(2000000, 2499999, 0.379, 956.32, 2000000),
    bracketRow(2500000, 2999999, 0.371, 1146.37, 2500000),
    bracketRow(3000000, 3499999, 0.361, 1333.16, 3000000),
    bracketRow(3500000, 3999999, 0.343, 1513.54, 3500000),
    bracketRow(4000000, 4999999, 0.333, 1687.49, 4000000),
    bracketRow(5000000, 5999999, 0.322, 1913.59, 5000000),
    bracketRow(6000000, 7999999, 0.310, 2344.63, 6000000),
    bracketRow(8000000, 10999999, 0.294, 2963.08, 8000000),
    bracketRow(11000000, 13999999, 0.284, 3852.12, 11000000),
    bracketRow(14000000, 57999999, 0.270, 4702.51, 14000000),
    bracketRow(58000000, 91999999, 0.245, 16608.02, 58000000),
    bracketRow(92000000, Infinity, 0.193, 24931.53, 92000000)
  ];

  var workerRate = [
    bracketRow(-Infinity, 2, 42.98, 0.00, 0),
    bracketRow(3, 9, 21.51, 107.51, 3),
    bracketRow(10, 99, 18.24, 254.76, 10),
    bracketRow(100, 499, 15.06, 1896.58, 100),
    bracketRow(500, Infinity, 10.74, 7913.25, 500)
  ];

  function findGrossRevenueBracket(revenue){
    var bignumrevenue = new BigNumber(revenue);

    for (var i = 0; i < grossRevenueBracket.length; i++) {
      var bracket = grossRevenueBracket[i];
      if (bignumrevenue.gte(bracket.min) && bignumrevenue.lte(bracket.max)){
        return bracket;
      }
    }
  }

  function findWorkerRate(workers){
    var bignumworkers = new BigNumber(workers);

    for (var i = 0; i < workerRate.length; i++) {
      var worker = workerRate[i];
      if (bignumworkers.gte(worker.min) && bignumworkers.lte(worker.max)){
        return worker;
      }
    }
  }

  return {

    calculateRegistrationFee: function(){
      return registrationFee;
    },
    calculateGrossRevenue: function(revenue){
      var bignumrevenue = new BigNumber(revenue);
      var bracket = findGrossRevenueBracket(revenue);
      return bracket.rate.times(bignumrevenue.minus(bracket.bracketminimum)).dividedBy(1000).plus(bracket.minbracket).round(2);
    },

    calculateWorkerRate: function(workers){
      var bignumworkers = new BigNumber(workers);
      var worker = findWorkerRate(workers);
      return worker.rate.times(bignumworkers.minus(worker.bracketminimum)).plus(worker.minbracket).round(2);
    },
    calculateTotal: function(revenue, workers){
      var fee = this.calculateRegistrationFee();
      var gross = this.calculateGrossRevenue(revenue);
      var workerrate = this.calculateWorkerRate(workers);
      return fee.plus(gross).plus(workerrate);
    }

  };

}());
