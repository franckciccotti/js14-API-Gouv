const [dpt, org] = document.querySelectorAll('select')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', () => {
    ul.innerHTML = '';
    fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt.value}/${org.value}`)
        .then(response => {
            // console.log(response.json());
            return response.json();
        })
.then(json => {
    json.features.forEach(org => {
      const li = document.createElement('li')
      li.textContent = org.properties.nom
      li.className = 'list-group-item'
      ul.appendChild(li)
    })
  })
  .catch(e => {
    const li = document.createElement('li')
    li.textContent = e.message
    li.className = 'list-group-item list-group-item-danger'
    ul.appendChild(li)
    console.log(e)
  })
})
