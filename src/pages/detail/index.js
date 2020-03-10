import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.connect }} />
      </DetailWrapper>
    );
  }
}

const mapState = state => ({
  //深度取内容，使用getIn方法
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});
export default connect(mapState, null)(Detail);
