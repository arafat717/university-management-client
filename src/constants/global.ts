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

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const monthOptions = months.map((item) => ({
  value: item,
  label: item,
}));

export const weekdaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

const genders = ["male", "female"];
const status = ["UPCOMING", "ONGOING", "ENDED"];

export const genderOptions = genders.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const statusOptions = status.map((item) => ({
  value: item,
  label: item,
}));
