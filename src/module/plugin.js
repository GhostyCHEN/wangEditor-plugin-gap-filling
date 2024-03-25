import { DomEditor } from '@wangeditor/editor'

function withGapFilling(editor) {
  const { isInline, isVoid } = editor
  const newEditor = editor
  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'gapFilling') {
      return true
    }
    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'gapFilling') {
      return true
    }
    return isVoid(elem)
  }

  // 返回 editor ，重要！
  return newEditor
}

export default withGapFilling
