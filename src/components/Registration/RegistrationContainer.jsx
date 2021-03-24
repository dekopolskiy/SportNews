import { connect } from "react-redux";
import { login_samurai_thunk } from "../../actionCreator";
import Registration from "./Registration";


const mapStatetoProps = (state) => {
    return {
        captcha: state.captcha.captcha
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        login_samurai_thunk: (dataForSend) => {
            return dispatch(login_samurai_thunk(dataForSend))
        }
    }
}



export default connect(mapStatetoProps, mapDispatchtoProps)(Registration);

//return class extends { return <Registration {...props}}