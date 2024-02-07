import { h } from 'snabbdom'
function renderGapFilling(elem, children, editor) {
  const vnode = h('span', {
    props: {
      contentEditable: false,
    },
    style: {
      display: 'inline-block',
      marginLeft: '3px',
      marginRight: '3px',
      width: '36px',
      height: '24px',
      borderBottom: '1px solid #b6b6b6',
    },
  })

  return vnode
}

const conf = {
  type: 'gapFilling',
  renderElem: renderGapFilling,
}

export default conf
