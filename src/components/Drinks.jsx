import { drinksList } from '../assets/datas/drinks'
import { Drink } from './Drink';

export function Drinks() {
  const drinks = drinksList;
  return (
    <div className='grid grid-cols-3 gap-4'>
    {drinks.map((drink) => (
      <Drink drink={drink} key={drink.name}/>
    ))}
    </div>
  )
}