import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ProductPage.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

/*
<div style={{ marginBottom: "20px", marginTop: "20px", width: "100%",
        display: "table" }}>
            <Col key={"profilePicture"} style={{ width: "50%", margin: "0 auto" }}>
        <img
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          }
          style={{
            display: "block",
            margin: "0 auto",
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 3,
          }}
          alt="Profile picture"
        />
        <h2>Галимов Даниил Викторович</h2>
        </Col>
      </div>
*/
const ProfilePage = () => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [INN, setINN] = useState("");
  const [value, setValue] = useState();

  return (
    <>
      <div>
        <div>
          <Row className="profileContainer">
            <Col
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form>
                <img
                  src={
                    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  }
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: 200,
                    height: 200,
                    borderRadius: 200 / 2,
                    overflow: "hidden",
                    borderWidth: 3,
                  }}
                  alt="Profile picture"
                />
                <Col
                  md={15}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Form.Group controlId="name">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Иван"
                      value={name}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="name" style={{ marginLeft: "20px" }}>
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Иванович"
                      value={surname}
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Иванов"
                      value={fatherName}
                    ></Form.Control>
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>ИНН</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ИНН"
                      value={INN}
                    ></Form.Control>
                  </Form.Group>
                </Form>

                <Form.Group controlId="name">
                  <Form.Label>Ссылка</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://www.example.ru"
                    value={websiteLink}
                  ></Form.Control>
                </Form.Group>

                <Button style={{ marginTop: "20px" }} varient="primary">
                  Сохранить
                </Button>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                  ></Form.Control>
                </Form.Group>

                <PhoneInput
                  style={{ marginTop: "20px" }}
                  placeholder="911 111-11-11"
                  value={value}
                  onChange={setValue}
                />

                <Form.Group
                  style={{ marginTop: "20px", width: "100%" }}
                  controlId="country"
                >
                  <Form.Label style={{ marginRight: "10px" }}>
                    Страна
                  </Form.Label>
                  <input
                    list="countries"
                    id="country"
                    style={{ width: "100%" }}
                  />
                  <datalist id="countries">
                    <option value="Россия" />
                    <option value="Эстония" />
                    <option value="Латвия" />
                    <option value="Литва" />
                    <option value="Беларусь" />

                    <option value="Украина" />
                    <option value="Молдова" />
                    <option value="Грузия" />
                    <option value="Армения" />
                    <option value="Азербайджан" />

                    <option value="Казахстан" />
                    <option value="Узбекистан" />
                    <option value="Таджикистан" />
                    <option value="Кыргызстан" />
                    <option value="Туркменистан" />
                  </datalist>
                </Form.Group>

                <Form.Group
                  style={{ marginTop: "20px", width: "100%" }}
                  controlId="country"
                >
                  <Form.Label style={{ marginRight: "10px" }}>
                    Город
                  </Form.Label>
                  <input
                    list="cities"
                    id="city"
                    style={{ width: "100%" }}
                  />
                  <datalist id="cities">
                    <option value="Москва" />
                    <option value="Санкт-Петербург" />
                    <option value="Новосибирск" />
                    <option value="Екатеринбург" />
                    <option value="Казань" />

                    <option value="Нижний Новгород" />
                    <option value="Челябинск" />
                    <option value="Самара" />
                    <option value="Уфа" />
                    <option value="Ростов-на-Дону" />

                    <option value="Омск" />
                    <option value="Красноярск" />
                    <option value="Воронеж" />
                    <option value="Пермь" />
                    <option value="Волгоград" />
                  </datalist>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
