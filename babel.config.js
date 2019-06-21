module.exports = {
  "presets": [
    [
      "minify", {
        "mangle": {
          "exclude": []
        },
        "unsafe": {
          "typeConstructors": false
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