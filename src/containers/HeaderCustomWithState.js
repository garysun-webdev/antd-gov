import { connect } from "react-redux";

import HeaderCustom from "../components/HeaderCustom";
import { pageSwitch } from "../actions/configActions";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
  return { currentPage: state.config.currentPage };
}

export default withRouter(
  connect(mapStateToProps, { pageSwitch })(HeaderCustom)
);
