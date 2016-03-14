var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <button onClick={this.props.whenClick} className={"btn " + this.props.classNameA} type="button">
      {this.props.title}
  	  <span className={this.props.subTitleClassName}>
  	  	{this.props.subTitle}
  	  </span>
    </button>
  }
});
