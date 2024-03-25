import withGapFilling from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'
import { GapFillingMenuConf } from './menu/index'

const table = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [GapFillingMenuConf],
  editorPlugin: withGapFilling,
}

export default table
