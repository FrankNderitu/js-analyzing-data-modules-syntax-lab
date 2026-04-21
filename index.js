/**
 * Combines multiple username arrays into one and returns an object
 * with the merged users and today's merge date.
 * Uses rest parameters + spread operator for merging any number of arrays.
 * 
 * @param  {...Array} userArrays - Any number of arrays containing usernames
 * @returns {Object} - { users: Array, merge_date: string }
 */
function combineUsers(...userArrays) {
  // Merge all arrays using spread operator (handles any number of arrays)
  const mergedUsers = [...userArrays].flat(); // .flat() ensures deep flattening if needed, but spread works for 1 level

  // Or alternatively (without flat, since spread on arrays of primitives is sufficient):
  // const mergedUsers = userArrays.reduce((acc, arr) => [...acc, ...arr], []);

  // Get today's date in a simple readable format (e.g., "2026-04-21")
  const today = new Date().toISOString().split('T')[0];

  // Return the required object
  return {
    users: mergedUsers,
    merge_date: today
  };
}

module.exports = { combineUsers };