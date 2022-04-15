import { GroupListElement, GroupListIconContainer, GroupListImage, GroupListName } from './GroupListItemElements';
import { Group } from '../../reducers/groupReducer';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGroup } from '../../actions/groupActions';
import { selectChat } from '../../actions/chatsActions';

interface Props {
  group: Group
}
export const GroupListItem: FC<Props> = ({group}) => {

  const dispatch = useDispatch()

  const onDeleteGroup = (group:Group) => {
    dispatch(deleteGroup(group))
  }

  const onSelectChatGroup = (group: Group) => {
    dispatch(selectChat(group.name))
  }

  return (
    <GroupListElement onClick={() => onSelectChatGroup(group)}>
        <GroupListImage src='https://png.pngtree.com/png-vector/20200408/ourmid/pngtree-group-of-people-in-a-medical-mask-png-image_2178306.jpg' />
        <GroupListName>{group.name}</GroupListName>
        <GroupListIconContainer onClick={() => onDeleteGroup(group)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </GroupListIconContainer>
    </GroupListElement>
  )
}
