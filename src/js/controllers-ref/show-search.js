import { ref } from 'vue'
const showSearch = ref(false)
function handleShowSearch (value) {
  showSearch.value = value
}
export {
  showSearch,
  handleShowSearch
}
