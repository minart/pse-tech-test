import { mount } from '@vue/test-utils';
import CardItem from '@/components/card/CardItem.vue';

const testFixture = {
  "quantity" : 1,
  "totalPrice" : 35,
  "cover" : "http://henri-potier.xebia.fr/hp0.jpg",
  "title": "Henri Potier à l'école des sorciers",
  "price": 35
};

const factory = (
  value = {}) => {
  return mount(CardItem, {
    stubs: {
      FontAwesomeIcon: {
        template: '<i class="icon" />'
      }
    },
    propsData: {
      book : testFixture
    },
    data(){
      return {
        ...value
      }
    }
  });
}

describe('Card item component', () => {

  const wrapper = factory();

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Display title', () => {
    expect(wrapper.find(".title p").text()).toEqual(testFixture.title);
  });

});