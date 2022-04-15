import { FC, useState } from 'react'
import { GroupListItem } from '../GroupListItem';
import { GroupInput, GroupInputButton, GroupInputSelect, GroupListDiv, GroupListHeader, GroupListItemContainer, GroupTitle, IconPlus } from './GroupListElements';
import { Search } from '../Search/index';
import { useAppSelector } from '../../reducers/hooks';
import { useDispatch } from 'react-redux';
import { createGroup, searchGroup, getAllGroups } from '../../actions/groupActions';

interface Props {
  modeMobile?: boolean
}

export const GroupList: FC<Props>  = ({modeMobile}) => {

  const {groups, categorySeleted} = useAppSelector(state => state.groups)
  const dispatch = useDispatch()
  
  const [show, setShow] = useState(false);

  const [inputGroup, setInputGroup] = useState('')
  const [category, setCategory] = useState('Deportes')
  const [search, setSearch] = useState("")

  const onSearch = (search:string) => {
    if (search.trim() === '') {
      dispatch(getAllGroups())
      return
    }
    dispatch(getAllGroups())
    dispatch(searchGroup(search))
    setSearch('')
  }

  const onCreateGroup = (group: string, category: string) => {
    if (group.trim() === '' && category.trim() === '') return
    dispatch(createGroup(group, category))
    setInputGroup('')
  }

  return (
    <GroupListDiv mobile={modeMobile ? modeMobile : false }>
      <GroupListHeader>
        <GroupTitle>GroupList</GroupTitle>
        <IconPlus onClick={()=>setShow(!show)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </IconPlus>
      </GroupListHeader>
          {
            show &&
            <div style={{padding: '10px 0'}}>
              <GroupInput type="text" placeholder="Agregar un nuevo grupo" 
                name='inputGroup' value={inputGroup} 
                onChange={(e) => setInputGroup(e.target.value)} 
              />
              <GroupInputSelect value={category} name='category' onChange={(e) => setCategory(e.target.value)}>
                <option value='Deportes'>Deportes</option>
                <option value='Peliculas'>Peliculas</option>
                <option value='Tecnologia'>Tecnologia</option>
                <option value='Gastronomia'>Gastronomia</option>
              </GroupInputSelect>
              <GroupInputButton onClick={() => onCreateGroup(inputGroup, category)}>Crear</GroupInputButton>
            </div>
          }
      <Search search={search} setSearch={setSearch} onSearch={onSearch} />
      <GroupListItemContainer>
          {
            groups.map(group => {
              if(group.category === categorySeleted) {
                return <GroupListItem group={group} key={group.id} />
              }
              return null
            })
          }
      </GroupListItemContainer>
    </GroupListDiv>
  )
}
