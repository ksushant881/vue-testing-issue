import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('displays error message', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.vm.$nextTick();

    const submitButton = wrapper.find('v-btn[type="submit"]');
    expect(submitButton.exists()).toBe(true);
    
    await submitButton.trigger('click');
    await wrapper.vm.$nextTick();

    // TODO: not able to find v-messages__message elements
    expect(wrapper.find('.v-messages__message').text()).toContain('error message');
});
})
