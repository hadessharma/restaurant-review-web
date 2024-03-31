import React, { useState } from "react";

import { postRestaurants } from "../../functions/post";

import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function NewReviewModal({ isOpen, openModal, userName }) {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cousines, setCousines] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleNewReview = () => {
    const now = Date();
    postRestaurants(userName, {
      name: name,
      address: address,
      cousines: cousines,
      rating: rating,
      comment: comment,
      timestamp: now,
    });
    setName("");
    setAddress("");
    setCousines("");
    setRating("");
    setRating("");
    setComment("");
    openModal();
  };
  return (
    <>
      <Dialog open={isOpen} handler={openModal}>
        <DialogHeader>Add a new review</DialogHeader>
        <DialogBody>
          <div className="my-3 flex flex-col items-center justify-between gap-3">
            <div className="w-[80%]">
              <Input
                label="Restaurant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[80%]">
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-[80%]">
              <Input
                label="Cousines"
                value={cousines}
                onChange={(e) => setCousines(e.target.value)}
              />
            </div>
            <div className="w-[80%]">
              <Input
                label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="w-[80%]">
              <Input
                label="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={openModal}>
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="black" onClick={handleNewReview}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
