module.exports = {
  "presets": [
    [
      "minify", {
        "mangle": {
          "exclude": ["MyCustomError"]
        },
        "keepFnName": true
      },
    ],
    [
      "@vue/app",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}