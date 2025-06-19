export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = months.map((item) => ({
  value: item,
  label: item,
}));

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

const genders = ["male", "female"];

export const genderOptions = genders.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
