var BusinessOccupational = (function(){
  'use strict';
  var registrationFee = 65.0;
  var grossRevenueBracket = [
    {'min': 0, 'max': 1999, 'rate': 5.153, 'minbracket': 0.00},
    {'min':2000, 'max':4999, 'rate':1.502, 'minbracket':10.29},
    {'min':5000, 'max':99999, 'rate':0.723, 'minbracket':14.77},
    {'min':100000, 'max':199999, 'rate':0.661, 'minbracket':83.32},
    {'min':200000, 'max':299999, 'rate':0.567, 'minbracket':149.71},
    {'min':300000, 'max':399999, 'rate':0.536, 'minbracket':206.38},
    {'min':400000, 'max':499999, 'rate':0.519, 'minbracket':259.87},
    {'min':500000, 'max':599999, 'rate':0.509, 'minbracket':312.05},
    {'min':600000, 'max':699999, 'rate':0.497, 'minbracket':362.97},
    {'min':700000, 'max':799999, 'rate':0.481, 'minbracket':412.57},
    {'min':800000, 'max':899999, 'rate':0.469, 'minbracket':460.85},
    {'min':900000, 'max':999999, 'rate':0.457, 'minbracket':507.88},
    {'min':1000000, 'max':1099999, 'rate':0.444, 'minbracket':553.63},
    {'min':1100000, 'max':1199999, 'rate':0.432, 'minbracket':598.12},
    {'min':1200000, 'max':1299999, 'rate':0.418, 'minbracket':641.29},
    {'min':1300000, 'max':1399999, 'rate':0.408, 'minbracket':683.13},
    {'min':1400000, 'max':1499999, 'rate':0.390, 'minbracket':723.74},
    {'min':1500000, 'max':1999999, 'rate':0.384, 'minbracket':763.01},
    {'min':2000000, 'max':2499999, 'rate':0.379, 'minbracket':956.32},
    {'min':2500000, 'max':2999999, 'rate':0.371, 'minbracket':1146.37},
    {'min':3000000, 'max':3499999, 'rate':0.361, 'minbracket':1333.16},
    {'min':3500000, 'max':3999999, 'rate':0.343, 'minbracket':1513.54},
    {'min':4000000, 'max':4999999, 'rate':0.333, 'minbracket':1687.49},
    {'min':5000000, 'max':5999999, 'rate':0.322, 'minbracket':1913.59},
    {'min':6000000, 'max':7999999, 'rate':0.310, 'minbracket':2344.63},
    {'min':8000000, 'max':10999999, 'rate':0.294, 'minbracket':2963.08},
    {'min':11000000, 'max':13999999, 'rate':0.284, 'minbracket':3852.12},
    {'min':14000000, 'max':57999999, 'rate':0.270, 'minbracket':4702.51},
    {'min':58000000, 'max':91999999, 'rate':0.245, 'minbracket':16608.02},
    {'min':92000000, 'max':Infinity, 'rate':0.193, 'minbracket':24931.53}
  ];

}());
