import datas from './data.json'


function getAllAppart() {
  const AllAppart = []
  datas.forEach((item) => {
    AllAppart.push({
      id: item.id,
      title: item.title,
      cover: item.cover,
    })
  })
  return AllAppart
}

function getAppart(id) {
  let AppartData = {}
  datas.forEach((item) => {
    if (item.id === id) {
      AppartData = item
    }
  })
  return AppartData
}

export { getAllAppart, getAppart }