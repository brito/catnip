console.clear();
var result = { topics:[], documents:[] };

var modulo = [
[/\n*cluster topics\[\d+:\d+\] \[(.+?)\]/g,
      (m, $1) => {
        result['topics'].push($1.split(' '))
        return ''
      }],
    [
      /cluster documents\[\d+:\d+:\d+\]\n>>> ([\s\S]+?)\n(:?\n|$)/g,
      (m, $1) => {
        result['documents'].push($1.split(/\s*>>>\s+/).filter((line,i) => !i || line.match('tokens')))
        return
      }
    ]
].reduce((str, [re, sub]) => str.replace(re, sub),`
cluster topics[0:20] [dpa_fp dpa_ry dpa_amc dpa_cb dpa_rt dpa_cp JeremyShockey_@ dpa_nr dpa_si dpa_dc dpa_fm dpa_jbp dpa_br dpa_hl imma kulhadd CNA_ir issa dpa_wh wat_u]
cluster documents[0:20:5882]
>>> #DidWeJustBecomeBestFriends
>>>  orig text #DidWeJustBecomeBestFriends
>>>  labels []
>>>  tokens [didwejustbecomebestfriends:NNS]
>>>  ideas [[didwejustbecomebestfriends:NNS]]
>>>  stopped words []

>>> #tailendersoftheworlduniteandtakeover 
>>>  orig text #tailendersoftheworlduniteandtakeover 
>>>  labels []
>>>  tokens [tailendersoftheworlduniteandtakeover:NN]
>>>  ideas [[tailendersoftheworlduniteandtakeover:NN]]
>>>  stopped words []

>>> #NeverForget 
>>>  orig text #NeverForget 
>>>  labels []
>>>  tokens [neverforget:NNP]
>>>  ideas [[neverforget:NNP]]
>>>  stopped words []

>>> Sincerely,
>>>  orig text Sincerely,
>>>  labels []
>>>  tokens [sincerely:RB]
>>>  ideas [[sincerely:RB]]
>>>  stopped words []

>>> WILLIAMS
>>>  orig text WILLIAMS
>>>  labels []
>>>  tokens [williams:NN]
>>>  ideas [[williams:NN]]
>>>  stopped words []

>>> Literally. 
>>>  orig text Literally. 
>>>  labels []
>>>  tokens [literally:RB]
>>>  ideas [[literally:RB]]
>>>  stopped words []

>>> 1677148,"Reason No 63 #WhyMarciaBradyHasLostThePlot:
>>>  orig text 1677148,"Reason No 63 #WhyMarciaBradyHasLostThePlot:
>>>  labels []
>>>  tokens [reason:NNP whymarciabradyhaslosttheplot:NN]
>>>  ideas [[reason:NNP whymarciabradyhaslosttheplot:NN] [no:NNP]]
>>>  stopped words [no:NNP]

>>> #OurHeroYourHero"
>>>  orig text #OurHeroYourHero"
>>>  labels []
>>>  tokens [ourheroyourhero:NNP]
>>>  ideas [[ourheroyourhero:NNP]]
>>>  stopped words []

>>> 864153,"Alexandru -
>>>  orig text 864153,"Alexandru -
>>>  labels []
>>>  tokens [alexandru:NNP]
>>>  ideas [[alexandru:NNP]]
>>>  stopped words []

>>> 🇦🇷 Messi
>>>  orig text 🇦🇷 Messi
>>>  labels []
>>>  tokens [messi:NNP]
>>>  ideas [[messi:NNP]]
>>>  stopped words []

>>> Listen now: 
>>>  orig text Listen now: 
>>>  labels []
>>>  tokens [listen:VBN]
>>>  ideas [[listen:VBN] [now:RB]]
>>>  stopped words [now:RB]

>>> Listen 👇👇
>>>  orig text Listen 👇👇
>>>  labels []
>>>  tokens [listen:NNP]
>>>  ideas [[listen:NNP]]
>>>  stopped words []

>>> 2467343,"And that, my friends, was worth staying up for. A sweep? Lovely. #RedSoxYankees #WhoSweptYa?"
>>>  orig text 2467343,"And that, my friends, was worth staying up for. A sweep? Lovely. #RedSoxYankees #WhoSweptYa?"
>>>  labels []
>>>  tokens [friends:NNS worth:JJ staying:VBG sweep:NN lovely:RB redsoxyankees:NNP whosweptya:NNP]
>>>  ideas [[friends:NNS worth:JJ staying:VBG] [and:CC] [that:IN] [my:PRP$] [was:VBD for:IN up:RP] [sweep:NN] [lovely:RB] [redsoxyankees:NNP] [whosweptya:NNP]]
>>>  stopped words [and:CC that:IN my:PRP$ was:VBD up:RP for:IN]

>>> YouTube
>>>  orig text YouTube
>>>  labels []
>>>  tokens [youtube:NN]
>>>  ideas [[youtube:NN]]
>>>  stopped words []

>>> 1265304,sometimes twete
>>>  orig text 1265304,sometimes twete
>>>  labels []
>>>  tokens [twete:JJ]
>>>  ideas [[twete:JJ] [sometimes:RB]]
>>>  stopped words [sometimes:RB]

>>> 2164508,"Does This Happen To You?
>>>  orig text 2164508,"Does This Happen To You?
>>>  labels []
>>>  tokens [happen:NNP]
>>>  ideas [[happen:NNP] [does:VBZ you:PRP this:DT]]
>>>  stopped words [does:VBZ this:DT you:PRP]

>>> Trust your journey."
>>>  orig text Trust your journey."
>>>  labels []
>>>  tokens [trust:NNP journey:NN]
>>>  ideas [[trust:NNP] [journey:NN your:PRP$]]
>>>  stopped words [your:PRP$]

>>> 1808985,#WeAreVMLYR
>>>  orig text 1808985,#WeAreVMLYR
>>>  labels []
>>>  tokens [wearevmlyr:NNP]
>>>  ideas [[wearevmlyr:NNP]]
>>>  stopped words []

>>> 593792,"#Repost littlestpetshop with repostapp.
>>>  orig text 593792,"#Repost littlestpetshop with repostapp.
>>>  labels []
>>>  tokens [repost:NNP littlestpetshop:NN repostapp:NN]
>>>  ideas [[repost:NNP repostapp:NN] [littlestpetshop:NN] [with:IN]]
>>>  stopped words [with:IN]

>>> Heres how we do it.
>>>  orig text Heres how we do it.
>>>  labels []
>>>  tokens [heres:VBZ]
>>>  ideas [[heres:VBZ] [how:WRB] [we:PRP do:VBP] [it:PRP]]
>>>  stopped words [how:WRB we:PRP do:VBP it:PRP]


cluster topics[0:20] [gvern zmien kulhadd jista dpa_rt dpa_ry dpa_fp u_mhux dpa_jbp Jekk dpa_dc l_li u_li jekk hafna dpa_nr xi_hadd mhux ¬ dpa_amc]
cluster documents[0:20:2866]
>>> 479592,"#digitalmarketingcompany #digitalmarketingservices #digitalmarketingservicesinhyderabad #digitalmarketingagency
>>>  orig text 479592,"#digitalmarketingcompany #digitalmarketingservices #digitalmarketingservicesinhyderabad #digitalmarketingagency
>>>  labels []
>>>  tokens [digitalmarketingcompany:JJ digitalmarketingservices:NNS digitalmarketingservicesinhyderabad:JJ digitalmarketingagency:NN]
>>>  ideas [[digitalmarketingcompany:JJ] [digitalmarketingservices:NNS digitalmarketingservicesinhyderabad:JJ] [digitalmarketingagency:NN]]
>>>  stopped words []

>>> And do marketers have to get onto it NOW?
>>>  orig text And do marketers have to get onto it NOW?
>>>  labels []
>>>  tokens [marketers:NNS]
>>>  ideas [[marketers:NNS] [and:CC do:VBP it:PRP now:NNP] [have:VB] [get:VB] [onto:IN]]
>>>  stopped words [and:CC do:VBP have:VB get:VB onto:IN it:PRP now:NNP]

>>> #RoutineReflection 
>>>  orig text #RoutineReflection 
>>>  labels []
>>>  tokens [routinereflection:NN]
>>>  ideas [[routinereflection:NN]]
>>>  stopped words []

>>> #FuerzaBarcelona"
>>>  orig text #FuerzaBarcelona"
>>>  labels []
>>>  tokens [fuerzabarcelona:NNP]
>>>  ideas [[fuerzabarcelona:NNP]]
>>>  stopped words []

>>> 534844,"Interesting. 
>>>  orig text 534844,"Interesting. 
>>>  labels []
>>>  tokens [interesting:NNP]
>>>  ideas [[interesting:NNP]]
>>>  stopped words []

>>> But it does have its limitations.👇
>>>  orig text But it does have its limitations.👇
>>>  labels []
>>>  tokens [limitations.👇:NN]
>>>  ideas [[limitations.👇:NN] [but:CC have:VB] [it:PRP its:PRP$] [does:VBZ]]
>>>  stopped words [but:CC it:PRP does:VBZ have:VB its:PRP$]

>>> What will the #FutureofWork be for all of us?
>>>  orig text What will the #FutureofWork be for all of us?
>>>  labels []
>>>  tokens [futureofwork:NNP]
>>>  ideas [[futureofwork:NNP will:MD] [what:WP] [the:DT for:IN be:VB] [all:DT us:PRP]]
>>>  stopped words [what:WP will:MD the:DT be:VB for:IN all:DT us:PRP]

>>> Across centuries and continents, 
>>>  orig text Across centuries and continents, 
>>>  labels []
>>>  tokens [centuries:NNS continents:NNS]
>>>  ideas [[centuries:NNS continents:NNS across:IN] [and:CC]]
>>>  stopped words [across:IN and:CC]

>>> This is one of those situations where conservatives collective…"
>>>  orig text This is one of those situations where conservatives collective…"
>>>  labels []
>>>  tokens [situations:NNS conservatives:NNS collective…:VBP]
>>>  ideas [[situations:NNS] [conservatives:NNS collective…:VBP] [this:DT is:VBZ] [one:CD] [those:DT] [where:WRB]]
>>>  stopped words [this:DT is:VBZ one:CD those:DT where:WRB]

>>> Australia: 207
>>>  orig text Australia: 207
>>>  labels []
>>>  tokens [australia:NNP]
>>>  ideas [[australia:NNP]]
>>>  stopped words []

>>> It is magnifice…"
>>>  orig text It is magnifice…"
>>>  labels []
>>>  tokens [magnifice…:JJ]
>>>  ideas [[magnifice…:JJ] [it:PRP is:VBZ]]
>>>  stopped words [it:PRP is:VBZ]

>>> Integrado.
>>>  orig text Integrado.
>>>  labels []
>>>  tokens [integrado:NNP]
>>>  ideas [[integrado:NNP]]
>>>  stopped words []

>>> CONVENTION CENTER
>>>  orig text CONVENTION CENTER
>>>  labels []
>>>  tokens [convention:NNP center:NNP]
>>>  ideas [[convention:NNP] [center:NNP]]
>>>  stopped words []

>>> E-fficiency
>>>  orig text E-fficiency
>>>  labels []
>>>  tokens [e-fficiency:NN]
>>>  ideas [[e-fficiency:NN]]
>>>  stopped words []

>>> This is creativity."
>>>  orig text This is creativity."
>>>  labels []
>>>  tokens [creativity:NN]
>>>  ideas [[creativity:NN] [this:DT is:VBZ]]
>>>  stopped words [this:DT is:VBZ]

>>> Interviewer: Do they have libraries in Nigeria?
>>>  orig text Interviewer: Do they have libraries in Nigeria?
>>>  labels []
>>>  tokens [interviewer:NN libraries:NNS nigeria:NNP]
>>>  ideas [[interviewer:NN] [libraries:NNS nigeria:NNP] [do:VBP they:PRP in:IN] [have:VB]]
>>>  stopped words [do:VBP they:PRP have:VB in:IN]

>>> 168392,"Resolution 2019
>>>  orig text 168392,"Resolution 2019
>>>  labels []
>>>  tokens [resolution:NN]
>>>  ideas [[resolution:NN]]
>>>  stopped words []

>>> 653088,Pero queria trabajar!!!  #drinkateraz
>>>  orig text 653088,Pero queria trabajar!!!  #drinkateraz
>>>  labels []
>>>  tokens [pero:NNP queria:VBZ trabajar:NN drinkateraz:NN]
>>>  ideas [[pero:NNP] [queria:VBZ trabajar:NN] [drinkateraz:NN]]
>>>  stopped words []

>>> *Performance
>>>  orig text *Performance
>>>  labels []
>>>  tokens [*performance:NN]
>>>  ideas [[*performance:NN]]
>>>  stopped words []

>>> «🚦Amarillo…"
>>>  orig text «🚦Amarillo…"
>>>  labels []
>>>  tokens [«🚦amarillo…:NN]
>>>  ideas [[«🚦amarillo…:NN]]
>>>  stopped words []


cluster topics[0:20] [te ¬ dpa_rt ta l_li kulhadd u_mhux dpa_fp dpa_ry jista jekk dpa_amc issa dpa_dc ra hemm darba dpa_cb dpa_cp zmien]
cluster documents[0:20:2384]
>>> #branstorytelling"
>>>  orig text #branstorytelling"
>>>  labels []
>>>  tokens [branstorytelling:NN]
>>>  ideas [[branstorytelling:NN]]
>>>  stopped words []

>>> 2473272,"10/ STATE-BACKED?
>>>  orig text 2473272,"10/ STATE-BACKED?
>>>  labels []
>>>  tokens [state-backed:NNP]
>>>  ideas [[state-backed:NNP]]
>>>  stopped words []

>>> #OgilvyLoeries 
>>>  orig text #OgilvyLoeries 
>>>  labels []
>>>  tokens [ogilvyloeries:NNS]
>>>  ideas [[ogilvyloeries:NNS]]
>>>  stopped words []

>>> “Minnesota.”
>>>  orig text “Minnesota.”
>>>  labels []
>>>  tokens [minnesota:NN]
>>>  ideas [[minnesota:NN]]
>>>  stopped words []

>>> #WorkSmartChat"
>>>  orig text #WorkSmartChat"
>>>  labels []
>>>  tokens [worksmartchat:WP]
>>>  ideas [[worksmartchat:WP]]
>>>  stopped words []

>>> #freeartsla #freeartsday…"
>>>  orig text #freeartsla #freeartsday…"
>>>  labels []
>>>  tokens [freeartsla:JJ freeartsday…:NN]
>>>  ideas [[freeartsla:JJ] [freeartsday…:NN]]
>>>  stopped words []

>>> Saccharine.
>>>  orig text Saccharine.
>>>  labels []
>>>  tokens [saccharine:NN]
>>>  ideas [[saccharine:NN]]
>>>  stopped words []

>>> 551534,#roaracle
>>>  orig text 551534,#roaracle
>>>  labels []
>>>  tokens [roaracle:NN]
>>>  ideas [[roaracle:NN]]
>>>  stopped words []

>>> #BraveNew…"
>>>  orig text #BraveNew…"
>>>  labels []
>>>  tokens [bravenew…:NNP]
>>>  ideas [[bravenew…:NNP]]
>>>  stopped words []

>>> 1618755,Mindlessness is a no brainer
>>>  orig text 1618755,Mindlessness is a no brainer
>>>  labels []
>>>  tokens [mindlessness:NNP brainer:NN]
>>>  ideas [[mindlessness:NNP brainer:NN] [is:VBZ no:DT]]
>>>  stopped words [is:VBZ no:DT]

>>> #RollTide"
>>>  orig text #RollTide"
>>>  labels []
>>>  tokens [rolltide:NNP]
>>>  ideas [[rolltide:NNP]]
>>>  stopped words []

>>> 1491296,Kelly Clarkson?? #inauguration
>>>  orig text 1491296,Kelly Clarkson?? #inauguration
>>>  labels []
>>>  tokens [kelly:NNP clarkson:NNP inauguration:NN]
>>>  ideas [[kelly:NNP] [clarkson:NNP] [inauguration:NN]]
>>>  stopped words []

>>> 2014: Twitters in trouble 
>>>  orig text 2014: Twitters in trouble 
>>>  labels []
>>>  tokens [twitters:NNS trouble:NN]
>>>  ideas [[twitters:NNS trouble:NN] [in:IN]]
>>>  stopped words [in:IN]

>>> 2096998,Congratulations to everyone who competed in todays #BostonMarathon. #BostonStrong
>>>  orig text 2096998,Congratulations to everyone who competed in todays #BostonMarathon. #BostonStrong
>>>  labels []
>>>  tokens [congratulations:NNPS competed:VBD todays:NNS bostonmarathon:NNP bostonstrong:NNP]
>>>  ideas [[congratulations:NNPS todays:NNS competed:VBD] [bostonmarathon:NNP] [everyone:NN] [who:WP in:IN] [bostonstrong:NNP]]
>>>  stopped words [everyone:NN who:WP in:IN]

>>> 🙏 One taught me patience. 🙏 
>>>  orig text 🙏 One taught me patience. 🙏 
>>>  labels []
>>>  tokens [taught:NN patience:NN]
>>>  ideas [[taught:NN patience:NN] [one:CD me:PRP]]
>>>  stopped words [one:CD me:PRP]

>>> Watching over me.
>>>  orig text Watching over me.
>>>  labels []
>>>  tokens [watching:VBG]
>>>  ideas [[watching:VBG over:IN] [me:PRP]]
>>>  stopped words [over:IN me:PRP]

>>> 1865482,"We are now so successful in our household , we decant cereal from their original packaging into clear plastic containers . #livingthedream"
>>>  orig text 1865482,"We are now so successful in our household , we decant cereal from their original packaging into clear plastic containers . #livingthedream"
>>>  labels []
>>>  tokens [successful:JJ household:NN decant:VBP cereal:NN original:JJ packaging:NN clear:JJ plastic:NN containers:NNS livingthedream:NN]
>>>  ideas [[successful:JJ] [household:NN] [decant:VBP] [cereal:NN] [original:JJ] [packaging:NN] [clear:JJ] [plastic:NN] [containers:NNS] [we:PRP we:PRP now:RB so:RB in:IN our:PRP$ into:IN] [are:VBP] [from:IN] [their:PRP$] [livingthedream:NN]]
>>>  stopped words [we:PRP are:VBP now:RB so:RB in:IN our:PRP$ we:PRP from:IN their:PRP$ into:IN]

>>> Manning
>>>  orig text Manning
>>>  labels []
>>>  tokens [manning:VBG]
>>>  ideas [[manning:VBG]]
>>>  stopped words []

>>> 2442899,"Prince Harry has visited his #RHSChelsea garden....
>>>  orig text 2442899,"Prince Harry has visited his #RHSChelsea garden....
>>>  labels []
>>>  tokens [prince:NNP harry:NNP visited:VBN rhschelsea:NNP garden:NN]
>>>  ideas [[prince:NNP] [harry:NNP rhschelsea:NNP garden:NN] [visited:VBN] [has:VBZ his:PRP$]]
>>>  stopped words [has:VBZ his:PRP$]

>>> 280973,"Tell us more... 
>>>  orig text 280973,"Tell us more... 
>>>  labels []
>>>  tokens [tell:VBP]
>>>  ideas [[tell:VBP us:PRP] [more:RBR]]
>>>  stopped words [us:PRP more:RBR]


cluster topics[0:20] [dpa_fp dpa_ry u_mhux kulhadd imma dpa_amc zmien dpa_rt dpa_fm dpa_dc mhux issa dpa_jbp u've kan_du wat_u hahah jekk afta dpa_cp]
cluster documents[0:20:1714]
>>> #greatamericans
>>>  orig text #greatamericans
>>>  labels []
>>>  tokens [greatamericans:NNS]
>>>  ideas [[greatamericans:NNS]]
>>>  stopped words []

>>> you were probably
>>>  orig text you were probably
>>>  labels []
>>>  tokens [probably:RB]
>>>  ideas [[probably:RB you:PRP] [were:VBD]]
>>>  stopped words [you:PRP were:VBD]

>>> 731924,"Halloween.
>>>  orig text 731924,"Halloween.
>>>  labels []
>>>  tokens [halloween:NNP]
>>>  ideas [[halloween:NNP]]
>>>  stopped words []

>>> 1994258,To Cannes
>>>  orig text 1994258,To Cannes
>>>  labels []
>>>  tokens [cannes:VB]
>>>  ideas [[cannes:VB]]
>>>  stopped words []

>>> A barista of slackers."
>>>  orig text A barista of slackers."
>>>  labels []
>>>  tokens [barista:NN slackers:NNS]
>>>  ideas [[barista:NN] [slackers:NNS]]
>>>  stopped words []

>>> 717543,#byebyemourinho #BBCFootball
>>>  orig text 717543,#byebyemourinho #BBCFootball
>>>  labels []
>>>  tokens [byebyemourinho:JJ bbcfootball:NNP]
>>>  ideas [[byebyemourinho:JJ] [bbcfootball:NNP]]
>>>  stopped words []

>>> 149962,Suburbistan.
>>>  orig text 149962,Suburbistan.
>>>  labels []
>>>  tokens [suburbistan:NNP]
>>>  ideas [[suburbistan:NNP]]
>>>  stopped words []

>>> - Marilyn Ferguson"
>>>  orig text - Marilyn Ferguson"
>>>  labels []
>>>  tokens [marilyn:NN ferguson:NNP]
>>>  ideas [[marilyn:NN] [ferguson:NNP]]
>>>  stopped words []

>>> #harlem"
>>>  orig text #harlem"
>>>  labels []
>>>  tokens [harlem:NN]
>>>  ideas [[harlem:NN]]
>>>  stopped words []

>>> Barca: Neymar-Suarez-Messi
>>>  orig text Barca: Neymar-Suarez-Messi
>>>  labels []
>>>  tokens [barca:NNS neymar-suarez-messi:JJ]
>>>  ideas [[barca:NNS] [neymar-suarez-messi:JJ]]
>>>  stopped words []

>>> Spotify
>>>  orig text Spotify
>>>  labels []
>>>  tokens [spotify:VB]
>>>  ideas [[spotify:VB]]
>>>  stopped words []

>>> 1865623,The sandwich generation sucks...
>>>  orig text 1865623,The sandwich generation sucks...
>>>  labels []
>>>  tokens [sandwich:JJ generation:NN sucks:NNS]
>>>  ideas [[sandwich:JJ the:DT] [generation:NN sucks:NNS]]
>>>  stopped words [the:DT]

>>> 1029993,the chargers better dominate tonight
>>>  orig text 1029993,the chargers better dominate tonight
>>>  labels []
>>>  tokens [chargers:NNS better:RBR dominate:NN tonight:NN]
>>>  ideas [[chargers:NNS better:RBR] [dominate:NN the:DT] [tonight:NN]]
>>>  stopped words [the:DT]

>>> 1933790,muuuuuyyy cansada
>>>  orig text 1933790,muuuuuyyy cansada
>>>  labels []
>>>  tokens [muuuuuyyy:FW cansada:NN]
>>>  ideas [[muuuuuyyy:FW] [cansada:NN]]
>>>  stopped words []

>>> Tjarks on the Pelicans
>>>  orig text Tjarks on the Pelicans
>>>  labels []
>>>  tokens [tjarks:NNS pelicans:NNS]
>>>  ideas [[tjarks:NNS pelicans:NNS] [on:IN the:DT]]
>>>  stopped words [on:IN the:DT]

>>> 563321,"“We are dreamers and dreams are the foundation of America” - Lupita Nyongo, #AcademyAwards2018"
>>>  orig text 563321,"“We are dreamers and dreams are the foundation of America” - Lupita Nyongo, #AcademyAwards2018"
>>>  labels []
>>>  tokens [dreamers:NNS dreams:NNS foundation:NN america:NNP lupita:NNP nyongo:NNP academyawards2018:NNP]
>>>  ideas [[dreamers:NNS] [dreams:NNS] [foundation:NN america:NNP lupita:NNP nyongo:NNP academyawards2018:NNP] [we:PRP the:DT and:CC] [are:VBP are:VBP]]
>>>  stopped words [we:PRP are:VBP and:CC are:VBP the:DT]

>>> #SuperBowl 
>>>  orig text #SuperBowl 
>>>  labels []
>>>  tokens [superbowl:NN]
>>>  ideas [[superbowl:NN]]
>>>  stopped words []

>>> Russia DID attack American democracy but the Russia investigation is a ""witch h…"
>>>  orig text Russia DID attack American democracy but the Russia investigation is a ""witch h…"
>>>  labels []
>>>  tokens [russia:NN attack:VB american:NNP democracy:NN russia:NNP investigation:NN witch:NN]
>>>  ideas [[russia:NN russia:NNP] [attack:VB] [american:NNP] [democracy:NN] [investigation:NN] [witch:NN] [did:NNP but:CC the:DT is:VBZ]]
>>>  stopped words [did:NNP but:CC the:DT is:VBZ]

>>> 208242,Gaaaaahhh!!! #TheWalkingDead #daryl
>>>  orig text 208242,Gaaaaahhh!!! #TheWalkingDead #daryl
>>>  labels []
>>>  tokens [gaaaaahhh:NNP thewalkingdead:NNP daryl:NN]
>>>  ideas [[gaaaaahhh:NNP] [thewalkingdead:NNP] [daryl:NN]]
>>>  stopped words []

>>> 611190,Leaving Chicago for Miami to attend #DigidayDAS. Should be a great series of presentations.
>>>  orig text 611190,Leaving Chicago for Miami to attend #DigidayDAS. Should be a great series of presentations.
>>>  labels []
>>>  tokens [leaving:VBG chicago:NNP miami:NNP attend:VB digidaydas:NNP great:JJ series:NN presentations:NNS]
>>>  ideas [[leaving:VBG miami:NNP chicago:NNP digidaydas:NNP] [attend:VB] [for:IN] [great:JJ] [series:NN should:MD be:VB] [presentations:NNS]]
>>>  stopped words [for:IN should:MD be:VB]


cluster topics[0:20] [dpa_cb =_argv ==_NULL dpa_fp dpa_ry dpa_si ==_null dpa_nr dpa_wh =_sizeof dpa_hl dpa_rt dpa_amc struct_* unsigned_int addr =_NULL =_strlen dpa_kr nid]
cluster documents[0:20:543]
>>> https…"
>>>  orig text https…"
>>>  labels []
>>>  tokens [https…:NN]
>>>  ideas [[https…:NN]]
>>>  stopped words []

>>> https…"
>>>  orig text https…"
>>>  labels []
>>>  tokens [https…:NN]
>>>  ideas [[https…:NN]]
>>>  stopped words []

>>> https…"
>>>  orig text https…"
>>>  labels []
>>>  tokens [https…:NN]
>>>  ideas [[https…:NN]]
>>>  stopped words []

>>> https:…"
>>>  orig text https:…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> https:…"
>>>  orig text https:…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> https:…"
>>>  orig text https:…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> https://t…"
>>>  orig text https://t…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> https:/…"
>>>  orig text https:/…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> https:…"
>>>  orig text https:…"
>>>  labels []
>>>  tokens [https:NN]
>>>  ideas [[https:NN]]
>>>  stopped words []

>>> http:…"
>>>  orig text http:…"
>>>  labels []
>>>  tokens [http:NN]
>>>  ideas [[http:NN]]
>>>  stopped words []

>>> http://…"
>>>  orig text http://…"
>>>  labels []
>>>  tokens [http:NN]
>>>  ideas [[http:NN]]
>>>  stopped words []

>>> http…"
>>>  orig text http…"
>>>  labels []
>>>  tokens [http…:NN]
>>>  ideas [[http…:NN]]
>>>  stopped words []

>>> http…"
>>>  orig text http…"
>>>  labels []
>>>  tokens [http…:NN]
>>>  ideas [[http…:NN]]
>>>  stopped words []

>>> https://t.co/yDWwwtuwCr https…"
>>>  orig text https://t.co/yDWwwtuwCr https…"
>>>  labels []
>>>  tokens [https:NN //t.co/ydwwwtuwcr:NN https…:NN]
>>>  ideas [[https:NN https…:NN] [//t.co/ydwwwtuwcr:NN]]
>>>  stopped words []

>>> https://t.co/dDqvTRfukA https://t.…"
>>>  orig text https://t.co/dDqvTRfukA https://t.…"
>>>  labels []
>>>  tokens [https:NN //t.co/ddqvtrfuka:JJ https:NN]
>>>  ideas [[https:NN https:NN] [//t.co/ddqvtrfuka:JJ]]
>>>  stopped words []

>>> https://t.co/hAaSwdXyCE https://…"
>>>  orig text https://t.co/hAaSwdXyCE https://…"
>>>  labels []
>>>  tokens [https:NN //t.co/haaswdxyce:JJ https:NN]
>>>  ideas [[https:NN https:NN] [//t.co/haaswdxyce:JJ]]
>>>  stopped words []

>>> https://t.co/KSyG6BQ3Jr https…"
>>>  orig text https://t.co/KSyG6BQ3Jr https…"
>>>  labels []
>>>  tokens [https:NN //t.co/ksyg6bq3jr:NN https…:NN]
>>>  ideas [[https:NN https…:NN] [//t.co/ksyg6bq3jr:NN]]
>>>  stopped words []

>>> https://t.co/KGHvr1siSG https:/…"
>>>  orig text https://t.co/KGHvr1siSG https:/…"
>>>  labels []
>>>  tokens [https:NN //t.co/kghvr1sisg:JJ https:NN]
>>>  ideas [[https:NN https:NN] [//t.co/kghvr1sisg:JJ]]
>>>  stopped words []

>>> https://t.co/BX7KxqpLJj https:/…"
>>>  orig text https://t.co/BX7KxqpLJj https:/…"
>>>  labels []
>>>  tokens [https:NN //t.co/bx7kxqpljj:JJ https:NN]
>>>  ideas [[https:NN https:NN] [//t.co/bx7kxqpljj:JJ]]
>>>  stopped words []

>>> https://t.co/Z9vscsPGHj"
>>>  orig text https://t.co/Z9vscsPGHj"
>>>  labels []
>>>  tokens [https:NN //t.co/z9vscspghj:NN]
>>>  ideas [[https:NN] [//t.co/z9vscspghj:NN]]
>>>  stopped words []


cluster topics[0:20] [dpa_fp kulhadd dpa_rt dpa_amc dpa_cb dpa_ry dpa_fm dpa_jbp zmien dpa_dc kyk dpa_si dpa_nr jista dpa_cp kan_du poplu dpa_wh te u_mhux]
cluster documents[0:20:511]
>>> #MakeBrandsMatter. 
>>>  orig text #MakeBrandsMatter. 
>>>  labels []
>>>  tokens [makebrandsmatter:NNP]
>>>  ideas [[makebrandsmatter:NNP]]
>>>  stopped words []

>>> #RedRhythmBoom"
>>>  orig text #RedRhythmBoom"
>>>  labels []
>>>  tokens [redrhythmboom:NN]
>>>  ideas [[redrhythmboom:NN]]
>>>  stopped words []

>>> 560352,#TeamLeBron is stacked
>>>  orig text 560352,#TeamLeBron is stacked
>>>  labels []
>>>  tokens [teamlebron:NNP stacked:VBN]
>>>  ideas [[teamlebron:NNP stacked:VBN] [is:VBZ]]
>>>  stopped words [is:VBZ]

>>> 2478035,Albatraoz is unbelievably catchy
>>>  orig text 2478035,Albatraoz is unbelievably catchy
>>>  labels []
>>>  tokens [albatraoz:NNP unbelievably:RB catchy:JJ]
>>>  ideas [[albatraoz:NNP unbelievably:RB is:VBZ] [catchy:JJ]]
>>>  stopped words [is:VBZ]

>>> 1065939,Here is the knockout punch #debatenight
>>>  orig text 1065939,Here is the knockout punch #debatenight
>>>  labels []
>>>  tokens [knockout:NN punch:NN debatenight:NN]
>>>  ideas [[knockout:NN punch:NN] [debatenight:NN] [here:RB] [is:VBZ the:DT]]
>>>  stopped words [here:RB is:VBZ the:DT]

>>> Snapchat
>>>  orig text Snapchat
>>>  labels []
>>>  tokens [snapchat:WP]
>>>  ideas [[snapchat:WP]]
>>>  stopped words []

>>> SnapChat
>>>  orig text SnapChat
>>>  labels []
>>>  tokens [snapchat:WP]
>>>  ideas [[snapchat:WP]]
>>>  stopped words []

>>> 722747,radically pretty chalkboard animation :: bit.ly/7Gvee
>>>  orig text 722747,radically pretty chalkboard animation :: bit.ly/7Gvee
>>>  labels []
>>>  tokens [radically:RB pretty:RB chalkboard:JJ animation:NN bit.ly/7gvee:NN]
>>>  ideas [[radically:RB chalkboard:JJ animation:NN] [pretty:RB] [bit.ly/7gvee:NN]]
>>>  stopped words []

>>> 781493,These roughing the passer penalties! Whaaaaaaattttt? 🤷‍♂️🤷‍♂️🤷‍♂️
>>>  orig text 781493,These roughing the passer penalties! Whaaaaaaattttt? 🤷‍♂️🤷‍♂️🤷‍♂️
>>>  labels []
>>>  tokens [roughing:VBG passer:NN penalties:NNS whaaaaaaattttt:NNP]
>>>  ideas [[roughing:VBG penalties:NNS] [passer:NN] [these:DT the:DT] [whaaaaaaattttt:NNP]]
>>>  stopped words [these:DT the:DT]

>>> 1159675,"🙅‍♂️5 Mistakes Every Freelancer Makes
>>>  orig text 1159675,"🙅‍♂️5 Mistakes Every Freelancer Makes
>>>  labels []
>>>  tokens [mistakes:NNP freelancer:NNP makes:NNP]
>>>  ideas [[mistakes:NNP makes:NNP every:NNP] [freelancer:NNP]]
>>>  stopped words [every:NNP]

>>> 1331877,Very interesting discussion around marketing on twitter:  http://bit.ly/1PTEe
>>>  orig text 1331877,Very interesting discussion around marketing on twitter:  http://bit.ly/1PTEe
>>>  labels []
>>>  tokens [interesting:JJ discussion:NN marketing:VBG twitter:NN http:NN //bit.ly/1ptee:NN]
>>>  ideas [[interesting:JJ] [discussion:NN] [marketing:VBG] [twitter:NN http:NN //bit.ly/1ptee:NN very:RB] [around:IN on:IN]]
>>>  stopped words [very:RB around:IN on:IN]

>>> We watch a…"
>>>  orig text We watch a…"
>>>  labels []
>>>  tokens [watch:VBP]
>>>  ideas [[watch:VBP] [we:PRP]]
>>>  stopped words [we:PRP]

>>> 95228,#gatsby
>>>  orig text 95228,#gatsby
>>>  labels []
>>>  tokens [gatsby:NN]
>>>  ideas [[gatsby:NN]]
>>>  stopped words []

>>> 1922849,According to AOLs Tim Armstrong -content is brands. #MPOMMA
>>>  orig text 1922849,According to AOLs Tim Armstrong -content is brands. #MPOMMA
>>>  labels []
>>>  tokens [according:VBG aols:NNP tim:NNP armstrong:NNP -content:NN brands:NNS mpomma:NNP]
>>>  ideas [[according:VBG] [aols:NNP tim:NNP armstrong:NNP -content:NN is:VBZ] [brands:NNS] [mpomma:NNP]]
>>>  stopped words [is:VBZ]

>>> Frosty ☃️ 
>>>  orig text Frosty ☃️ 
>>>  labels []
>>>  tokens [frosty:NNP]
>>>  ideas [[frosty:NNP]]
>>>  stopped words []

>>> 888661,Wally Woods incredible "Fully Computerized" illustration: http://t.co/ablRRBWb
>>>  orig text 888661,Wally Woods incredible "Fully Computerized" illustration: http://t.co/ablRRBWb
>>>  labels []
>>>  tokens [wally:NNP woods:NNP incredible:JJ fully:RB computerized:NNP illustration:NN http:NN //t.co/ablrrbwb:NN]
>>>  ideas [[wally:NNP fully:RB] [woods:NNP computerized:NNP] [incredible:JJ] [illustration:NN] [http:NN //t.co/ablrrbwb:NN]]
>>>  stopped words []

>>> 2334962,Snickers keeping it fresh. Loved it. #superbowl #brandbowl
>>>  orig text 2334962,Snickers keeping it fresh. Loved it. #superbowl #brandbowl
>>>  labels []
>>>  tokens [snickers:NNPS keeping:VBG fresh:JJ loved:VBN superbowl:NN brandbowl:NN]
>>>  ideas [[snickers:NNPS fresh:JJ] [keeping:VBG] [it:PRP] [loved:VBN] [it:PRP] [superbowl:NN] [brandbowl:NN]]
>>>  stopped words [it:PRP it:PRP]

>>> 70937,Stephen Kim of Microsoft on interacting with brands through gestures. #AdWeekExecLab http://t.co/x4JYXNqEkp
>>>  orig text 70937,Stephen Kim of Microsoft on interacting with brands through gestures. #AdWeekExecLab http://t.co/x4JYXNqEkp
>>>  labels []
>>>  tokens [stephen:NNP kim:NNP microsoft:NNP interacting:VBG brands:NNS gestures:NNS adweekexeclab:NNP http:NN //t.co/x4jyxnqekp:NN]
>>>  ideas [[stephen:NNP kim:NNP microsoft:NNP interacting:VBG gestures:NNS] [brands:NNS] [on:IN with:IN] [through:IN] [adweekexeclab:NNP] [http:NN //t.co/x4jyxnqekp:NN]]
>>>  stopped words [on:IN with:IN through:IN]

>>> 338406,#WhenWeAllVote matters https://t.co/6NwmQNc3V9
>>>  orig text 338406,#WhenWeAllVote matters https://t.co/6NwmQNc3V9
>>>  labels []
>>>  tokens [whenweallvote:NNP matters:NNS https:NN //t.co/6nwmqnc3v9:NN]
>>>  ideas [[whenweallvote:NNP matters:NNS] [https:NN //t.co/6nwmqnc3v9:NN]]
>>>  stopped words []

>>> 1229687,"Is it Sunday?" -- my roommate
>>>  orig text 1229687,"Is it Sunday?" -- my roommate
>>>  labels []
>>>  tokens [sunday:NNP roommate:NN]
>>>  ideas [[sunday:NNP] [is:VBZ it:PRP] [roommate:NN] [my:PRP$]]
>>>  stopped words [is:VBZ it:PRP my:PRP$]


cluster topics[0:20] [@ dpa_ry dpa_cb dpa_hl dpa_si dpa_db jb dpa_ff brennan hoffman dpa_fp dpa_rt dpa_sch dpa_amc bkc_t## dpa_fm dpa_cp dpa_dc chitowndailynews_dot_org pmc]
cluster documents[0:20:142]
>>> 1520224,@chrislottridge 👊
>>>  orig text 1520224,@chrislottridge 👊
>>>  labels []
>>>  tokens [@:NNP chrislottridge:NN]
>>>  ideas [[@:NNP] [chrislottridge:NN]]
>>>  stopped words []

>>> 1745609,@_CharlieWilson 😂
>>>  orig text 1745609,@_CharlieWilson 😂
>>>  labels []
>>>  tokens [@:NNP _charliewilson:NNP]
>>>  ideas [[@:NNP] [_charliewilson:NNP]]
>>>  stopped words []

>>> 598141,@ErnestHolmesSoM ❤️
>>>  orig text 598141,@ErnestHolmesSoM ❤️
>>>  labels []
>>>  tokens [@:NNP ernestholmessom:NNP]
>>>  ideas [[@:NNP] [ernestholmessom:NNP]]
>>>  stopped words []

>>> 2471143,@CurtisSChin 👊😁
>>>  orig text 2471143,@CurtisSChin 👊😁
>>>  labels []
>>>  tokens [@:NNP curtisschin:NNP]
>>>  ideas [[@:NNP] [curtisschin:NNP]]
>>>  stopped words []

>>> 678566,@DKThomp From what?
>>>  orig text 678566,@DKThomp From what?
>>>  labels []
>>>  tokens [@:FW dkthomp:NNP]
>>>  ideas [[@:FW dkthomp:NNP] [from:IN] [what:WP]]
>>>  stopped words [from:IN what:WP]

>>> 1521225,@CameronLynch50 @PlayersTribune @AjAndrews0609 🔥🔥🔥
>>>  orig text 1521225,@CameronLynch50 @PlayersTribune @AjAndrews0609 🔥🔥🔥
>>>  labels []
>>>  tokens [@:NNP cameronlynch50:NNP @:NNP playerstribune:NNP @:NNP ajandrews0609:NNP]
>>>  ideas [[@:NNP @:NNP @:NNP] [cameronlynch50:NNP] [playerstribune:NNP] [ajandrews0609:NNP]]
>>>  stopped words []

>>> 2191112,@BeccaFernandezz to who?
>>>  orig text 2191112,@BeccaFernandezz to who?
>>>  labels []
>>>  tokens [@:NNP beccafernandezz:NNP]
>>>  ideas [[@:NNP beccafernandezz:NNP] [who:WP]]
>>>  stopped words [who:WP]

>>> 2227291,@SamConniff 😂🤣😂😋
>>>  orig text 2227291,@SamConniff 😂🤣😂😋
>>>  labels []
>>>  tokens [@:NNP samconniff:NNP]
>>>  ideas [[@:NNP] [samconniff:NNP]]
>>>  stopped words []

>>> @breensmith
>>>  orig text @breensmith
>>>  labels []
>>>  tokens [@:NN breensmith:NN]
>>>  ideas [[@:NN] [breensmith:NN]]
>>>  stopped words []

>>> and @annieshomegrown
>>>  orig text and @annieshomegrown
>>>  labels []
>>>  tokens [@:VB annieshomegrown:NN]
>>>  ideas [[@:VB annieshomegrown:NN] [and:CC]]
>>>  stopped words [and:CC]

>>> 1186977,@schneidertobias Always!
>>>  orig text 1186977,@schneidertobias Always!
>>>  labels []
>>>  tokens [@:FW schneidertobias:NN]
>>>  ideas [[@:FW schneidertobias:NN] [always:NNS]]
>>>  stopped words [always:NNS]

>>> 190815,@FATTYHAMMER is anything?!
>>>  orig text 190815,@FATTYHAMMER is anything?!
>>>  labels []
>>>  tokens [@:JJR fattyhammer:NNP]
>>>  ideas [[@:JJR fattyhammer:NNP] [is:VBZ] [anything:NN]]
>>>  stopped words [is:VBZ anything:NN]

>>> 1063285,@chrisbharrison @bklinz
>>>  orig text 1063285,@chrisbharrison @bklinz
>>>  labels []
>>>  tokens [@:NNP chrisbharrison:NN @:NNP bklinz:NN]
>>>  ideas [[@:NNP @:NNP] [chrisbharrison:NN] [bklinz:NN]]
>>>  stopped words []

>>> 2429289,@WhitneyBonrud @jeanbeanfree ❤️
>>>  orig text 2429289,@WhitneyBonrud @jeanbeanfree ❤️
>>>  labels []
>>>  tokens [@:NNP whitneybonrud:NNP @:NNP jeanbeanfree:NN]
>>>  ideas [[@:NNP @:NNP] [whitneybonrud:NNP] [jeanbeanfree:NN]]
>>>  stopped words []

>>> 2145241,@George_Osborne @EveningStandard If only you were still at No 11!
>>>  orig text 2145241,@George_Osborne @EveningStandard If only you were still at No 11!
>>>  labels []
>>>  tokens [@:NNP george_osborne:NNP @:NNP eveningstandard:NNP]
>>>  ideas [[@:NNP george_osborne:NNP @:NNP at:IN] [eveningstandard:NNP] [if:IN you:PRP no:DT] [only:RB] [were:VBD] [still:RB]]
>>>  stopped words [if:IN only:RB you:PRP were:VBD still:RB at:IN no:DT]

>>>  @ClaudioFloresT, @mariajoseCANEL, @lorenzocordovav, @…"
>>>  orig text  @ClaudioFloresT, @mariajoseCANEL, @lorenzocordovav, @…"
>>>  labels []
>>>  tokens [@:NN claudioflorest:NNP @:NNP mariajosecanel:NN @:NNP lorenzocordovav:NN @:FW]
>>>  ideas [[@:NN @:NNP] [claudioflorest:NNP] [mariajosecanel:NN] [@:NNP @:FW] [lorenzocordovav:NN]]
>>>  stopped words []

>>> 2178361,@marsh80 @SteveKuncewicz @SamJonesMCR how was it?
>>>  orig text 2178361,@marsh80 @SteveKuncewicz @SamJonesMCR how was it?
>>>  labels []
>>>  tokens [@:NNP marsh80:NNP @:NNP stevekuncewicz:NNP @:NNP samjonesmcr:NNP]
>>>  ideas [[@:NNP @:NNP @:NNP] [marsh80:NNP] [stevekuncewicz:NNP] [samjonesmcr:NNP] [how:WRB] [was:VBD] [it:PRP]]
>>>  stopped words [how:WRB was:VBD it:PRP]

>>> 817417,@nikkiwpowell Me!
>>>  orig text 817417,@nikkiwpowell Me!
>>>  labels []
>>>  tokens [@:NNP nikkiwpowell:IN]
>>>  ideas [[@:NNP nikkiwpowell:IN] [me:NNP]]
>>>  stopped words [me:NNP]

>>> 704982,@BradNitzWSB Every once in a while. :)
>>>  orig text 704982,@BradNitzWSB Every once in a while. :)
>>>  labels []
>>>  tokens [@:FW bradnitzwsb:NNP]
>>>  ideas [[@:FW bradnitzwsb:NNP] [every:NNP] [once:RB in:IN] [while:NN]]
>>>  stopped words [every:NNP once:RB in:IN while:NN]

>>> 782597,@JerhemeUrban83 @CoachClark_c2 @TUFootballTX 👏👏
>>>  orig text 782597,@JerhemeUrban83 @CoachClark_c2 @TUFootballTX 👏👏
>>>  labels []
>>>  tokens [@:NNP jerhemeurban83:NNP @:NNP coachclark_c2:NNP @:NNP tufootballtx:NNP]
>>>  ideas [[@:NNP @:NNP @:NNP] [jerhemeurban83:NNP] [coachclark_c2:NNP] [tufootballtx:NNP]]
>>>  stopped words []


cluster topics[0:20] [nks tha uuu aw i_hav er ta ank dpa_ry wif cks dpa_amc ts u_mhux kulhadd cked ble tho ks haa]
cluster documents[0:9:9]
>>> 1737995,Thanks everyone!
>>>  orig text 1737995,Thanks everyone!
>>>  labels []
>>>  tokens [thanks:NNP]
>>>  ideas [[thanks:NNP] [everyone:NN]]
>>>  stopped words [everyone:NN]

>>>  Thanks, will do."
>>>  orig text  Thanks, will do."
>>>  labels []
>>>  tokens [thanks:NNS]
>>>  ideas [[thanks:NNS] [will:MD do:VB]]
>>>  stopped words [will:MD do:VB]

>>> 390775,Thanks so much ! https://t.co/XHQWs8GANo
>>>  orig text 390775,Thanks so much ! https://t.co/XHQWs8GANo
>>>  labels []
>>>  tokens [thanks:NNP https:NN //t.co/xhqws8gano:NN]
>>>  ideas [[thanks:NNP much:RB] [so:RB] [https:NN] [//t.co/xhqws8gano:NN]]
>>>  stopped words [so:RB much:RB]

>>> 1894546,@ShanghaiMKS thanks for the #shoutout !
>>>  orig text 1894546,@ShanghaiMKS thanks for the #shoutout !
>>>  labels []
>>>  tokens [@:NNP shanghaimks:NNP thanks:NNS shoutout:NN]
>>>  ideas [[@:NNP shoutout:NN shanghaimks:NNP] [thanks:NNS] [for:IN the:DT]]
>>>  stopped words [for:IN the:DT]

>>> 1414239,@acc_stylish thanks Erin!
>>>  orig text 1414239,@acc_stylish thanks Erin!
>>>  labels []
>>>  tokens [@:FW acc_stylish:JJ thanks:NNS erin:VBP]
>>>  ideas [[@:FW erin:VBP] [acc_stylish:JJ] [thanks:NNS]]
>>>  stopped words []

>>> 209706,@FamousBirthdays Thanks!!!
>>>  orig text 209706,@FamousBirthdays Thanks!!!
>>>  labels []
>>>  tokens [@:NNP famousbirthdays:NNP thanks:NNP]
>>>  ideas [[@:NNP famousbirthdays:NNP] [thanks:NNP]]
>>>  stopped words []

>>> 209272,@loveyaslinlove thank you!
>>>  orig text 209272,@loveyaslinlove thank you!
>>>  labels []
>>>  tokens [@:FW loveyaslinlove:FW thank:NN]
>>>  ideas [[@:FW you:PRP] [loveyaslinlove:FW] [thank:NN]]
>>>  stopped words [you:PRP]

>>> 1310812,@amonck thanks
>>>  orig text 1310812,@amonck thanks
>>>  labels []
>>>  tokens [@:NNP amonck:VBZ thanks:NNS]
>>>  ideas [[@:NNP amonck:VBZ] [thanks:NNS]]
>>>  stopped words []

>>> 511139,@EmanuelDerman Joy. Thank you.
>>>  orig text 511139,@EmanuelDerman Joy. Thank you.
>>>  labels []
>>>  tokens [@:NNP emanuelderman:NNP joy:NNP thank:NNP]
>>>  ideas [[@:NNP emanuelderman:NNP] [joy:NNP] [thank:NNP] [you:PRP]]
>>>  stopped words [you:PRP]


cluster topics[0:20] [4 3 5 2 6 8 7 1 9 ## ½ ### to5 2_ to7 #.# 7and ##to ##and N_CC_TVPG]
cluster documents[0:9:9]
>>> 4. 🏄🇺🇸
>>>  orig text 4. 🏄🇺🇸
>>>  labels []
>>>  tokens [4:CD]
>>>  ideas [[4:CD]]
>>>  stopped words []

>>> 2016:  8
>>>  orig text 2016:  8
>>>  labels []
>>>  tokens [8:CD]
>>>  ideas [[8:CD]]
>>>  stopped words []

>>> 4 wins.
>>>  orig text 4 wins.
>>>  labels []
>>>  tokens [4:CD wins:NNS]
>>>  ideas [[4:CD] [wins:NNS]]
>>>  stopped words []

>>> 3 kindness
>>>  orig text 3 kindness
>>>  labels []
>>>  tokens [3:CD kindness:NN]
>>>  ideas [[3:CD] [kindness:NN]]
>>>  stopped words []

>>> 6: Indonesia
>>>  orig text 6: Indonesia
>>>  labels []
>>>  tokens [6:CD indonesia:NN]
>>>  ideas [[6:CD] [indonesia:NN]]
>>>  stopped words []

>>> 1) Park somewhere else"
>>>  orig text 1) Park somewhere else"
>>>  labels []
>>>  tokens [1:CD park:NNP]
>>>  ideas [[1:CD] [park:NNP else:RB somewhere:RB]]
>>>  stopped words [somewhere:RB else:RB]

>>> Silver – 5
>>>  orig text Silver – 5
>>>  labels []
>>>  tokens [silver:NNP 5:CD]
>>>  ideas [[silver:NNP] [5:CD]]
>>>  stopped words []

>>> Heres 5...
>>>  orig text Heres 5...
>>>  labels []
>>>  tokens [heres:NNS 5:CD]
>>>  ideas [[heres:NNS] [5:CD]]
>>>  stopped words []

>>> 1263273,"1. lol
>>>  orig text 1263273,"1. lol
>>>  labels []
>>>  tokens [1:CD lol:NN]
>>>  ideas [[1:CD] [lol:NN]]
>>>  stopped words []


cluster topics[0:20] [peo ple peop peopl ...... ds eto wid_dem ga_se tym ving ra Gvern rona ta te ar dpa_fp hev nao]
cluster documents[0:6:6]
>>> People…"
>>>  orig text People…"
>>>  labels []
>>>  tokens [people…:NN]
>>>  ideas [[people…:NN]]
>>>  stopped words []

>>> 72 people. 
>>>  orig text 72 people. 
>>>  labels []
>>>  tokens [people:NNS]
>>>  ideas [[people:NNS]]
>>>  stopped words []

>>> Consistently unhappy people are inconsistently dangerous people.
>>>  orig text Consistently unhappy people are inconsistently dangerous people.
>>>  labels []
>>>  tokens [consistently:RB unhappy:JJ people:NNS inconsistently:RB dangerous:JJ people:NNS]
>>>  ideas [[consistently:RB] [unhappy:JJ] [people:NNS dangerous:JJ people:NNS] [inconsistently:RB] [are:VBP]]
>>>  stopped words [are:VBP]

>>> 1936090,Its hard to be around morning people
>>>  orig text 1936090,Its hard to be around morning people
>>>  labels []
>>>  tokens [hard:JJ morning:NN people:NNS]
>>>  ideas [[hard:JJ around:IN morning:NN] [people:NNS] [its:PRP$ be:VB]]
>>>  stopped words [its:PRP$ be:VB around:IN]

>>> 2274881,"RT @Angry_MR_Client: People that call people ""respondents"", are people that dont understand people. #mrx"
>>>  orig text 2274881,"RT @Angry_MR_Client: People that call people ""respondents"", are people that dont understand people. #mrx"
>>>  labels []
>>>  tokens [rt:NNP @:NNP angry_mr_client:NNP people:NNS people:NNS respondents:NNS people:NNS dont:JJ understand:JJ people:NNS mrx:NN]
>>>  ideas [[rt:NNP @:NNP angry_mr_client:NNP respondents:NNS understand:JJ] [people:NNS people:NNS people:NNS people:NNS] [dont:JJ] [that:IN that:IN] [call:VBP] [are:VBP] [mrx:NN]]
>>>  stopped words [that:IN call:VBP are:VBP that:IN]

>>> 602719,"The party of/a man for 52%of the people.
>>>  orig text 602719,"The party of/a man for 52%of the people.
>>>  labels []
>>>  tokens [party:NN man:NN %:NN people:NNS]
>>>  ideas [[party:NN people:NNS] [man:NN] [%:NN] [the:DT the:DT] [for:IN]]
>>>  stopped words [the:DT for:IN the:DT]


cluster topics[0:20] [i ive im i_cant i_couldnt i_dont lol i_hav tho i_realy i_wouldnt cuz_i LOVE_YOU_ALL coz_i sumthing any1 u i_havent thats wud_u]
cluster documents[0:6:6]
>>> 535741,"This is what I go for ... 
>>>  orig text 535741,"This is what I go for ... 
>>>  labels []
>>>  tokens [i:PRP]
>>>  ideas [[i:PRP] [this:DT for:IN is:VBZ] [what:WP] [go:VBP]]
>>>  stopped words [this:DT is:VBZ what:WP go:VBP for:IN]

>>> 1608556,"I see...
>>>  orig text 1608556,"I see...
>>>  labels []
>>>  tokens [i:PRP]
>>>  ideas [[i:PRP] [see:VBP]]
>>>  stopped words [see:VBP]

>>> If I had a dollar for every time Ive heard that, I could r…"
>>>  orig text If I had a dollar for every time Ive heard that, I could r…"
>>>  labels []
>>>  tokens [i:PRP dollar:NN time:NN ive:NNP heard:NN i:PRP]
>>>  ideas [[i:PRP dollar:NN i:PRP time:NN ive:NNP] [heard:NN] [if:IN] [had:VBD] [for:IN] [every:DT] [that:IN] [could:MD]]
>>>  stopped words [if:IN had:VBD for:IN every:DT that:IN could:MD]

>>> I knew that."
>>>  orig text I knew that."
>>>  labels []
>>>  tokens [i:PRP knew:VBD]
>>>  ideas [[i:PRP knew:VBD] [that:DT]]
>>>  stopped words [that:DT]

>>> I cant ha…"
>>>  orig text I cant ha…"
>>>  labels []
>>>  tokens [i:PRP cant:VBP ha…:NN]
>>>  ideas [[i:PRP cant:VBP] [ha…:NN]]
>>>  stopped words []

>>> 1075628,"""If I dont have red, I use blue.""
>>>  orig text 1075628,"""If I dont have red, I use blue.""
>>>  labels []
>>>  tokens [i:PRP dont:VBP red:VBN i:PRP use:VBP blue:JJ]
>>>  ideas [[i:PRP red:VBN i:PRP blue:JJ] [dont:VBP] [use:VBP] [if:IN] [have:VBP]]
>>>  stopped words [if:IN have:VBP]


cluster topics[0:20] [day ay da friday imma sunday thursday wae cyaan ta mon monday morning jekk tuesday saturday week mada afta saturdays]
cluster documents[0:4:4]
>>> What a day. 
>>>  orig text What a day. 
>>>  labels []
>>>  tokens [day:NN]
>>>  ideas [[day:NN] [what:WP]]
>>>  stopped words [what:WP]

>>> 823975,last day with Helle for two months
>>>  orig text 823975,last day with Helle for two months
>>>  labels []
>>>  tokens [day:NN helle:NNP months:NNS]
>>>  ideas [[day:NN helle:NNP months:NNS] [last:JJ] [with:IN for:IN] [two:CD]]
>>>  stopped words [last:JJ with:IN for:IN two:CD]

>>> 1521045,"your read of the day:
>>>  orig text 1521045,"your read of the day:
>>>  labels []
>>>  tokens [read:NN day:NN]
>>>  ideas [[read:NN your:PRP$] [day:NN the:DT]]
>>>  stopped words [your:PRP$ the:DT]

>>> 1633415,Happy snowy day!
>>>  orig text 1633415,Happy snowy day!
>>>  labels []
>>>  tokens [happy:JJ snowy:NN day:NN]
>>>  ideas [[happy:JJ day:NN] [snowy:NN]]
>>>  stopped words []


cluster topics[0:20] [james.davey_@_thomson.com_jdd newsdesk@afxnews.com_faj newsdesk@afxnews.com_hco dpa_dc newsdesk@afxnews.com_mn dpa_rt newsdesk@afxnews.com_fjb newsdesk@afxnews.com_jmh philip.waller_@_afxnews.com_paw newsdesk@afxnews.com_fp matthew.scuffham_@_thomson.com_msc t9 alexander.ferguson_@_thomson.com_af newsdesk@afxnews.com_afp newsdesk@afxnews.com_nma dpa_amc dpa_hl newsdesk@afxnews.com_bk dpa_nr newsdesk@afxnews.com_tsk]
cluster documents[0:4:4]
>>> 586396,#JFT96. at last.
>>>  orig text 586396,#JFT96. at last.
>>>  labels []
>>>  tokens [jft96:NNP]
>>>  ideas [[jft96:NNP] [at:IN] [last:JJ]]
>>>  stopped words [at:IN last:JJ]

>>> Democrats: 40,558,262 (55.4%)
>>>  orig text Democrats: 40,558,262 (55.4%)
>>>  labels []
>>>  tokens [democrats:NNPS 40,558,262:CD 55.4:CD %:NN]
>>>  ideas [[democrats:NNPS] [40,558,262:CD 55.4:CD %:NN]]
>>>  stopped words []

>>> Lab: 48.0% (-23.0)
>>>  orig text Lab: 48.0% (-23.0)
>>>  labels []
>>>  tokens [lab:NN 48.0:CD %:NN -23.0:CD]
>>>  ideas [[lab:NN] [48.0:CD -23.0:CD %:NN]]
>>>  stopped words []

>>> - 10% to 15% YoY gr…"
>>>  orig text - 10% to 15% YoY gr…"
>>>  labels []
>>>  tokens [%:NN %:NN yoy:NNP gr…:NN]
>>>  ideas [[%:NN %:NN] [yoy:NNP] [gr…:NN]]
>>>  stopped words []


cluster topics[0:20] [ar issa te wif imma l_li ta mhux minn u_mhux wut hafna ma darba poplu ges bho dawk ys jekk]
cluster documents[0:4:4]
>>> Larson.
>>>  orig text Larson.
>>>  labels []
>>>  tokens [larson:NNP]
>>>  ideas [[larson:NNP]]
>>>  stopped words []

>>> 1600057,"""Rude person?"" 
>>>  orig text 1600057,"""Rude person?"" 
>>>  labels []
>>>  tokens [rude:NNP person:NN]
>>>  ideas [[rude:NNP] [person:NN]]
>>>  stopped words []

>>> AR
>>>  orig text AR
>>>  labels []
>>>  tokens [ar:NN]
>>>  ideas [[ar:NN]]
>>>  stopped words []

>>> Others, are…
>>>  orig text Others, are…
>>>  labels []
>>>  tokens [are…:NN]
>>>  ideas [[are…:NN] [others:NNS]]
>>>  stopped words [others:NNS]


cluster topics[0:20] [,2 ,3 yl ,4 methoxy ,5 ,#,# deoxy ,8 #,#_dimethyl chloro hydroxypropyl propyl #,#_bis hydroxyethyl mM_NaCl N_acetyl hydroxymethyl ,7 dimethyl]
cluster documents[0:4:4]
>>> 821511,2 to go!!!!!!!!!!
>>>  orig text 821511,2 to go!!!!!!!!!!
>>>  labels []
>>>  tokens [821511,2:CD]
>>>  ideas [[821511,2:CD] [go:VB]]
>>>  stopped words [go:VB]

>>> 1443419,24
>>>  orig text 1443419,24
>>>  labels []
>>>  tokens [1443419,24:CD]
>>>  ideas [[1443419,24:CD]]
>>>  stopped words []

>>> 652173,"3,2,1 and you are out....."
>>>  orig text 652173,"3,2,1 and you are out....."
>>>  labels []
>>>  tokens [3,2,1:CD]
>>>  ideas [[3,2,1:CD] [and:CC] [you:PRP out:RP] [are:VBP]]
>>>  stopped words [and:CC you:PRP are:VBP out:RP]

>>> 2490008,2013: eh
>>>  orig text 2490008,2013: eh
>>>  labels []
>>>  tokens [2490008,2013:CD eh:NN]
>>>  ideas [[2490008,2013:CD] [eh:NN]]
>>>  stopped words []


cluster topics[0:20] [から 日_の_マニラ_新聞 美_通_社 四级 大学_英语 月_英语 篇 范文 真题 预测 听力 日_报道 四_六级 但是 个 由于 发现 可能 们 认为]
cluster documents[0:3:3]
>>> そもそもホリエモン祭からの宇野さんへのオファーは「堀江貴文との対談」だった、前々日に堀江貴文が貴殿との対談に難色を示し、前日急遽貴殿に運動会出場に企画変更された、とのことですが、こ…"
>>>  orig text そもそもホリエモン祭からの宇野さんへのオファーは「堀江貴文との対談」だった、前々日に堀江貴文が貴殿との対談に難色を示し、前日急遽貴殿に運動会出場に企画変更された、とのことですが、こ…"
>>>  labels []
>>>  tokens [そもそもホリエモン祭からの宇野さんへのオファーは「堀江貴文との対談」だった、前々日に堀江貴文が貴殿との対談に難色を示し、前日急遽貴殿に運動会出場に企画変更された、とのことですが、こ…:NN]
>>>  ideas [[そもそもホリエモン祭からの宇野さんへのオファーは「堀江貴文との対談」だった、前々日に堀江貴文が貴殿との対談に難色を示し、前日急遽貴殿に運動会出場に企画変更された、とのことですが、こ…:NN]]
>>>  stopped words []

>>> ネスレ高岡さんも仰ってたけど、今後は製造業と小売業が融合した製造小売業が主流になると思ってるから、PB縮小とい…"
>>>  orig text ネスレ高岡さんも仰ってたけど、今後は製造業と小売業が融合した製造小売業が主流になると思ってるから、PB縮小とい…"
>>>  labels []
>>>  tokens [ネスレ高岡さんも仰ってたけど、今後は製造業と小売業が融合した製造小売業が主流になると思ってるから、pb縮小とい…:NN]
>>>  ideas [[ネスレ高岡さんも仰ってたけど、今後は製造業と小売業が融合した製造小売業が主流になると思ってるから、pb縮小とい…:NN]]
>>>  stopped words []

>>> 11. because
>>>  orig text 11. because
>>>  labels []
>>>  tokens [11.:CD]
>>>  ideas [[11.:CD] [because:IN]]
>>>  stopped words [because:IN]


cluster topics[0:20] [Aplus.Net_CNET_EDITORS_CHOICE $ dpa_cb @_gn YR_BUND_YLD dont_la_moitié pro_Aktie 0_document.write_sline TW_Incl mso_footer_margin 0_document.write eg._Proved_Producing Avail_1May Vernon_Supp Sht_hd sure_theyâ dpa_nr THE_COSMOS_ROCKS dollari #####.#_subd]
cluster documents[0:3:3]
>>> 2014 $4.1 billio…"
>>>  orig text 2014 $4.1 billio…"
>>>  labels []
>>>  tokens [$:$ 4.1:CD billio…:NN]
>>>  ideas [[$:$ 4.1:CD] [billio…:NN]]
>>>  stopped words []

>>> (Dec 12, 1980):             $1.2 billion
>>>  orig text (Dec 12, 1980):             $1.2 billion
>>>  labels []
>>>  tokens [dec:NNP $:$ 1.2:CD billion:CD]
>>>  ideas [[dec:NNP 1.2:CD $:$] [billion:CD]]
>>>  stopped words []

>>> $NRVE +18.97%  
>>>  orig text $NRVE +18.97%  
>>>  labels []
>>>  tokens [$:$ nrve:NNP +18.97:NNP %:NN]
>>>  ideas [[$:$ %:NN] [nrve:NNP +18.97:NNP]]
>>>  stopped words []


cluster topics[0:20] [dpa_ry dpa_fp dpa_amc ¬ ta cks dpa_rt dpa_db l_li kulhadd dpa_wh dpa_dc dpa_nr dpa_cb dpa_si zmien u_mhux dpa_jbp CNA_ir dpa_fm]
cluster documents[0:3:3]
>>> #instantly…"
>>>  orig text #instantly…"
>>>  labels []
>>>  tokens [instantly…:NN]
>>>  ideas [[instantly…:NN]]
>>>  stopped words []

>>> 562094,this is an instant classic!… The 50 Sexiest Advertising Execs… http://t.co/Z6THIfnr9R
>>>  orig text 562094,this is an instant classic!… The 50 Sexiest Advertising Execs… http://t.co/Z6THIfnr9R
>>>  labels []
>>>  tokens [instant:JJ classic:NN sexiest:NNP advertising:NNP execs…:NNP http:NN //t.co/z6thifnr9r:NN]
>>>  ideas [[instant:JJ] [classic:NN] [sexiest:NNP] [advertising:NNP] [execs…:NNP http:NN] [//t.co/z6thifnr9r:NN] [this:DT is:VBZ an:DT the:DT]]
>>>  stopped words [this:DT is:VBZ an:DT the:DT]

>>> 2181080,"During their promotion with Lyft in
>>>  orig text 2181080,"During their promotion with Lyft in
>>>  labels []
>>>  tokens [promotion:NN lyft:NNP]
>>>  ideas [[promotion:NN during:IN] [lyft:NNP] [their:PRP$] [with:IN in:IN]]
>>>  stopped words [during:IN their:PRP$ with:IN in:IN]


`);

console.dir(result);
