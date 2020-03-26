export function setCookie(key: string, value: string, setCookieFunction: Function) {
  let d = new Date();
  const time: any = 15 * 60 * 1000;
  setCookieFunction(key, value + '; expires =' + d.setTime(d.getTime + time));
  // window.document.cookie = key + '=' + value + '; expires =' + d.setTime(d.getTime + time);
  setlocalStorage(key, value);
}

export function deleteCookie(key: string) {
  window.document.cookie = key + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  setlocalStorage(key, 'en/en');
  try {
    window.document.cookie = key + '= ; domain=.covidnepal.org;  expires = Thu, 01 Jan 1970 00:00:00 GMT';
    window.document.cookie = key + '= ; domain=dev.covidnepal.org;  expires = Thu, 01 Jan 1970 00:00:00 GMT';
  } catch (e) {}
}

function setlocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
