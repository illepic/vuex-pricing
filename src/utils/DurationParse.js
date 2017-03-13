import _ from 'lodash'

export default function (durationObject) {
  return _(durationObject)
  // Get the keys
    .keys()
    // Test which are true
    .filter(key => durationObject[key])
    // Get the first one
    .head();
}
