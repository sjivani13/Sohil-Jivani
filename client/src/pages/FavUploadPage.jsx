import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api.util";

function FavUploadPage({ recipe }) {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    api.get("/recipes").then((res) => {
      console.log("RESPONSE FROM LANDING PAGE:", res);
      setRecipes(res.data);
    });
  }, []);

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        {recipes?.map((recipe) => (
          <Card
            key={recipe._id}
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              background: "white",
              width: "18rem",
              borderRadius: "40%",
            }}
          >
            <Card.Img
              src={recipe.image ? recipe.image : "dinner.jpg"}
              style={{ borderRadius: "10%", maxWidth: "300", height: "200" }}
            />

            <Card.Body style={{ background: "white" }}>
              <Card.Title style={{ color: "green" }}>
                {recipe.title}{" "}
              </Card.Title>
              <Card.Text style={{ color: "green" }}>
                {recipe.description}
              </Card.Text>
              <Button
                style={{ background: "black" }}
                as={Link}
                to={`/OpenRecipe/${recipe._id}`}
              >
                Complete Recipe{" "}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
// }
//     console.log(recipes)
//     console.log(user)

export default FavUploadPage;
