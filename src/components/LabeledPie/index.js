import React, { Component } from 'react';
// import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
import PieCharts from '../../vendor/recharts/lib/chart/PieChart';
import Pie from '../../vendor/recharts/lib/polar/Pie';
import Sector from '../../vendor/recharts/lib/shape/Sector';
import ResponsiveContainer from '../../vendor/recharts/lib/component/ResponsiveContainer';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, // eslint-disable-line
    fill, payload, percent, value // eslint-disable-line
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + ((outerRadius + 5) * cos);
  const sy = cy + ((outerRadius + 5) * sin);
  const mx = cx + ((outerRadius + 10) * cos);
  const my = cy + ((outerRadius + 10) * sin);
  const ex = mx + ((cos >= 0 ? 1 : -1) * 11);
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} fontSize={24} fontWeight={'bold'} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const renderActiveShapeMore = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, // eslint-disable-line
    fill, payload, percent, value // eslint-disable-line
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + ((outerRadius + 5) * cos);
  const sy = cy + ((outerRadius + 5) * sin);
  const mx = cx + ((outerRadius + 10) * cos);
  const my = cy + ((outerRadius + 10) * sin);
  const ex = mx + ((cos >= 0 ? 1 : -1) * 11);
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} fontSize={24} fontWeight={'bold'} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`${value} +`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};


class LabeledPie extends Component {
  static propTypes ={
    data: React.PropTypes.array,
    innerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    outerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    color: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    // this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.5} >
        <PieCharts
          onMouseEnter={(data, index) => { this.onPieEnter(data, index); }}
        >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={this.props.moreThan ? renderActiveShapeMore : renderActiveShape}
            data={this.props.data}
            innerRadius={this.props.innerRadius}
            outerRadius={this.props.outerRadius}
            fill={this.props.color}
          />
        </PieCharts>
      </ResponsiveContainer>
    );
  }

}


export default LabeledPie;
