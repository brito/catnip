// every utterance will last exactly x milliseconds (2e3 = 2x10^3 = 2000)
var typeDelay = 100,
    [Case, Chat] =  whereis('#chatTextArea, #cas3'),
    customer = 'Lydia',
    account = 'PLDT',
    agent = 'IV.AI',

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

Override
(`
${CONTACT_NAME} ${customer}
${ACCOUNT_NAME} ${account}
${SUBJECT} (new chat session)
${STATUS} New
${PRIORITY} Low
`)
;

[[/don't have any credits left/, `
${STATUS} Working
${PRODUCT} Free Bee
${SUBJECT} Out of Credits
${TYPE} Credit
${REASON} Credits
Hello, Lydia! Thanks for reaching out. Let me see if I can help.
I'll do my best to help you resolve your Free Bee app problem. To better assist you, please type or select your registered Free Bee number.
[MENU002]
`],

[/yeah, that number is right/, `
${DESCRIPTION} Phone number: 639473371743
Thanks. I'll need to collect a few more details to help you troubleshoot this issue.
What is the model of the device you're using?
`],

[/Samsung Galaxy/, `
${DESCRIPTION} Phone model: Samsung Galaxy
Which country are you currently in?
[MENU053]
`],

[/taiwan/, `
${DESCRIPTION} Taiwan
How many Premium minutes did you purchase?
[MENU076]
`],

[/\[INPUT: 500\]/, `
${DESCRIPTION} Minutes purchased: 500
How many purchase attempts did you make?
`],

[/only 1/, `
${DESCRIPTION} Purchase attempts: 1
Finally, can you submit a screenshot of the error? Just use the photo upload button below.
`],

[/\[SCREENSHOT SUBMISSION\]/, `
Thanks for the details, Lydia. Please try refreshing the credits and making another call. Then, let us know the results.
[MENU744]
`],

[/\[INPUT: Didn't work\]/, `
${PRIORITY} Medium
Try following these steps to clear the cache on your Samsung device:  Go to Phone Settings > Tap "App" > Go to "Free Bee" > Go to "Storage" > Then click "Clear Cache" button.
`],

[/I don't have the Clear Cache Button/, `
${PRIORITY} High
${SUBJECT} Agent Handover, Out of Credits
Thanks for sending that through. As you can't see a Clear Cache Button let me bring in a colleague to help solve the problem.
`],

[/Ok, sure/, `
${STATUS} Escalated
Hi Lydia, This is Maria. Sorry to hear you're having problems with the Clear Cache Button. I see you have a Samsung Galaxy phone. Can you confirm what version it is?
`],

[/It's a galaxy s5/, `
Ah, that might be the problem. Our app actually doesn't work on that model anymore. Perhaps I could interest you in a new phone and contract?
`],

[/I do need one. but not right now/, `
No problem. We can easily arrange for a new phone and tell you more about variety of options to choose from. Meanwhile, you may enjoy the remainder of minutes left on your Premium Free Bee app so long as you use a compatible device with it. Rest assured that your load stays on your registered number.
`],

[/OK, I will do that. Thanks for your help/, `
You're welcome, Lydia. Did you need help with anything else?
`],

[/no/, `
Thank's for contacting PLDT on Messenger. Have a great day!
[MENU:000]
`]]

.forEach(React)

// -----------

function Respond(delay, text){
    text = text.replace(/^> /,'')
    let justDelay = !isNaN(+text)

    if (justDelay)
        return delay + +text
    else setTimeout(() => 
        chat(text), delay)
        
    return delay + (text.length * typeDelay)
}

function React([re, s], rule){
    let known = []
    setInterval(() => {
        let utterances = [...Chat.querySelectorAll('.chasitorMessage .messageText')]
            .map(el => el.innerText)
        utterances
            .filter(utt => !known.includes(utt))
            .map((utt, i) => {
                known.push(utt)
                if (re.test(utt)){
                    Override(s)
                    let someId = 1e3 * Math.random() |0
                    Case.getElementById('cas16').value += 
                        `• Utterance ${rule}, intent [${someId}] :: ${utt}\n`
                }
            })
    }, 1e3)
}

function Override(t){
    t.split(/\n/).slice(1, -1)
    .filter(input => {
        let data = input.match(/(cas\d\d?) (.+)/) ||
            input.match(/#(\S+) (.+)/)
        if (!data)
            return true
        let [,id, value] = data
        populate(Case.getElementById(id), value)
     })
    .reduce(Respond, 0)
}
function populate(el, value){
    if (!/^--/.test(value))
        el.value = ''
    el.tagName == 'SELECT' ?
        el.value = value :
        typed(el, value.replace(/--/,'\n'))
}
function typed(el, value, take){
    [...value].forEach((ch, j) =>
        setTimeout(()=> el.value += ch, 
            typeDelay *j) )
}
function chat(value){
    let [el, send] = 
        ['#chatTextArea', '#chatInputSend']
        .map(s => Chat.querySelector(s));

    [...value].forEach((ch, j) =>
        setTimeout(() => {
            el.value += ch
            if (j == value.length - 1)
                send.click()
        }, 50*j) )

}

function whereis(s){
    return [...top.document.querySelector('.sd_primary_container:not(.x-hide-display)').querySelectorAll('iframe')]
        .map(f => f.contentWindow.document)
        .filter(d => d.querySelector(s))
}
