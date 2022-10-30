
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave:false
  /*   outputDir:"C:/Users/user/vue/Vue_board/src/main/resources/static",

    indexPath:"C:/Users/user/vue/Vue_board/src/main/resources/templates/index.html",

   publicPath:"/vue/" */,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
