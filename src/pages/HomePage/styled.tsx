import styled from "styled-components";

export const TestStyle = styled.h1`
  background-color: #c0c0fe;
  display: inline-block;
  font-size: 30px;
`
export const ProductGroup = styled.div`
  margin-top: 20px;
  > *:first-child{
    margin-bottom: 10px;
  }
`
export const ProductGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  >*{
    width: 16.66666%;
    margin-bottom: 20px;
  }
`