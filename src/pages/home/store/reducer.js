import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583575586220&di=2bf9f4f11f73303e2d2848f275366e4c&imgtype=0&src=http%3A%2F%2Fres.cjrbapp.cjn.cn%2Fa%2F10001%2F201903%2Fafee1463e7baca724629e4b67f0577c5.jpeg'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583575586220&di=6a1482cc9d1e2098412d77b4f1d746c4&imgtype=0&src=http%3A%2F%2Fappimage.csbtv.com%2F201902%2F03%2F7526fa36-f3d1-4262-84db-130924c66c9d.jpg'
    }
  ]
});

export default (state = defaultState, action) => {
  return state;
};
