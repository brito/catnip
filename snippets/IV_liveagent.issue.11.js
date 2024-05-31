// last modified:20190708T184136-0700

IV_liveagent

  `
ACCOUNT:    Chanel
SUBJECT:    (new Chat)
STATUS:     New
PRIORITY:   Low
CONTACT:    Jean

        AGENT
    (5s)
    Hey, Jean. This is Sam, from Chanel. It was nice meeting you.
    (2s)
    I'll let you know when the watch comes in. Let me know if I can help with anything else.

TYPE: Follow-up
DESCRIPTION: ·Connecting Medium, RCS

        CUSTOMER
    end of convo

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
                if (/^(\.\.\.|…)/.test(value))
                  whereis(ALIASES[name]).value += value.replace(/^(\.\.\.|…)/, '\n');
                else
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
        line && line.trim()),
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