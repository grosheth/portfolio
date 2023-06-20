import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Menu from '../TheMenu.vue'

describe('Menu', () => {
  it('renders properly', () => {
    const wrapper = mount(Menu, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
