// 🎯 Problem 3 — Configuration Object

const createButton = (config: {
    text: string,
    variant: 'primary' | 'secondary' | 'danger',
    size: 'small' | 'medium' | 'large'
}) => {
    return `${config.text} | ${config.variant} | ${config.size}`
}

console.log(createButton(
    {
  text: "Delete",
  variant: "danger",
  size: "large"
}
))