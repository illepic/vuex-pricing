

const ww = {
  localization: {},
  api: {},
  geo: {},
  personalization: {},
  pricing: {},
  storage: {},
  env: 'dev',
}

function set(wwDrupal) {
  ww.localization = wwDrupal.settings.localization;
  ww.api = wwDrupal.settings.api;
  ww.geo = wwDrupal.geo;
  ww.personalization = wwDrupal.settings.personalization;
  ww.pricing = wwDrupal.settings.wwvs_price;
  ww.storage = wwDrupal.storage;
  ww.env = wwDrupal.settings.environment;
}

function get(key) {
  return ww[key]
}

export {
  set,
  get,
}

