import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Container, Spinner } from "react-bootstrap";
import Api, { DonateCategory, DonateLot } from "../api/Api";
import "./Page.css";

export interface MainPageProps {
  changePageName: (pageName: string) => void;
  abortController: AbortController;
}

export default function MainPage({
  changePageName,
  abortController,
}: MainPageProps) {
  useEffect(() => {
    changePageName("Магазин");
  }, [changePageName]);

  const [donateCategories, setDonateCategories] =
    useState<Array<DonateCategory>>();
  const [currentDonateCategory, setCurrentDonateCategory] = useState<number>();
  const [donateLots, setDonateLots] = useState<Array<DonateLot>>();

  useEffect(() => {
    (async () => {
      const api = new Api(abortController.signal);
      const donateCategories: Array<DonateCategory> =
        await api.getDonateCategories();
      setDonateCategories(donateCategories);
      setCurrentDonateCategory(donateCategories[0].id);
    })();
  }, [abortController]);

  useEffect(() => {
    if (currentDonateCategory) {
      (async () => {
        const api = new Api(abortController.signal);
        const donateLots: Array<DonateLot> = await api.getDonateLots(
          currentDonateCategory
        );
        setDonateLots(donateLots);
      })();
    }
  }, [abortController, currentDonateCategory]);

  return (
    <>
      <Container fluid="md">
        {donateCategories == null ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : donateCategories.length === 0 ? (
          <div>Ни одной категории пока не создано</div>
        ) : (
          <>
            <div className="mb-3">
              {donateCategories.map((donateCategory) => {
                return (
                  <Button
                    key={donateCategory.id}
                    className={
                      currentDonateCategory === donateCategory.id
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setCurrentDonateCategory(donateCategory.id);
                      setDonateLots(undefined);
                    }}
                  >
                    {donateCategory.name}
                  </Button>
                );
              })}
            </div>
            <div>
              {donateLots == null ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : donateLots.length === 0 ? (
                "Ни одного лота не создано"
              ) : (
                donateLots.map((donateLot) => {
                  return (
                    <Card style={{ width: "15rem" }}>
                      <Card.Img variant="top" src={donateLot.image} />
                      <Card.Body>
                        <Card.Title>
                          {donateLot.name}{" "}
                          <Badge bg="secondary">{donateLot.price}</Badge>
                        </Card.Title>

                        <Card.Text>{donateLot.description}</Card.Text>
                        <Button variant="primary">Добавить в корзину</Button>
                      </Card.Body>
                    </Card>
                  );
                })
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
