exports.valid_journey = function(from, to, dep, arr, code) {
    if (code=='  ') return true;
    var restriction = restrictions[code]['times'];
    var all_stations = restriction[""];
    var from_restriction = restriction[from];
    var to_restriction = restriction[to];
    if (dep) dep = dep[1].replace(':', '');
    if (arr) arr = arr[0].replace(':', '');
    //console.log(code, from, to, dep, arr, from_restriction, to_restriction, all_stations);

    if (from_restriction) {
        for (var i in from_restriction) {
            if (i.match(/R$/)) { continue; }
            var a = from_restriction[i];
            if (a['adv'] == 'D' && dep >= a['f'] && dep <= a['t']) return false;
        }
    }
    if (to_restriction) {
        for (var i in to_restriction) {
            if (i.match(/R$/)) { continue; }
            var a = to_restriction[i];
            if (a['adv'] == 'A' && arr >= a['f'] && arr <= a['t']) return false;
        }
    }
    if (all_stations) {
        for (var i in all_stations) {
            if (i.match(/R$/)) { continue; }
            var a = all_stations[i];
            if (a['adv'] == 'D' && dep >= a['f'] && dep <= a['t']) return false;
            if (a['adv'] == 'A' && arr >= a['f'] && arr <= a['t']) return false;
        }
    }

    return true;
};
