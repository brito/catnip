const ROUTES = `
Analysis    /midlayer/analyzeText
Best        /midlayer/getBest
Client      /Client/add     
Clients     /Client/list    
Client      /Client/get     
Client      /Client/edit     
Notice      /Client/remove
Version     /Version/add
Versions    /Version/list
Version     /Version/get
Notice      /Version/remove
Notice      /Version/attach 400
Notice      /Version/detach 400
Answer      /Answer/add
Answers     /Answer/list
Notice      /Answer/remove
Topic       /Topic/add
Topics      /Topic/list
Topic       /Topic/get
Notice      /Topic/remove   400
Notice      /Topic/attach
Notice      /Topic/detach
Aspect      /Aspect/add
Aspect      /Aspect/get
Notice      /Aspect/remove
Notice      /Aspect/attach
Notice      /Aspect/detach
Key         /Key/add
Notice      /Key/remove
KeyTypes    /KeyType/list
Notice      /droptables
Notice      /createtables
Training    /Training/Topic/add
Training    /Training/Topic/get
Training    /Training/Topic/remove
`
  .split(/\n/) // to lines
  .filter(line => !/^\s*$/.test(line)) // remove empty
  .map(row => row.split(/\s+/)) // to cols
  .map(row => row.splice(2, 1, +row[2] || 200) && row) // normalize
  .reduce((routes, row) => {
    routes[row[1]] = {
      schema: row[0],
      code: row[2]
    }
    return routes
  }, {})