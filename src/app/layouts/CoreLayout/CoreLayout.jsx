import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

class CoreLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedMenu: false };
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.setState({
      openedMenu: !this.state.openedMenu,
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div className="ui grid">
        <Header />
        <div className="sixteen wide column">
          <div className="ui grid">
            <div className="four wide column">
              <Menu opened={ this.state.openedMenu } openMenu={ this.openMenu }
                user={ this.props.user }
              />
            </div>
            <div className="twelve wide column">
              { children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default CoreLayout;

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(CoreLayout);
