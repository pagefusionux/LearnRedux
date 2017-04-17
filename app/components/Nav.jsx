var React = require('react');
var {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Page 1</IndexLink>
            </li>
            <li>
              <Link to="/page2" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Page 2</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://github.com/pagefusionux" target="_blank">Chris Davis</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
