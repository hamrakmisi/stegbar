import React from 'react'

export function Drink({ drink }) {
  return (
    <div className="card w-10/12 shadow-xl bg-primary mx-auto">
      <figure><img src={drink.picture} alt={drink.name}/></figure>
      <div className="card-body">
        <h2 className="card-title place-content-center">{drink.name}</h2>
        <p>{drink.price} Ft</p>
        <div className="collapse bg-base-200">
          <input type="checkbox" name="my-accordion-1" /> 
          <div className="collapse-title bg-accent text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content text-center">
            Kattints ide az összetevőkért!
          </div>
          <div className="collapse-content bg-accent text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
            <p>{drink.ingredients.map((ing) => (
              <span key={drink.name+''+ing}>{ing} </span>
            ))}</p>
             <p>{drink.allergens.map((all) => (
              <kbd className="kbd" key={drink.name+''+all}>{all}</kbd>
            ))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}