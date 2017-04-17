const React = require('react');
const Nav = require('Nav');

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="small-centered medium-6 large-4 columns">
          <h3>Main Component</h3>
          {props.children} {/* handled by react-router; see /app.jsx for setup */}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;