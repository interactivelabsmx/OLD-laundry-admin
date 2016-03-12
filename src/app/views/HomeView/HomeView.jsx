import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentOrders as getCurrentOrdersFunc } from '../../redux/reducers/orders';
import RadialProgress from '../../components/RadialProgress';

export const HomeView = ({ orders, user, getCurrentOrders }) => {
  return (
    <div className="container text-center">
      <div className="Py(15px)">Hello World</div>
      <button className="button" onClick={ getCurrentOrders }>Get Current Orders
        <span>Some action to be executed from reducers</span>
      </button>
    </div>
  );
};

HomeView.propTypes = {
  getCurrentOrders: PropTypes.func.isRequired,
  orders: PropTypes.object,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  orders: state.orders,
  user: state.user,
});

export default connect((mapStateToProps), {
  getCurrentOrders: getCurrentOrdersFunc,
})(HomeView);
