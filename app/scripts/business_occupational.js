var BusinessOccupational = (function(){
  'use strict';
  var registrationFee = 65.0;
  var grossRevenueBracket = [
    {'min': -Infinity, 'max': 1999, 'rate': 5.153, 'minbracket': 0.00, 'bracketminimum':0},
    {'min':2000, 'max':4999, 'rate':1.502, 'minbracket':10.29, 'bracketminimum':2000},
    {'min':5000, 'max':99999, 'rate':0.723, 'minbracket':14.77, 'bracketminimum':5000},
    {'min':100000, 'max':199999, 'rate':0.661, 'minbracket':83.32, 'bracketminimum':100000},
    {'min':200000, 'max':299999, 'rate':0.567, 'minbracket':149.71, 'bracketminimum':200000},
    {'min':300000, 'max':399999, 'rate':0.536, 'minbracket':206.38, 'bracketminimum':300000},
    {'min':400000, 'max':499999, 'rate':0.519, 'minbracket':259.87, 'bracketminimum':400000},
    {'min':500000, 'max':599999, 'rate':0.509, 'minbracket':312.05, 'bracketminimum':500000},
    {'min':600000, 'max':699999, 'rate':0.497, 'minbracket':362.97, 'bracketminimum':600000},
    {'min':700000, 'max':799999, 'rate':0.481, 'minbracket':412.57, 'bracketminimum':700000},
    {'min':800000, 'max':899999, 'rate':0.469, 'minbracket':460.85, 'bracketminimum':800000},
    {'min':900000, 'max':999999, 'rate':0.457, 'minbracket':507.88, 'bracketminimum':900000},
    {'min':1000000, 'max':1099999, 'rate':0.444, 'minbracket':553.63, 'bracketminimum':1000000},
    {'min':1100000, 'max':1199999, 'rate':0.432, 'minbracket':598.12, 'bracketminimum':1100000},
    {'min':1200000, 'max':1299999, 'rate':0.418, 'minbracket':641.29, 'bracketminimum':1200000},
    {'min':1300000, 'max':1399999, 'rate':0.408, 'minbracket':683.13, 'bracketminimum':1300000},
    {'min':1400000, 'max':1499999, 'rate':0.390, 'minbracket':723.74, 'bracketminimum':1400000},
    {'min':1500000, 'max':1999999, 'rate':0.384, 'minbracket':763.01, 'bracketminimum':1500000},
    {'min':2000000, 'max':2499999, 'rate':0.379, 'minbracket':956.32, 'bracketminimum':2000000},
    {'min':2500000, 'max':2999999, 'rate':0.371, 'minbracket':1146.37, 'bracketminimum':2500000},
    {'min':3000000, 'max':3499999, 'rate':0.361, 'minbracket':1333.16, 'bracketminimum':3000000},
    {'min':3500000, 'max':3999999, 'rate':0.343, 'minbracket':1513.54, 'bracketminimum':3500000},
    {'min':4000000, 'max':4999999, 'rate':0.333, 'minbracket':1687.49, 'bracketminimum':4000000},
    {'min':5000000, 'max':5999999, 'rate':0.322, 'minbracket':1913.59, 'bracketminimum':5000000},
    {'min':6000000, 'max':7999999, 'rate':0.310, 'minbracket':2344.63, 'bracketminimum':6000000},
    {'min':8000000, 'max':10999999, 'rate':0.294, 'minbracket':2963.08, 'bracketminimum':8000000},
    {'min':11000000, 'max':13999999, 'rate':0.284, 'minbracket':3852.12, 'bracketminimum':11000000},
    {'min':14000000, 'max':57999999, 'rate':0.270, 'minbracket':4702.51, 'bracketminimum':14000000},
    {'min':58000000, 'max':91999999, 'rate':0.245, 'minbracket':16608.02, 'bracketminimum':58000000},
    {'min':92000000, 'max':Infinity, 'rate':0.193, 'minbracket':24931.53, 'bracketminimum':92000000}
  ];

  var workerRate = [
    {'min':-Infinity, 'max':2, 'rate':42.98, 'minbracket':0.00, 'bracketminimum':0},
    {'min':3, 'max':9, 'rate':21.51, 'minbracket':107.51, 'bracketminimum':3},
    {'min':10, 'max':99, 'rate':18.24, 'minbracket':254.76, 'bracketminimum':10},
    {'min':100, 'max':499, 'rate':15.06, 'minbracket':1896.58, 'bracketminimum':100},
    {'min':500, 'max':Infinity, 'rate':10.74, 'minbracket':7913.25, 'bracketminimum':500}
  ];

  function findGrossRevenueBracket(revenue){
    for (var i = 0; i < grossRevenueBracket.length; i++) {
      var bracket = grossRevenueBracket[i];
      if (revenue >= bracket.min && revenue <= bracket.max){
        return bracket;
      }
    }
  }

  function findWorkerRate(workers){
    for (var i = 0; i < workerRate.length; i++) {
      var worker = workerRate[i];
      if (workers >= worker.min && workers <= worker.max){
        return worker;
      }
    }
  }

  function round(num, decs){
    return parseFloat(num.toFixed(decs));
  }

  return {

    calculateRegistrationFee: function(){
      return registrationFee;
    },
    calculateGrossRevenue: function(revenue){
      var bracket = findGrossRevenueBracket(revenue);
      return round((bracket.minbracket + (bracket.rate * (revenue - bracket.bracketminimum) / 1000)), 2);
    },

    calculateWorkerRate: function(workers){
      var worker = findWorkerRate(workers);
      return round((worker.minbracket + (worker.rate * (workers - worker.bracketminimum))), 2);
    },
    calculateTotal: function(revenue, workers){
      return this.calculateRegistrationFee() + this.calculateGrossRevenue(revenue) + this.calculateWorkerRate(workers);
    }

  };

}());
