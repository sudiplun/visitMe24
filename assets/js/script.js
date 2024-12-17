import { data } from "./data.js";

//console.log("Imported data:", data); // Debugging step

// Define the method
data.getLinksByCategory = function (category) {
  const categoryData = this.find((item) => item.categories === category);
  if (!categoryData) return `Category "${category}" not found.`;
  const links = categoryData.member
    .map(
      (member) => `<a href="${member.url}" target="_blank">${member.title}</a>`,
    )
    .join("<br>");
  return `<h2>${categoryData.categories}</h2>${links}`;
};

//TOOLS Div
const toolsDiv = document.getElementById("Tools");
toolsDiv.innerHTML = data.getLinksByCategory("TOOLS");

//Sports Div
const SportDiv = document.getElementById("Sports");
SportDiv.innerHTML = data.getLinksByCategory("SPORT");

//IELTS Div
const IeltsDiv = document.getElementById("Ielts");
IeltsDiv.innerHTML = data.getLinksByCategory("IELTS");

//Movies
const moviesDiv = document.getElementById("Movies");
moviesDiv.innerHTML = data.getLinksByCategory("MOVIES");
