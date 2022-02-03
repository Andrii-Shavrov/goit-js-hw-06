const refList = document.querySelectorAll('.item')
console.log(`Number of categories:`, refList.length)

const refTitle = document.querySelectorAll('.item h2').forEach((element) => {
  console.log(`Category:`, element.textContent)
  console.log(`Elements:`, element.nextElementSibling.children.length)
})
