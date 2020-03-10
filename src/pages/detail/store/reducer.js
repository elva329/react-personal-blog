import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: 'Default Title',
  content:
    '<img src="//upload-images.jianshu.io/upload_images/4947419-d4340ed1f103b726.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/><p>Hello</p>'
});
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
