import React from 'react'
import { BtnCart, BtnFavorites, BtnNotifications, BtnOrders, BtnSearch, Burger, LeftSide, Logo, RightSide, SearchWrapper, Wrapper } from './styled'
import { useSelector } from 'react-redux'
import { selectIsLogged } from 'features/App/selectors'
import { Link } from 'react-router-dom'
import { paths } from 'routes/helpers'
import logoPng from "img/logo.png"
import Button from 'components/Button'
import Input from 'components/Input'
import UserDropDownMenu from './UserDropDownMenu'

const Header: React.FunctionComponent = () => {

  const isLogged = useSelector(selectIsLogged)

  const [searchInput, setSearchInput] = React.useState<string>("")

  const changeSearchInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }, [])

  return (
    <Wrapper>

      <LeftSide>
        <Link to={paths.home}>
          <Logo src={logoPng} />
        </Link>
        <Button type='primary'>
          <Burger>
            <div /><div /><div />
          </Burger>
          <span>Каталог</span>
        </Button>
      </LeftSide>


      <SearchWrapper>
        <Input
          value={searchInput}
          isghost
          placeholder="Поиск товара"
          onChange={changeSearchInput}
        />
        <BtnSearch/>
      </SearchWrapper>

      <RightSide>
        {isLogged ?
          <>
            <BtnOrders />
            <BtnFavorites />
            <BtnNotifications />
            <BtnCart count={5}/>
            <UserDropDownMenu />
          </> : (
            <Link to={paths.login}>
              &nbsp;&nbsp;&nbsp;
              Войти
            </Link>
          )}
      </RightSide>
    </Wrapper>
  )
}

export default Header