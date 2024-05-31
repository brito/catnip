// eg (buy_load|free_bee|no_signal)
topicWords = '('+ ['buy load', 'free bee', 'no signal'].join('|') +')';

// eg (but|however|already)
complexWords = '('+ ['but', 'however', 'already'].join('|') +')';

maxWordsBetween = 2;
// eg 'in there '
maybeWordsBetween = '('+ `(\\W+\\w+){0,${maxWordsBetween}}` + ')';

// eg 'buy load for dis but not rly'
leftMatch = `${topicWords}${maybeWordsBetween} ${complexWords}`;
// eg 'already did buy load yo'
rightMatch = `${complexWords}${maybeWordsBetween} ${topicWords}`;

// eg (left)|(right)
trickyRegex = new RegExp(`(${leftMatch})|(${rightMatch})`);


// eg /((buy load|free bee|no signal)((\W+\w+){0,2}) (but|however|already))|((but|however|already)((\W+\w+){0,2}) (buy load|free bee|no signal))/
console.log(trickyRegex);


['i wanna buy load but aint workin',
'i know free bee already tho',
'i get no signal in here but i told you yesterday',
'already kno whats free bee'].map(m =>
  m.match(trickyRegex))
