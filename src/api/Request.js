import { has as _has } from 'lodash'

const cache = {}

let cacheId = ''
let ajax = {}

function apiRequest(request) {
  cacheId = JSON.stringify(request)
  ajax = {}

  if (!_has(cache, cacheId)) {
    console.log('hello')
  }
}
