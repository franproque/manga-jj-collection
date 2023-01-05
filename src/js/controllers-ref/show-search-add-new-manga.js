import { ref } from 'vue'
const showSearchAddNewManga = ref(false)
function handleShowSearchAddNewManga (value) {
  showSearchAddNewManga.value = value
}
export {
  showSearchAddNewManga,
  handleShowSearchAddNewManga
}
