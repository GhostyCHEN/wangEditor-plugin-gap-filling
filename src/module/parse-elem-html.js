function parseHtml(elem, children, editor) {
  // 从 DOM element 中获取“附件”的信息
  const gapId = elem.getAttribute('gapId') || ''
  return {
    type: 'gapFiliing',
    gapId,
  }
}
const parseHtmlConf = {
  selector: 'span[data-w-e-type="gapFiliing"]', // data-w-e-type 属性，留给自定义元素，保证扩展性
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
