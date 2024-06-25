async function updateStorage() {
  const currentStorageValue = await chrome.storage.sync.get('data');
  console.log(currentStorageValue);
  const checkedLectures = localStorage.getItem('checkedLectures');
  if (currentStorageValue.data !== checkedLectures) {
    chrome.storage.sync.set({ data: checkedLectures });
  }
}

(function main() {
  setInterval(() => {
    updateStorage();
  }, 500)
})()