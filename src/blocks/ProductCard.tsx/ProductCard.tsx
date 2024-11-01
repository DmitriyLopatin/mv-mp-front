import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as HeartEmpty} from 'img/heart-empty.svg'
import { PriceDiscounted, PriceRegular, PriceRegularWhenDiscounted, PriceWrapper,Image, Desc, Wrapper, LikeWrapper } from './styled'
import Button from 'components/Button/Button'

interface I_ProductCardProps {
  id:number
  slug?:string
  imgSrc:string
  priceRegular:number
  priceDiscounted?:number
  title:string
  desc:string
  hideLikes?:boolean

}

const ProductCard:React.FC<I_ProductCardProps> = ({
  id,
  slug,
  imgSrc,
  priceRegular,
  priceDiscounted,
  title,
  desc,
  hideLikes=false
}) => {
  return (
    <Wrapper>
      {!hideLikes && (
        <LikeWrapper
          data-product-id={id}
        //onClick={handleFavorites}
        >
          {/* {isLiked ? <HeartFilled/>:<HeartEmpty/>} */}
          <HeartEmpty/>
        </LikeWrapper>
      )}
      <Link to={`product/${slug || id}`}>
      <Image src={imgSrc}/>
      </Link>
      <PriceWrapper>
        {Number.isInteger(priceDiscounted) ?
        <>
          <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
          <PriceRegularWhenDiscounted>{priceRegular}  ₽</PriceRegularWhenDiscounted>
        </>:
          <PriceRegular>{priceRegular} ₽</PriceRegular>}
      </PriceWrapper>
      <Desc>{desc}</Desc>
      <Button type='primary'>В корзину</Button>
    </Wrapper>
  )
}

export default ProductCard