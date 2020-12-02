function oldalValtas(valasztottOldal) {
    var valasztottOldalLink = valasztottOldal + '-navigacio';
    var kivalasztottLinkClass = 'valasztott';
    var kivalasztottOldalClass = 'valasztott-oldal';

    var regiKivalasztottOldal = document.querySelector('.' + kivalasztottOldalClass);
    var regiKivalasztottLink = document.querySelector('.' + kivalasztottLinkClass);
    if(regiKivalasztottOldal.classList.contains(valasztottOldal) || regiKivalasztottLink.classList.contains(valasztottOldalLink)) {
        return;
    }

    regiKivalasztottOldal.classList.remove(kivalasztottOldalClass);
    regiKivalasztottLink.classList.remove(kivalasztottLinkClass);

    var ujKivalasztottOldal = document.getElementById(valasztottOldal);
    ujKivalasztottOldal.classList.add(kivalasztottOldalClass);

    var ujKivalasztottLink = document.getElementById(valasztottOldalLink);
    ujKivalasztottLink.classList.add(kivalasztottLinkClass);
}