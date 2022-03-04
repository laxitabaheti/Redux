import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/authSlice";
const LogInPortal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.isauthenticate);
  const logInHandler = () => {
    dispatch(AuthActions.logIn());
  };

  const logOutHandler = () => {
    dispatch(AuthActions.logOut());
  };
  return (
    <div>
      {show && <div> LoggedIn</div>}
      {!show && <div> LoggedOut</div>}
      <button onClick={logInHandler}>LogIn</button>
      <button onClick={logOutHandler}>LogOut</button>
    </div>
  );
};
export default LogInPortal;
