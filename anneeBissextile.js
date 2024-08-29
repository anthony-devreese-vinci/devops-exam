function isAnneeBissextile(annee) {
    if (annee % 400 === 0) {
        return true;
    } else if (annee % 100 === 0) {
        return false;
    } else if (annee % 4 === 0) {
        return true;
    }
    return false;
}

module.exports = isAnneeBissextile;