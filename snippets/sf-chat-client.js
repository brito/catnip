// every utterance will last exactly x milliseconds (2e3 = 2x10^3 = 2000)
var utteranceDuration = 2e3; 

`
28e3
How do I listen on my Echo?
6e3
[Spotify Connect]
16e3
I can't get into my Spotify!
11e3
[Password reset]
9e3
No, I think my account has been hacked!
22e3
Yes, it's really creepy.
9e3
[Open Form]
13e3
thanks!
`
.split(/\n/).slice(1, -1)
.reduce(spread, 0)



function spread(delay, text, linenum){
    W(`Scheduling line ${linenum}: delay ${delay}, text: ${text}`)
//     W(`${delay} ${text}`)
    let justDelay = !isNaN(+text)

    if (justDelay)
        return delay + +text
    else
        setTimeout(() => typed(text), delay)
        
    return delay + utteranceDuration
}




function typed(value){
//     W(value)
    let el = document.querySelector('#liveAgentChatTextArea'),
        send = document.querySelector('.liveAgentSendButton')

     el.value = '';
    [...value].forEach((ch, j) =>
        setTimeout(() => {
            el.value += ch
            if (j == value.length - 1)
                send.click()
            keyup(el)
        }, (utteranceDuration/value.length)*j) )
}

function keyup(el){
    let e = document.createEvent('HTMLEvents')
    e.initEvent('keyup', false, true)
    el.dispatchEvent(e)
}


function W(m){ console.warn(m) }
