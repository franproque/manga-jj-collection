import { ref } from 'vue'
const showSearchAddNewManga = ref(false)
function handleShowSearchAddNewManga (value) {
  showSearchAddNewManga.value = value
}

/* const listAddmanga = ref([])
function handleListAddmanga (value) {

} */
export {
  showSearchAddNewManga,
  handleShowSearchAddNewManga
}
