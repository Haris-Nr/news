import { Button, Card } from "react-bootstrap";
import React from "react";

const NewsItem=(props)=>  {
    const { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <Card>
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",
      right:"0"}}>
          <span
            className="badge rounded-pill text-bg-dark"
          >
            {source}{" "}
          </span>
          </div>
          <Card.Img
            variant="top"
            src={
              !imgUrl
                ? "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1294781336.jpg?resize=1200,601"
                : imgUrl
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>

            <Card.Text>{description}</Card.Text>

            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Button variant="dark" size="sm" href={newsUrl} target="_blank">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }


export default NewsItem;
