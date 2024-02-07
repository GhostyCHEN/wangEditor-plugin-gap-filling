function elemToHtml(elem, childrenHtml) {
  const { gapId } = elem
  return `<span data-w-e-type="gapFilling" gapId='${gapId}'></span>`
}

const elemToHtmlConf = {
  type: 'gapFilling',
  elemToHtml: elemToHtml,
}

export default elemToHtmlConf
