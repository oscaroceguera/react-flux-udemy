var React = require('react')

module.exports = React.createClass({
  // desde aqui inyecto valores al whenItemClicked padre
  handleClick: function(){
    this.props.whenItemClicked(this.props.item)
  },
  render: function(){
    return <li className={this.props.className}>
      <a onClick={this.handleClick}>{this.props.item}</a>
    </li>
  }
})
