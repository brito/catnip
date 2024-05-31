/*! 2019 IV.AI Liveagent Screen Script v2.0.1 */
// last modified:20190611T134537-0700

IV_liveagent

  `
ACCOUNT:    Barclays
SUBJECT:    (new Chat)
STATUS:     New
PRIORITY:   Low

       AGENT
    Hello!
    Welcome to Unlock Britain.
    Barclays has been at the forefont of British banking for over 325 years -  we know Britain.
    We designed this app to help you with buying property and offshore banking in the UK
    [BUTTON:003]

        CUSTOMER
    (3s)
    [INPUT:TELL_ME_MORE:01]

PRODUCT: GC1020
SUBJECT: Learning

        AGENT
    So we can show you the right information, we need to know where you're from.
    [MENU:841]

TYPE: Other

        CUSTOMER
    [INPUT:SELECT_COUNTY:UAE]

        AGENT
    Just to confirm, you're a resident of UAE?
    [MENU:839}]

        CUSTOMER
    [INPUT:YES]

REASON: Other

        AGENT
    Did you know that we have international Banking specialists based in Dubai?
    We also have products exclusively for you.
    [MENU:734]

        CUSTOMER
    [INPUT:KEEP_TALKING]

        AGENT
    We have videos, articles, tools, and more for you to explore.
    This app also allows you to search through our International Banking offering and apply for an account.
    [MENU:938]

        CUSTOMER
    [INPUT:OK_GOT_IT]

        AGENT
    If you'd like to be guided, choose a topic you'd like to know more about.
    [MENU:233]

        CUSTOMER
    [INPUT:BUYING_PROPERTY]

SUBJECT: Interested in purchasing property.

        AGENT
    We have expert insight on buying property in the UK.
    Where would you like to start?
    [MENU:012]

        CUSTOMER
    [INPUT:WHERE_TO_BUY]

        AGENT
    If you don't have an area in mind, we have two articles that might help.
    You can also explore different locations.
    [MENU:027]

        CUSTOMER
    [INPUT:LONDON]

        AGENT
    Find out about some of the best areas in London.
    Browse our guides and discover what these areas have to offer.
    [MENU:776]

PRODUCT: GC5040

        CUSTOMER
    [INPUT:ANOTHER_TOPIC]

        AGENT
    We can tell you about investing in the UK, education, or our product range.
    Don't forget, you can use the menu to browse more topics.
    [MENU:054]

        CUSTOMER
    [INPUT:EDUCATION_IN_THE_UK]

        AGENT
    What level of education are you interested in?
    [MENU:001]

        CUSTOMER
    [INPUT:CHILDREN'S_SCHOOLS]

        AGENT
    British independent schools are among the best schools in the world.
    If you would like to get a better understanding of the UK school system, this culd be the article for you.
    [MENU:212]

        CUSTOMER
    [INPUT:TELL_ME_MORE:02]

        AGENT
    We've interviewed the chairman of the Independent Schools Council.
    We also have tips to help you find the right school for your child.
    [MENU:088]

        CUSTOMER
    [INPUT:FIND_RIGHT_SCHOOL]
`
// IV_liveagent





















