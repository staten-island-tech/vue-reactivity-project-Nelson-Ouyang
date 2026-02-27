import { reactive } from 'vue'

export const store = reactive({
  base: 1,
  additionbase: 0,
  multiplierbase: 0,
  exponentbase: 0,
  boughtItems: [],

  ifCantAfford(item) {
    if (this.base < item.cost) {
      alert('Cannot afford this item!')
      return true
    }
    return false
  },

  buyItem(item) {
    const count = this.boughtItems.filter((i) => i.name === item.name).length

    if (count >= item.limit) {
      alert('Limit reached')
      return
    }

    if (this.ifCantAfford(item)) return

    this.base -= item.cost

    if (item.apply === '+') {
      this.additionbase += item.value
    } else if (item.apply === '*') {
      this.multiplierbase += item.value
    } else if (item.apply === '^') {
      this.exponentbase += item.value
    } else if (item.apply === 'poop') {
      this.multiplierbase *= item.value
    }

    this.boughtItems.push(item)
  },

  applyAll() {
    this.base += ((1 + this.additionbase) * (1 + this.multiplierbase)) ** (1 + this.exponentbase)
  },
})
