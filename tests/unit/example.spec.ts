import { mount } from '@vue/test-utils'
import Tab1Page from '@/views/home.vue'
import { describe, expect, test } from 'vitest'

describe('home.vue', () => {
  test('muestra mensaje de bienvenida', () => {
    const wrapper = mount(Tab1Page)
    expect(wrapper.text()).toMatch('Bienvenido a Totopos Garchi')
  })
})
