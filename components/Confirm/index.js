
import oConfirmDef from './Confirm'

function Init (Vue) {
  // Todo DOMContentLoaded

  const isShadowDOM = false

  const eDiv = document.createElement('div')

  if (isShadowDOM) {
    eDiv.attachShadow({ mode: 'open' })
  }

  const VueExt = Vue.extend(oConfirmDef)
  const vm = new VueExt({
    shadowRoot: eDiv.shadowRoot
  })

  vm.$mount()

  if (isShadowDOM) {
    eDiv.shadowRoot.appendChild(vm.$el)
  } else {
    eDiv.appendChild(vm.$el)
  }

  window.setTimeout(() => {
    window.document.body.appendChild(eDiv)
  }, 150)

  return function (oConfig) {
    return vm.fn(oConfig)
  }
}

export default Init
