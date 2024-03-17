import { useReducer, useState } from "react";
import React from "react";

import Modal from "../components/Modal";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import RestaurantCard from "../components/cards/restaurantCard";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function formReducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value },
        },
      };
    default:
      return state;
  }
}

function RestaurantInfo() {
  const RestaurantName = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      restaurantName: "Momo",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to &quot;Naviglio&quot; where you can enjoy the main",
    },
  ];

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
      },
      description: {
        value: "",
      },
    },
  });

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    closeEditModal();
  };

  const inputHandler = (event, id) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: event.target.value,
      inputId: id,
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {RestaurantName.map(
          ({ image, restaurantName, description , id}, index) => (
            <>
              <RestaurantCard
                key={id}
                image={image}
                restaurantName={restaurantName}
                description={description}
                openEditModal={openEditModal}
              />
            </>
          )
        )}

        <Modal isOpen={editModalOpen} onClose={closeEditModal}>
          <div className="text-xl font-bold mb-4">Edit Restaurant</div>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={formState.inputs.title.value}
                onChange={(event) => inputHandler(event, "title")}
                className="border rounded-md px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={formState.inputs.description.value}
                onChange={(event) => inputHandler(event, "description")}
                className="border rounded-md px-2 py-1"
              />
            </div>
            <Button type="submit">Save Changes</Button>
            <Button onClick={closeEditModal}>Cancel</Button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default RestaurantInfo;
