// Task 3: createUserProfiles function
function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1,
    };
  });
}

export { createUserProfiles };
