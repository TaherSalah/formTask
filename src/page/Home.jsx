import { useState } from "react";
import TableData from "./Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import UserModel from "./UserModel";
import Form from "react-bootstrap/Form";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import FormComponent from "./FormComponent";


function Home() {

  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(new UserModel());
  const [userList, setUserList] = useState([]);
  const [validated, setValidated] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    // setUserList(prevList => [...prevList, user]); // Use immutability to update the userList
    userList.push(user)
    setVisible(false);
    setUser(new UserModel()); // Reset the user object
  };

  // const handelOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  //   console.log(user);


  // };

  const handelOnChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    setUser(prevUser => ({
      ...prevUser,
      [name]: value    // Update the user object
    }));
  };
  
  console.log(user);


  return (<>
    <div className="card flex justify-content-center ">
      <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <div className="container ">
          <Form validated={validated}>
            <Col className="mb-3">
              <Form.Group
                as={Col}
                // md="4"
                onChange={handelOnChange}
                controlId="validationCustom01"
                className="  "
              >
                <Form.Label>id</Form.Label>
                <Form.Control
                  required
                  value={user.id}
                  type="text"
                  placeholder="enter user id"
                  name="id"
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
                  onChange={handelOnChange}
                  name="name"
                  value={user.name}
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
                  onChange={handelOnChange}
                  name="email"
                  value={user.email}
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
                  onChange={handelOnChange}
                  name="birthday"
                  value={user.birthday}
                  type="date"
                  placeholder="enter birthday"
                  defaultValue="20/9/1997"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center align-items-center">

              {["male", "female"].map((gender) => (
        <div key={`reverse-${gender}`} className="mb-3 d-flex mt-3">
          <Form.Check
            className="ms-5"
            reverse
            label={gender}
            name="gender"
            type="radio"
            id={`reverse-${gender}-1`}
            value={gender}
            checked={user.gender === gender}
            onChange={handelOnChange}
          />
        </div>
      ))}
              </div>
            </Col>

            <Form.Group className="mb-3 ">
              <Form.Check
                required
                // onChange={handelOnChange}

                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                name="check"
              />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button className="text-center" onClick={handleSubmit}>Submit form</Button>

            </div>
          </Form>
        </div>


      </Dialog>
    </div>
    <div className="mt-5 pt-5 ">
      <Button className='' onClick={() => setVisible(true)}>+ Add</Button>
    </div>
    <div className="card mt-5">
      <DataTable value={userList} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="email"></Column>
        <Column field="birthday" header="birthday"></Column>
        <Column field="gender" header="gender"></Column>
      </DataTable>
    </div>

  </>);
}

export default Home;

