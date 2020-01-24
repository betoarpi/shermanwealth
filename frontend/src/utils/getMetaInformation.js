export function getMetaInformation(find, metaArray) {
  let result = null
  metaArray.map((meta) => {
    if (meta.property && meta.property === find) {
      result = meta
    } else if (meta.name === find) {
      result = meta
    }

    return null
  })

  if (!result) {
    return {
      content: 'Lorem Ipsum'
    }
  }
  return result
}
