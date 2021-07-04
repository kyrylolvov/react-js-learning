import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Link from "./components/Link";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating reusable components",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "Color Blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      <Header />
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};
