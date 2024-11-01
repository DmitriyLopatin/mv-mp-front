import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { paths } from 'routes/helpers'
import { UserProfileDropdown } from './styled'
import DropdownPanel from 'components/DropdownPanel'
import UserAvatar from './UserAvatar'
import { useAppSelector } from 'store'
import { selectUserData } from 'features/UserData/selectors'


const UserDropDownMenu: React.FC = () => {

  const navigate = useNavigate()

  const { nameFirst, nameLast, displayName } = useAppSelector(selectUserData)

  const handleLogout = React.useCallback(() => navigate(paths.logout), [navigate])

  return (
    <DropdownPanel
      toggler={(props: any) => <UserAvatar onClick={props.onClick}  />}
      toleft
    >
      <UserProfileDropdown>
        <div>
          <strong>
            {displayName || (nameFirst + ' ' + nameLast)}
          </strong>
        </div>

        <hr />

        <div>Заказы</div>
        <div>Возвраты</div>
        <div>Избранное</div>
        <div>Справка</div>
        <div>Поддержка</div>
        <div>Настройки</div>

        <hr />

        <div onClick={handleLogout}>Выйти</div>
      </UserProfileDropdown>
    </DropdownPanel>
  )
}

export default UserDropDownMenu

