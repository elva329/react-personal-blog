import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-image {
    width: 625px;
    height: 240px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
`;

export const TopicItem = styled.div`
  float: left:
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display:inline-block;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