/* ---------------------------------------------                                 
 _ __   __ _ _ __ ___  ___ _ __ 
| '_ \ / _` | '__/ __|/ _ \ '__|
| |_) | (_| | |  \__ \  __/ |   
| .__/ \__,_|_|  |___/\___|_|   
|_|                             
export */ function IV_liveagent([script]) {
  const ALIASES = {
    // Case Information fields
    CONTACT: 'cas3',
    ACCOUNT: 'cas4',
    TYPE: 'cas5', // Picklist: Case > Fields > Type
    REASON: 'cas6', // Picklist: Case > Fields > Case Reason
    STATUS: 'cas7', // Picklist: Case > Fields > Status
    PRIORITY: 'cas8',
    CASE_ORIGIN: 'cas11',
    // Additional Information fields
    PRODUCT: '00Nf400000HC0Fu', // Picklist: Case > Fields > Custom > Product
    // Description Information fields
    SUBJECT: 'cas14',
    DESCRIPTION: 'cas15',
    INTERNAL_COMMENTS: 'cas16'
  },
    // a scripted pause, eg (3s)
    pause = /^\((\d+)s\)$/;

  let
    // [{ character:'', cue:'', lines:[''] }]
    sides = script.split(/\n\n/).map(Sides),
    // [ () => action ]
    actions = sides.map(Role)
      .map(action => action(action));

  console.warn(actions.map((a, i) => a && sides[i] || sides[i].character));
  return 'ok';

  //  HOISTS ↓

  // a somewhat-maintainable way to find where the relevant containers are, for reading and writing
  function whereis(s) {
    const container = top.document.querySelector('.sd_primary_container:not(.x-hide-display)');
    if (!container) throw 'IV_liveagent is lost without context container';
    return [...container.querySelectorAll('iframe')]
      .map(f => f.contentWindow.document.getElementById(s))
      .filter(e => e)[0]
  }

  //
  function Role(side) {
    const BEAT = 1000,

      { character, cue, lines } = side,

      roles = liveagent.agent ? { 'AGENT': 1, 'SET': 1 }
        : liveagent.chasitor ? { 'CUSTOMER': 1 } : {},

      ready = character in roles,

      /**
       * Get the last message received in chat
       * @return {String}
       */
      getLast = () => {
        let messages = [];

        if ('agent' in liveagent)
          messages = liveagent.agent.getChasitors()[0].getMessages()
            .filter(m => 'Agent' != m.getType());

        if ('chasitor' in liveagent)
          messages = liveagent.chasitor.getChatMessages()
            .filter(m => 'chasitor' != m.getType());

        let last = messages[messages.length - 1];
        return last ? last.getContent() : '';
      },

      execute = line => new Promise((resolve, reject) => {
        // taking a turn to pause, deliver the next line or reattempt in a BEAT
        const attempt = () => {
          if (getLast() == cue) {
            if (pause.test(line)) {
              console.warn('⏲', line);
              setTimeout(resolve, BEAT * line.match(pause)[1]);
              return;
            }
            console.warn(cue, '👂 → 🗣', line);
            ({
              CUSTOMER: line => liveagent.chasitor.sendMessage(line),
              AGENT: line => liveagent.agent.getChasitors()[0].sendMessage(line),
              SET: line => line.replace(/^(\S+?)\s*:\s*(.+)/, (_, name, value) => {
                console.warn(name, ALIASES[name], value);
                whereis(ALIASES[name]).value = value;
                whereis(ALIASES['CONTACT']).value =
                  liveagent.agent.getChasitors()[0].getName();
              })
            })[character](line);
            resolve(line);
          }
          else
            setTimeout(attempt, BEAT);
        };
        setTimeout(attempt, BEAT);
      });

    return action => ready && lines.reduce((queue, next) => {
      return queue.then(() => execute(next));
    }, Promise.resolve());
  }


  /**
   * Extract crew and cast roles (actor), lines (text), and cues
   * @return {character:'', lines:[''], cue:''}
   */
  function Sides(block, n, blocks) {
    const
      CREW = 'SET',
      CHARACTER = /^ +[A-Z ]+/,
      lines = block.split(/\n/).filter((line, ln) =>
        line && line.trim() && ln),
      lastBlock = blocks.slice(0, n).filter(block =>
        CHARACTER.test(block)).slice(-1)[0];

    return {
      character: (block.match(CHARACTER) || [CREW])[0].trim(),
      lines: lines.map(line => line.trim()),
      cue: lastBlock && lastBlock
        .split(/\n/)
        .filter(line => !line.trim().match(pause))
        .slice(-1)[0].trim() || ''
    };
  }
}

