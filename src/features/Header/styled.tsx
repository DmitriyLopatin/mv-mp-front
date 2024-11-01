import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts";
import colors from "consts/colors";
import { styled } from "styled-components";
import search from './img/search.svg'
import cart from './img/cart.svg'
import notifications from './img/notifications.svg'
import favorites from './img/favorites.svg'
import orders from './img/orders.svg'
import { Link } from "react-router-dom";
import { paths } from "routes/helpers";

interface I_CountProps {
  count?:number
}

export const Wrapper = styled.div`
  border-radius: 6px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  transition: margin 0.2s ease-out;
  background-color: #fff;
  min-height: 52px;
  z-index: ${Z_INDEX_LEVEL_2};
`
export const Logo = styled.img`
  width: 130px;
  height: 44px;
  margin-right: 20px;
`
export const LeftSide = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 20px;
`
export const Burger = styled.div`
 width: 20px;
 height: 20px;
 padding: 4px 0;
 margin-right: 10px;
 div{
  position: relative;
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 1px;
  background-color: white;
 }
 div:not(:first-child){
  margin-top: 3px;
 }
`
export const SearchWrapper = styled.div`
  width: 100%;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 10px;

  input{
    font-size: 16px;
    line-height: 40px;
  }
`
export const BtnSearch = styled.div`
cursor: pointer;
width: 20px;
height: 20px;
background-image: url(${search});
`
export const BtnOrders = styled.div<I_CountProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 0 0 20px;
  background-image: url(${orders});
  position: relative;
  &:after{
    content: ${({count}) => count ? '"' + count + '"':''};
    background-color: ${colors.red};
    border-radius:50%;
    position: absolute;
    top: -8px;
    right: -10px;
    width: 18px;
    height: 18px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const RightSide = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  a:not([href*='login']){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const BtnFavorites = styled((props: any) => (
  <div {...props}>
    <Link to={paths.favorites} />
  </div>
))`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${favorites});
  margin: 0 0 0 20px;
  position:relative;

  &:after{
    content: ${({count}) => count ? '"' + count + '"':''};
    background-color: ${colors.red};
    border-radius:50%;
    position: absolute;
    top: -8px;
    right: -10px;
    width: 18px;
    height: 18px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const BtnNotifications = styled.div<I_CountProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${notifications});
  position: relative;
  margin: 0 0 0 20px;

  &:after{
    content: ${({count}) => count ? '"' + count + '"':''};
    background-color: ${colors.red};
    border-radius:50%;
    position: absolute;
    top: -8px;
    color: white;
    right: -10px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const BtnCart = styled((props: any) => (
  <div {...props}>
    <Link to={paths.cart} />
  </div>
))`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${cart});
  position: relative;
  margin: 0 20px 0 24px;

  &:after {
    content: ${({ count }) => count ? '"' + count + '"' : ''};
    background-color: ${colors.danger};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -9px;
  }
`
export const UserAvatarWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  width: 46px;
  height: 46px;
`

export const UserProfileDropdown = styled.div`
  div {
    cursor: pointer;
    line-height: 1.8;
  }
`