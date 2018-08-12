import React from 'react';
import PropTypes from 'prop-types';
const noop = () => {};

const getStylePanel = isActive => ({
  display: 'inline-block',
  height: 47,
  backgroundColor: isActive ? '#fff' : '#f8f8f8',
  borderLeft: isActive ? '1px solid #38f' : 'none', // border 合并起来写的话，在更新style的属性的时候，border-bottom: none 会不生效 TBD
  borderTop: isActive ? '1px solid #38f' : 'none',
  borderRight: isActive ? '1px solid #38f' : 'none',
  borderBottom: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  boxSizing: 'border-box'
});

const getStyleTitle = (isActive, index) => ({
  display: 'inline-block',
  color: '#939596',
  width: '100%',
  height: 16,
  fontSize: 16,
  borderLeft: !isActive && index && '1px solid #e5e5e5',
  boxSizing: 'border-box'
});

export default class Tabs extends React.PureComponent {
  static propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number,
    handlePanelClick: PropTypes.func
  }

  static defaultProps = {
    data: [],
    activeIndex: 0,
    handlePanelClick: noop
  }

  handlePanelClick = activeIndex => () => this.props.handlePanelClick(activeIndex)

  render() {
    const { data, activeIndex } = this.props;
    const percentage = `${100 / data.length}%`;
    return (
      <div>
        {data.map((item, index) => (
          <div
            key={item.title}
            style={{
              ...getStylePanel(index === activeIndex),
              width: percentage
            }}
            onClick={this.handlePanelClick(index)}
          >
            <div
              className="vertical-align--outer"
              style={{ width: '100%', height: '100%' }}
            >
              <span
                className="vertical-align--inner"
                style={getStyleTitle(index === activeIndex, index)}>
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
