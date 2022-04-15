import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../../actions/groupActions'
import { CategoryListButton, CategoryListContainer } from './CategoryListElements'

export const CategoryList = () => {

  const dispatch = useDispatch()

  const onSelectCategory = (category:string) => {
    dispatch(selectCategory(category))
  }

  const categorias = ['Deportes', 'Peliculas', 'Tecnologia', 'Gastronomia']

  return (
    <CategoryListContainer>
      {
        categorias.map(categoria => (
          <CategoryListButton 
            key={categoria}
            onClick={() => onSelectCategory(categoria)}>{categoria}</CategoryListButton>
        ))
      }
    </CategoryListContainer>
  )
}
