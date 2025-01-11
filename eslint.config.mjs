// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "vue/first-attribute-linebreak": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "off",
  }
})
// Your custom configs here
