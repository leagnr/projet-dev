import Dish from './Dish'

function DishesList ({ dishes }) {
  return (
    <>
      <h3>Listes des plats</h3>
      <div className='dishes-list'>{
      dishes.data && dishes.data.map(dish => {
        return (
          <Dish key={dish.id} dish={dish} />

        )
      })
    }
      </div>
    </>
  )
}

export default DishesList
