const storage = store => {
  const entriesCache = {};

  const restore = (entryName, restoreAction) => {
    try {
      let entry = localStorage.getItem(entryName);
      if (entry) {
        entry = JSON.parse(entry);
        store.dispatch(restoreAction(entry));
      }
    }
    catch (e) {
      return false;
    }
  };

  const save = entryName => {
    const entry = store.getState()[entryName];
    if (entryName in entriesCache && entry === entriesCache[entryName]) {
      return false;
    }
    localStorage.setItem(entryName, JSON.stringify(entry));
    entriesCache[entryName] = entry;
  };

  return { restore, save };
};

export default storage;
