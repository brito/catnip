/*! 2019 IV.AI Liveagent Screen Script v2.0.0 */
// last modified:20190520T142909-0700

IV_liveagent

  `
ACCOUNT:    Rolls-Royce 
SUBJECT:    (new Chat)

       AGENT
    Hello Blake! 
    :wave:
    (2s)
    I can help you discover and share your favourite tunes on Spotify. 
    Here's how...
    (3s)
    {Say it with Music}
    (1s)
    If you have any problems or need some tips, don't worry I've got your back. 
    Choose from the options or simply type below 
    👇🏼
    (3s)
    {General Menu}

        CUSTOMER
    How do I listen on my Echo?

PRODUCT:    Spotify on Amazon Echo
SUBJECT:    How to set up

        AGENT
    Spotify sounds awesome on Amazon speakers. 
    Take control of the music with your phone by using Spotify Connect.
    [Spotify Connect]

        CUSTOMER
    (6s)
    [Spotify Connect]
    (16s)
    I can't get into my Spotify!

        AGENT
    [Password Reset]

        CUSTOMER
    (10s)
    ok true

        AGENT
    word
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
  };

  let
    // [{ character:'', cue:'', lines:[''] }]
    sides = script.split(/\n\n/).map(Sides),
    // [ () => action ]
    actions = sides.map(Role);


  return actions.map(action => action(action));

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
       * Get messages received in chat
       * @return {Array} A list of messages received
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

      // a scripted pause
      pause = /^\((\d+)s\)$/,

      // Y combinator
      //       Y = f => (x => x(x))(x => f(y => x(x)(y))),

      ponder = line => console.log(getLast(), character, cue, line),

      execute = line => new Promise((resolve, reject) => {
        getLast() == cue && ponder(line);
        let attempt = () => {
          if (pause.test(line))
            setTimeout(resolve, BEAT * line.match(pause)[1]);
          else if (getLast() == cue) {
            console.warn(cue, getLast(), line);
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
    }, Promise.resolve())


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
      cue: lastBlock && lastBlock.split(/\n/).slice(-1)[0].trim() || ''
    };
  }
}

