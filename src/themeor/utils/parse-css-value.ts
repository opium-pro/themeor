// If you have
// padding: 10px 20px;

// But you need
// padding-top: 10px;
// padding-bottom: 10px;
// padding-left: 20px;
// padding-right: 20px;

// So this function expand CSS values like this

export default function (params?: Array<string> | string): Array<string> {
  if (!params) {
    return []
  }

  if (typeof params === 'string') {
    return one(params)
  }

  if (params.length === 1) {
    return one(params[0])
  }

  if (params.length === 2) {
    return two(params)
  }

  if (params.length === 3) {
    return three(params)
  }

  if (params.length === 4) {
    return params
  }

  return []
}


function one(value: string): string[] {
  const result = []
  for (let i = 0; i<4; i++) {
    result.push(value)
  }
  return result
}

function two(value: Array<string>): string[] {
  const result = []
  result[0] = result[2] = value[0]
  result[1] = result[3] = value[1]
  return result
}

function three(value: Array<string>): string[] {
  const result = []
  result[0] = value[0]
  result[1] = result[3] = value[1]
  result[2] = value[2]
  return result
}