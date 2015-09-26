function mosttk(tempe,dele) {
  return document.location.href="http://www.mostmalls.com/store/?p="+tempe;
}

function most1(tempe,dele) {
  return document.location.href="http://www.mostmalls.com/store/?p="+tempe;
}
function mostl(tempe,dele) {
  return document.location.href="http://www.mostmalls.com/store/?p="+tempe;
}
var olzon = 'si_mbah';var nezon = 'accestoexcela-20';var olzon1 = 'mbah_uk';var nezon1 = 'thmieano-21';var olzon2 = 'mbah_de';var nezon2 = 'globcontpri0b-21';
var olzon3 = 'mbah_fr';var nezon3 = 'thmieano09-21';var olzon4 = 'mbah_it';var nezon4 = 'globcontpri07-21';var olzon5 = 'mbah_es';var nezon5 = 'thmieano05-21';
function updateme()
{
var text = document.getElementsByTagName('body')[0].innerHTML;
text = replaceAll(text,olzon,nezon);text = replaceAll(text,olzon1,nezon1);text = replaceAll(text,olzon2,nezon2);text = replaceAll(text,olzon3,nezon3);text = replaceAll(text,olzon4,nezon4);text = replaceAll(text,olzon5,nezon5);
document.getElementsByTagName('body')[0].innerHTML = text;
}
function replaceAll(txt, replace, with_this) {
return txt.replace(new RegExp(replace, 'g'),with_this);
}
setTimeout('updateme()',100);
