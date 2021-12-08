const crop = (str: string, length = 50, dots = true) => {
  if (str.length <= length) return str
  let output = str.substr(0, length)
  output = str.substr(0, output.lastIndexOf(' '))
  return !dots ? output : `${output}...`
}

export { crop }
