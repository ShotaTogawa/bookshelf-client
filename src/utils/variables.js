export const bookGenres = [
  { key: "Arts", text: "Arts", value: "Arts" },
  { key: "Biographies", text: "Biographies", value: "Biographies" },
  { key: "Business", text: "Business", value: "Business" },
  {
    key: "Computers Technology",
    text: "Computers Technology",
    value: "Computers Technology"
  },
  { key: "Fitness", text: "Fitness", value: "Fitness" },
  { key: "Health", text: "Health", value: "Health" },
  { key: "Literature", text: "Literature", value: "Literature" },
  { key: "Novel", text: "Novel", value: "Novel" },
  { key: "Politics", text: "Politics", value: "Politics" },
  { key: "Religion", text: "Religion", value: "Religion" },
  { key: "Science", text: "Science", value: "Science" },
  { key: "Self-Help", text: "Self-Help", value: "Self-Help" },
  { key: "Social Science", text: "Social Science", value: "Social Science" },
  { key: "Others", text: "Others", value: "Others" }
];

export const tableHeaderBefore = [
  "",
  "Title",
  "Genre",
  "Author",
  "Pages",
  "Registered Date",
  "Start Date",
  "Image upload"
];

export const tableHeaderReading = [
  "",
  "Title",
  "Genre",
  "Author",
  "Progress",
  "Start Date",
  "Evaluation",
  "Status Edit"
];

export const tableHeaderRead = [
  "",
  "Title",
  "Genre",
  "Author",
  "Finish Date",
  "Evaluation",
  "Image upload"
];

export const menus = [
  {
    url: "#",
    icon: "fas fa-address-book",
    title: "User",
    submenus: [
      { url: "#", title: "Status", icon: "fas fa-list" },
      { url: "#", title: "Edit Profile", icon: "fas fa-plus" }
    ]
  },
  {
    url: "#",
    icon: "fas fa-address-book",
    title: "Book",
    submenus: [
      { url: "#", title: "Book List", icon: "fas fa-list" },
      { url: "#", title: "Register Book", icon: "fas fa-plus" },
      { url: "#", title: "TimeLine", icon: "fas fa-plus" }
    ]
  }
];
