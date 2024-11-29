import { data } from "./data.js";

console.log("Imported data:", data); // Debugging step

const contentDiv = document.getElementById("content");

data.forEach((category) => {
  // Create and append the category title
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.categories;
  contentDiv.appendChild(categoryTitle);

  // Create and append a list of members
  const memberList = document.createElement("ul");
  category.member.forEach((member) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${member.sub_category}</strong> 
      <a href="${member.url}" target="_blank">${member.title}</a>
    `;
    memberList.appendChild(listItem);
  });
  contentDiv.appendChild(memberList);
});
