#!/usr/bin/env node

/**
 * 
 * @param config 
 * @return Client.Version
 * @constructor
 */
function Vertical(config) {
  // Feature
  if ('chainable constructor')
    return new Vertical(config)
}
Vertical.prototype = { Topic: config => { } }

/**
 * 
 * @param config 
 */
function Anomaly(config) { }

// watch the vertical(eg premade dinners that you eat at home)
Vertical('premade dinners that you eat at home')
  // monitoring what is happening with topics, when
  //   (microwaved, reheat, beyond meat frozen burger in your fridge)
  .Topic('microwaved, reheat, beyond meat frozen burger in your fridge')
  // popular, upcoming
  .stats('popular, upcoming')
  // watching for consumer trends (tired, want dinner, nothing in fridge)
  .when('tired, want dinner, nothing in fridge')
  // find pockets of anomalies
  // how it affects the vertical(premade, in this case)
  // eg exploring people who complain about this brand vs all brands anyway
  .find(Anomaly(`complain, ${brand}`))
