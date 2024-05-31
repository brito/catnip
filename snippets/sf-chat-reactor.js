// every utterance will last exactly x milliseconds (2e3 = 2x10^3 = 2000)
var utteranceDuration = 2e3,

    [Case, Chat] =  whereis('#chatTextArea, #cas3'),
    
// Script variables
    customer = 'Allison',
    account = 'Spotify',
    agent = 'Matt',

// Case Information fields
    CONTACT_NAME = 'cas3',
    ACCOUNT_NAME = 'cas4',
    TYPE = 'cas5', // Picklist: Case > Fields > Type
    REASON = 'cas6', // Picklist: Case > Fields > Case Reason

    STATUS = 'cas7', // Picklist: Case > Fields > Status
    PRIORITY = 'cas8',
    CASE_ORIGIN = 'cas11',

// Additional Information fields
    PRODUCT = '#00Nf400000HC0Fu', // Picklist: Case > Fields > Custom > Product

// Description Information fields
    SUBJECT = 'cas14',
    DESCRIPTION = 'cas15',
    INTERNAL_COMMENTS = 'cas16'

// Welcome
Override(`
${CONTACT_NAME} ${customer}
${ACCOUNT_NAME} ${account}
${SUBJECT} (new chat session)
Hello ${customer}! :wave:
2e3
I can help you discover and share your favourite tunes on Spotify. Here's how...
3e3
{Say it with Music}
1e3
If you have any problems or need some tips, don't worry I've got your back. Choose from the options or simply type below :point-down:
3e3
{General Menu}
`);

// Reactions
[[/How do I listen on my Echo/,`
${PRODUCT} Spotify on Amazon Echo
${SUBJECT} How to set up
Spotify sounds awesome on Amazon speakers. Take control of the music with your phone by using Spotify Connect.
[Spotify Connect]
`],

[/\[Spotify Connect\]/,`
`],

[/I can't get into my Spotify/,`
${TYPE} Password reset
${SUBJECT} How to reset password
Sorry to hear that, we don't want to keep you from your favourite playlists.
Seems like you might need a password reset. Click below:
[Password reset]
`],

[/\[Password reset\]/,`
6e3
Did that resolve the issue?
`],

[/No, I think my account has been hacked/,`
${TYPE} Account Security
${REASON} Compromised Account
${STATUS} Escalated
Ok, don't panic. One of our agents will be in touch shortly.
${SUBJECT} >> human agent intervention <<
[Spotify Loader]
3e3
Hey ${customer}, this is ${agent}.
So you think your account might have been hacked?
`],

[/Yes, it's really creepy/,`
Don't worry, we'll get it all sorted for you and get you back to your favourite tunes.
Because you'll be sharing personal information I need you to quickly fill in this form
[Open Form]
`],

[/\[Open Form\]/,`
5e3
${SUBJECT} Password reset: [Customer Account Form completed]
Thanks for doing that, we've reset your account and you can get back to the music you love.
You might want to consider changing your passwords for other services also. Matt
`],

[/thanks!/,`
`]

].forEach(React)

// -----------
// send an answer to the chat client
function Respond(delay, text){
    console.debug(`+${(delay/60)|0}s ${text}`)
    let justDelay = !isNaN(+text)

    if (justDelay)
        return delay + +text
    else setTimeout(() => 
        chat(text), delay)
        
    return delay + utteranceDuration
}

// Sets up the check interval and regular expressions to listen for
function React([re, s], i){
    let known = []
    setInterval(() => {
        let utterances = [...Chat.querySelectorAll('.chasitorMessage .messageText')]
            .map(el => el.innerText)
        utterances
            .filter(utt => !known.includes(utt))
            .map(utt => {
                known.push(utt)
                if (re.test(utt)){
                    Override(s)
                    let someId = 1e3 * Math.random() |0
                    Case.getElementById(INTERNAL_COMMENTS).value += 
                        `• Utterance ${i}, intent [${someId}] :: ${utt}\n`
                }
            })
    }, 1e3)
    
    console.warn(`Monitoring ${re}`)
}

// set form variables
function Override(t){
    t.split(/\n/).slice(1, -1)
    .filter(input => {
        // a line starting with cas(number) or #(string) is data
        let data = input.match(/(cas\d\d?) (.+)/) ||
            input.match(/#(\S+) (.+)/)
        if (!data)
            return true
        let [,id, value] = data
        populate(Case.getElementById(id), value)
     })
    .reduce(Respond, 0)
}
// set the value of an input, either typed or immediate (for dropdowns)
function populate(el, value){
    // a line beginning with '--' indicates input append instead of replace
    if (!/^--/.test(value))
        el.value = ''
    el.tagName == 'SELECT' ? // dropdowns cannot be typed into
        el.value = value :
        typed(el, value.replace(/--/,'\n'))
}
// simulate typing
function typed(el, value, take){
    [...value].forEach((ch, j) =>
        setTimeout(()=> el.value += ch, 
            (utteranceDuration/value.length) *j) )
}
function chat(value){
    let [el, send] = 
        ['#chatTextArea', '#chatInputSend']
        .map(s => Chat.querySelector(s));

    [...value].forEach((ch, j) =>
        setTimeout(() => {
            el.value += ch
            if (j == value.length - 1)// after all is said, send
                send.click()
        }, (utteranceDuration/value.length)*j) )

}

// a somewhat-maintainable way to find where the relevant containers are, for reading and writing
function whereis(s){
    return [...top.document.querySelector('.sd_primary_container:not(.x-hide-display)').querySelectorAll('iframe')]
        .map(f => f.contentWindow.document)
        .filter(d => d.querySelector(s))
}
