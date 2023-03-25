//URL Params
const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const details = data.find (events => events.id == id)