import { connect } from "react-redux";

import HeaderCustom from "../components/HeaderCustom";
import { pageSwitch } from "../actions/configActions";

function mapStateToProps(state) {
  return { currentPage: state.config.currentPage };
}

export default connect(mapStateToProps, { pageSwitch })(HeaderCustom);
