import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import './SignInModal.css';

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      // à tester
      // formRef.current.reset();
      setValidation("");
      // console.log(cred);
      toggleModals("close");
      navigate("/Private/PrivateHome");
    } catch {
      setValidation("Oops, email and/or password incorrect");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={closeModal}
            className="modal-overlay"
          ></div>
          <div
            className="modal-wrapper"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign In</h5>
                <button onClick={closeModal} className="btn-close"></button>
              </div>

              <div className="modal-body">
                <form
                  ref={formRef}
                  onSubmit={handleForm}
                  className="sign-in-form"
                >
                  <div className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      id="signInEmail"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="signInPwd" className="form-label">
                      Password
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signInPwd"
                    />
                    <p className="text-danger mt-1">{validation}</p>
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
