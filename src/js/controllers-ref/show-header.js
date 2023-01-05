import { ref } from 'vue'
const showHeader = ref(false)
function handleShowHeader (value) {
  showHeader.value = value
}
export {
  showHeader,
  handleShowHeader
}
