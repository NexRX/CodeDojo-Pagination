/**
 * Creates the pagination pages for selection to be displayed in `O(1)` time.
 * @param {number} currentPage The current page within the pagination
 * @param {number} totalNumberOfPages The total number of pages
 * @returns {string} String showing correctly visible page numbers with ellipses (...) when required.
 */
function pagination(currentPage, totalNumberOfPages) {
  // Edgecase: for fewer than 5 pages
  if (totalNumberOfPages < 5) return Array.from({ length: totalNumberOfPages }, (_, i) => i + 1).join(" ");

  const importantNumbers = new Set([
    1,
    Math.max(2, currentPage - 1),
    currentPage,
    Math.min(totalNumberOfPages - 1, currentPage + 1),
    totalNumberOfPages,
  ]);

  const output = Array.from(importantNumbers); 

  // Add ellipses where gaps exist
  if (output[1] > 2) output.splice(1, null, "...");
  if (output[output.length - 2] < totalNumberOfPages - 1) output.splice(output.length - 1, null, "...");

  return output.join(" ");
}

module.exports = pagination;