import React from "react";
import "./loginform.css";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import Axios from "axios";
import { store } from "../../App";
import {
  GET_USERNAME,
  HIDE_LOADER,
  OPEN_LOGIN_FORM,
  SHOW_ALERT,
  SHOW_LOADER,
  UPDATE_TOKEN,
} from "../../store/const";

interface FormValues {
  userName: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { errors, isSubmitting } = props;

  return (
    <Form className="header__login-form">
      <div className="form-group">
        <label>
          Username
          <Field type="text" name="userName" className="form-control" />
          {errors.userName && (
            <div className="header__warning">{errors.userName}</div>
          )}
        </label>
      </div>
      <div className="form-group">
        <label>
          Password
          <Field type="password" name="password" className="form-control" />
          {errors.password && (
            <div className="header__warning">{errors.password}</div>
          )}
        </label>
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialUserName?: string;
  initialPassword?: string;
}

export const LoginForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      userName: props.initialUserName || "",
      password: props.initialPassword || "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.userName) {
      errors.userName = "Required field";
    } else if (values.userName.length === 1) {
      errors.userName = "Name is too short";
    } else if (values.userName.length > 150) {
      errors.userName = "Name is too long";
    } else if (!/^[\w.@+-]+$/i.test(values.userName)) {
      errors.userName = "Enter a valid username";
    }

    if (!values.password) {
      errors.password = "Required field";
    } else if (values.password.length === 1) {
      errors.password = "Password is too short";
    } else if (values.password.length > 128) {
      errors.password = "Password is too long";
    } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/i.test(values.password)) {
      errors.password = "Enter a valid password";
    }
    return errors;
  },

  handleSubmit: (values) => {
    store.dispatch({ type: GET_USERNAME, username: values.userName });
    store.dispatch({ type: SHOW_LOADER, isShowLoader: true });

    Axios.post(
      "http://emphasoft-test-assignment.herokuapp.com/api-token-auth/",
      {
        username: values.userName,
        password: values.password,
      }
    )
      .then((resp) => {
        const myToken = resp.data.token;
        console.log(resp);
        store.dispatch({ type: UPDATE_TOKEN, token: myToken });
        const isLoginFormOpen = store.getState().isLoginFormOpen;
        store.dispatch({
          type: OPEN_LOGIN_FORM,
          isLoginFormOpen: !isLoginFormOpen,
        });
        store.dispatch({ type: HIDE_LOADER, isShowLoader: false });
      })
      .catch((er) => {
        console.log(er);
        store.dispatch({ type: SHOW_ALERT, isShowAlert: true });
        const isLoginFormOpen = store.getState().isLoginFormOpen;
        store.dispatch({
          type: OPEN_LOGIN_FORM,
          isLoginFormOpen: !isLoginFormOpen,
        });
        store.dispatch({ type: SHOW_LOADER, isShowLoader: false });
      });
  },
})(InnerForm);
