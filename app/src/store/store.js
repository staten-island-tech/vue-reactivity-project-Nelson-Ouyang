import { reactive } from 'vue'

export const store = reactive({
  base: 1,
  additionbase: 0,
  multiplierbase: 0,
  exponentbase: 0,
  boughtItems: [],
  babyWhalen: 0,
  babyWhalenMulti: 1,
  graytonMulti: 0,

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
    } else if (item.apply == 'grayton') {
      this.graytonMulti += item.value
    }

    this.boughtItems.push(item)
  },
  babyWhalenClicker() {
    this.babyWhalen += 1
  },
  babyWhalenMultiplier() {
    this.babyWhalenMulti = this.babyWhalenMulti + this.babyWhalen ** 0.5
  },

  applyAll() {
    this.base +=
      (((1 + this.additionbase) * (1 + this.multiplierbase) * this.babyWhalenMulti) **
        (1 + this.exponentbase)) **
      this.graytonMulti
  },
})
