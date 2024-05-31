[{"url":"https://kichink.zendesk.com/api/v2/tickets/217.json","id":217,"external_id":null,"via":{"channel":"email","source":{"from":{"address":"aurummedallas@gmail.com","name":"Medallas Aurum"},"to":{"name":"Kichink","address":"X"},"rel":null}},"created_at":"2018-01-02T19:14:00Z","updated_at":"2018-09-20T16:43:56Z","type":null,"subject":"SCRUBBED","raw_subject":"SCRUBBED","description":"X","priority":null,"status":"deleted","recipient":"X","requester_id":370039202632,"submitter_id":370039202632,"assignee_id":null,"organization_id":null,"group_id":null,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":[],"custom_fields":[{"id":360011148551,"value":null},{"id":360010996792,"value":null},{"id":360011467071,"value":null},{"id":360011148391,"value":null},{"id":360011230311,"value":null},{"id":360011101291,"value":null},{"id":360011100271,"value":null},{"id":360010997912,"value":null},{"id":360011100071,"value":null},{"id":360011100091,"value":null},{"id":360011230151,"value":null},{"id":360011044812,"value":null}],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[{"id":360011148551,"value":null},{"id":360010996792,"value":null},{"id":360011467071,"value":null},{"id":360011148391,"value":null},{"id":360011230311,"value":null},{"id":360011101291,"value":null},{"id":360011100271,"value":null},{"id":360010997912,"value":null},{"id":360011100071,"value":null},{"id":360011100091,"value":null},{"id":360011230151,"value":null},{"id":360011044812,"value":null}],"followup_ids":[],"ticket_form_id":360000167951,"brand_id":360001440531,"satisfaction_probability":null,"allow_channelback":false,"allow_attachments":true,"generated_timestamp":1537461896},{"url":"https://kichink.zendesk.com/api/v2/tickets/213.json","id":213,"external_id":null,"via":{"channel":"email","source":{"from":{"address":"marcelamendezcano92@gmail.com","name":"Marcela Mendez"},"to":{"name":"Kichink","address":"X"},"rel":null}},"created_at":"2018-01-02T19:17:31Z","updated_at":"2018-09-20T16:43:57Z","type":null,"subject":"SCRUBBED","raw_subject":"SCRUBBED","description":"X","priority":null,"status":"deleted","recipient":"X","requester_id":370039202452,"submitter_id":370039202452,"assignee_id":null,"organization_id":null,"group_id":null,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":[],"custom_fields":[{"id":360011148551,"value":null},{"id":360010996792,"value":null},{"id":360011467071,"value":null},{"id":360011148391,"value":null},{"id":360011230311,"value":null},{"id":360011101291,"value":null},{"id":360011100271,"value":null},{"id":360010997912,"value":null},{"id":360011100071,"value":null},{"id":360011100091,"value":null},{"id":360011230151,"value":null},{"id":360011044812,"value":null}],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[{"id":360011148551,"value":null},{"id":360010996792,"value":null},{"id":360011467071,"value":null},{"id":360011148391,"value":null},{"id":360011230311,"value":null},{"id":360011101291,"value":null},{"id":360011100271,"value":null},{"id":360010997912,"value":null},{"id":360011100071,"value":null},{"id":360011100091,"value":null},{"id":360011230151,"value":null},{"id":360011044812,"value":null}],"followup_ids":[],"ticket_form_id":360000167951,"brand_id":360001440531,"satisfaction_probability":null,"allow_channelback":false,"allow_attachments":true,"generated_timestamp":1537461905}]

.reduce((rows, ticket, i) => {
  var h = [], r = [];
  if (!i){
    for (var p in ticket) h.push(p);
    rows.push(h)
  }
  rows.push(flatten(ticket))
  return rows
}, [])


function flatten(object, context){
  var r = [];
  for (var label in object){
    var value = object[label];
    if (undefined !== context) 
      label = [context, label].join(': ');
    
    switch (typeof value){
      case 'object':
        if (null === value) r.push(value);
        else switch(value.constructor.name){
          case 'Array': r.push(value.map((v,i) => flatten(v, [label,i].join('/'))).join('\n')); break;
          case 'Object': r.push(flatten(value, label).join('\n')); break;
          throw (value.constructor.name)
        }
        break;
      default: 
        if (undefined !== context)
          value = [context, value].join(': ');
          r.push(value); 
        console.log(label, value)
    }
  }
  return r;
}
