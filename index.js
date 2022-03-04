let long = require('long');

exports.jHashCode = function(stringToBeHashed) {
    let hash = 0, i, chr;
    if (stringToBeHashed.length === 0) return hash;
    for (i = 0; i < stringToBeHashed.length; i++) {
        chr = stringToBeHashed.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash
}

exports.jUUIDHashCode = function(uuidToBeHashed) {

    if (!uuidToBeHashed.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) {
        throw TypeError("Invalid UUID string");
    }

    let uuidSplits = uuidToBeHashed.split("-");
    let msb = long.fromString(uuidSplits[0], false, 16).and(0xffffffff);
    msb = msb.shiftLeft(16);
    msb = msb.or(long.fromString(uuidSplits[1], false, 16).and(0xffff));
    msb = msb.shiftLeft(16);
    msb = msb.or(long.fromString(uuidSplits[2], false, 16).and(0xffff));

    let lsb = long.fromString(uuidSplits[3], false, 16).and(0xffff);
    lsb = lsb.shiftLeft(48);
    lsb = lsb.or(long.fromString(uuidSplits[4], false, 16).and(0xffffffffffff));

    let hilo = msb.xor(lsb);
    return hilo.shiftRight(32).toInt() ^ hilo.toInt();
}
