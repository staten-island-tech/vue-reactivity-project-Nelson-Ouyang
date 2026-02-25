import { reactive } from 'vue'

export const store = reactive({
  base: 1,
  additionbase: 0,
  multiplierbase: 0,
  exponentbase: 0,
  boughtItems: [],
  ifCantAfford(item) {
    if (base.value < item.cost) {
      alert('Cannot afford this item!')
      return true
    }
    return false
  },
  buyItem(item) {
    const count = boughtItems.value.filter((i) => i.name === item.name).length
    if (count >= item.limit) return alert('no more haahahhgdhsgfhdhgdsf')

    if (item.apply === '+') {
      if (ifCantAfford(item)) return
      base.value -= item.cost
      additionbase.value += item.value
    } else if (item.apply === '*') {
      if (ifCantAfford(item)) return
      base.value -= item.cost
      multiplierbase.value += item.value
    } else if (item.apply === '^') {
      if (ifCantAfford(item)) return
      base.value -= item.cost
      exponentbase.value += item.value
    }

    boughtItems.value.push(item)
  },
  applyAll() {
    base.value +=
      ((1 + additionbase.value) * (1 + multiplierbase.value)) ** (1 + exponentbase.value)
  },
})
