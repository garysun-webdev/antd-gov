import { connect } from "react-redux";
import { fetchMessage, pushMessage } from "../actions/chatbotActions";
import Chatbot from "../components/Chatbot";

function mapStateToProps(state) {
  return { msgFlow: state.chatbot };
}

export default connect(mapStateToProps, { fetchMessage, pushMessage })(Chatbot);
