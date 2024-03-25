import { Gap_Fill } from '../../constants/icon-svg.js'
import { genGapFillingId } from '../../utils/util.js'
class GapFilling {
  constructor() {
    this.title = '插入填空'
    this.iconSvg = Gap_Fill
    this.tag = 'button'
  }
  getValue() {
    return ''
  }

  isActive() {
    return false
  }

  isDisabled() {
    return false
  }

  exec(editor) {
    const gapFillingElm = {
      type: 'gapFilling',
      gapId: genGapFillingId(),
      children: [{ text: '' }],
    }
    editor.insertNode(gapFillingElm)
    editor.focus()
  }
}
export default GapFilling
