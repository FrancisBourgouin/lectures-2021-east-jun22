// Function definition are bad
// Function expression FTW

const someFunction = function () {
  return null
}

const someArrowFunction = () => {
  return null
}

const someOtherArrowFunction = param => {
  return param
}

const someOtherNewArrowFunction = (param, otherParam) => {
  return param
}

const someOtherNewArrowFunctionWithImplicitReturn = (param, otherParam) => param + otherParam
