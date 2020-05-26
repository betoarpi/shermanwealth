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
      content: 'Sherman Wealth Management is your financial concierge. Our holistic approach to financial planning incorporates all aspects of your financial life. We hold ongoing conversations about the milestones you foresee for your life – marriage, children, career change, retirement – and we create strategies to help you prepare for every step of the way. The result is a customized blueprint so you can more efficiently build your wealth and surpass your goals and needs.'
    }
  }
  return result
}
