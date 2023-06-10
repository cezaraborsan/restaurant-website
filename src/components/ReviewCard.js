import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function ReviewCard(props) {
  const { review, name } = props;
  return (
    <div className="review-card card">
      <FontAwesomeIcon icon={faQuoteRight} className="review-quote" />
      <p className="review-paragraph">{review}</p>
      <p className="review-name">{name}</p>
    </div>
  );
}

export default ReviewCard;
