function pagination (currentPage, totalNumberOfPages) {
    const output = [];

    if (currentPage > 2) { 
        output.push("1")
    }

    for(let i = currentPage - 1; i <= currentPage + 1; i++) {

        output.push(i);
    }
    
    if (currentPage < totalNumberOfPages -1) {
        output.push(totalNumberOfPages);
    }

    return output.join(" ");
}

function pagination2 (currentPage, totalNumberOfPages) {
    const importantNumbers = new Set([
        1,
        Math.max(1, currentPage - 1),
        currentPage,
        Math.min(totalNumberOfPages, currentPage + 1),
        totalNumberOfPages
    ]);

    const output = Array.from(importantNumbers);

    if (importantNumbers[1] !== 2) {
        output.shift();
        output.unshift([1, '...']) // we got javascripted
    }

    return output.join(" ");
}

exports.pagination = pagination;
exports.pagination2 = pagination2;

/**
 * Join example
 * 
 * const array = ["1", "2", "3"]
 * const joinedArray = array.join(" ");
 * 
 * joinedArray will be "1 2 3"
 */