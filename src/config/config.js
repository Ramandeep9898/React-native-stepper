export const personalInfoDataConfig = {
  heading: "Personal Info",
  mutedText: "Please provide your name, email, address and phone Number",

  input: [
    {
      placeHolder: "e.g. Ramandeep kaur",
      label: "Name",
      keyName: "name",
    },
    {
      placeHolder: "e.g. ramandeep@gmail.com",
      label: "Email",
      keyName: "email",
    },
    {
      placeHolder: "e.g. +91 7814773601",
      label: "Phone Number",
      keyName: "phoneNumber",
    },
  ],
};

export const selectPlanDataConfig = {
  heading: "Select your Plan",
  mutedText: "You have option of monthly or yearly billing.",

  cardDetails: [
    { heading: "Arcade", subHeading: "$9/mo", id: 1, amt: 9 },
    { heading: "Advance", subHeading: "$12/mo", id: 2, amt: 12 },
    { heading: "Pro", subHeading: "$15/mo", id: 3, amt: 15 },
  ],
};

export const addOnDataConfig = {
  heading: "Pick add-ons",
  mutedText: "Add-ons help enhance your gaming experience.",

  cardDetails: [
    {
      heading: "Online service",
      subHeading: "Access to multiple games",
      price: "$1/mo",
      id: 1,
      checkBox1: false,
      amt: 1,
    },
    {
      heading: "Larger storage",
      subHeading: "Extra 1TB of cloud save",
      price: "$2/mo",
      id: 2,
      checkBox2: false,
      amt: 2,
    },
    {
      heading: "Customize profile",
      subHeading: "Custom theme on your profile",
      price: "$2/mo",
      id: 3,
      checkBox3: false,
      amt: 2,
    },
  ],
};

export const finishingUpDataConfig = {
  heading: "Finishing up",
  mutedText: "Double-check everything looks OK before confirming",
};
