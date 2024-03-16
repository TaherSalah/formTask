import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import UserModel from "./UserModel";
import { Dialog } from 'primereact/dialog';
import { useDispatch } from 'react-redux'
import { setUserValue } from "../redux/Features/UserSlice";

function FormComponent() {

  const [user, setUser] = useState(new UserModel())
  const [userList, setUserList] = useState([]);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // dispatch(setUserValue(user));

    // setValidated(true); 
    // const newUser=[];
    // newUser.push(event.currentTarget.value);
    event.preventDefault();

    console.log(user);

  };

  const [validated, setValidated] = useState(false);

  // console.log(userList);
  return (
    <div className="container ">

      <Form onSubmit={handleSubmit} validated={validated}>
        <Col className="mb-3">
          <Form.Group
            as={Col}
            // md="4"
            controlId="validationCustom01"
            className="  "
          >
            <Form.Label>id</Form.Label>
            <Form.Control
              required
               value={user.id}
               onChange={()=>setUser(user)}

              type="text"
              placeholder="enter user id"
            // defaultValue="1"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            // md="4"
            controlId="validationCustom02"
            className=" mt-2 "
          >
            <Form.Label> name</Form.Label>
            <Form.Control
              required
              value={user.name}
              onChange={()=>setUser(user)}

              type="text"
              placeholder="name"
            // defaultValue="taher"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            // md="4"
            controlId="validationCustom02"
            className=" mt-2 "
          >
            <Form.Label> Email</Form.Label>
            <Form.Control
              required
               value={user.email}
               onChange={()=>setUser(user)}

              type="email"
              placeholder="email"
            // defaultValue="taher@exampl.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            // md="4"
            controlId="validationCustom02"
            className=" mt-2 "
          >
            <Form.Label> Birthday</Form.Label>
            <Form.Control
              required
               value={user.birthday}
               onChange={()=>setUser(user)}

              type="date"

              placeholder="enter birthday"
              defaultValue="20/9/1997"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center">

            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3 d-flex mt-3 ">
                <Form.Check
                  className=" ms-5  "
                   value={user.gender}
                  onChange={()=>setUser(user)}
                   
                  reverse
                  label="male"
                  name="group1"
                  type={type}
                  id={`reverse-${type}-1`}
                />
                <Form.Check
                  className=" ms-5 "
                  reverse
                  value={user.gender}
                  label="female"
                  name="group1"
                  onChange={()=>setUser(user)}
                  type={type}
                  id={`reverse-${type}-1`}
                />
              </div>
            ))}
          </div>
        </Col>

        <Form.Group className="mb-3 ">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="text-center" type="submit">Submit form</Button>

        </div>
      </Form>
    </div>
  );
}

export default FormComponent;
