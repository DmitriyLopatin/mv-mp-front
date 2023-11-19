export const pathPublic: { [k: string]: string } = {
  home: '/',
  productDetails:'/product/:idOrSlug' // это то что может скушать react-router-dome (умеет читать placeholders) после двоеточия
  //лучше не использовать id в целях безопасности 
}

export const pathPrivate:{[k:string]:string} = {
  accountSettings:'/account-settings'
}

export const paths:{[k:string]:string} = Object.assign({},pathPublic,pathPrivate)

export const checkPathMatch =(pathname:string,paths:{[k:string]:string})=>{
  let isMatch = false

  const allPaths = Object.keys(paths).map((k)=>paths[k]) //Object.keys() представляет объект в виде массива. в этой переменной находятся все наши пути
  const PathFirstSection = pathname.split('/')[1] // разбивает строку на массив с элементами строки разделенными символом '/'
  allPaths.forEach((p)=>{
    if(p.slice(1) === PathFirstSection) isMatch=true
  })
  return isMatch
}