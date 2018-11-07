// @flow

type StringBooleanType = { [string]: boolean }
type StringObjType = { [string]: string }

export function calcClasses( classes:StringBooleanType, ST: StringObjType){
  const result = []

  Object.keys(classes).forEach( (className: string ) => {
    if(classes[className]) result.push(ST[className])
  } )

  return result.join(' ')
}
