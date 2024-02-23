function elemToHtml(elem, childrenHtml) {
  const { gapId } = elem
  return `<span data-w-e-type="gapFilling" data-w-e-is-inline data-w-e-is-void gapId='${gapId}'></span>`
}

const elemToHtmlConf = {
  type: 'gapFilling',
  elemToHtml: elemToHtml,
}

export default elemToHtmlConf
