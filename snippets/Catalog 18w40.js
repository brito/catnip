function __SMOKE_TEST__Catalog(){ console.log(
  Catalog([{a:1, b:2}, {b:4, c:7, d:0}, {a:0, b:2}])
)}
/*
┌─┐┌─┐┌┬┐┌─┐┬  ┌─┐┌─┐
│  ├─┤ │ ├─┤│  │ ││ ┬
└─┘┴ ┴ ┴ ┴ ┴┴─┘└─┘└─┘ 18w40*/
function Catalog(items){
    return ([].concat(arguments)).reduce(catalog, {});

    function catalog(dict, item){
      for (var key in item){
        var value = item[key],
            initial = key in dict? dict[key]: {};
            if (value)
                switch (value.constructor.name){
                    case 'Array':
                        dict[key] = value.reduce(catalog, initial)
                        break;
                    case 'Object':
                        dict[key] = [value].reduce(catalog, initial)
                        break;
                    default:
                        dict[key] = archive(initial, value, item)
                        break;
                }
            else
                dict[key] = archive(initial, value, item);
        }
        return dict;

        function archive(context, key, item){
            context[key] = key in context ?
                context[key].concat(item)
                : [item];
            return context;
        }
    }
}